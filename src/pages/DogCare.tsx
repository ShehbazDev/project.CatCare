import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Book, AlertCircle } from 'lucide-react';

const DogCare = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Dog care"
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
              Professional Dog Care Services
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Expert guidance for your canine companion's wellbeing
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
                description: "Comprehensive health monitoring and advice"
              },
              {
                icon: <Shield className="h-8 w-8 text-indigo-600" />,
                title: "Training Programs",
                description: "Behavioral training and obedience guidance"
              },
              {
                icon: <Book className="h-8 w-8 text-indigo-600" />,
                title: "Nutrition Planning",
                description: "Custom diet plans for optimal health"
              },
              {
                icon: <AlertCircle className="h-8 w-8 text-indigo-600" />,
                title: "Emergency Support",
                description: "24/7 emergency care consultation"
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

      {/* Training Tips Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Essential Dog Training Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Basic Training",
                tips: [
                  "Consistent command training",
                  "Positive reinforcement",
                  "Socialization skills",
                  "Leash training basics"
                ]
              },
              {
                title: "Daily Care Routine",
                tips: [
                  "Regular exercise schedule",
                  "Grooming practices",
                  "Dental hygiene",
                  "Mental stimulation"
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
            Ready to Transform Your Dog's Behavior?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Schedule a consultation with our canine behavior experts
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors">
            Book Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default DogCare;