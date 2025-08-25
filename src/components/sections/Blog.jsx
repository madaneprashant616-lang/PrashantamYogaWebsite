import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  BookOpen,
  Play,
  FileText
} from 'lucide-react'

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const blogPosts = [
    {
      id: 1,
      type: 'article',
      icon: FileText,
      title: '5 Breathing Techniques to Instantly Reduce Stress',
      excerpt: 'Discover powerful pranayama techniques that you can use anywhere, anytime to calm your nervous system and reduce stress hormones naturally.',
      author: 'Prashant Madane',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Stress Management',
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 2,
      type: 'video',
      icon: Play,
      title: 'Morning Yoga Routine for Mental Clarity',
      excerpt: 'Start your day with this 15-minute energizing sequence designed to boost mental clarity, improve focus, and set positive intentions.',
      author: 'Prashant Madane',
      date: '2024-01-12',
      readTime: '15 min video',
      category: 'Morning Practice',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 3,
      type: 'article',
      icon: FileText,
      title: 'Understanding Burnout: Signs, Symptoms & Solutions',
      excerpt: 'Learn to recognize the early warning signs of burnout and discover how therapeutic yoga can help restore your energy and enthusiasm for life.',
      author: 'Prashant Madane',
      date: '2024-01-10',
      readTime: '8 min read',
      category: 'Burnout Recovery',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 4,
      type: 'guide',
      icon: BookOpen,
      title: 'Complete Guide to Yoga Nidra for Better Sleep',
      excerpt: 'Everything you need to know about yoga nidra - the powerful practice that can transform your sleep quality and help with insomnia.',
      author: 'Prashant Madane',
      date: '2024-01-08',
      readTime: '12 min read',
      category: 'Sleep & Recovery',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 5,
      type: 'article',
      icon: FileText,
      title: 'How Yoga Rewires Your Brain for Happiness',
      excerpt: 'Explore the fascinating science behind how regular yoga practice literally changes your brain structure to promote mental wellness and emotional resilience.',
      author: 'Prashant Madane',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Mental Health',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 6,
      type: 'video',
      icon: Play,
      title: '10-Minute Desk Yoga for Office Workers',
      excerpt: 'Perfect for busy professionals - simple yoga stretches you can do right at your desk to relieve tension and reduce work-related stress.',
      author: 'Prashant Madane',
      date: '2024-01-03',
      readTime: '10 min video',
      category: 'Workplace Wellness',
      image: '/api/placeholder/400/250',
      featured: false
    }
  ]

  const categories = [
    'All Posts',
    'Stress Management', 
    'Burnout Recovery',
    'Sleep & Recovery',
    'Mental Health',
    'Morning Practice',
    'Workplace Wellness'
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
    <section className="section-padding bg-gray-50" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="section-title">
            Yoga <span className="gradient-text">Wisdom & Tips</span>
          </h2>
          <p className="section-subtitle">
            Practical insights, guided practices, and expert tips to support your mental wellness 
            journey. Learn from articles, videos, and resources designed for modern life.
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          {blogPosts
            .filter(post => post.featured)
            .map(post => (
              <div key={post.id} className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-[16/10] bg-gradient-to-br from-sage-200 to-sage-400">
                      {/* Placeholder for blog post image */}
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-sage-300 to-sage-500">
                        <div className="text-center text-white">
                          <post.icon className="w-16 h-16 mx-auto mb-4 opacity-75" />
                          <p className="text-sm opacity-75">Featured Article</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1 bg-sage-100 text-sage-800 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center space-x-4 text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">Jan 15, 2024</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Link
                      to={`/blog/${post.id}`}
                      className="btn-primary group inline-flex items-center space-x-2 w-fit"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {blogPosts
            .filter(post => !post.featured)
            .slice(0, 6)
            .map((post, index) => (
              <motion.article
                key={post.id}
                variants={cardVariants}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <div className="aspect-[16/10] bg-gradient-to-br from-sage-100 to-sage-200">
                    {/* Placeholder for blog post image */}
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-sage-200 to-sage-300">
                      <post.icon className="w-10 h-10 text-sage-600 opacity-75" />
                    </div>
                  </div>
                  
                  {/* Type Badge */}
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      post.type === 'video' 
                        ? 'bg-red-100 text-red-800' 
                        : post.type === 'guide'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {post.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-flex items-center px-2 py-1 bg-sage-50 text-sage-700 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-sage-700 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-gray-500 text-xs mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>Jan 15</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-sage-600 hover:text-sage-700 font-medium text-sm group inline-flex items-center space-x-1"
                  >
                    <span>Read {post.type === 'video' ? 'Watch' : 'More'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-sage-600 to-sage-700 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Never Miss a Wellness Tip
            </h3>
            <p className="text-sage-100 text-lg mb-8 max-w-2xl mx-auto">
              Get weekly insights, guided practices, and exclusive content delivered to your inbox. 
              Join our community of wellness seekers.
            </p>
            
            <div className="flex flex-col sm:flex-row max-w-md mx-auto space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-sage-700 hover:bg-sage-50 font-medium px-8 py-3 rounded-full transition-colors">
                Subscribe
              </button>
            </div>
            
            <p className="text-sage-200 text-sm mt-4">
              No spam, unsubscribe anytime. Join 5000+ subscribers.
            </p>
          </div>
          
          <div className="mt-8">
            <Link
              to="/blog"
              className="btn-outline inline-flex items-center space-x-2"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog