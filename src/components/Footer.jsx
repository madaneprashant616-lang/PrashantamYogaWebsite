import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Lotus, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Youtube, 
  Heart,
  Clock,
  Users,
  Award
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About Me', path: '/about' },
    { name: 'Classes & Programs', path: '/classes' },
    { name: 'Workshops', path: '/workshops' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ]

  const services = [
    'Stress Management Yoga',
    'Burnout Recovery',
    'Morning Yoga Sessions',
    'Yoga Nidra for Insomnia',
    'Personal Therapy Sessions',
    'Group Workshops'
  ]

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Students' },
    { icon: Award, value: '3+', label: 'Years Experience' },
    { icon: Clock, value: '1000+', label: 'Hours Taught' },
    { icon: Heart, value: '100%', label: 'Satisfaction Rate' }
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Stats Section */}
      <div className="border-b border-slate-700">
        <div className="container-custom py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-sage-600 rounded-full mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-sage-400 mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-sage-500 to-sage-700 rounded-full">
                <Lotus className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Prashantam Yoga</h3>
                <p className="text-sage-400 text-sm">Therapeutic Wellness</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transform your mental health through therapeutic yoga. Specializing in stress relief, 
              anxiety management, and burnout recovery for modern professionals.
            </p>
            
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-10 h-10 bg-slate-700 hover:bg-sage-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-10 h-10 bg-slate-700 hover:bg-sage-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-10 h-10 bg-slate-700 hover:bg-sage-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-sage-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-sage-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service} className="text-gray-300 flex items-center group">
                  <span className="w-2 h-2 bg-sage-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-sage-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Pune, Maharashtra</p>
                  <p className="text-gray-400 text-sm">Online & Offline Classes Available</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-sage-400 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-sage-400 transition-colors">
                  +91 98765 43210
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-sage-400 flex-shrink-0" />
                <a href="mailto:prashant@prashantamyoga.com" className="text-gray-300 hover:text-sage-400 transition-colors">
                  prashant@prashantamyoga.com
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8 p-6 bg-slate-800/50 rounded-lg border border-slate-700">
              <h5 className="text-white font-semibold mb-2">Stay Updated</h5>
              <p className="text-gray-400 text-sm mb-4">Get yoga tips & workshop updates</p>
              <form className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:outline-none focus:border-sage-500 transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="bg-sage-600 hover:bg-sage-700 text-white py-2 rounded-lg transition-colors font-medium"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Prashantam Yoga. All rights reserved. | Led by Prashant Madane
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-sage-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-sage-400 transition-colors">
                Terms of Service
              </Link>
              <div className="flex items-center space-x-1 text-gray-400">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>for wellness</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer