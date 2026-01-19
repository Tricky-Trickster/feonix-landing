import { Link } from 'react-router-dom'
import FeonixLogo from './FeonixLogo'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <FeonixLogo size="sm" />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
              Products
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="mailto:info@feonix.ai" className="btn-secondary text-sm">
              Get Started
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
