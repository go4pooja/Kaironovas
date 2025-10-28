'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Globe, 
  Settings, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Zap, 
  Brain,
  ArrowRight,
  Sparkles
} from 'lucide-react'

const services = [
  {
    title: 'AI Website Creation',
    description: 'Smart websites that adapt and optimize themselves using machine learning algorithms.',
    features: [
      'AI-powered design generation',
      'Automated content optimization',
      'Smart SEO implementation',
      'Real-time performance tuning'
    ],
    icon: Globe,
    gradient: 'from-blue-500 to-indigo-600',
    priceRange: '$3,000 - $15,000',
    aiCapabilities: 'GPT-4 powered content generation + Claude optimization'
  },
  {
    title: 'Website Updates & Maintenance',
    description: 'AI-driven maintenance that prevents issues before they happen.',
    features: [
      'Predictive bug detection',
      'Automated security updates',
      'Performance optimization',
      'Content freshness monitoring'
    ],
    icon: Settings,
    gradient: 'from-green-500 to-teal-600',
    priceRange: '$500 - $3,000',
    aiCapabilities: 'Machine learning for predictive maintenance'
  },
  {
    title: 'AI Digital Marketing',
    description: 'Intelligent marketing campaigns that learn and improve automatically.',
    features: [
      'Predictive audience targeting',
      'Automated A/B testing',
      'Smart content creation',
      'ROI optimization algorithms'
    ],
    icon: TrendingUp,
    gradient: 'from-purple-500 to-pink-600',
    priceRange: '$2,000 - $10,000/month',
    aiCapabilities: 'Advanced ML models for customer behavior prediction'
  },
  {
    title: 'Smart Influencer Matching',
    description: 'AI platform that finds perfect influencers and predicts campaign success.',
    features: [
      'AI influencer scoring',
      'Engagement authenticity analysis',
      'Campaign ROI prediction',
      'Automated partnership matching'
    ],
    icon: Users,
    gradient: 'from-orange-500 to-red-600',
    priceRange: '$5,000 - $25,000/campaign',
    aiCapabilities: 'Custom neural networks for influencer analysis'
  },
  {
    title: 'AI Sports Analytics',
    description: 'Advanced computer vision and predictive analytics for sports performance.',
    features: [
      'Video analysis & tracking',
      'Performance prediction models',
      'Injury prevention algorithms',
      'Strategy optimization'
    ],
    icon: BarChart3,
    gradient: 'from-cyan-500 to-blue-600',
    priceRange: '$10,000 - $50,000/season',
    aiCapabilities: 'Computer vision + predictive modeling'
  },
  {
    title: 'Smart Home Automation',
    description: 'AI-powered home systems that learn and adapt to your lifestyle.',
    features: [
      'Behavioral pattern learning',
      'Energy optimization',
      'Predictive maintenance',
      'Security intelligence'
    ],
    icon: Zap,
    gradient: 'from-yellow-500 to-orange-600',
    priceRange: '$5,000 - $30,000',
    aiCapabilities: 'IoT integration with machine learning'
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full px-4 py-2 mb-6">
            <Brain className="h-4 w-4 text-indigo-600" />
            <span className="text-sm font-medium text-indigo-800">AI-Powered Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Intelligent Solutions
            </span>
            <br />
            <span className="text-gray-900">For Every Need</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered services don't just solve problems—they anticipate them. 
            Experience the future of digital solutions today.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group border-0 shadow-lg">
                  <CardHeader className="relative overflow-hidden">
                    {/* Gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                    
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Features */}
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* AI Capabilities */}
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-3">
                      <div className="flex items-center space-x-2 mb-1">
                        <Sparkles className="h-4 w-4 text-indigo-600" />
                        <span className="text-xs font-medium text-indigo-800">AI Technology</span>
                      </div>
                      <p className="text-xs text-gray-600">{service.aiCapabilities}</p>
                    </div>
                    
                    {/* Pricing */}
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <span className="text-xs text-gray-500">Starting from</span>
                        <div className="font-semibold text-gray-900">{service.priceRange}</div>
                      </div>
                      <Button variant="ghost" size="sm" className="group/btn">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button size="xl" variant="gradient" className="group">
            Explore All AI Solutions
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}