export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Provider Submits Documents",
      description: "Healthcare professionals upload their credentials through our secure portal. Documents are automatically categorized and validated for completeness.",
      detail: "Supports 200+ document types across all major credential categories"
    },
    {
      number: "02",
      title: "Smart Routing & Verification",
      description: "Our platform determines the fastest verification path. Digital-first for connected institutions, with automatic escalation to our ground teams when needed.",
      detail: "AI-powered routing reduces verification time by 40%"
    },
    {
      number: "03",
      title: "On-Ground Follow-Up",
      description: "When institutions are unresponsive or require physical presence, our local teams in 90+ countries step in to complete verification.",
      detail: "Average response time: 48 hours for escalated cases"
    },
    {
      number: "04",
      title: "Continuous Monitoring",
      description: "Once verified, credentials are continuously monitored for expirations, sanctions, or status changes. You're alerted before issues arise.",
      detail: "Real-time alerts for license expirations and sanctions"
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading">How It Works</h2>
          <p className="section-subheading">
            A streamlined process that combines technology with human expertise
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl font-bold text-primary-200">{step.number}</span>
                  <h3 className="text-2xl font-semibold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600 text-lg mb-4">{step.description}</p>
                <p className="text-sm text-primary-600 font-medium">{step.detail}</p>
              </div>
              <div className="flex-1 w-full">
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl h-64 flex items-center justify-center border border-primary-200">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                      <span className="text-3xl font-bold text-primary-600">{step.number}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
