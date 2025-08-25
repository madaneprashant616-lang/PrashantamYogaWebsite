import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, MapPin, Users } from 'lucide-react'

const Workshops = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-transition"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-warm-50 to-sage-50">
        <div className="container-custom text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Workshops & <span className="gradient-text">Retreats</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Join our specialized workshops and retreats for deeper healing, 
            community connection, and transformative experiences.
          </p>
        </div>
      </section>

      {/* Featured Workshop */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-sage-600 to-sage-700 rounded-3xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">
              3-Day Online Burnout Recovery Workshop
            </h2>
            <p className="text-xl text-sage-100 mb-8 max-w-2xl mx-auto">
              A comprehensive program designed to help professionals recover from burnout 
              and build sustainable wellness practices.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex items-center justify-center space-x-2">
                <Calendar className="w-6 h-6" />
                <span>Coming March 2024</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-6 h-6" />
                <span>Online via Zoom</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Users className="w-6 h-6" />
                <span>Limited to 20 participants</span>
              </div>
            </div>
            
            <Link
              to="/contact"
              className="bg-white text-sage-700 hover:bg-sage-50 font-medium px-8 py-4 rounded-full transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Join Waitlist</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            More Workshops Coming Soon
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're planning nature retreats, intensive workshops, and community events. 
            Stay tuned for updates!
          </p>
          <Link to="/contact" className="btn-primary">
            Get Notified
          </Link>
        </div>
      </section>
    </motion.div>
  )
}

export default Workshops