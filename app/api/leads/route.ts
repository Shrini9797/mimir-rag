import { NextResponse } from 'next/server'
import { Client } from 'pg'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { fullname, company, email, plan, pricing, comment } = data

    const client = new Client({
      connectionString: process.env.DATABASE_URL,
    })
    await client.connect()

    const query = `
      INSERT INTO leads (fullname, company, email, plan, pricing, comment, created_at)
      VALUES ($1, $2, $3, $4, $5, $6, NOW())
      RETURNING id
    `
    const values = [fullname, company, email, plan, pricing, comment || '']
    const result = await client.query(query, values)

    await client.end()
    return NextResponse.json({ success: true, id: result.rows[0].id })
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 })
  }
}
