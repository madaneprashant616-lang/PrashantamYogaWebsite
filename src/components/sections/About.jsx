import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { 
  Award, 
  BookOpen, 
  Heart, 
  Users, 
  ArrowRight,
  CheckCircle,
  Calendar,
  Target
} from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [imageLoaded, setImageLoaded] = useState(false)

  const achievements = [
    {
      icon: Award,
      title: 'Certified Yoga Teacher',
      description: 'Professional certification in therapeutic yoga'
    },
    {
      icon: Calendar,
      title: '5+ Years Experience',
      description: 'Dedicated to helping people heal through yoga'
    },
    {
      icon: Users,
      title: '500+ Students',
      description: 'Lives transformed through therapeutic practice'
    },
    {
      icon: Target,
      title: 'Specialized Training',
      description: 'Focus on holistic wellness and physical and mental health'
    }
  ]

  const specializations = [
    'Holistic Wellness Programs',
    'Yoga for Weight Management',
    'Flexibility & Joint Health',
    'Stress Management & Relief',
    'Mental Health Wellness',
    'Corporate Wellness Sessions'
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-sage-50 to-white" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Header */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-sage-100 text-sage-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <Heart className="w-4 h-4" />
                <span>Meet Your Instructor</span>
              </motion.div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Hi, I'm <span className="gradient-text">Prashant Madane</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                At 28, I've dedicated my life to helping people find peace and healing through therapeutic yoga. 
                My journey began with my own struggles with stress and burnout, which led me to discover the 
                transformative power of yoga for physical and mental health.
              </p>
            </div>

            {/* Story */}
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                After experiencing the challenges of modern professional life firsthand, I realized that 
                traditional fitness approaches weren't addressing the root cause of stress and mental fatigue. 
                This led me to specialize in therapeutic yoga - a holistic approach that treats both body and mind.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Over the past 5+ years, I've had the privilege of guiding over 500 students through their 
                healing journeys, helping them overcome stress, anxiety, burnout, and depression through 
                carefully designed yoga programs.
              </p>
            </div>

            {/* Specializations */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">My Specializations:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {specializations.map((specialization, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-sage-600 flex-shrink-0" />
                    <span className="text-gray-700">{specialization}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Link
                to="/about"
                className="btn-primary group flex items-center justify-center space-x-2"
              >
                <span>Learn More About Me</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/contact"
                className="btn-outline flex items-center justify-center"
              >
                Book a Session
              </Link>
            </motion.div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative z-10">
              <div className="aspect-[4/5] bg-gradient-to-br from-sage-200 via-sage-300 to-sage-400 rounded-3xl overflow-hidden shadow-2xl relative">
                {/* Background (visible while image loads) */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-sage-400 to-sage-600">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-12 h-12" />
                    </div>
                    <p className="text-sm opacity-75">Prashant Madane</p>
                    <p className="text-xs opacity-60">Certified Yoga Instructor</p>
                  </div>
                </div>

                {/* Lazy-loaded image that fades in when ready */}
                <img
                  src="/images/profile/prashant_madane_profile_image.jpeg"
                  alt="Prashant Madane"
                  loading="lazy"
                  onLoad={() => setImageLoaded(true)}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                />
              </div>

              {/* Floating Achievement Cards */}
              <div className="absolute -top-6 -right-6 z-20">
                <motion.div
                  initial={{ scale: 0, rotate: -10 }}
                  animate={inView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="bg-white p-4 rounded-2xl shadow-xl border border-sage-100"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-sage-600" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">Certified</div>
                      <div className="text-xs text-gray-600">Yoga Teacher</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="absolute -bottom-6 -left-6 z-20">
                <motion.div
                  initial={{ scale: 0, rotate: 10 }}
                  animate={inView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="bg-white p-4 rounded-2xl shadow-xl border border-sage-100"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">500+</div>
                      <div className="text-xs text-gray-600">Students</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-sage-200 rounded-full opacity-20 animate-pulse-slow" />
            <div className="absolute bottom-10 left-10 w-20 h-20 bg-warm-200 rounded-full opacity-30 animate-float" />
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 1.2 + index * 0.1 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-sage-500 to-sage-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h3>
              <p className="text-gray-600 text-sm">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About