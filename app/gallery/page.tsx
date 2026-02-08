import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const galleryImages = [
  {
    id: 1,
    title: 'Helicopter Squadron Team',
    description: 'Team photo with helicopter units at the airbase',
    image: '/images/whatsapp-20image-202026-01-26-20at-208.jpeg',
    category: 'Operations',
  },
  {
    id: 2,
    title: 'Award Presentation Ceremony',
    description: 'Receiving recognition for distinguished service',
    image: '/images/whatsapp-20image-202026-01-26-20at-208.jpeg',
    category: 'Recognition',
  },
  {
    id: 3,
    title: 'Leadership Address',
    description: 'Addressing personnel at unit headquarters',
    image: '/images/whatsapp-20image-202026-01-26-20at-208.jpeg',
    category: 'Leadership',
  },
  {
    id: 4,
    title: 'Professional Awards',
    description: 'Display of achievements and trophies',
    image: '/images/whatsapp-20image-202026-01-26-20at-208.jpeg',
    category: 'Achievements',
  },
]

export const metadata = {
  title: 'Gallery | N. Sasidharan - Aviation Professional',
  description: 'Photo gallery showcasing military service, leadership, and professional achievements',
}

export default function GalleryPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white">
        {/* Gallery Header */}
        <section className="bg-primary text-white py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">
              Professional Gallery
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl">
              A visual chronicle of distinguished service, leadership moments, and professional achievements in aviation operations.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {galleryImages.map((item) => (
                <div
                  key={item.id}
                  className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="relative h-64 md:h-72 overflow-hidden bg-gray-200">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                      <div className="w-full p-6 bg-gradient-to-t from-black to-transparent text-white">
                        <div className="text-sm font-semibold text-accent mb-1">
                          {item.category}
                        </div>
                        <h3 className="text-xl font-bold text-balance">{item.title}</h3>
                        <p className="text-sm text-gray-200 mt-2">{item.description}</p>
                      </div>
                    </div>
                  </div>
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
