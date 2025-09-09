'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          to_email: 'ask@kasefra.io',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', company: '', message: '' })
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitStatus('error')
    }
    
    setIsSubmitting(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="logo-placeholder">K</div>
              <span className="text-white text-2xl font-bold">Kasefra</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-white/90 hover:text-white transition-colors">About</a>
              <a href="#features" className="text-white/90 hover:text-white transition-colors">Features</a>
              <a href="#contact" className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full hover:bg-white/30 transition-all">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center py-20 px-4 sm:px-6">
        <div className="hero-gradient absolute inset-0"></div>
        <div className="relative z-10 container mx-auto">
          <div className="text-center text-white max-w-5xl mx-auto">
            <div className="mb-6 sm:mb-8 animate-fadeIn">
              <span className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-white/20 shadow-lg">
                🚀 Something Big is Coming Soon
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 sm:mb-8 leading-tight tracking-tight animate-fadeInUp px-2">
              UAE's Smart
              <br />
              <span className="text-accent drop-shadow-lg">Finance</span> Revolution
            </h1>
            <p className="font-sans text-base sm:text-xl md:text-2xl mb-8 sm:mb-12 text-white/95 max-w-3xl mx-auto leading-relaxed animate-fadeInUp px-4">
              The future of personal finance management is coming to the UAE. 
              Get ready for seamless banking integration and AI-powered insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-fadeInUp px-4 max-w-xl mx-auto">
              <a
                href="#contact"
                className="bg-white text-primary px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white/95 hover:shadow-2xl transition-all transform hover:scale-105 hover:-translate-y-1 shadow-xl text-center"
              >
                Join the Waitlist
              </a>
              <a
                href="#about"
                className="border-2 border-white/70 backdrop-blur-sm text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white/20 hover:border-white transition-all transform hover:scale-105 text-center"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 section-animate">
              <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 px-2">
                Revolutionizing Finance in the UAE
              </h2>
              <p className="font-sans text-base sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4">
                Kasefra is building the future of personal finance management specifically for the UAE market. 
                We're creating an intelligent platform that connects all your banking needs, powered by AI 
                and designed with the modern UAE resident in mind.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center p-6 sm:p-8 bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 card-animate group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-primary-light rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-2xl sm:text-3xl">🏦</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">UAE Banking</h3>
                <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed">Seamless integration with all major UAE banks in one unified, secure platform</p>
              </div>
              
              <div className="text-center p-6 sm:p-8 bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 card-animate group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-primary-light rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-2xl sm:text-3xl">🤖</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">AI-Powered</h3>
                <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed">Smart categorization and insights tailored specifically for UAE spending patterns</p>
              </div>
              
              <div className="text-center p-6 sm:p-8 bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 card-animate group lg:col-span-1 sm:col-span-2 sm:max-w-md sm:mx-auto lg:max-w-none">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-primary-light rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-2xl sm:text-3xl">📊</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Smart Analytics</h3>
                <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed">Real-time insights and personalized financial planning tools for your lifestyle</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Features */}
      <section id="features" className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 section-animate">
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 px-2">
              What's Coming Next
            </h2>
            <p className="font-sans text-base sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4">
              We're building something extraordinary. Here's a preview of the revolutionary 
              features that will transform how you manage money in the UAE.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            <div className="group p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 card-animate transform hover:-translate-y-2">
              <div className="w-20 h-20 gradient-bg rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-white text-3xl">⚡</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">Instant Banking</h3>
              <p className="font-sans text-gray-700 leading-relaxed">
                Connect all your UAE bank accounts instantly with enterprise-grade security and real-time synchronization.
              </p>
            </div>

            <div className="group p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 card-animate transform hover:-translate-y-2">
              <div className="w-20 h-20 gradient-bg rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-white text-3xl">🧠</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">AI Financial Coach</h3>
              <p className="font-sans text-gray-700 leading-relaxed">
                Personal AI assistant that learns your spending habits and provides tailored financial advice for UAE lifestyle.
              </p>
            </div>

            <div className="group p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 card-animate transform hover:-translate-y-2">
              <div className="w-20 h-20 gradient-bg rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-white text-3xl">🎯</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">Smart Goals</h3>
              <p className="font-sans text-gray-700 leading-relaxed">
                Set and achieve financial goals with intelligent tracking and milestone celebrations.
              </p>
            </div>
          </div>

          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-primary/10 to-primary-light/10 border-2 border-primary/20 rounded-full shadow-lg">
              <div className="w-4 h-4 bg-primary rounded-full animate-pulse shadow-sm"></div>
              <span className="font-display text-primary font-bold text-lg">Development in Progress</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 section-animate">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Join the Revolution
              </h2>
              <p className="font-sans text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Be among the first to experience the future of finance in the UAE. 
                Get exclusive early access and help shape the product.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 backdrop-blur-sm animate-fadeInUp">
              <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="font-display block text-sm font-medium text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-display block text-sm font-medium text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="font-display block text-sm font-medium text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="font-display block text-sm font-medium text-gray-900 mb-2">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="font-display block text-sm font-medium text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tell us about your financial management needs or any questions you have..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                  Sorry, there was an error sending your message. Please try again or email us directly at ask@kasefra.io
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full gradient-bg text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:opacity-95 hover:shadow-2xl transition-all transform hover:scale-[1.02] hover:-translate-y-1 disabled:opacity-50 disabled:transform-none shadow-xl"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-8 animate-fadeIn">
              <div className="logo-placeholder text-2xl shadow-lg">K</div>
              <h3 className="font-display text-4xl font-bold gradient-text">Kasefra</h3>
            </div>
            <p className="font-sans text-gray-200 mb-10 text-xl leading-relaxed max-w-2xl mx-auto">
              The future of personal finance management in the UAE
            </p>
            <div className="flex justify-center gap-12 mb-12">
              <a href="#about" className="font-display text-gray-300 hover:text-white transition-all duration-300 text-lg hover:scale-105">About</a>
              <a href="#features" className="font-display text-gray-300 hover:text-white transition-all duration-300 text-lg hover:scale-105">Features</a>
              <a href="#contact" className="font-display text-gray-300 hover:text-white transition-all duration-300 text-lg hover:scale-105">Contact</a>
            </div>
            <div className="border-t border-gray-700 pt-10">
              <p className="text-gray-400 text-sm sm:text-lg">
                © 2025 Kasefra. All rights reserved. | Contact: <span className="text-primary font-semibold">ask@kasefra.io</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
