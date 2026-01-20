export default function Problem() {
  const painPoints = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Months of Delays",
      description: "Traditional verification takes 15-90+ days. Every week of delay means lost revenue and understaffed departments."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Fragmented Systems",
      description: "Different verification requirements for each country. GCC uses DataFlow, UK uses EPIC, EU has its own systems. No single solution works globally."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Manual Processes",
      description: "Spreadsheets, emails, and phone calls to chase down credentials. Error-prone and impossible to scale."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      title: "Compliance Risk",
      description: "Unverified credentials put patients at risk. One fraudulent provider can lead to regulatory action and reputational damage."
    }
  ]

  return (
    <section id="problem" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading">Why Your Best Candidate Is Still Waiting 90 Days to Start</h2>
          <p className="section-subheading">
            They passed every interview. Their credentials are real. But they're stuck in credentialing limbo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-red-500 mb-4">{point.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-red-50 border border-red-100 rounded-xl p-8 text-center">
          <p className="text-lg text-red-800">
            <strong>The cost of delays:</strong> A single physician delayed by 4 weeks can mean 
            <span className="font-bold"> $20,000-$80,000</span> in lost revenue for your organization.
          </p>
        </div>
      </div>
    </section>
  )
}
