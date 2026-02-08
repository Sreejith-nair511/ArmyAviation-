import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Award, Target, Shield, TrendingUp } from 'lucide-react'

const achievements = [
  {
    icon: Award,
    title: 'Operational Excellence',
    description:
      'Led successful maintenance operations with zero critical safety incidents across multiple deployment cycles.',
    metrics: '30 Years',
  },
  {
    icon: Shield,
    title: 'Airframe Supervision',
    description:
      'Specialized expertise in airframe maintenance, NDT inspection, and structural integrity verification.',
    metrics: 'Advanced Certification',
  },
  {
    icon: Target,
    title: 'Mission Readiness',
    description:
      'Maintained 99.5% fleet readiness rate through meticulous maintenance planning and execution.',
    metrics: '99.5%',
  },
  {
    icon: TrendingUp,
    title: 'Team Leadership',
    description:
      'Mentored and trained aviation technicians and maintenance personnel in world-class standards.',
    metrics: '100+ Personnel',
  },
]

const highlights = [
  {
    category: 'Service Record',
    items: [
      '30 years of distinguished military service',
      'Expert in helicopter airframe operations',
      'Specialized in NDT testing and certification',
      'Leadership role in multiple aviation units',
    ],
  },
  {
    category: 'Technical Expertise',
    items: [
      'Airframe structural analysis and repair',
      'Non-Destructive Testing (NDT) certification',
      'Aircraft inspection and maintenance protocols',
      'Aviation safety management systems',
    ],
  },
  {
    category: 'Recognition',
    items: [
      'Multiple commendations for excellence',
      'Distinguished service awards',
      'Operational achievement recognition',
      'Professional excellence accolades',
    ],
  },
]

export const metadata = {
  title: 'Achievements | N. Sasidharan - Aviation Professional',
  description: 'Professional achievements, milestones, and recognition in aviation operations and leadership',
}

export default function AchievementsPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white">
        {/* Header Section */}
        <section className="bg-primary text-white py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">
              Professional Achievements
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl">
              A comprehensive overview of accomplishments, expertise, and recognition throughout a distinguished career in aviation operations.
            </p>
          </div>
        </section>

        {/* Achievement Cards */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <Icon className="w-8 h-8 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-primary mb-2">
                          {achievement.title}
                        </h3>
                        <p className="text-gray-700 mb-4">{achievement.description}</p>
                        <div className="text-accent font-semibold text-sm">
                          {achievement.metrics}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="bg-card py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Key Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {highlights.map((section, index) => (
                <div key={index} className="bg-white p-8 rounded-lg border border-border">
                  <h3 className="text-xl font-bold text-primary mb-4">{section.category}</h3>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex gap-3 text-gray-700">
                        <span className="text-accent font-bold text-lg leading-none">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
