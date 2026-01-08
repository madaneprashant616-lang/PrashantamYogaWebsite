import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Phone, Clock } from 'lucide-react'
import { useState, useEffect } from 'react'

const WhatsAppButton = () => {
  const whatsappNumber = "919226943621" // Replace with actual WhatsApp number
  const message = "Hi! I'm interested in learning more about Prashantam Yoga classes and therapeutic yoga sessions. Can you please share more details?"
  const [isExpanded, setIsExpanded] = useState(false)
  const [showInitialMessage, setShowInitialMessage] = useState(false)

  // Show initial message after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInitialMessage(true)
      setTimeout(() => setShowInitialMessage(false), 5000) // Hide after 5 seconds
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  const quickActions = [
    {
      icon: MessageCircle,
      label: "Ask Questions",
      message: "Hi! I have some questions about your yoga classes. Can you help me?"
    },
    {
      icon: Phone,
      label: "Book Consultation",
      message: "Hi! I'd like to book a free consultation call to discuss which yoga program would be best for me."
    },
    {
      icon: Clock,
      label: "Class Timings",
      message: "Hi! Can you please share the current class timings and availability?"
    }
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Quick Action Menu */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="absolute bottom-20 right-0 space-y-3 w-64"
          >
            {quickActions.map((action, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => {
                  const encodedMessage = encodeURIComponent(action.message)
                  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
                  window.open(whatsappUrl, '_blank')
                  setIsExpanded(false)
                }}
                className="w-full bg-white hover:bg-green-50 border border-green-200 hover:border-green-300 rounded-lg p-3 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-3 group"
              >
                <div className="w-8 h-8 bg-green-100 group-hover:bg-green-200 rounded-full flex items-center justify-center">
                  <action.icon className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700 group-hover:text-green-700 font-medium text-sm">
                  {action.label}
                </span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Initial Welcome Message */}
      <AnimatePresence>
        {showInitialMessage && !isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="absolute bottom-20 right-0 w-72 bg-white rounded-2xl shadow-2xl border border-green-100 p-4"
          >
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  Welcome to Prashantam Yoga! 👋
                </h4>
                <p className="text-gray-600 text-xs mb-3">
                  Have questions about our therapeutic yoga classes? We're here to help!
                </p>
                <button
                  onClick={() => {
                    setShowInitialMessage(false)
                    setIsExpanded(true)
                  }}
                  className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1.5 rounded-full transition-colors"
                >
                  Chat with us
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main WhatsApp Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg flex items-center justify-center text-white transition-colors whatsapp-pulse group relative"
          aria-label="Chat on WhatsApp"
        >
          <motion.div
            animate={{ rotate: isExpanded ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <MessageCircle className="w-6 h-6" />
          </motion.div>

          {/* Tooltip for desktop */}
          <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none hidden lg:block">
            Chat with us on WhatsApp
            <div className="absolute top-1/2 right-0 transform translate-x-1 -translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
          </div>
        </motion.button>
      </motion.div>
    </div>
  )
}

export default WhatsAppButton