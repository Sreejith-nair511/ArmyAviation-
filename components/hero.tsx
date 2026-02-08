'use client';

import { Download, Mail } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  const handleDownloadResume = async () => {
    try {
      const response = await fetch('/api/resume')
      const blob = await response.blob()
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = 'N_Sasidharan_Resume.txt'
      link.click()
      URL.revokeObjectURL(link.href)
    } catch (error) {
      console.error('Error downloading resume:', error)
    }
  }

  return (
    <section className="min-h-screen bg-primary flex items-center justify-center px-4 py-12 md:py-0 print:min-h-auto print:py-12">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white space-y-6">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
                N. Sasidharan
              </h1>
              <h2 className="text-xl md:text-2xl text-accent font-semibold">
                Subedar Major (Airframe)
              </h2>
              <p className="text-lg md:text-xl text-gray-200 font-medium">
                Airframe Supervisor | Aviation Maintenance & Operations
              </p>
            </div>

            <p className="text-base md:text-lg text-gray-100 leading-relaxed max-w-xl">
              30 years of disciplined aviation maintenance, leadership, and operational excellence in the Indian Army. Distinguished service in helicopter operations and airframe supervision.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handleDownloadResume}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-yellow-600 text-primary font-semibold rounded transition-colors print:hidden"
              >
                <Download size={20} />
                Download Resume
              </button>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-gray-100 text-primary font-semibold rounded transition-colors"
              >
                <Mail size={20} />
                Contact
              </a>
            </div>
          </div>

          {/* Right Column - Premium Image */}
          <div className="flex justify-center md:justify-end print:hidden">
            <div className="relative w-80 h-96 rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-01-26%20at%208.45.27%20PM-tw1oWJWD5KPm7KGePfEMRaCtuqCgZU.jpeg"
                alt="N. Sasidharan with awards and trophies"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
