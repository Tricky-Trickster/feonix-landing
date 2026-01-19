import { Link } from 'react-router-dom'
import { Brain, FileText, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Intelligent AI Solutions for
            <span className="gradient-text"> Modern Business</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Feonix delivers cutting-edge AI-powered platforms that transform how businesses 
            manage knowledge, respond to opportunities, and make data-driven decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="btn-primary">
              Explore Products
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our <span className="gradient-text">Products</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Feonix-Insight Card */}
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg mr-4">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Feonix-Insight</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Advanced knowledge management and document intelligence platform. 
                Harness the power of AI to extract insights from your documents, 
                build semantic knowledge graphs, and enable intelligent search across your organization.
              </p>
              <Link to="/products" className="text-primary-400 hover:text-primary-300 font-semibold">
                Learn More →
              </Link>
            </div>

            {/* RespondIQ Card */}
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-lg mr-4 relative">
                  <FileText className="h-6 w-6 text-white" />
                  <Zap className="h-3 w-3 text-white absolute bottom-0.5 right-0.5" />
                </div>
                <h3 className="text-2xl font-bold">RespondIQ</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Intelligent RFP and proposal response platform. Automate your bid management process, 
                leverage historical responses, and generate winning proposals faster with AI-powered assistance.
              </p>
              <Link to="/products" className="text-primary-400 hover:text-primary-300 font-semibold">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose <span className="gradient-text">Feonix</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
              <p className="text-gray-400">
                Process documents and generate insights in seconds with our optimized AI infrastructure.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Enterprise Security</h3>
              <p className="text-gray-400">
                Bank-level encryption and compliance with industry standards to keep your data safe.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Customizable</h3>
              <p className="text-gray-400">
                Tailor our platforms to your specific workflows and business requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-feonix">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join leading organizations using Feonix to unlock the power of their data and accelerate growth.
          </p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-100 transition-colors">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}
