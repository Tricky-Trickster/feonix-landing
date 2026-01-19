export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            About <span className="gradient-text">Feonix</span>
          </h1>
          <p className="text-xl text-gray-400">
            Pioneering the future of intelligent business solutions
          </p>
        </div>

        {/* Mission */}
        <div className="card mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            At Feonix, we believe that every organization deserves access to world-class AI technology. 
            Our mission is to democratize artificial intelligence by creating intuitive, powerful platforms 
            that transform how businesses manage knowledge, respond to opportunities, and make decisions.
          </p>
        </div>

        {/* Vision */}
        <div className="card mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            We envision a world where AI seamlessly augments human intelligence, enabling organizations 
            to unlock the full potential of their data and expertise. Through continuous innovation and 
            customer-centric design, we're building the foundation for the next generation of intelligent 
            business operations.
          </p>
        </div>

        {/* Values */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Innovation</h3>
              </div>
              <p className="text-gray-400">
                We push the boundaries of what's possible with AI, constantly exploring new technologies 
                and approaches to solve complex business challenges.
              </p>
            </div>

            <div className="card">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-secondary-500/20 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Customer Focus</h3>
              </div>
              <p className="text-gray-400">
                Our customers' success is our success. We listen, adapt, and build solutions that 
                truly address real-world business needs.
              </p>
            </div>

            <div className="card">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Integrity</h3>
              </div>
              <p className="text-gray-400">
                We operate with transparency and honesty, building trust through ethical AI practices 
                and responsible data handling.
              </p>
            </div>

            <div className="card">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-secondary-500/20 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Excellence</h3>
              </div>
              <p className="text-gray-400">
                We strive for excellence in everything we do, from product design to customer support, 
                delivering quality that exceeds expectations.
              </p>
            </div>
          </div>
        </div>

        {/* Technology */}
        <div className="card">
          <h2 className="text-3xl font-bold mb-4">Our Technology</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-4">
            Feonix platforms are built on cutting-edge AI and machine learning technologies, including:
          </p>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Advanced natural language processing and understanding</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Semantic knowledge graphs and relationship mapping</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Multi-modal embeddings and vector search</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Enterprise-grade security and scalability</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
