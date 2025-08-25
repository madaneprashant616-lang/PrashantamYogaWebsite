import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Hero from '../components/sections/Hero'
import Features from '../components/sections/Features'
import About from '../components/sections/About'
import Classes from '../components/sections/Classes'
import Testimonials from '../components/sections/Testimonials'
import Blog from '../components/sections/Blog'
import Newsletter from '../components/sections/Newsletter'

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="page-transition"
    >
      <Hero />
      <Features />
      <About />
      <Classes />
      <Testimonials />
      <Blog />
      <Newsletter />
    </motion.div>
  )
}

export default Home