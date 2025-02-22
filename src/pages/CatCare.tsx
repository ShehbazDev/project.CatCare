import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Book, AlertCircle } from 'lucide-react';

const CatCare = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Cat care"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert Cat Care Services
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Professional guidance for your feline friend's health and happiness
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="h-8 w-8 text-indigo-600" />,
                title: "Health & Wellness",
                description: "Regular check-ups and preventive care advice"
              },
              {
                icon: <Shield className="h-8 w-8 text-indigo-600" />,
                title: "Behavior Training",
                description: "Solutions for common behavioral issues"
              },
              {
                icon: <Book className="h-8 w-8 text-indigo-600" />,
                title: "Nutrition Guide",
                description: "Personalized diet and feeding recommendations"
              },
              {
                icon: <AlertCircle className="h-8 w-8 text-indigo-600" />,
                title: "Emergency Care",
                description: "24/7 emergency support and guidance"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-center mb-2">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Tips Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Essential Cat Care Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Grooming Essentials",
                tips: [
                  "Brush your cat's coat regularly",
                  "Trim nails every 2-3 weeks",
                  "Clean ears monthly",
                  "Regular dental care"
                ]
              },
              {
                title: "Environmental Enrichment",
                tips: [
                  "Provide scratching posts",
                  "Create vertical spaces",
                  "Rotate toys regularly",
                  "Interactive playtime daily"
                ]
              }
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gray-50 p-8 rounded-lg"
              >
                <h3 className="text-2xl font-semibold mb-6">{section.title}</h3>
                <ul className="space-y-4">
                  {section.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-center">
                      <span className="h-2 w-2 bg-indigo-600 rounded-full mr-3"></span>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Professional Cat Care Advice?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Book a consultation with our feline care experts
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors">
            Schedule Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default CatCare;