'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO, TechStartup Inc.',
    company: 'TechStartup Inc.',
    content: 'Kaironovas transformed our digital presence with their AI-powered website. Our conversion rate increased by 300% in just 3 months.',
    rating: 5,
    avatar: '👩‍💼'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Marketing Director',
    company: 'GrowthCo',
    content: 'Their AI influencer matching platform helped us find perfect brand ambassadors. The ROI was 400% higher than traditional methods.',
    rating: 5,
    avatar: '👨‍💼'
  },
  {
    name: 'Emily Watson',
    role: 'Founder',
    company: 'FitLife Studios',
    content: 'The AI sports analytics provided insights we never had before. Our athletes improved performance by 25% on average.',
    rating: 5,
    avatar: '👩‍🎓'
  },
  {
    name: 'David Kim',
    role: 'CTO',
    company: 'SmartHomes Plus',
    content: 'Their smart home automation AI learned our family patterns and reduced our energy costs by 40%. Simply incredible technology.',
    rating: 5,
    avatar: '👨‍🔧'
  },
  {
    name: 'Lisa Thompson',
    role: 'Marketing Manager',
    company: 'BrandBoost',
    content: 'The AI-powered digital marketing campaigns consistently outperform our traditional strategies. The predictive analytics are game-changing.',
    rating: 5,
    avatar: '👩‍💻'
  },
  {
    name: 'Alex Johnson',
    role: 'Entrepreneur',
    company: 'InnovateLab',
    content: 'Working with Kaironovas was seamless. Their AI solutions integrated perfectly with our existing systems and delivered immediate results.',
    rating: 5,
    avatar: '👨‍🚀'
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">What Our</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See how we've helped businesses transform 
            with AI-powered solutions.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group border-0 shadow-lg">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <Quote className="h-8 w-8 text-indigo-200 mb-4" />
                  
                  {/* Content */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Author */}
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{testimonial.avatar}</div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-indigo-600 font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: '500+', label: 'Happy Clients' },
            { number: '98%', label: 'Satisfaction Rate' },
            { number: '300%', label: 'Avg. ROI Increase' },
            { number: '24/7', label: 'AI Support' }
          ].map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}