import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Users, Calendar, CheckCircle2, ArrowRight, Clock, Star, MessageCircle } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with updated design */}
      <section className="relative h-[600px] flex items-center bg-gradient-to-r from-purple-900 to-indigo-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Happy pets"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Your Pet's Health, <br />Our Priority
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Expert pet care consultation from certified professionals, available 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-emerald-600 transition-colors shadow-lg">
                Book a Consultation
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition-colors border border-white/30">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10k+", label: "Happy Pets" },
              { number: "500+", label: "Expert Vets" },
              { number: "24/7", label: "Support" },
              { number: "98%", label: "Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-4xl font-bold text-indigo-600 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with new design */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive pet care solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="h-10 w-10 text-emerald-500" />,
                title: "Health Consultations",
                description: "One-on-one video consultations with certified veterinarians",
                features: ["24/7 availability", "Expert advice", "Follow-up care"]
              },
              {
                icon: <Shield className="h-10 w-10 text-emerald-500" />,
                title: "Preventive Care",
                description: "Comprehensive preventive care plans for your pets",
                features: ["Health monitoring", "Vaccination schedules", "Diet plans"]
              },
              {
                icon: <MessageCircle className="h-10 w-10 text-emerald-500" />,
                title: "Behavioral Training",
                description: "Professional guidance for pet behavior improvement",
                features: ["Custom training plans", "Regular assessments", "Progress tracking"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find answers to common questions about our services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "How do online pet consultations work?",
                a: "Our online consultations are conducted via secure video calls. You'll discuss your pet's needs with a certified veterinarian who will provide expert advice and recommendations."
              },
              {
                q: "What types of pets do you provide care for?",
                a: "We offer care services for dogs, cats, birds, and other common household pets. Our experts are trained to handle various species and their specific needs."
              },
              {
                q: "How quickly can I get an appointment?",
                a: "We offer same-day appointments for urgent cases. Regular consultations can typically be scheduled within 24-48 hours."
              },
              {
                q: "Are your veterinarians certified?",
                a: "Yes, all our veterinarians are fully certified and have extensive experience in pet care. We maintain strict quality standards for our professional team."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the perfect plan for your pet's needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic Care",
                price: "$49",
                period: "per month",
                features: [
                  "2 video consultations",
                  "Basic health monitoring",
                  "Email support",
                  "Pet care guides"
                ]
              },
              {
                name: "Premium Care",
                price: "$99",
                period: "per month",
                features: [
                  "Unlimited consultations",
                  "24/7 emergency support",
                  "Priority scheduling",
                  "Personalized care plan"
                ],
                popular: true
              },
              {
                name: "Family Plan",
                price: "$149",
                period: "per month",
                features: [
                  "Coverage for 3 pets",
                  "Unlimited consultations",
                  "24/7 emergency support",
                  "Quarterly health reports"
                ]
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white p-8 rounded-2xl shadow-lg relative ${
                  plan.popular ? 'ring-2 ring-emerald-500' : ''
                }`}
              >
                {plan.popular && (
                  <span className="absolute top-0 right-8 -translate-y-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Latest Pet Care Tips</h2>
            <a href="#" className="text-emerald-500 hover:text-emerald-600 flex items-center">
              View all articles <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Essential Tips for New Dog Owners",
                excerpt: "Learn the basics of caring for your new furry friend with these expert tips.",
                readTime: "5 min read"
              },
              {
                image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Understanding Your Cat's Behavior",
                excerpt: "Decode your cat's mysterious behaviors and strengthen your bond.",
                readTime: "4 min read"
              },
              {
                image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Bird Care 101: A Complete Guide",
                excerpt: "Everything you need to know about keeping your feathered friend healthy and happy.",
                readTime: "6 min read"
              }
            ].map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </span>
                    <a href="#" className="text-emerald-500 hover:text-emerald-600">Read more</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Updated CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Give Your Pet the Best Care?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join thousands of happy pet owners who trust our expert care services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-emerald-600 transition-colors shadow-lg">
                Get Started Now
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition-colors border border-white/30">
                Talk to an Expert
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;