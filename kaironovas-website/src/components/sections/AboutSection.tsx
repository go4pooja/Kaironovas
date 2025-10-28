'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Brain, Target, Lightbulb, Shield, Users, Award } from 'lucide-react'

const stats = [
  { number: '500+', label: 'AI Models Deployed', icon: Brain },
  { number: '98%', label: 'Client Satisfaction', icon: Award },
  { number: '10M+', label: 'Data Points Processed', icon: Target },
  { number: '24/7', label: 'AI Monitoring', icon: Shield }
]

const values = [
  {
    icon: Brain,
    title: 'AI-First Approach',
    description: 'We believe AI should enhance human creativity, not replace it. Every solution we build leverages machine learning to deliver smarter outcomes.'
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Our AI systems are designed with one goal: measurable business impact. We track, optimize, and continuously improve performance.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation Focus',
    description: 'We stay at the forefront of AI technology, constantly exploring new models, algorithms, and applications to benefit our clients.'
  },
  {
    icon: Users,
    title: 'Human-Centered Design',
    description: 'Technology serves people. Our AI solutions are intuitive, accessible, and designed to augment human capabilities.'
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
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
            <span className="text-gray-900">About</span>
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {' '}Kaironovas
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're pioneering the future of intelligent digital solutions. Our mission is to democratize 
            AI technology and make it accessible for businesses of all sizes.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2023, Kaironovas emerged from a simple observation: while AI technology 
                was advancing rapidly, most businesses couldn't access or implement these powerful 
                tools effectively.
              </p>
              <p>
                We set out to bridge this gap by creating AI-powered solutions that are not just 
                cutting-edge, but also practical, reliable, and tailored to real business needs.
              </p>
              <p>
                Today, we're proud to be at the forefront of AI innovation, helping businesses 
                transform their operations through intelligent automation, predictive analytics, 
                and smart decision-making systems.
              </p>
            </div>
          </motion.div>

          {/* Right side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card key={index} className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-indigo-600 mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </motion.div>
        </div>

        {/* Values section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                          <p className="text-gray-600 leading-relaxed">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}