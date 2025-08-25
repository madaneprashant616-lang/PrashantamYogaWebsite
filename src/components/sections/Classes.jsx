import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { 
  Clock, 
  Users, 
  Calendar, 
  ArrowRight,
  Brain,
  Heart,
  Moon,
  Sun,
  Shield,
  Zap
} from 'lucide-react'

const Classes = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const classes = [
    {
      id: 1,
      icon: Brain,
      title: 'Stress Management Yoga',
      description: 'Learn powerful breathing techniques and gentle movements to reduce stress and calm your mind.',
      duration: '60 mins',
      format: 'Online & Offline',
      level: 'Beginner Friendly',
      benefits: ['Reduces cortisol levels', 'Improves focus', 'Better emotional regulation'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      id: 2,
      icon: Shield,
      title: 'Burnout Recovery Program',
      description: 'Comprehensive 8-week program designed specifically for professionals experiencing burnout.',
      duration: '90 mins',
      format: 'Group Sessions',
      level: 'All Levels',
      benefits: ['Restores energy', 'Builds resilience', 'Work-life balance'],
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    },
    {
      id: 3,
      icon: Sun,
      title: 'Morning Energy Yoga',
      description: 'Start your day with energizing sequences that boost vitality and mental clarity.',
      duration: '45 mins',
      format: 'Online Classes',
      level: 'Beginner to Intermediate',
      benefits: ['Increases energy', 'Enhances mood', 'Better productivity'],
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200'
    },
    {
      id: 4,
      icon: Moon,
      title: 'Yoga Nidra for Insomnia',
      description: 'Deep relaxation techniques to improve sleep quality and combat insomnia naturally.',
      duration: '45 mins',
      format: 'Evening Sessions',
      level: 'All Levels',
      benefits: ['Better sleep', 'Reduces anxiety', 'Deep relaxation'],
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      id: 5,
      icon: Heart,
      title: 'Mental Health Support',
      description: 'Therapeutic yoga sessions designed to support mental wellness and emotional healing.',
      duration: '75 mins',
      format: 'Private & Group',
      level: 'All Levels',
      benefits: ['Emotional stability', 'Reduces depression', 'Self-compassion'],
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200'
    },
    {
      id: 6,
      icon: Zap,
      title: 'Personal Therapy Sessions',
      description: 'One-on-one customized sessions tailored to your specific mental health needs.',
      duration: '90 mins',
      format: '1:1 Private',
      level: 'Personalized',
      benefits: ['Personalized approach', 'Faster progress', 'Individual attention'],
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
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

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="section-title">
            Our <span className="gradient-text">Classes & Programs</span>
          </h2>
          <p className="section-subtitle">
            Choose from our carefully designed therapeutic yoga programs, each targeting specific 
            mental health challenges. All classes are suitable for beginners and can be adapted to your needs.
          </p>
        </motion.div>

        {/* Classes Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {classes.map((classItem, index) => (
            <motion.div
              key={classItem.id}
              variants={cardVariants}
              className={`group relative ${classItem.bgColor} border ${classItem.borderColor} rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${classItem.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <classItem.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-sage-700 transition-colors">
                {classItem.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {classItem.description}
              </p>

              {/* Class Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2 text-gray-700">
                  <Clock className="w-4 h-4 text-sage-600" />
                  <span className="text-sm">{classItem.duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <Users className="w-4 h-4 text-sage-600" />
                  <span className="text-sm">{classItem.format}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <Calendar className="w-4 h-4 text-sage-600" />
                  <span className="text-sm">{classItem.level}</span>
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-3 text-sm">Key Benefits:</h4>
                <ul className="space-y-2">
                  {classItem.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-sage-500 rounded-full" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-white hover:bg-sage-50 text-sage-700 border border-sage-200 hover:border-sage-300 font-medium py-3 rounded-full transition-all duration-300 group">
                <span className="flex items-center justify-center space-x-2">
                  <span>Book Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-sage-500/5 to-sage-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center bg-gradient-to-r from-sage-600 to-sage-700 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Not Sure Which Program is Right for You?
          </h3>
          <p className="text-sage-100 text-lg mb-8 max-w-2xl mx-auto">
            Book a free consultation call to discuss your specific needs and find the perfect 
            therapeutic yoga program for your mental wellness journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/contact"
              className="bg-white text-sage-700 hover:bg-sage-50 font-medium px-8 py-4 rounded-full transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/classes"
              className="border-2 border-white text-white hover:bg-white hover:text-sage-700 font-medium px-8 py-4 rounded-full transition-all duration-300"
            >
              View All Programs
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Classes