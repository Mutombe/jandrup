import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Linkedin, 
  Instagram, 
  Twitter,
  ArrowRight,
  Building2
} from 'lucide-react';
import { companyInfo, services } from '../data/siteData';

const Footer = ({ onOpenPrivacy, onOpenCookies }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: services.slice(0, 6).map(s => ({
      name: s.title,
      path: `/services#${s.id}`
    })),
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Projects', path: '/projects' },
      { name: 'Careers', path: '/careers' },
      { name: 'Contact', path: '/contact' },
    ],
    support: [
      { name: 'FAQs', path: '/contact#faq' },
      { name: 'Get a Quote', path: '/contact' },
      { name: 'Project Inquiry', path: '/contact' },
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 pattern-grid" />
      </div>

      {/* Top CTA Section */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <motion.div 
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center lg:text-left">
              <h3 
                className="text-3xl md:text-4xl font-bold mb-3"
                
              >
                READY TO BUILD YOUR DREAM PROJECT?
              </h3>
              <p className="text-gray-400 text-lg">
                Let's discuss how we can bring your vision to life
              </p>
            </div>
            <Link
              to="/contact"
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-600 to-brand-700 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/30 hover:gap-4"
            >
              Start Your Project
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <img
                src="/logo.png"
                alt="Jandrup Group"
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              {companyInfo.description.slice(0, 150)}...
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <a 
                href={`tel:${companyInfo.phone}`}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-brand-600/20 transition-colors">
                  <Phone size={18} />
                </div>
                <span>{companyInfo.phone}</span>
              </a>
              <a 
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-brand-600/20 transition-colors">
                  <Mail size={18} />
                </div>
                <span>{companyInfo.email}</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <div className="p-2 bg-white/5 rounded-lg mt-0.5">
                  <MapPin size={18} />
                </div>
                <span>{companyInfo.address}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="p-2 bg-white/5 rounded-lg">
                  <Clock size={18} />
                </div>
                <span>{companyInfo.workingHours.weekdays}</span>
              </div>
            </div>
          </motion.div>

          {/* Services Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Building2 size={20} className="text-brand-500" />
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCookies}
                  className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300"
                >
                  Cookie Policy
                </button>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Jandrup Group. All rights reserved. Built Strong. Built Right. Every Time.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, href: companyInfo.socialLinks.facebook },
                { icon: Linkedin, href: companyInfo.socialLinks.linkedin },
                { icon: Instagram, href: companyInfo.socialLinks.instagram },
                { icon: Twitter, href: companyInfo.socialLinks.twitter },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white/5 rounded-lg text-gray-400 hover:text-white hover:bg-brand-600 transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
