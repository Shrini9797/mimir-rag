import Link from "next/link"
import { Shield, Lock, Database, Search, Code, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Add server action for inserting a comment into the 'leads' table
import { neon } from '@neondatabase/serverless';

async function create(formData: FormData) {
  'use server';
  const sql = neon(`${process.env.DATABASE_URL}`);
  const comment = formData.get('comment');
  console.log("Inserting comment:", comment);
  // Insert only the comment column for demo purposes
  await sql('INSERT INTO leads (comment) VALUES ($1)', [comment]);
  console.log("Insertion complete.");
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white overflow-x-hidden">
      {/* Header */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-40 flex h-20 items-center justify-between py-6">
        <div className="flex items-center gap-2 pl-2">
          <span className="text-xl font-bold lowercase">bucket</span>
        </div>
        <nav className="hidden gap-8 md:flex">
          <Link href="#features" className="text-sm font-medium text-gray-300 hover:text-white">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium text-gray-300 hover:text-white">
            How It Works
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-gray-300 hover:text-white">
            Pricing
          </Link>
        </nav>
        <div className="flex items-center">
          <Link href="/contact">
            <Button
              variant="ghost"
              className="h-9 px-4 bg-white/10 text-white border border-white/30 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-cyan-600 hover:border-transparent transition-all duration-300"
            >
              Book a Demo
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-4 py-24 text-center md:py-32">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.15),transparent_50%)]" />
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Meet{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-transparent bg-clip-text">
            Mimir
          </span>
          . Intelligence with Privacy.
        </h1>
        <p className="max-w-[700px] text-gray-400 md:text-xl">
          The world's most advanced secure private AI. Beautifully designed. Meticulously crafted for privacy.
        </p>
        <div className="mt-6">
          <Link href="/contact">
            <Button
              variant="ghost"
              className="h-11 px-8 bg-white/10 text-white border border-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:opacity-90 transition-all duration-300"
            >
              Book a Demo
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Designed for Privacy</h2>
          <p className="max-w-[85%] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Mimir is a privacy-first AI assistant that keeps your data secure while delivering exceptional intelligence.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:gap-8 mt-12">
          {[
            {
              icon: <Lock className="h-10 w-10 text-cyan-500" />,
              title: "End-to-End Encryption",
              description: "Your data is encrypted at all times, even during processing and retrieval.",
              bgColor: "bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10",
            },
            {
              icon: <Database className="h-10 w-10 text-blue-500" />,
              title: "Private Deployment",
              description: "Deploy within your own infrastructure. Your data never leaves your environment.",
              bgColor: "bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10",
            },
            {
              icon: <Search className="h-10 w-10 text-purple-500" />,
              title: "Secure Retrieval",
              description: "Advanced retrieval mechanisms with granular access controls and audit logs.",
              bgColor: "bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10",
            },
            {
              icon: <Code className="h-10 w-10 text-cyan-500" />,
              title: "Customizable Security",
              description: "Configure security policies to match your organization's requirements.",
              bgColor: "bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10",
            },
            {
              icon: <Server className="h-10 w-10 text-blue-500" />,
              title: "Compliance Ready",
              description: "Built to meet GDPR, HIPAA, SOC2, and other regulatory requirements.",
              bgColor: "bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10",
            },
            {
              icon: <Shield className="h-10 w-10 text-purple-500" />,
              title: "Zero Knowledge",
              description: "We never see your data. Period. Only you hold the encryption keys.",
              bgColor: "bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10",
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className="bg-gray-950 border-gray-800 hover:border-cyan-500/30 hover:bg-gray-900 transition-all duration-300"
            >
              <CardHeader>
                <div className={`p-2 w-fit rounded-lg ${feature.bgColor}`}>
                  <div>{feature.icon}</div>
                </div>
                <CardTitle className="mt-4 text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 bg-gray-950 rounded-3xl"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">How Mimir Works</h2>
          <p className="max-w-[85%] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Powerful RAG capabilities with security at every step of the process.
          </p>
        </div>
        <div className="relative mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Secure Ingestion",
              description: "Your documents are encrypted before processing, ensuring data security from the start.",
              color: "text-blue-500",
              bgColor: "bg-blue-600/10",
              borderColor: "border-blue-600/20",
            },
            {
              step: "02",
              title: "Private Indexing",
              description: "Documents are indexed within your secure environment, with no external access.",
              color: "text-purple-500",
              bgColor: "bg-purple-600/10",
              borderColor: "border-purple-600/20",
            },
            {
              step: "03",
              title: "Protected Retrieval",
              description: "Queries are processed securely, retrieving only authorized information.",
              color: "text-cyan-500",
              bgColor: "bg-cyan-600/10",
              borderColor: "border-cyan-600/20",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center gap-4 p-6 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-full ${step.bgColor} ${step.color} text-xl font-bold border ${step.borderColor}`}
              >
                {step.step}
              </div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-center text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Transparent Pricing</h2>
          <p className="max-w-[85%] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Choose the plan that fits your security needs and scale.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-16">
          {[
            {
              name: "Mimir",
              price: "$499",
              description: "For teams getting started with secure RAG",
              features: [
                "End-to-end encryption",
                "Cloud deployment",
                "Basic access controls",
                "5 team members",
                "10,000 queries per month",
                "Standard support",
              ],
              buttonColor: "bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:opacity-90",
            },
            {
              name: "Mimir Pro",
              price: "$1,999",
              description: "For organizations with advanced security needs",
              features: [
                "Everything in Standard",
                "Private deployment option",
                "Advanced access controls",
                "Unlimited team members",
                "Compliance documentation",
                "Priority support",
              ],
              highlighted: true,
              buttonColor: "bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:opacity-90",
            },
            {
              name: "Mimir Enterprise",
              price: "Contact us",
              description: "For organizations with specific security requirements",
              features: [
                "Everything in Pro",
                "Custom security policies",
                "Dedicated infrastructure",
                "Custom integrations",
                "Dedicated security engineer",
                "24/7 support",
              ],
              buttonColor: "bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:opacity-90",
            },
          ].map((plan, index) => (
            <Card
              key={index}
              className={`${
                plan.highlighted
                  ? "bg-gradient-to-b from-gray-900 to-gray-950 border-purple-500 shadow-lg shadow-purple-500/20"
                  : "bg-gray-950 border-gray-800"
              } hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:border-cyan-500/30`}
            >
              <CardHeader>
                <CardTitle className="text-white">{plan.name}</CardTitle>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  {plan.price !== "Contact us" && <span className="text-gray-400">/month</span>}
                </div>
                <CardDescription className="text-gray-400">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
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
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href={`/${plan.name.toLowerCase().replace(" ", "_")}`} className="w-full">
                  <Button className={`w-full ${plan.buttonColor}`}>Get Started</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-b from-gray-900 to-gray-950 p-8 md:p-12 shadow-xl shadow-cyan-500/10 border border-gray-800 hover:border-cyan-500/30 transition-all duration-300">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <div className="rounded-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 p-3">
              <Shield className="h-8 w-8 text-cyan-500" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to experience Mimir?</h2>
            <p className="max-w-[85%] text-gray-400 md:text-xl/relaxed">
              Get started today with a free trial. No credit card required.
            </p>
            <div className="mt-6">
              <Link href="/contact">
                <Button
                  variant="ghost"
                  className="h-11 px-8 bg-white/10 text-white border border-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:opacity-90 transition-all duration-300"
                >
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-2 lg:col-span-2 pl-2">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold lowercase">bucket</span>
              </div>
              <p className="mt-2 text-sm text-gray-400 max-w-xs">
                Mimir is a privacy-first AI assistant that keeps your data secure while delivering exceptional
                intelligence.
              </p>
              <div className="mt-4 flex gap-4">
                <Link href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium">Product</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#features" className="text-sm text-gray-400 hover:text-cyan-500 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-cyan-500 transition-colors">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-sm text-gray-400 hover:text-cyan-500 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-cyan-500 transition-colors">
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-cyan-500 transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-cyan-500 transition-colors">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-cyan-500 transition-colors">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-cyan-500 transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-cyan-500 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-cyan-500 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-gray-400 hover:text-cyan-500 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-cyan-500 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8">
            <p className="text-center text-xs text-gray-400">
              &copy; {new Date().getFullYear()} bucket inc. All rights reserved. Privacy is a fundamental human right.
            </p>
          </div>
        </div>
      </footer>
      {/* Comment Form Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-white mb-4">Leave a Comment</h2>
        <form action={create} className="flex flex-col gap-4">
          <input type="text" placeholder="write a comment" name="comment" className="p-2 rounded bg-gray-900 text-white" />
          <button type="submit" className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:opacity-90 p-2 rounded text-white">
            Submit
          </button>
        </form>
      </section>
    </div>
  )
}

