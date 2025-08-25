import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Software Engineer',
      age: '29 years old',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: "Prashant's therapeutic yoga sessions completely transformed my relationship with stress. After 6 months of burnout recovery classes, I feel like a new person. The breathing techniques he taught me have become my daily superpower.",
      challenge: 'Severe Burnout',
      outcome: 'Stress-free & Energetic',
      program: 'Burnout Recovery Program'
    },
    {
      id: 2,
      name: 'Rahul Patel',
      role: 'Marketing Manager',
      age: '35 years old',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: "I was skeptical about yoga helping with my anxiety and depression, but Prashant's approach is different. It's not just physical - it's deeply therapeutic. My sleep has improved dramatically, and I haven't had a panic attack in months.",
      challenge: 'Anxiety & Depression',
      outcome: 'Calm & Confident',
      program: 'Mental Health Support'
    },
    {
      id: 3,
      name: 'Anjali Desai',
      role: 'Doctor',
      age: '32 years old',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: "As a healthcare worker, the pandemic took a huge toll on my mental health. Prashant's morning yoga sessions and personalized guidance helped me rebuild my inner strength. The community support is incredible too.",
      challenge: 'Work Stress & Fatigue',
      outcome: 'Balanced & Resilient',
      program: 'Morning Energy Yoga'
    },
    {
      id: 4,
      name: 'Vikram Singh',
      role: 'Business Owner',
      age: '42 years old',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: "I used to survive on 4 hours of sleep and constant stress. Prashant's Yoga Nidra sessions changed everything. I now sleep 7-8 hours naturally and wake up refreshed. My business decisions are clearer, and my family life is so much better.",
      challenge: 'Insomnia & High Stress',
      outcome: 'Restful Sleep & Clarity',
      program: 'Yoga Nidra for Insomnia'
    },
    {
      id: 5,
      name: 'Meera Joshi',
      role: 'HR Professional',
      age: '28 years old',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: "The personal therapy sessions with Prashant helped me work through years of accumulated stress and self-doubt. His compassionate approach and customized sequences gave me tools I use every day. I feel emotionally stronger than ever.",
      challenge: 'Self-doubt & Emotional Issues',
      outcome: 'Self-confident & Peaceful',
      program: 'Personal Therapy Sessions'
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentTestimonial]

  return (
    <section className="section-padding bg-gradient-to-br from-sage-50 via-white to-warm-50" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="section-title">
            Real Stories of <span className="gradient-text">Transformation</span>
          </h2>
          <p className="section-subtitle">
            Discover how therapeutic yoga has helped hundreds of people overcome stress, anxiety, 
            burnout, and depression. These are real stories from real people who found healing and peace.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="testimonial-card rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            {/* Background Quote */}
            <div className="absolute top-8 left-8 opacity-10">
              <Quote className="w-24 h-24 text-sage-600" />
            </div>

            {/* Navigation */}
            <div className="absolute top-8 right-8 flex space-x-2">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5 text-sage-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-300"
              >
                <ArrowRight className="w-5 h-5 text-sage-600" />
              </button>
            </div>

            <div className="relative z-10">
              {/* Rating Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed text-center mb-12 font-medium">
                "{current.text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-12">
                {/* Profile */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-sage-400 to-sage-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {current.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{current.name}</h4>
                    <p className="text-gray-600">{current.role} • {current.age}</p>
                  </div>
                </div>

                {/* Transformation */}
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
                  <div className="text-center">
                    <div className="text-sm font-semibold text-red-600 mb-1">Challenge</div>
                    <div className="text-gray-700">{current.challenge}</div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-sage-500 transform rotate-90 sm:rotate-0" />
                  <div className="text-center">
                    <div className="text-sm font-semibold text-green-600 mb-1">Outcome</div>
                    <div className="text-gray-700">{current.outcome}</div>
                  </div>
                </div>
              </div>

              {/* Program Badge */}
              <div className="text-center mt-8">
                <span className="inline-flex items-center px-4 py-2 bg-sage-100 text-sage-800 rounded-full text-sm font-medium">
                  Program: {current.program}
                </span>
              </div>
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-sage-600 w-8' 
                    : 'bg-sage-300 hover:bg-sage-400'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-sage-600 mb-2">98%</div>
            <div className="text-gray-700">Success Rate</div>
            <div className="text-sm text-gray-500 mt-1">Students report significant improvement</div>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-sage-600 mb-2">500+</div>
            <div className="text-gray-700">Lives Transformed</div>
            <div className="text-sm text-gray-500 mt-1">Students have found peace & healing</div>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-sage-600 mb-2">4.9</div>
            <div className="text-gray-700">Average Rating</div>
            <div className="text-sm text-gray-500 mt-1">Based on 500+ student reviews</div>
          </div>
        </motion.div>

        {/* Video Testimonial CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-sage-600 to-sage-700 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Want to Share Your Story?
            </h3>
            <p className="text-sage-100 text-lg mb-8 max-w-2xl mx-auto">
              We'd love to hear about your transformation journey. Your story could inspire 
              others to start their healing path with therapeutic yoga.
            </p>
            <button className="bg-white text-sage-700 hover:bg-sage-50 font-medium px-8 py-4 rounded-full transition-all duration-300">
              Share Your Testimonial
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials