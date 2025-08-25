import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Software Engineer',
      text: "Prashant's therapeutic yoga sessions completely transformed my relationship with stress. After 6 months of burnout recovery classes, I feel like a new person.",
      rating: 5,
      program: 'Burnout Recovery Program'
    },
    {
      name: 'Rahul Patel',
      role: 'Marketing Manager',
      text: "I was skeptical about yoga helping with my anxiety, but Prashant's approach is different. My sleep has improved dramatically.",
      rating: 5,
      program: 'Mental Health Support'
    },
    {
      name: 'Anjali Desai',
      role: 'Doctor',
      text: "As a healthcare worker, the pandemic took a huge toll. Prashant's morning yoga sessions helped me rebuild my inner strength.",
      rating: 5,
      program: 'Morning Energy Yoga'
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
            Student <span className="gradient-text">Success Stories</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Real transformations from real people who found healing through therapeutic yoga.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-sage-300 mb-4" />
                
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-sage-600 text-sm mt-1">{testimonial.program}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-sage-600 to-sage-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-sage-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of students who have transformed their lives through therapeutic yoga.
          </p>
          <Link
            to="/contact"
            className="bg-white text-sage-700 hover:bg-sage-50 font-medium px-8 py-4 rounded-full transition-all duration-300 inline-flex items-center space-x-2"
          >
            <span>Start Your Journey</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </motion.div>
  )
}

export default Testimonials