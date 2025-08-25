import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, FileText, Play, BookOpen } from 'lucide-react'

const Blog = () => {
  const posts = [
    {
      id: 1,
      type: 'article',
      icon: FileText,
      title: '5 Breathing Techniques to Instantly Reduce Stress',
      excerpt: 'Discover powerful pranayama techniques that you can use anywhere, anytime to calm your nervous system.',
      category: 'Stress Management',
      readTime: '5 min read',
      featured: true
    },
    {
      id: 2,
      type: 'video',
      icon: Play,
      title: 'Morning Yoga Routine for Mental Clarity',
      excerpt: 'Start your day with this 15-minute energizing sequence designed to boost mental clarity.',
      category: 'Morning Practice',
      readTime: '15 min video'
    },
    {
      id: 3,
      type: 'guide',
      icon: BookOpen,
      title: 'Complete Guide to Yoga Nidra for Better Sleep',
      excerpt: 'Everything you need to know about yoga nidra and how it can transform your sleep quality.',
      category: 'Sleep & Recovery',
      readTime: '12 min read'
    }
  ]

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
            Yoga <span className="gradient-text">Blog & Resources</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Practical insights, guided practices, and expert tips to support your mental wellness journey.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-sage-200 to-sage-300 flex items-center justify-center">
                  <post.icon className="w-12 h-12 text-sage-600" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-sage-600 bg-sage-50 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-sage-600 hover:text-sage-700 font-medium text-sm inline-flex items-center space-x-1"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            More Content Coming Soon
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're working on comprehensive articles, video tutorials, and resources 
            to support your wellness journey.
          </p>
          <Link to="/contact" className="btn-primary">
            Get Notified
          </Link>
        </div>
      </section>
    </motion.div>
  )
}

export default Blog