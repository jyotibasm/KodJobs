export default function AboutPage() {
    return (
      <div className="min-h-screen bg-[oklch(0.984_0.018_98.111)]">
        {/* Hero Section */}
        <section className="bg-[oklch(0.969_0.036_98.111)] py-12">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-[oklch(0.905_0.182_98.111)] mb-4">
              KodJobs
            </h1>
            <p className="text-lg text-[oklch(0.605_0.142_98.111)]">
              Bridging ambition with opportunity in the digital age. We're redefining
              tech recruitment through transparency and community.
            </p>
          </div>
        </section>
  
        {/* Value Propositions */}
        <div className="max-w-5xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl bg-[oklch(0.969_0.036_98.111)]">
            <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-[oklch(0.905_0.182_98.111)]">
              <svg className="w-6 h-6 text-[oklch(0.984_0.018_98.111)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[oklch(0.705_0.162_98.111)] mb-2">
              Precision Matching
            </h3>
            <p className="text-[oklch(0.605_0.142_98.111)]">
              Algorithmic matching that understands both technical requirements and team culture
            </p>
          </div>
  
          <div className="p-6 rounded-xl bg-[oklch(0.969_0.036_98.111)]">
            <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-[oklch(0.905_0.182_98.111)]">
              <svg className="w-6 h-6 text-[oklch(0.984_0.018_98.111)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[oklch(0.705_0.162_98.111)] mb-2">
              Community Powered
            </h3>
            <p className="text-[oklch(0.605_0.142_98.111)]">
              300k+ developers sharing insights and opportunities
            </p>
          </div>
        </div>
  
        {/* CTA Section */}
        <section className="bg-[oklch(0.905_0.182_98.111)] py-16">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-semibold text-[oklch(0.984_0.018_98.111)] mb-6">
              Start Your Journey
            </h2>
            <button className="bg-[oklch(0.984_0.018_98.111)] text-[oklch(0.905_0.182_98.111)] px-8 py-3 rounded-lg font-semibold hover:bg-[oklch(0.969_0.036_98.111)] transition-colors">
              Explore Roles
            </button>
          </div>
        </section>
      </div>
    );
  }