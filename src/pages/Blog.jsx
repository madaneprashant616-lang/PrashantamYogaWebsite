import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, FileText, Play, BookOpen } from 'lucide-react'

import { blogPosts } from '../data/blogPosts'

const Blog = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-transition"
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/dbovfxnog/image/upload/f_auto,q_auto,w_1920/v1768030270/WhatsApp_Image_2026-01-08_at_16.11.00_1_xkqa9w.jpg"
            alt="Blog Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-slate-900/80"></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-md">
            Yoga <span className="text-blue-200">Blog & Resources</span>
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-12 drop-shadow">
            Practical insights, guided practices, and expert tips to support your mental wellness journey.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                {/* Image header with overlay */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />

                  {/* Title & Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium bg-white/20 backdrop-blur-sm border border-white/20 px-2 py-1 rounded-full text-white">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-300 flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold leading-tight drop-shadow-md text-white">
                      {post.title}
                    </h3>
                  </div>
                </div>

                {/* Description Body */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link
                    to={`/blog/${post.id}`}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center space-x-1"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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