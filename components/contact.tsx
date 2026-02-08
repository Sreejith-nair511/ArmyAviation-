'use client'

import React from "react"

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Basic form validation
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 px-4 bg-white">
      <div className="w-full max-w-4xl mx-auto">
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif mb-2">
              Get In Touch
            </h2>
            <div className="w-16 h-1 bg-accent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Phone */}
            <div className="flex flex-col items-start gap-3">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <Phone size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-primary mb-1">Phone</h3>
                <a href="tel:+916006291957" className="text-gray-700 hover:text-secondary transition-colors">
                  +91 60062 91957
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col items-start gap-3">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <Mail size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-primary mb-1">Email</h3>
                <a
                  href="mailto:nsasidharan0357@gmail.com"
                  className="text-gray-700 hover:text-secondary transition-colors break-all"
                >
                  nsasidharan0357@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col items-start gap-3">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <MapPin size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-primary mb-1">Location</h3>
                <p className="text-gray-700">Bangalore, Karnataka, India</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded">
            <h3 className="text-2xl font-bold text-primary mb-6">Send a Message</h3>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded text-green-800">
                <p className="font-semibold">Thank you for your message!</p>
                <p className="text-sm">I will get back to you shortly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded transition-colors"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
