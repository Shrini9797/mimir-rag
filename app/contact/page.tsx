"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import dynamic from "next/dynamic"
// Replace direct import with dynamic imports to avoid webpack_require__.n error
const ArrowLeft = dynamic(() => import("lucide-react").then(mod => mod.ArrowLeft), { ssr: false });
const CheckCircle = dynamic(() => import("lucide-react").then(mod => mod.CheckCircle), { ssr: false });
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullname: formState.name,
          company: formState.company,
          email: formState.email,
          plan: 'BucketLabs Enterprise Inquiry',
          pricing: '',
          comment: 'Contact form submission from BucketLabs.ai website',
        }),
      })
      if (response.ok) {
        setSubmitted(true)
      }
    } catch (error) {
      console.error('Error submitting lead:', error)
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="mx-auto max-w-md">
          {!submitted ? (
            <Card className="bg-gray-950 border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl text-white">
                  Thank you for your interest in{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-transparent bg-clip-text font-bold">
                    BucketLabs.ai
                  </span>
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Simply fill out this form and we'll be in touch to discuss how our private AI solutions can help your enterprise.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="bg-gray-900 border-gray-700 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-white">
                      Company
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your company"
                      required
                      value={formState.company}
                      onChange={handleChange}
                      className="bg-gray-900 border-gray-700 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="bg-gray-900 border-gray-700 text-white"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-gray-950 border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  Thank You!
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Your request has been submitted successfully.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-white mb-4">Thank you for your interest! We will reach out to you shortly.</p>
                <p className="text-gray-400">
                  A member of our team will contact you at {formState.email} to discuss how BucketLabs.ai can help transform your enterprise with secure AI solutions.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/" className="w-full">
                  <Button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Return to Home
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

