import { Header } from "@/components/sections/Header"
import { Footer } from "@/components/sections/Footer"

function SimpleHero() {
  return (
    <section className="relative pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              AI-Powered
            </span>
            <br />
            <span className="text-gray-900">
              Digital Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Transform your business with cutting-edge AI technology.
          </p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}

export default function TestPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <SimpleHero />
      </main>
      <Footer />
    </div>
  )
}