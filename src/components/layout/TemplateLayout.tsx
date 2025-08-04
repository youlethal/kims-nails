import { motion } from 'framer-motion';
import { BrandingConfig } from '../../config';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  Target, 
  Rocket,
  Lightbulb,
  Wrench,
  Facebook,
  Instagram,
  Twitter,
  Linkedin
} from 'lucide-react';

export default function TemplateLayout({ branding, modules }: { branding: BrandingConfig; modules: string[] }) {
  console.log('Rendering with modules:', modules);
  
  // Animation variants removed to fix TypeScript errors

  return (
    <div className="min-h-screen bg-white font-sans" style={{ fontFamily: branding.fontFamily }}>
      {/* Header */}
      <motion.header 
        className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <h1 className="text-2xl font-bold text-primary">{branding.businessName}</h1>
            </motion.div>
            <nav className="hidden md:flex space-x-8">
              <motion.a 
                href="#home" 
                className="text-gray-700 hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Home
              </motion.a>
              <motion.a 
                href="#about" 
                className="text-gray-700 hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                About
              </motion.a>
              <motion.a 
                href="#services" 
                className="text-gray-700 hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Services
              </motion.a>
              <motion.a 
                href="#contact" 
                className="text-gray-700 hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.a>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      {modules.includes('hero') && (
        <motion.section 
          id="home" 
          className="bg-gradient-to-r from-primary to-accent text-white py-32 relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 
              className="text-6xl font-bold mb-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Welcome to {branding.businessName}
            </motion.h2>
            <motion.p 
              className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Professional services delivered with excellence and care. We're here to serve you with the highest quality and dedication.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a 
                href="#contact" 
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.a>
              <motion.a 
                href="#about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* About Section */}
      {modules.includes('about') && (
        <motion.section 
          id="about" 
          className="py-24 bg-gray-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-6">About Us</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We are dedicated to providing exceptional service and creating lasting relationships with our clients.
              </p>
            </motion.div>
            <motion.div 
              className="grid md:grid-cols-3 gap-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, staggerChildren: 0.1 }}
            >
              <motion.div 
                className="text-center group"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">To deliver outstanding results that exceed expectations and build trust with every interaction.</p>
              </motion.div>
              <motion.div 
                className="text-center group"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Star className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Quality</h3>
                <p className="text-gray-600 leading-relaxed">We maintain the highest standards in everything we do, ensuring excellence in every project.</p>
              </motion.div>
              <motion.div 
                className="text-center group"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Star className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Partnership</h3>
                <p className="text-gray-600 leading-relaxed">We work closely with our clients to understand their needs and deliver personalized solutions.</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Services Section */}
      <motion.section 
        id="services" 
        className="py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer a comprehensive range of services designed to meet your needs and exceed your expectations.
            </p>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
          >
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 group hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Service 1</h3>
              <p className="text-gray-600 leading-relaxed">Professional service delivered with expertise and attention to detail.</p>
            </motion.div>
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 group hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Service 2</h3>
              <p className="text-gray-600 leading-relaxed">Innovative solutions tailored to your specific requirements and goals.</p>
            </motion.div>
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 group hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Wrench className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Service 3</h3>
              <p className="text-gray-600 leading-relaxed">Comprehensive support and maintenance to ensure long-term success.</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      {modules.includes('contact') && (
        <motion.section 
          id="contact" 
          className="py-24 bg-gray-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Ready to get started? Get in touch with us today and let's discuss how we can help you achieve your goals.
              </p>
            </motion.div>
            <motion.div 
              className="grid md:grid-cols-2 gap-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, staggerChildren: 0.1 }}
            >
              <motion.div 
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-3xl font-semibold mb-8">Get In Touch</h3>
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-center group"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Address</p>
                      <p className="text-gray-600">123 Business Street, City, State 12345</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-center group"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Email</p>
                      <p className="text-gray-600">info@kims nails.com</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-center group"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Phone</p>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea 
                      rows={4} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    ></textarea>
                  </div>
                  <motion.button 
                    type="submit" 
                    className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Footer */}
      {modules.includes('footer') && (
        <motion.footer 
          className="bg-gray-900 text-white py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="grid md:grid-cols-4 gap-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, staggerChildren: 0.1 }}
            >
              <motion.div 
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-6">{branding.businessName}</h3>
                <p className="text-gray-400 leading-relaxed">
                  Professional services delivered with excellence and care.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h4 className="font-semibold mb-6 text-lg">Services</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors duration-300">Service 1</a></li>
                  <li><a href="#" className="hover:text-white transition-colors duration-300">Service 2</a></li>
                  <li><a href="#" className="hover:text-white transition-colors duration-300">Service 3</a></li>
                </ul>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h4 className="font-semibold mb-6 text-lg">Company</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="#about" className="hover:text-white transition-colors duration-300">About</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a></li>
                  <li><a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
                </ul>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h4 className="font-semibold mb-6 text-lg">Connect</h4>
                <div className="flex space-x-4">
                  <motion.a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Facebook size={24} />
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Instagram size={24} />
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Twitter size={24} />
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin size={24} />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
            <motion.div 
              className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p>&copy; 2024 Kims Nails. All rights reserved.</p>
            </motion.div>
          </div>
        </motion.footer>
      )}
    </div>
  );
}