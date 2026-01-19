import { Link } from 'react-router-dom'
import FeonixLogo from './FeonixLogo'

export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <FeonixLogo size="md" className="mb-4" />
            <p className="text-gray-400 text-sm max-w-md">
              Empowering businesses with intelligent AI solutions. 
              Transform your operations with Feonix-Insight and RespondIQ.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="mailto:info@feonix.ai" className="text-gray-400 hover:text-primary-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Feonix-Insight</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">RespondIQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; 2026 Feonix Technologies PTE. LTD., Singapore. UEN: 202602748D</p>
          <p className="mt-1 text-xs">All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
