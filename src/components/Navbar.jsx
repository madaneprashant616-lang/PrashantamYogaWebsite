import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Flower2 } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'navbar-blur shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
  whileHover={{ rotate: 360 }}
  transition={{ duration: 0.6 }}
  className="h-12 w-12 md:h-14 md:w-14
             overflow-hidden rounded-full
             bg-gradient-to-br from-blue-500 to-blue-700
             shadow-lg flex items-center justify-center"
>
  <img
    src="/prashantamyoga_logo.jpeg"
    alt="Prashantam Yoga – Therapeutic Yoga for Mental Health"
    title="Prashantam Yoga"
    className="h-full w-full object-cover scale-[1.18]"
    loading="eager"
  />
</motion.div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">Prashantam Yoga Classes</h1>
              <p className="text-sm text-gray-600 -mt-1">Mind Body Harmony</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to={item.path}
                  className={`relative font-medium transition-all duration-300 px-3 py-2 rounded-lg ${
                    isActive(item.path) 
                      ? 'text-blue-700 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            <Link
              to="/contact"
              className="btn-primary"
            >
              Join a Class
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100"
          >
            <div className="container-custom py-4 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 font-medium transition-colors ${
                      isActive(item.path) 
                        ? 'text-blue-700 border-l-4 border-blue-600 pl-4' 
                        : 'text-gray-700 hover:text-blue-600 pl-4'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="pt-4 pl-4"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary inline-block"
                >
                  Join a Class
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar