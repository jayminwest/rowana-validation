import { BarChart3, Brain, MessageSquareText, Linkedin, Twitter, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Unlock Insights from Sales Calls in Minutes, Not Hours
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            CogniFlow AI automatically generates concise, actionable summaries and identifies key topics from your sales
            call recordings, eliminating manual review.
          </p>
          <Link
            href="#"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-md transition duration-300"
          >
            Request Early Access
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Key Features</h2>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="bg-indigo-100 p-3 rounded-full mb-6">
                <Brain className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">AI-Powered Summarization</h3>
              <p className="text-gray-600">Automatically condense long calls into key takeaways.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="bg-indigo-100 p-3 rounded-full mb-6">
                <MessageSquareText className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Automatic Topic Extraction</h3>
              <p className="text-gray-600">Instantly identify recurring themes and discussion points across calls.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="bg-indigo-100 p-3 rounded-full mb-6">
                <BarChart3 className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Actionable Insights</h3>
              <p className="text-gray-600">Quickly understand customer sentiment and next steps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem We Solve Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Problem We Solve</h2>
          <p className="text-xl text-gray-600">
            Sales teams waste countless hours manually listening to and summarizing lengthy call recordings. This
            tedious process delays insights and burns valuable selling time. CogniFlow AI gives you back that time.
          </p>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Who We Help</h2>
          <p className="text-xl text-gray-600">
            Designed for B2B SaaS sales teams, sales managers, and revenue operations professionals looking to maximize
            the value of their customer conversations.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Us</h2>
          <p className="text-xl text-gray-600">
            CogniFlow AI is an early-stage startup based in Seattle, WA, dedicated to applying artificial intelligence
            to solve real-world business communication challenges.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-6 text-gray-600">© 2025 CogniFlow AI</div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
            <div className="flex items-center text-gray-600">
              <Mail className="h-5 w-5 mr-2" />
              <a href="mailto:info@cogniflow.ai" className="hover:text-indigo-600 transition-colors">
                info@cogniflow.ai
              </a>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="h-5 w-5 mr-2" />
              <span>Seattle, WA</span>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors" aria-label="Twitter">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
