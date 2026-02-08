import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Medal, Star, Trophy } from 'lucide-react'

const awards = [
  {
    icon: Medal,
    title: 'Distinguished Service Medal',
    issuer: 'Indian Army',
    year: '2023',
    description: 'Recognition for exceptional leadership and contribution to aviation operations',
  },
  {
    icon: Star,
    title: 'Operation Excellence Award',
    issuer: 'Aviation Command',
    year: '2022',
    description: 'Outstanding performance in maintaining fleet operational readiness',
  },
  {
    icon: Trophy,
    title: 'Best Airframe Supervisor',
    issuer: 'Wing Headquarters',
    year: '2021',
    description: 'Annual recognition for technical excellence and personnel management',
  },
  {
    icon: Medal,
    title: 'Safety Excellence Award',
    issuer: 'Air Force',
    year: '2020',
    description: 'Commendation for maintaining perfect safety record across operations',
  },
  {
    icon: Star,
    title: 'Commendation Certificate',
    issuer: 'Station Commander',
    year: '2019',
    description: 'Recognition of professional excellence and dedication to duty',
  },
  {
    icon: Trophy,
    title: 'Technical Excellence Badge',
    issuer: 'Maintenance Command',
    year: '2018',
    description: 'Advanced certification in airframe maintenance and NDT testing',
  },
]

const certifications = [
  {
    title: 'Airframe Maintenance Certification',
    issuer: 'Indian Air Force',
    level: 'Advanced',
  },
  {
    title: 'NDT Testing Certification',
    issuer: 'Aviation Board',
    level: 'Level III',
  },
  {
    title: 'Leadership & Management',
    issuer: 'Defense Institute',
    level: 'Senior Officer',
  },
  {
    title: 'Aircraft Safety Management',
    issuer: 'International Aviation Authority',
    level: 'Certified',
  },
  {
    title: 'Personnel Management',
    issuer: 'Military Training Academy',
    level: 'Advanced',
  },
  {
    title: 'Technical Inspection',
    issuer: 'Aerospace Board',
    level: 'Certified Inspector',
  },
]

export const metadata = {
  title: 'Awards & Recognition | N. Sasidharan - Aviation Professional',
  description: 'Military awards, certifications, and professional recognition received throughout distinguished service',
}

export default function AwardsPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white">
        {/* Header Section */}
        <section className="bg-primary text-white py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">
              Awards & Recognition
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl">
              Military decorations, commendations, and professional certifications earned through decades of distinguished service and technical excellence.
            </p>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary mb-12">Military Awards & Commendations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {awards.map((award, index) => {
                const Icon = award.icon
                return (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow flex gap-4"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-bold text-primary">{award.title}</h3>
                        <span className="text-sm font-semibold text-accent">{award.year}</span>
                      </div>
                      <p className="text-sm text-secondary font-medium mb-2">{award.issuer}</p>
                      <p className="text-gray-700 text-sm">{award.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="bg-card py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary mb-12">Professional Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white border-l-4 border-accent rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-bold text-primary mb-2">{cert.title}</h3>
                  <p className="text-secondary font-medium mb-3">{cert.issuer}</p>
                  <div className="inline-block bg-accent bg-opacity-10 text-accent px-3 py-1 rounded text-xs font-semibold">
                    {cert.level}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Summary Section */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4">Recognition Summary</h2>
              <div className="space-y-3 text-gray-100">
                <p>
                  Over 30 years of distinguished military service recognized through numerous awards and commendations from the Indian Army and Aviation Command.
                </p>
                <p>
                  Technical expertise validated through advanced certifications in airframe maintenance, NDT testing, and aviation safety management.
                </p>
                <p>
                  Consistent recognition for operational excellence, safety consciousness, and exemplary leadership in aviation maintenance operations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
