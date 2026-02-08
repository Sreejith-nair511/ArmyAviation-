export function Experience() {
  return (
    <section className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="w-full max-w-4xl mx-auto">
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif mb-2">
              Service Experience
            </h2>
            <div className="w-16 h-1 bg-accent" />
          </div>

          {/* Main Position */}
          <div className="border-l-4 border-accent pl-6 space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-primary">Indian Army – Aviation Units</h3>
              <p className="text-lg text-secondary font-semibold">Subedar Major (Airframe)</p>
              <p className="text-base text-muted-foreground font-medium">1996 – Present (30 Years)</p>
            </div>

            <div className="text-gray-700 space-y-3">
              <p className="font-semibold text-primary">Key Responsibilities & Achievements:</p>
              <ul className="space-y-2 text-base">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Supervised airframe inspection, maintenance, and repair operations across multiple aircraft platforms</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Conducted Non-Destructive Testing (NDT) including A-Scan ultrasonic testing and structural analysis</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Performed composite structure inspection and repair with adherence to aviation standards</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Managed tarmac operations and aircraft ground handling procedures</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Led and mentored technical teams ensuring aviation safety compliance and mission readiness</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Maintained technical logs, maintenance documentation, and regulatory records</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Managed aviation stores, tools, inventory control, and equipment utilization</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Performed liaison duties with senior officers, sister services, and external agencies</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Organised Flying Accident Mishap Enquiries (FAMEs) and central-level operational events</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Service Summary */}
          <div className="bg-white p-6 md:p-8 rounded border border-gray-200">
            <h4 className="text-lg font-bold text-primary mb-4">Service Highlights</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base text-gray-700">
              <div className="flex gap-3">
                <span className="text-accent font-bold min-w-fit">✓</span>
                <span>30 years of disciplined and blemish-free service</span>
              </div>
              <div className="flex gap-3">
                <span className="text-accent font-bold min-w-fit">✓</span>
                <span>Leadership of large aviation technical teams</span>
              </div>
              <div className="flex gap-3">
                <span className="text-accent font-bold min-w-fit">✓</span>
                <span>Execution of mission-critical aviation operations</span>
              </div>
              <div className="flex gap-3">
                <span className="text-accent font-bold min-w-fit">✓</span>
                <span>Strong safety and compliance record</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
