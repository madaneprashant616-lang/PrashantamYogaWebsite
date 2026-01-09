import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Play, ArrowRight, Star, Heart, Shield } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const floatingElements = [
    { icon: Heart, color: 'text-pink-500', delay: 0, position: 'top-20 right-10' },
    { icon: Star, color: 'text-yellow-500', delay: 1, position: 'top-32 left-10' },
    { icon: Shield, color: 'text-blue-500', delay: 2, position: 'bottom-32 right-20' }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.png"
          alt="Yoga Hall"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/90" />
      </div>

      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: element.delay, duration: 0.6 }}
          className={`absolute ${element.position} hidden lg:block`}
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`w-16 h-16 ${element.color} opacity-60`}
          >
            <element.icon className="w-full h-full" />
          </motion.div>
        </motion.div>
      ))}

      <div className="container-custom relative z-10 pt-20 md:pt-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-6 py-2 rounded-full text-sm font-medium mb-8"
          >
            <Star className="w-4 h-4" />
            <span>Certified Therapeutic Yoga Teacher</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="block text-gray-900">Nurture Mind and Body</span>
            <span className="block gradient-animated"> Traditional and</span>
            <span className="block text-gray-900">Therapeutic Yoga.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Transform your physical and mental health through therapeutic yoga. Specialized sessions for stress,
            anxiety, burnout recovery, and holistic wellness with yoga Teacher{' '}
            <span className="font-semibold text-blue-700">Prashant Madane</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
          >
            <Link
              to="/contact"
              className="btn-primary group flex items-center space-x-2"
            >
              <span>Join a Class</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/about"
              className="btn-secondary group flex items-center space-x-2"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Watch Introduction</span>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700 mb-2">1000+</div>
              <p className="text-gray-600">Students Transformed</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700 mb-2">5+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700 mb-2">100%</div>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-blue-300 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-blue-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

      {/* Yoga Pose Illustration */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute right-0 bottom-0 hidden xl:block opacity-20"
      >
        <div className="w-80 h-80">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              d="M100 20 Q120 40 140 60 Q120 80 100 100 Q80 80 60 60 Q80 40 100 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-blue-400"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero