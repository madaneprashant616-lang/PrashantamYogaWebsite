import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Users, Calendar } from 'lucide-react'

const Classes = () => {
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
            Therapeutic Yoga <span className="gradient-text">Classes & Programs</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Discover our comprehensive range of therapeutic yoga programs designed specifically 
            for stress relief, anxiety management, and mental wellness.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/contact" className="btn-primary">
              Book a Class
            </Link>
            <button className="btn-outline">
              Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <div className="bg-gradient-to-r from-sage-100 to-sage-200 rounded-3xl p-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Detailed Classes Page Coming Soon
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're crafting a comprehensive classes page with detailed program information, 
              schedules, and booking functionality.
            </p>
            <Link
              to="/"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>View Classes Preview on Home</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Classes