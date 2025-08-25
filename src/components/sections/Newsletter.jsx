import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Gift, Star, CheckCircle } from 'lucide-react'
import { useState } from 'react'

const Newsletter = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const benefits = [
    {
      icon: Gift,
      title: 'Free Yoga Guide',
      description: 'Get our 20-page guide to starting your therapeutic yoga journey'
    },
    {
      icon: Mail,
      title: 'Weekly Tips',
      description: 'Practical wellness advice delivered to your inbox every Tuesday'
    },
    {
      icon: Star,
      title: 'Exclusive Content',
      description: 'Early access to workshops, classes, and special programs'
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter signup logic here
    console.log('Newsletter signup:', email)
    setIsSubscribed(true)
    
    // Reset after 3 seconds for demo
    setTimeout(() => {
      setIsSubscribed(false)
      setEmail('')
    }, 3000)
  }

  if (isSubscribed) {
    return (
      <section className="section-padding bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container-custom">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to the Community! 🎉
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for subscribing! Check your email for your free therapeutic yoga guide. 
              We're excited to support you on your wellness journey.
            </p>
            <div className="flex items-center justify-center space-x-8 text-green-600">
              <div className="flex items-center space-x-2">
                <Gift className="w-6 h-6" />
                <span className="font-medium">Free Guide Sent</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-6 h-6" />
                <span className="font-medium">Weekly Tips Activated</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-gradient-to-br from-sage-600 via-sage-700 to-slate-800" ref={ref}>
      <div className="container-custom">
        <div className="relative">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float" />
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse-slow" />
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <div className="mb-8">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Start Your <span className="text-yellow-300">Healing Journey</span> Today
                </h2>
                <p className="text-xl text-sage-100 leading-relaxed mb-8">
                  Join 5,000+ people who receive our weekly wellness insights, exclusive yoga practices, 
                  and mental health tips designed for modern life.
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-yellow-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-sage-200">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Proof */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="mt-12 p-6 bg-white/10 rounded-2xl backdrop-blur-sm"
              >
                <div className="flex items-center space-x-4 mb-4">
                  {/* Avatar Stack */}
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full border-2 border-white flex items-center justify-center"
                      >
                        <span className="text-white font-bold text-sm">
                          {String.fromCharCode(65 + i)}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="text-white font-semibold">5,000+ subscribers</div>
                    <div className="text-sage-200 text-sm">Join our wellness community</div>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sage-200 text-sm ml-2">4.9/5 average rating</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Form Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-sage-500 to-sage-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Get Your Free Yoga Guide
                  </h3>
                  <p className="text-gray-600">
                    "10 Simple Techniques to Reduce Stress Naturally" - A 20-page comprehensive guide
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name (Optional)
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your first name"
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-700 hover:to-sage-800 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Get My Free Guide + Weekly Tips
                  </motion.button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-gray-500 text-sm">
                    No spam, ever. Unsubscribe with one click. We respect your privacy.
                  </p>
                </div>

                {/* Trust Badges */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center space-x-6 text-gray-400 text-sm">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>GDPR Compliant</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>SSL Secured</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse-slow" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-float" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter