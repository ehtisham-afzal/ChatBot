import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ZapIcon,
  ShieldIcon,
  BrainIcon,
  MessageSquareIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckIcon,
} from "lucide-react";
import Image from "next/image";
import NavBar from "@/components/NavBar";

export default function Page() {
  return (
    <div className="flex min-h-[100dvh] w-full flex-col bg-black">
      <NavBar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex h-fit w-full items-center justify-center overflow-hidden bg-gradient-to-b from-black via-blue-950/60 to-black py-16 md:py-28">
          {/* Decorative background elements */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/4 top-1/4 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl" />
            <div className="absolute right-1/4 top-1/2 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-3xl" />
          </div>

          <div className="container relative px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              {/* Badge */}
              <div className="animate-fade-in flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300">
                <SparklesIcon className="h-3.5 w-3.5" />
                <span>Next-generation AI assistant</span>
              </div>

              <div className="space-y-4 animate-fade-in">
                <h1 className="bg-gradient-to-b from-white via-gray-100 to-gray-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
                  The Future of{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    Conversation
                  </span>{" "}
                  <br />
                  is Here
                </h1>
                <p className="mx-auto max-w-[650px] text-base text-gray-400 md:text-xl">
                  Experience AI-powered chat that understands, learns, and
                  evolves with you. Smarter responses, every time.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 pb-4 animate-fade-in">
                <Link
                  href="/login"
                  className={buttonVariants({ variant: "default" }) + " gap-2 px-6 py-2 text-base"}
                >
                  Get Started Free
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <Link
                  href="/#features"
                  className={buttonVariants({ variant: "outline" }) + " border-gray-700 bg-transparent text-gray-300 hover:bg-gray-800 hover:text-white px-6 py-2 text-base"}
                >
                  Explore Features
                </Link>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-6 text-sm text-gray-500 animate-fade-in">
                <div className="flex items-center gap-1.5">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  <span>No credit card required</span>
                </div>
                <div className="hidden h-1 w-1 rounded-full bg-gray-600 sm:block" />
                <div className="hidden items-center gap-1.5 sm:flex">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  <span>Free to use</span>
                </div>
              </div>

              {/* Screenshot */}
              <div className="relative mt-8 w-full sm:w-3/4 lg:w-2/3 animate-slide-up">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-600/30 to-indigo-600/30 blur-md" />
                <Image
                  className="relative aspect-auto w-full rounded-xl border border-gray-700/50 shadow-2xl"
                  width={740}
                  height={600}
                  src="/Chatbot-Screenshot.webp"
                  alt="ChatbotScreenshot"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full border-y border-gray-800 bg-gray-950 py-10">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { value: "10K+", label: "Active Users" },
                { value: "99.9%", label: "Uptime" },
                { value: "< 1s", label: "Avg Response" },
                { value: "256-bit", label: "Encryption" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
                  <span className="text-2xl font-bold text-white md:text-3xl">
                    {stat.value}
                  </span>
                  <span className="text-sm text-gray-500">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="w-full bg-gradient-to-b from-gray-950 via-blue-950/20 to-gray-950 py-16 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <div className="mb-12 flex flex-col items-center gap-3 text-center">
              <div className="flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm text-indigo-300">
                <SparklesIcon className="h-3.5 w-3.5" />
                <span>Why choose us</span>
              </div>
              <h2 className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-5xl">
                Cutting-Edge Features
              </h2>
              <p className="max-w-[600px] text-gray-400">
                Everything you need for intelligent, secure, and adaptive AI
                conversations.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
              <Card className="group border border-gray-800 bg-gray-900/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/30 hover:bg-gray-900 hover:shadow-lg hover:shadow-yellow-500/5">
                <CardContent className="flex flex-col items-center space-y-4 p-8">
                  <div className="rounded-xl bg-yellow-500/10 p-3 ring-1 ring-yellow-500/20 transition-colors group-hover:bg-yellow-500/20">
                    <ZapIcon className="h-8 w-8 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Quantum-Speed Responses
                  </h3>
                  <p className="text-center text-sm leading-relaxed text-gray-400">
                    Harness the power of quantum algorithms for instant,
                    intelligent replies. Zero wait time, maximum productivity.
                  </p>
                </CardContent>
              </Card>

              <Card className="group border border-gray-800 bg-gray-900/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-500/30 hover:bg-gray-900 hover:shadow-lg hover:shadow-green-500/5">
                <CardContent className="flex flex-col items-center space-y-4 p-8">
                  <div className="rounded-xl bg-green-500/10 p-3 ring-1 ring-green-500/20 transition-colors group-hover:bg-green-500/20">
                    <ShieldIcon className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Neural Encryption
                  </h3>
                  <p className="text-center text-sm leading-relaxed text-gray-400">
                    Advanced AI-driven security protocols protect your data at
                    the synaptic level. Your privacy, guaranteed.
                  </p>
                </CardContent>
              </Card>

              <Card className="group border border-gray-800 bg-gray-900/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-gray-900 hover:shadow-lg hover:shadow-purple-500/5">
                <CardContent className="flex flex-col items-center space-y-4 p-8">
                  <div className="rounded-xl bg-purple-500/10 p-3 ring-1 ring-purple-500/20 transition-colors group-hover:bg-purple-500/20">
                    <BrainIcon className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Adaptive Cognition
                  </h3>
                  <p className="text-center text-sm leading-relaxed text-gray-400">
                    Our AI evolves with each interaction, providing an
                    ever-improving user experience tailored to you.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Additional smaller feature list */}
            <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: MessageSquareIcon, label: "Markdown Support", color: "text-blue-400" },
                { icon: ZapIcon, label: "Instant Responses", color: "text-yellow-400" },
                { icon: ShieldIcon, label: "Secure & Private", color: "text-green-400" },
                { icon: BrainIcon, label: "Context-Aware AI", color: "text-purple-400" },
                { icon: SparklesIcon, label: "Code Highlighting", color: "text-pink-400" },
                { icon: CheckIcon, label: "Always Available", color: "text-teal-400" },
              ].map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-lg border border-gray-800 bg-gray-900/40 px-4 py-3"
                >
                  <Icon className={`h-4 w-4 shrink-0 ${color}`} />
                  <span className="text-sm text-gray-300">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-gradient-to-b from-gray-950 to-black py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-950/60 via-indigo-950/40 to-black px-6 py-16 text-center">
              {/* Decorative elements */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-0 top-0 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-48 w-48 translate-x-1/2 translate-y-1/2 rounded-full bg-indigo-600/20 blur-3xl" />
              </div>

              <div className="relative flex flex-col items-center gap-6">
                <div className="flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300">
                  <SparklesIcon className="h-3.5 w-3.5" />
                  <span>Join thousands of users</span>
                </div>
                <h2 className="bg-gradient-to-r from-white via-blue-100 to-indigo-300 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-5xl">
                  Step into the Future of AI
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-400 md:text-lg">
                  Join the ranks of visionaries already revolutionizing their
                  communication with FutureChat AI. Start your journey today —
                  completely free.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/login"
                    className={
                      buttonVariants({ variant: "default" }) +
                      " gap-2 px-8 py-2.5 text-base"
                    }
                  >
                    Get Started Free
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/#features"
                    className={
                      buttonVariants({ variant: "outline" }) +
                      " border-gray-700 bg-transparent text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-2.5 text-base"
                    }
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-gray-800/60 bg-gray-950 py-8">
        <div className="container flex flex-col items-center gap-4 px-4 sm:flex-row md:px-6">
          <div className="flex items-center gap-2">
            <MessageSquareIcon className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-medium text-gray-300">
              FutureChat AI
            </span>
          </div>
          <p className="text-xs text-gray-500 sm:ml-2">
            © 2024 FutureChat AI. All rights reserved.
          </p>
          <nav className="flex gap-6 sm:ml-auto">
            <Link
              className="text-xs text-gray-500 transition-colors hover:text-blue-400"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs text-gray-500 transition-colors hover:text-blue-400"
              href="#"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
