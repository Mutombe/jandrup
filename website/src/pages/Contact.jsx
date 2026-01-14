import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  MessageSquare,
  ChevronDown,
  Building,
  CheckCircle,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  ArrowRight,
  Zap,
  HeadphonesIcon,
  Globe
} from 'lucide-react';
import { toast } from 'sonner';
import SEO, { LocalBusinessSchema } from '../components/SEO';
import { companyInfo, faqItems } from '../data/siteData';

// Contact methods
const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Mon-Fri from 8am to 5pm',
    value: companyInfo.phone,
    link: `tel:${companyInfo.phone}`,
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: Mail,
    title: 'Email Us',
    description: 'We reply within 24 hours',
    value: companyInfo.email,
    link: `mailto:${companyInfo.email}`,
    color: 'from-blue-500 to-indigo-600'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Come say hello',
    value: companyInfo.address,
    link: `https://maps.google.com/?q=${encodeURIComponent(companyInfo.address)}`,
    color: 'from-red-500 to-red-600'
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp',
    description: 'Quick responses',
    value: companyInfo.phone,
    link: `https://wa.me/${companyInfo.phone.replace(/\s/g, '')}`,
    color: 'from-green-400 to-green-600'
  }
];

// Social links
const socialLinks = [
  { icon: Facebook, href: companyInfo.social?.facebook || '#', label: 'Facebook' },
  { icon: Linkedin, href: companyInfo.social?.linkedin || '#', label: 'LinkedIn' },
  { icon: Instagram, href: companyInfo.social?.instagram || '#', label: 'Instagram' },
  { icon: Twitter, href: companyInfo.social?.twitter || '#', label: 'Twitter' }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      service: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  return (
    <>
      <SEO 
        title="Contact Us"
        description="Get in touch with Jandrup Group for all your construction needs in Zimbabwe. Request a quote, ask questions, or schedule a consultation with our expert team."
        keywords="contact Jandrup Group, construction company Zimbabwe, Harare builders contact, get quote construction"
      />
      <LocalBusinessSchema />

      {/* Hero Section - Asymmetric design */}
      <section className="relative min-h-[70vh] overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-800">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="pattern-grid w-full h-full" />
        </div>

        {/* Floating shapes */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-72 h-72 border border-red-500/20 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-96 h-96 border border-red-500/10 rounded-full"
        />

        {/* Red accent shape */}
        <div 
          className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-600/20 to-transparent"
          style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 0% 100%)' }}
        />

        <div className="relative z-10 container mx-auto px-4 min-h-[70vh] flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-24">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6"
              >
                <HeadphonesIcon className="w-4 h-4 text-red-400" />
                <span className="text-white/90 text-sm font-medium">We're Here to Help</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl  font-bold text-white mb-6 leading-none">
                GET IN
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                  TOUCH
                </span>
              </h1>

              <p className="text-xl text-white/70 mb-8 max-w-lg leading-relaxed">
                Have a project in mind? We'd love to hear from you. 
                Send us a message and we'll respond as soon as possible.
              </p>

              {/* Quick contact */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href={`tel:${companyInfo.phone}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-xl text-white font-medium hover:from-red-700 hover:to-red-600 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  {companyInfo.phone}
                </motion.a>
                <motion.a
                  href={`mailto:${companyInfo.email}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white font-medium hover:bg-white/20 transition-all"
                >
                  <Mail className="w-5 h-5" />
                  {companyInfo.email}
                </motion.a>
              </div>
            </motion.div>

            {/* Right Content - Contact cards preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Stacked cards effect */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-8 left-8 w-full h-full bg-red-500/20 rounded-3xl"
                />
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  className="absolute top-4 left-4 w-full h-full bg-red-500/30 rounded-3xl"
                />
                
                {/* Main card */}
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center">
                      <Building className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">Head Office</h3>
                      <p className="text-white/60">Harare, Zimbabwe</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-white/80">
                      <MapPin className="w-5 h-5 text-red-400" />
                      <span>{companyInfo.address}</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/80">
                      <Clock className="w-5 h-5 text-red-400" />
                      <span>Mon - Fri: 8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/80">
                      <Globe className="w-5 h-5 text-red-400" />
                      <span>{companyInfo.website}</span>
                    </div>
                  </div>

                  {/* Social links */}
                  <div className="flex gap-3 mt-6 pt-6 border-t border-white/10">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/70 hover:bg-red-500 hover:text-white transition-all"
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.link}
                target={method.title === 'Visit Us' || method.title === 'WhatsApp' ? '_blank' : undefined}
                rel={method.title === 'Visit Us' || method.title === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="h-full bg-white rounded-2xl p-8 border-2 border-neutral-100 hover:border-red-200 hover:shadow-xl transition-all duration-300">
                  <div className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-800 mb-2">{method.title}</h3>
                  <p className="text-neutral-500 text-sm mb-3">{method.description}</p>
                  <p className="text-neutral-700 font-medium group-hover:text-red-600 transition-colors">
                    {method.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-24 bg-gradient-to-b from-neutral-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <span className="inline-block px-4 py-1.5 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
                  Send a Message
                </span>
                <h2 className="text-4xl  font-bold text-neutral-800 mb-4">
                  LET'S START A CONVERSATION
                </h2>
                <p className="text-neutral-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-neutral-700 text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 bg-white border-2 border-neutral-200 rounded-xl text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-red-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-700 text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 bg-white border-2 border-neutral-200 rounded-xl text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-red-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-700 text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 bg-white border-2 border-neutral-200 rounded-xl text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-red-500 transition-colors"
                      placeholder="+263 XX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-700 text-sm font-medium mb-2">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 bg-white border-2 border-neutral-200 rounded-xl text-neutral-800 focus:outline-none focus:border-red-500 transition-colors appearance-none cursor-pointer"
                      style={{ backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3e%3cpath stroke=%27%236b7280%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3e%3c/svg%3e")', backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5rem' }}
                    >
                      <option value="">Select a service</option>
                      <option value="construction">Construction</option>
                      <option value="renovation">Home Renovation</option>
                      <option value="masonry">Masonry & Concrete</option>
                      <option value="carpentry">Carpentry</option>
                      <option value="cleaning">Cleaning Services</option>
                      <option value="water">Water Delivery</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-neutral-700 text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 bg-white border-2 border-neutral-200 rounded-xl text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-red-500 transition-colors"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label className="block text-neutral-700 text-sm font-medium mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-5 py-4 bg-white border-2 border-neutral-200 rounded-xl text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-red-500 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all ${
                    isSubmitting 
                      ? 'bg-neutral-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white shadow-lg shadow-red-500/30'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Map & Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.0711730439!2d31.0368!3d-17.8292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4e706b17161%3A0x7c96b4da149e5e38!2sAvonlea%2C%20Harare%2C%20Zimbabwe!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Jandrup Group Location"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
                {/* Map overlay card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-800">Jandrup Group HQ</p>
                      <p className="text-sm text-neutral-500">{companyInfo.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Business Hours</h3>
                    <p className="text-white/60 text-sm">When we're available</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-white/80">Monday - Friday</span>
                    <span className="font-medium text-green-400">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-white/80">Saturday</span>
                    <span className="font-medium text-yellow-400">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-white/80">Sunday</span>
                    <span className="font-medium text-red-400">Closed</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2 text-green-400">
                    <Zap className="w-5 h-5" />
                    <span className="font-medium">Emergency services available 24/7</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl  font-bold text-neutral-800 mb-6">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Find answers to common questions about our services and process.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div 
                  className={`bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                    expandedFaq === index 
                      ? 'border-red-500 shadow-lg' 
                      : 'border-neutral-200 hover:border-red-200'
                  }`}
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <span className="font-semibold text-neutral-800 pr-4">{item.question}</span>
                    <motion.div
                      animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        expandedFaq === index ? 'bg-red-500 text-white' : 'bg-neutral-100 text-neutral-600'
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 text-neutral-600 leading-relaxed border-t border-neutral-100 pt-4">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-500 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="pattern-dots w-full h-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              READY TO BUILD SOMETHING AMAZING?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss your project. Our team is ready to bring your vision to life 
              with quality craftsmanship and professional service.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href={`tel:${companyInfo.phone}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 rounded-full font-semibold hover:bg-red-50 transition-all shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </motion.a>
              <motion.a
                href={`https://wa.me/${companyInfo.phone.replace(/\s/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold border-2 border-white/30 hover:bg-white/30 transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                WhatsApp Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
