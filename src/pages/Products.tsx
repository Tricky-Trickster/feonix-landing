import { Brain, FileText, Zap } from 'lucide-react'

export default function Products() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Our <span className="gradient-text">Products</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Powerful AI-driven platforms designed to solve real business challenges
          </p>
        </div>

        {/* Feonix-Insight */}
        <div className="mb-20">
          <div className="card max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg mr-4">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold">Feonix-Insight</h2>
                </div>
                <p className="text-gray-400 mb-6">
                  Transform your documents into actionable intelligence with our advanced knowledge management platform.
                </p>
                
                <h3 className="text-xl font-semibold mb-3">Key Features:</h3>
                <ul className="space-y-2 text-gray-400 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Intelligent document processing with AI-powered extraction</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Semantic knowledge graphs for relationship discovery</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Multi-modal search across documents and entities</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Real-time collaboration and knowledge sharing</span>
                  </li>
                </ul>
                
                <a href="mailto:info@feonix.ai?subject=Feonix-Insight Inquiry" className="btn-primary inline-block">
                  Request Demo
                </a>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4 h-64 flex items-center justify-center">
                <img src="/Feonix_Insight.jpg" alt="Feonix-Insight" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* RespondIQ */}
        <div>
          <div className="card max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 bg-gray-800 rounded-lg p-4 h-64 flex items-center justify-center">
                <img src="/RespondIQ_Logo.jpg" alt="RespondIQ" className="w-full h-full object-cover rounded-lg" />
              </div>
              
              <div className="order-1 md:order-2">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg mr-4 relative">
                    <FileText className="h-8 w-8 text-white" />
                    <Zap className="h-4 w-4 text-white absolute bottom-1 right-1" />
                  </div>
                  <h2 className="text-3xl font-bold">RespondIQ</h2>
                </div>
                <p className="text-gray-400 mb-6">
                  Win more bids with AI-powered RFP response automation and intelligent proposal generation.
                </p>
                
                <h3 className="text-xl font-semibold mb-3">Key Features:</h3>
                <ul className="space-y-2 text-gray-400 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Automated RFP analysis and requirement extraction</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Intelligent response generation from historical data</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Collaborative workflow for team-based proposals</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Compliance checking and quality assurance</span>
                  </li>
                </ul>
                
                <a href="mailto:info@feonix.ai?subject=RespondIQ Inquiry" className="btn-primary inline-block">
                  Request Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
