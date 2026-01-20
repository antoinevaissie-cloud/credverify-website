export default function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-accent-500 rounded-full mr-2 animate-pulse"></span>
            Trusted by healthcare organizations across 40+ countries
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Get International Physicians
            <span className="text-primary-600"> Credentialed in Weeks</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-4 leading-relaxed">
            When institutions ignore emails, our teams in 90+ countries walk through the door.
            Our hybrid approach cuts credential verification from <strong>3 months to 3 weeks</strong>.
          </p>

          <p className="text-lg text-red-600 font-semibold mb-8">
            Every delayed physician costs you $20,000-$80,000 in lost revenue.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#contact" className="btn-primary text-lg px-8 py-4">
              Request a Demo
            </a>
            <a href="#how-it-works" className="btn-secondary text-lg px-8 py-4">
              See How It Works
            </a>
          </div>
          
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600">90+</div>
              <div className="text-sm text-gray-600">Countries Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600">21 Days</div>
              <div className="text-sm text-gray-600">Avg. vs 90-Day Standard</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600">99.8%</div>
              <div className="text-sm text-gray-600">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
