import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  CheckCircle,
  Calendar,
  Users,
  Heart
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', phone: '', program: '', message: '' })
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 98765 43210',
      link: 'tel:+919876543210'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'prashant@prashantamyoga.com',
      link: 'mailto:prashant@prashantamyoga.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Pune, Maharashtra',
      subtitle: 'Online & Offline Classes'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Mon - Sat: 6 AM - 8 PM',
      subtitle: 'Sunday: 7 AM - 12 PM'
    }
  ]

  const programs = [
    'Stress Management Yoga',
    'Burnout Recovery Program',
    'Morning Energy Yoga',
    'Yoga Nidra for Insomnia',
    'Mental Health Support',
    'Personal Therapy Sessions',
    'Group Workshops'
  ]

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50"
      >
        <div className="text-center p-8">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-10 h-10 text-white" />
          </motion.div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Thank You! 🙏
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Your message has been received. I'll get back to you within 24 hours 
            to discuss how therapeutic yoga can support your wellness journey.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="flex items-center space-x-2 text-green-600">
              <MessageCircle className="w-5 h-5" />
              <span>Response within 24 hours</span>
            </div>
            <div className="flex items-center space-x-2 text-green-600">
              <Heart className="w-5 h-5" />
              <span>Personalized consultation</span>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-transition"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-sage-50 to-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Let's Start Your <span className="gradient-text">Healing Journey</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Ready to transform your relationship with stress and discover inner peace? 
            Get in touch for a personalized consultation.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Book Your Free Consultation
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and I'll get back to you within 24 hours 
                  to discuss your needs and find the perfect program for you.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-500 transition-all"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-500 transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-500 transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-2">
                      Interested Program
                    </label>
                    <select
                      id="program"
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-500 transition-all"
                    >
                      <option value="">Select a program</option>
                      {programs.map((program, index) => (
                        <option key={index} value={program}>{program}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Tell me about your challenges *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-500 transition-all"
                      placeholder="Please share what you're struggling with (stress, anxiety, burnout, sleep issues, etc.) so I can better understand how to help you..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-700 hover:to-sage-800 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Send Message & Book Consultation
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                  >
                    <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center mb-4">
                      <info.icon className="w-6 h-6 text-sage-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-sage-600 hover:text-sage-700 font-medium transition-colors"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-gray-700 font-medium">{info.details}</p>
                    )}
                    {info.subtitle && (
                      <p className="text-gray-500 text-sm mt-1">{info.subtitle}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* WhatsApp Contact */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-8 rounded-2xl text-white">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Quick WhatsApp Chat</h3>
                    <p className="text-green-100">Get instant responses</p>
                  </div>
                </div>
                <p className="text-green-100 mb-6">
                  For immediate questions or to schedule a class, message me directly on WhatsApp. 
                  I typically respond within a few hours.
                </p>
                <a
                  href="https://wa.me/919876543210?text=Hi! I'm interested in learning more about therapeutic yoga classes."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-white text-green-600 hover:bg-green-50 font-medium px-6 py-3 rounded-full transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Booking Calendar */}
              <div className="bg-sage-50 p-8 rounded-2xl border border-sage-100">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-sage-200 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-sage-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Online Booking</h3>
                    <p className="text-gray-600">Schedule directly</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Book your classes, workshops, or consultation calls directly through our 
                  integrated booking system powered by Google Calendar.
                </p>
                <button className="inline-flex items-center space-x-2 bg-sage-600 hover:bg-sage-700 text-white font-medium px-6 py-3 rounded-full transition-colors">
                  <Calendar className="w-5 h-5" />
                  <span>Book Appointment</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Here are some common questions about getting started with therapeutic yoga.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "Do I need any prior yoga experience?",
                a: "Not at all! Our therapeutic yoga programs are designed for complete beginners. We focus on gentle, accessible practices that anyone can do regardless of fitness level or flexibility."
              },
              {
                q: "How quickly will I see results?",
                a: "Many students notice improvements in stress levels and sleep quality within the first few weeks. Significant changes in anxiety and overall well-being typically occur within 2-3 months of consistent practice."
              },
              {
                q: "Are online classes as effective as in-person sessions?",
                a: "Yes! Our online sessions are designed to be just as effective, with personalized attention, clear instruction, and the convenience of practicing from your comfortable space."
              },
              {
                q: "What if I have physical limitations or injuries?",
                a: "Therapeutic yoga is highly adaptable. I work with students with various physical limitations and can modify every practice to ensure it's safe and beneficial for your specific needs."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Contact