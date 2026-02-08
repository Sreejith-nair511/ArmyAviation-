export function Skills() {
  const skills = [
    'Airframe Maintenance',
    'Composite Repair',
    'NDT (A-Scan)',
    'Tarmac Management',
    'Aircraft Ground Handling',
    'Man Management',
    'Storekeeping & Inventory Control',
    'Technical Documentation',
    'Liaison & Coordination',
    'Safety & Quality Compliance',
    'Basic Computer Skills',
    'Aviation Operations',
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="w-full max-w-4xl mx-auto">
        <div className="space-y-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif mb-2">
              Core Competencies
            </h2>
            <div className="w-16 h-1 bg-accent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-200 rounded hover:bg-gray-100 transition-colors"
              >
                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                <span className="text-gray-700 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
