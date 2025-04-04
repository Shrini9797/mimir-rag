"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import dynamic from "next/dynamic";

// Replace previous dynamic import with this:
const ArrowLeft = dynamic<React.ComponentType<{ className?: string }>>(
  () => Promise.resolve(require("lucide-react").ArrowLeft),
  { ssr: false }
);
const CheckCircle = dynamic<React.ComponentType<{ className?: string }>>(
  () => Promise.resolve(require("lucide-react").CheckCircle),
  { ssr: false }
);

export default function MimirPage() {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  // Updated handleSubmit to match mimir_pro method
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("onSubmit fired - Mimir form submitted with:", formState);
    try {
      const endpoint = window.location.origin + '/api/leads';
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullname: formState.name,
          company: formState.company,
          email: formState.email,
          plan: 'Mimir Standard',
          pricing: '$499/month',
          comment: 'Get Started from Mimir page',
        }),
      });
      console.log("Mimir form response:", response.status);
      if (response.ok) {
        setSubmitted(true);
      } else {
        const errorData = await response.json();
        console.error("Error in Mimir submission:", errorData);
      }
    } catch (error) {
      console.error("Mimir fetch error:", error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <div className="container py-12">
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
                    Mimir
                  </span>
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Simply fill out this form and we'll be in touch.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6 p-4 bg-gray-900 rounded-lg">
                  <h3 className="font-medium text-lg mb-2 text-white">Mimir Standard Plan</h3>
                  <p className="text-gray-400 text-sm mb-2">$499/month</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-cyan-500"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      End-to-end encryption
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-cyan-500"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      Cloud deployment
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-cyan-500"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      10,000 queries per month
                    </li>
                  </ul>
                </div>
                {/* Changed form: attach onSubmit */}
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
                    type="submit" // change to submit so that handleSubmit receives the event
                    className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:opacity-90"
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
                  A member of our team will contact you at {formState.email} to schedule your demo of Mimir.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/" className="w-full">
                  <Button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:opacity-90">
                    Return to Home
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

