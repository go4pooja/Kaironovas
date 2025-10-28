import Link from 'next/link'

export default function SimplePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Kaironovas</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#about" className="text-gray-600 hover:text-gray-900">About</Link>
              <Link href="#services" className="text-gray-600 hover:text-gray-900">Services</Link>
              <Link href="#contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI-Powered Digital Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge AI technology. From smart websites 
            to intelligent influencer matching, we create solutions that think ahead.
          </p>
          <div className="space-x-4">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700">
              Get Started
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50">
              Learn More
            </button>
          </div>
        </div>

        {/* Services section */}
        <div id="services" className="py-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                🌐
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Website Creation</h3>
              <p className="text-gray-600">Smart websites that adapt and optimize themselves using machine learning algorithms.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                📈
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Marketing</h3>
              <p className="text-gray-600">Intelligent marketing campaigns that learn and improve automatically.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                👥
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Influencer Matching</h3>
              <p className="text-gray-600">AI platform that finds perfect influencers and predicts campaign success.</p>
            </div>
          </div>
        </div>

        {/* Contact section */}
        <div id="contact" className="py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
            <p className="text-gray-600 mb-8">
              Ready to transform your business with AI? Contact us today.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-lg border">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <textarea 
                  rows={4}
                  placeholder="Message" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <button 
                  type="submit"
                  className="w-full bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Kaironovas</h3>
            <p className="text-gray-400 mb-4">AI-Powered Digital Solutions</p>
            <p className="text-sm text-gray-500">© 2024 Kaironovas. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}