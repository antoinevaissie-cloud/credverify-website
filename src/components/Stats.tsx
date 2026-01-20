export default function Stats() {
  const stats = [
    {
      value: "50%",
      label: "Faster Than Industry Average",
      description: "Our hybrid approach cuts verification time in half compared to pure digital or pure manual methods"
    },
    {
      value: "90+",
      label: "Countries Covered",
      description: "Physical presence for on-ground verification in markets where it matters most"
    },
    {
      value: "150+",
      label: "Healthcare Organizations",
      description: "Hospital groups, staffing agencies, and healthcare networks trust us globally"
    },
    {
      value: "99.8%",
      label: "Accuracy Rate",
      description: "Rigorous quality controls ensure verification accuracy you can trust"
    }
  ]

  return (
    <section className="py-20 bg-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Healthcare Organizations Worldwide
          </h2>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto">
            Our track record speaks for itself. We help healthcare organizations
            credential faster while maintaining the highest standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-accent-400 font-semibold mb-2">
                {stat.label}
              </div>
              <p className="text-primary-200 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
