export default function Customers() {
  const testimonials = [
    {
      quote: "We reduced our average credentialing time from 8 weeks to 3 weeks. The ability to have boots on the ground when institutions are unresponsive is a game-changer.",
      author: "Medical Staff Coordinator",
      company: "Major GCC Healthcare Group",
      metric: "62% faster credentialing"
    },
    {
      quote: "The platform handles the complexity of multi-jurisdiction requirements seamlessly. We can now confidently hire physicians from any country.",
      author: "HR Director",
      company: "International Hospital Network",
      metric: "40+ countries managed"
    },
    {
      quote: "Finally, a solution that understands the reality of international credentialing. Pure software solutions failed us—this hybrid approach actually works.",
      author: "Chief Medical Officer",
      company: "Private Healthcare Provider",
      metric: "99.9% compliance rate"
    }
  ]

  const segments = [
    "Hospital Groups",
    "Healthcare Staffing Agencies",
    "Medical Tourism Facilitators",
    "Telemedicine Platforms",
    "Government Health Ministries",
    "Insurance Networks"
  ]

  return (
    <section id="customers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading">Built for Organizations Hiring Internationally</h2>
          <p className="section-subheading">
            Healthcare organizations that need reliable, fast credential verification across borders
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="mb-6">
                <svg className="w-8 h-8 text-primary-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
                <p className="text-sm text-primary-600 font-medium mt-2">{testimonial.metric}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-8">Trusted Across Healthcare Segments</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {segments.map((segment, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white rounded-full text-gray-600 text-sm border border-gray-200"
              >
                {segment}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
