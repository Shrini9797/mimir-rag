import Link from "next/link"
import { Shield, Lock, Database, Search, Code, Server, Brain, Zap, Eye, Cpu, FileText, Bot, FileSearch, Sparkles } from "lucide-react"
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
          <span className="text-xl font-bold">BucketLabs.ai</span>
        </div>
        <nav className="hidden gap-8 md:flex">
          <Link href="#products" className="text-sm font-medium text-gray-300 hover:text-white">
            Products
          </Link>
          <Link href="#about" className="text-sm font-medium text-gray-300 hover:text-white">
            About
          </Link>
          <Link href="#contact" className="text-sm font-medium text-gray-300 hover:text-white">
            Contact
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
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-4 py-24 text-center md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-r from-blue-600/10 via-purple-600/15 to-cyan-600/10 animate-gradient" />
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.15),transparent_50%)] animate-pulse-glow" />
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-float">
          Meet{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-transparent bg-clip-text animate-gradient">
            BucketLabs.ai
          </span>
          <br />The Future of Private AI.
        </h1>
        <p className="max-w-[700px] text-gray-400 md:text-xl">
          We build AI that keeps your data private. Get smarter business tools without giving up control of your information.
        </p>
        <div className="mt-6">
          <Link href="/contact">
            <Button
              variant="ghost"
              className="h-11 px-8 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Explore Our Products
            </Button>
          </Link>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Our AI Product Suite</h2>
          <p className="max-w-[85%] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Comprehensive private AI solutions designed for enterprise security and innovation.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-8 sm:grid-cols-1 md:max-w-[64rem] md:grid-cols-2 mt-16">
          {[
            {
              icon: <FileSearch className="h-12 w-12 text-purple-400" />,
              title: "Mimir",
              description: "Private AI & Knowledge Management Platform. Advanced AI meets enterprise security to transform documents into intelligent knowledge.",
              features: ["AI Semantic Search", "Zero-retention AI", "Document Analysis"],
              bgColor: "bg-gradient-to-r from-purple-600/10 via-violet-600/10 to-purple-600/10",
              borderColor: "border-purple-500/20",
              link: "https://mimirchat.ai",
              isLive: true,
              badge: "Available Now"
            },
            {
              icon: <Bot className="h-12 w-12 text-purple-500" />,
              title: "Private LLM",
              description: "Enterprise-grade large language models with complete privacy and on-premises deployment.",
              features: ["On-Premises Hosting", "Custom Training", "Zero Data Sharing"],
              bgColor: "bg-gradient-to-r from-violet-600/10 via-purple-600/10 to-purple-600/10",
              borderColor: "border-purple-500/20",
              link: "#",
              isLive: false,
              badge: "Coming Soon"
            },
          ].map((product, index) => (
            <Card
              key={index}
              className={`bg-gray-950 border-gray-800 hover:${product.borderColor} hover:bg-gray-900 transition-all duration-300 relative overflow-hidden group hover-lift`}
            >
              {product.badge && (
                <div className={`absolute top-4 right-4 px-2 py-1 text-xs font-medium rounded-full ${
                  product.isLive ? 'bg-green-500/10 text-green-400 border border-green-500/30' : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/30'
                }`}>
                  {product.badge}
                </div>
              )}
              <CardHeader>
                <div className={`p-3 w-fit rounded-xl ${product.bgColor}`}>
                  <div>{product.icon}</div>
                </div>
                <CardTitle className="mt-4 text-white text-xl">{product.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-400">{product.description}</p>
                <div className="space-y-2">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 bg-cyan-500 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                {product.isLive ? (
                  <Link href={product.link} target="_blank" className="w-full">
                    <Button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      {product.title === "Mimir" ? "Try Mimir →" : "Learn More →"}
                    </Button>
                  </Link>
                ) : (
                  <Button disabled className="w-full bg-gray-800 text-gray-400 cursor-not-allowed">
                    Coming Soon
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">About BucketLabs.ai</h2>
          <p className="max-w-[85%] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We create AI tools that work for your business while keeping your data completely private and secure.
          </p>
        </div>
        <div className="relative mt-16 bg-gray-950 rounded-3xl p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Eye className="h-12 w-12 text-purple-400" />,
                title: "Privacy-First Philosophy",
                description: "Every product we build puts your data privacy and security at the center of our design decisions.",
                color: "text-purple-400",
                bgColor: "bg-purple-600/10",
              },
              {
                icon: <Cpu className="h-12 w-12 text-purple-500" />,
                title: "Enterprise-Grade AI",
                description: "Scalable AI solutions designed for enterprise needs with robust security and compliance frameworks.",
                color: "text-purple-500",
                bgColor: "bg-purple-600/10",
              },
              {
                icon: <Zap className="h-12 w-12 text-purple-600" />,
                title: "Innovation Leadership",
                description: "Leading the future of secure AI with cutting-edge research in RAG, LLMs, and private machine learning.",
                color: "text-purple-600",
                bgColor: "bg-purple-600/10",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 text-center p-6 rounded-2xl hover:bg-gray-900/50 transition-all duration-300"
              >
                <div className={`p-3 rounded-xl ${value.bgColor}`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-300 mb-6">
              From our flagship <span className="font-semibold text-purple-400">Mimir</span> knowledge management platform to upcoming innovations in secure AI,
              BucketLabs.ai transforms how enterprises handle intelligent document analysis while maintaining complete privacy and control.
            </p>
            <Link href="https://mimirchat.ai" target="_blank">
              <Button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Try Mimir Platform →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Partner with Us</h2>
          <p className="max-w-[85%] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Ready to transform your enterprise with secure, private AI solutions?
          </p>
        </div>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 mt-16">
          <Card className="bg-gray-950 border-gray-800 hover:border-purple-500/30 hover:bg-gray-900 transition-all duration-300">
            <CardHeader>
              <div className="p-3 w-fit rounded-xl bg-gradient-to-r from-purple-600/10 via-violet-600/10 to-purple-600/10">
                <FileText className="h-8 w-8 text-purple-400" />
              </div>
              <CardTitle className="text-white text-xl">Try Mimir Platform</CardTitle>
              <CardDescription className="text-gray-400">
                Experience AI-powered document intelligence with enterprise-grade privacy and security.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Link href="https://mimirchat.ai" target="_blank" className="w-full">
                <Button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Start Free Trial →
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="bg-gray-950 border-gray-800 hover:border-purple-500/30 hover:bg-gray-900 transition-all duration-300">
            <CardHeader>
              <div className="p-3 w-fit rounded-xl bg-gradient-to-r from-violet-600/10 via-purple-600/10 to-purple-600/10">
                <Shield className="h-8 w-8 text-purple-500" />
              </div>
              <CardTitle className="text-white text-xl">Enterprise Solutions</CardTitle>
              <CardDescription className="text-gray-400">
                Discuss custom AI solutions and enterprise partnerships with our team.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Link href="/contact" className="w-full">
                <Button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Contact Us →
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-b from-gray-900/80 to-gray-950/80 p-8 md:p-12 shadow-xl shadow-purple-500/10 border border-gray-800 hover:border-purple-500/30 transition-all duration-300 glass-morph hover-lift">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <div className="rounded-full bg-gradient-to-r from-purple-600/20 via-violet-600/20 to-purple-600/20 p-4">
              <Sparkles className="h-10 w-10 text-purple-400" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to unlock AI-powered document intelligence?</h2>
            <p className="max-w-[85%] text-gray-400 md:text-xl/relaxed">
              Turn your documents into smart, searchable knowledge while keeping everything completely private and secure.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="https://mimirchat.ai" target="_blank">
                <Button
                  className="h-11 px-8 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Start Securely Today →
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="h-11 px-8 border-violet-400/50 text-violet-400 hover:bg-violet-600 hover:text-white hover:border-violet-600 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
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
                <span className="text-lg font-bold">BucketLabs.ai</span>
              </div>
              <p className="mt-2 text-sm text-gray-400 max-w-xs">
                Leading private AI, RAG, LLMs and enterprise AI solutions. Pioneering the future of secure artificial intelligence with privacy at the core.
              </p>
              <div className="mt-4 flex gap-4">
                <Link href="https://twitter.com" className="text-gray-400 hover:text-cyan-500 transition-colors">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.2 4.2 0 001.84-2.32 8.32 8.32 0 01-2.64 1 4.15 4.15 0 00-7.1 3.78 11.78 11.78 0 01-8.56-4.34 4.14 4.14 0 001.28 5.54 4.15 4.15 0 01-1.88-.52v.05a4.15 4.15 0 003.32 4.07 4.17 4.17 0 01-1.88.07 4.15 4.15 0 003.87 2.89 8.33 8.33 0 01-5.15 1.78A8.53 8.53 0 012 18.53a11.75 11.75 0 006.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.35-.01-.53A8.35 8.35 0 0024 5.5a8.21 8.21 0 01-2.54.7z"/>
                  </svg>
                </Link>
                <Link href="https://linkedin.com" className="text-gray-400 hover:text-cyan-500 transition-colors">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"/>
                    <path d="M2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </Link>
                <Link href="https://github.com" className="text-gray-400 hover:text-cyan-500 transition-colors">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium">Products</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="https://mimirchat.ai" target="_blank" className="text-sm text-gray-400 hover:text-cyan-500 transition-colors">
                    Mimir Platform
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="text-sm text-gray-400 hover:text-cyan-500 transition-colors">
                    Private LLM
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="text-sm text-gray-400 hover:text-cyan-500 transition-colors">
                    View All Products
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium">Solutions</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#about" className="text-sm text-gray-400 hover:text-cyan-500 transition-colors">
                    Enterprise AI
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-sm text-gray-400 hover:text-cyan-500 transition-colors">
                    Privacy-First AI
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-sm text-gray-400 hover:text-cyan-500 transition-colors">
                    Custom Development
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-gray-400 hover:text-cyan-500 transition-colors">
                    Partnerships
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#about" className="text-sm text-gray-400 hover:text-cyan-500 transition-colors">
                    About Us
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
              &copy; {new Date().getFullYear()} BucketLabs.ai. All rights reserved. Pioneering the future of private AI.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

