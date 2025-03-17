export default function AboutPage() {
    return (
      <div className="min-h-screen flex flex-col">
        {/* Main Content */}
        <main className="flex-1" style={{ backgroundColor: 'oklch(0.984 0.018 98.111)' }}>
          <section className="max-w-6xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-8" style={{ color: 'oklch(0.852 0.199 91.936)' }}>
              About TechConnect
            </h1>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-4">
                <p className="text-lg" style={{ color: 'oklch(0.45 0.1 91.936)' }}>
                  Bridging tech talent with innovative companies through intelligent matching and community-driven insights.
                </p>
                <button 
                  className="px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
                  style={{
                    backgroundColor: 'oklch(0.852 0.199 91.936)',
                    color: 'oklch(0.15 0.05 91.936)'
                  }}
                >
                  Join Our Network
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="p-6 rounded-xl" style={{ backgroundColor: 'oklch(0.95 0.05 91.936)' }}>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: 'oklch(0.852 0.199 91.936)' }}>
                    300K+ Community Members
                  </h3>
                  <p style={{ color: 'oklch(0.45 0.1 91.936)' }}>
                    Connect with developers, designers, and tech professionals worldwide
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
  
        {/* Dark Yellow Footer */}
        <footer 
          className="py-12 mt-auto"
          style={{
            backgroundColor: 'oklch(0.35 0.25 91.936)',
            color: 'oklch(0.85 0.1 91.936)'
          }}
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">TechConnect</h4>
                <p className="text-sm opacity-90">
                  Empowering tech careers since 2020
                </p>
              </div>
              
              <div>
                <h5 className="font-medium mb-3">Resources</h5>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:opacity-80">Career Guide</a></li>
                  <li><a href="#" className="hover:opacity-80">Company Reviews</a></li>
                  <li><a href="#" className="hover:opacity-80">Salary Insights</a></li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-medium mb-3">Connect</h5>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:opacity-80">Twitter</a></li>
                  <li><a href="#" className="hover:opacity-80">LinkedIn</a></li>
                  <li><a href="#" className="hover:opacity-80">GitHub</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }