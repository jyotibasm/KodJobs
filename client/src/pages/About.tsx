
export default function AboutPage() {
    return (
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-yellow-50 py-12">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-yellow-900 mb-4">
              Powering Tech Careers
            </h1>
            <p className="text-lg text-yellow-800">
              We simplify tech hiring by connecting exceptional talent with innovative companies. 
              Born from developer frustration, built for developer success.
            </p>
          </div>
        </section>
  
        {/* Key Points */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-yellow-50 p-6 rounded-xl">
              <div className="w-10 h-10 bg-yellow-600 rounded-full mb-4 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-yellow-900 mb-2">Smart Matching</h3>
              <p className="text-yellow-800">AI-powered job matching that actually understands tech roles</p>
            </div>
  
            <div className="bg-yellow-50 p-6 rounded-xl">
              <div className="w-10 h-10 bg-yellow-600 rounded-full mb-4 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-yellow-900 mb-2">Community Driven</h3>
              <p className="text-yellow-800">250,000+ developers helping each other grow</p>
            </div>
          </div>
  
          {/* Stats */}
          <div className="text-center space-y-4">
            <div className="text-yellow-900 font-bold text-3xl">
              85% Interview Match Rate
            </div>
            <div className="text-yellow-600 text-lg">
              Average response time: 48 hours
            </div>
          </div>
        </section>
  
        {/* CTA */}
        <section className="bg-yellow-900 text-white py-12">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Ready to Level Up?
            </h2>
            <button className="bg-white text-yellow-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors">
              Start Exploring Jobs
            </button>
          </div>
        </section>
      </div>
    );
  }