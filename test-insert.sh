# Run this script in the terminal (make sure your dev server is running)

curl -X POST http://localhost:3000/api/leads \
  -H "Content-Type: application/json" \
  -d '{"fullname": "John Doe", "company": "Acme Inc", "email": "john@example.com", "plan": "Test Plan", "pricing": "$0", "comment": "This is a test comment"}'
