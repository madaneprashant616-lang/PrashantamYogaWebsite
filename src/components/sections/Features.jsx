import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Brain, 
  Heart, 
  Shield, 
  Moon, 
  Zap, 
  Users,
  Clock,
  Trophy
} from 'lucide-react'

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const features = [
    {
      icon: Brain,
      title: 'Stress & Anxiety Relief',
      description: 'Specialized techniques to calm your mind, reduce stress hormones, and build mental resilience for daily challenges.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Heart,
      title: 'Burnout Recovery',
      description: 'Comprehensive programs designed to help professionals recover from burnout and restore work-life balance.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Shield,
      title: 'Mental Health Support',
      description: 'Therapeutic yoga approaches for depression, anxiety disorders, and overall mental wellness maintenance.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Moon,
      title: 'Better Sleep Quality',
      description: 'Yoga Nidra and relaxation techniques to improve sleep patterns and combat insomnia naturally.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Zap,
      title: 'Energy & Vitality',
      description: 'Morning yoga sessions to boost energy levels, enhance focus, and start your day with positivity.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Join a supportive community of like-minded individuals on their wellness journey together.',
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  const stats = [
    {
      icon: Trophy,
      value: '3+',
      label: 'Years Teaching',
      description: 'Professional experience'
    },
    {
      icon: Users,
      value: '500+',
      label: 'Students Helped',
      description: 'Transformed lives'
    },
    {
      icon: Clock,
      value: '1000+',
      label: 'Hours Practiced',
      description: 'Teaching & learning'
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
            Why Choose <span className="gradient-text">Therapeutic Yoga</span>?
          </h2>
          <p className="section-subtitle">
            Discover the transformative power of yoga designed specifically for mental health and wellness. 
            Our approach combines ancient wisdom with modern understanding of stress and anxiety management.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5
              }}
              className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 card-tilt cursor-pointer"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-sage-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sage-500/5 to-sage-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-sage-600 to-sage-700 rounded-3xl p-8 lg:p-16 text-white">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Trusted by Hundreds of Students
              </h3>
              <p className="text-sage-100 text-lg max-w-2xl mx-auto">
                Join a community that has found peace, balance, and mental wellness through our therapeutic yoga programs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-xl font-semibold mb-1">{stat.label}</div>
                  <div className="text-sage-200 text-sm">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-sage-200 rounded-full opacity-20 animate-float" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-sage-300 rounded-full opacity-10 animate-pulse-slow" />
        </motion.div>
      </div>
    </section>
  )
}

export default Features