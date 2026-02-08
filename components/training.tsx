export function Training() {
  const qualifications = [
    {
      title: 'Airframe Trade Technical Training',
      issuer: 'Indian Army',
    },
    {
      title: 'Non-Destructive Testing (A-Scan)',
      issuer: 'Indian Army Aviation',
    },
    {
      title: 'Composite Repair Training',
      issuer: 'Indian Army Aviation',
    },
    {
      title: 'Aviation Safety & Quality Assurance Courses',
      issuer: 'Indian Army',
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="w-full max-w-4xl mx-auto">
        <div className="space-y-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif mb-2">
              Training & Qualifications
            </h2>
            <div className="w-16 h-1 bg-accent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualifications.map((qual, index) => (
              <div key={index} className="bg-white p-6 rounded border-l-4 border-accent">
                <h3 className="font-bold text-primary mb-2 text-lg">{qual.title}</h3>
                <p className="text-secondary font-medium">{qual.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
