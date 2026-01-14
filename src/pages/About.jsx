import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import {
  Award,
  BookOpen,
  Heart,
  Users,
  Calendar,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Brain
} from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const journey = [
    {
      year: '2020',
      title: 'The Awakening',
      description: 'After experiencing severe burnout in the corporate world, I discovered yoga as a path to healing and self-discovery.'
    },
    {
      year: '2021',
      title: 'Certification Journey',
      description: 'Completed comprehensive yoga teacher training with specialization in therapeutic and mental health applications.'
    },
    {
      year: '2022',
      title: 'First Students',
      description: 'Started teaching small groups, focusing on stress relief and anxiety management for working professionals.'
    },
    {
      year: '2023',
      title: 'Prashantam Yoga Born',
      description: 'Launched dedicated practice focusing exclusively on therapeutic yoga for mental health and wellness.'
    },
    {
      year: '2024',
      title: 'Community Growth',
      description: 'Now serving 500+ students with specialized programs for stress, anxiety, burnout, and depression recovery.'
    }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'Every student receives personalized attention and support on their healing journey.'
    },
    {
      icon: Brain,
      title: 'Science-Based Approach',
      description: 'Combining ancient yoga wisdom with modern understanding of mental health and neuroscience.'
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Creating safe, supportive spaces where people can heal together and support each other.'
    },
    {
      icon: Target,
      title: 'Results-Oriented',
      description: 'Focused on practical, measurable improvements in mental health and quality of life.'
    }
  ]

  const certifications = [
    '500-Hour Yoga Teacher Training (RYT-500)',
    'Therapeutic Yoga Specialization',
    'Trauma-Informed Yoga Certification',
    'Mental Health First Aid Certified',
    'Yoga Nidra Teacher Training',
    'Breathwork & Pranayama Specialist'
  ]

  const stats = [
    { number: '500+', label: 'Students Taught', icon: Users },
    { number: '3+', label: 'Years Teaching', icon: Calendar },
    { number: '1000+', label: 'Hours Experience', icon: Clock },
    { number: '98%', label: 'Success Rate', icon: Star }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-transition"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-sage-50 via-white to-warm-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Meet <span className="gradient-text">Prashant Madane</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A passionate therapeutic yoga teacher dedicated to helping people overcome stress,
                anxiety, and burnout through the healing power of yoga and mindfulness.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/contact" className="btn-primary">
                  Book a Session
                </Link>
                <Link to="/classes" className="btn-outline">
                  View Programs
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://res.cloudinary.com/dbovfxnog/image/upload/v1768030267/WhatsApp_Image_2026-01-08_at_16.11.04_2_hctltc.jpg"
                  alt="Prashant Madane - Therapeutic Yoga Teacher"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stats Cards */}
              <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-sage-600">1000+</div>
                  <div className="text-sm text-gray-600">Students</div>
                </div>
              </div>

              <div className="absolute -top-8 -right-8 bg-white p-4 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-sage-600">5+</div>
                  <div className="text-sm text-gray-600">Years</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white" ref={ref}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">My Story</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                My journey to becoming a therapeutic yoga teacher wasn't planned – it was born from necessity.
                At 25, I was climbing the corporate ladder, working 12-hour days, and believing that stress
                and anxiety were just the price of success.
              </p>
              <p>
                Then burnout hit me like a wall. I was exhausted, anxious, couldn't sleep, and felt disconnected
                from everything that mattered. Traditional approaches weren't helping, and I felt lost.
              </p>
              <p>
                That's when I discovered therapeutic yoga. Not the instagram-perfect poses, but real, healing practices
                that addressed my mental and emotional state. Within months, I experienced a transformation that
                seemed impossible – I was calm, energized, and most importantly, I felt like myself again.
              </p>
              <p>
                This experience ignited a passion to help others who were struggling like I was. I dedicated myself
                to learning everything I could about yoga therapy, mental health, and how ancient practices could
                address modern stress.
              </p>
            </div>
          </motion.div>

          {/* Journey Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">My Journey</h3>
            <div className="max-w-4xl mx-auto">
              {journey.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center mb-12"
                >
                  {index % 2 === 0 ? (
                    <>
                      <div className="flex-1 text-right pr-8">
                        <div className="bg-white p-6 rounded-2xl shadow-lg">
                          <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-4 h-4 bg-sage-600 rounded-full"></div>
                        <div className="w-px h-12 bg-sage-200 last:hidden"></div>
                      </div>
                      <div className="flex-1 pl-8">
                        <div className="text-2xl font-bold text-sage-600">{item.year}</div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex-1 text-right pr-8">
                        <div className="text-2xl font-bold text-sage-600">{item.year}</div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-4 h-4 bg-sage-600 rounded-full"></div>
                        <div className="w-px h-12 bg-sage-200 last:hidden"></div>
                      </div>
                      <div className="flex-1 pl-8">
                        <div className="bg-white p-6 rounded-2xl shadow-lg">
                          <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">My Values & Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every aspect of my teaching is guided by these core principles that ensure
              each student receives the care and support they deserve.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-sage-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Credentials & Training
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                My commitment to providing the highest quality therapeutic yoga instruction
                is backed by comprehensive training and ongoing education.
              </p>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-sage-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{cert}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-sage-50 rounded-2xl">
                <p className="text-gray-700 italic">
                  "I believe in continuous learning. I regularly attend workshops,
                  conferences, and advanced training programs to stay current with
                  the latest developments in therapeutic yoga and mental health."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-8 bg-gradient-to-br from-sage-500 to-sage-600 text-white rounded-2xl shadow-lg"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sage-100">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-sage-600 to-sage-700 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Begin Your Healing Journey?
            </h2>
            <p className="text-xl text-sage-100 mb-8 max-w-2xl mx-auto">
              Whether you're dealing with stress, anxiety, burnout, or simply want to
              improve your mental wellness, I'm here to guide and support you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/contact"
                className="bg-white text-sage-700 hover:bg-sage-50 font-medium px-8 py-4 rounded-full transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/classes"
                className="border-2 border-white text-white hover:bg-white hover:text-sage-700 font-medium px-8 py-4 rounded-full transition-all duration-300"
              >
                Explore Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default About