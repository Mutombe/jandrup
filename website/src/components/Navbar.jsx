import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { navLinks, companyInfo } from '../data/siteData';
import { TiThMenuOutline } from "react-icons/ti";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const servicesDropdown = [
    { name: 'Construction', path: '/services#construction' },
    { name: 'Home Renovation', path: '/services#renovation' },
    { name: 'Masonry & Concrete', path: '/services#masonry' },
    { name: 'Carpentry', path: '/services#carpentry' },
    { name: 'Cleaning Services', path: '/services#cleaning' },
    { name: 'Water Delivery', path: '/services#water-delivery' },
  ];

  return (
    <>
      {/* Fixed Header Container */}
      <div className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${
        isScrolled ? 'shadow-lg shadow-black/5' : ''
      }`}>
        {/* Top Bar - Hidden on scroll for more space */}
        <motion.div 
          className={`hidden lg:block bg-gradient-to-r from-brand-800 to-brand-700 text-white pacaembu-font transition-all duration-300 overflow-hidden ${
            isScrolled ? 'h-0 py-0' : 'h-auto py-2'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <div className="flex items-center gap-6 text-sm">
              <a 
                href={`tel:${companyInfo.phone}`} 
                className="flex items-center gap-2 hover:text-brand-200 transition-colors"
              >
                <Phone size={14} />
                <span>{companyInfo.phone}</span>
              </a>
              <a 
                href={`mailto:${companyInfo.email}`} 
                className="flex items-center gap-2 hover:text-brand-200 transition-colors"
              >
                <Mail size={14} />
                <span>{companyInfo.email}</span>
              </a>
            </div>
            <div className="text-sm font-medium">
              {companyInfo.workingHours.weekdays}
            </div>
          </div>
        </motion.div>

        {/* Main Navigation */}
        <motion.header
          className={`bg-white transition-all duration-300`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 pacaembu-font">
            <div className={`flex justify-between items-center transition-all duration-300 ${
              isScrolled ? 'h-16' : 'h-16 lg:h-[72px]'
            }`}>
            {/* Logo */}
            <Link to="/" className="relative z-10 flex items-center gap-3">
              <motion.img
                src="/logo.png"
                alt="Jandrup Group"
                className={`w-auto transition-all duration-300 ${isScrolled ? 'h-15' : 'h-15 lg:h-15'}`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div 
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => link.name === 'Services' && setActiveDropdown('services')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.path}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-1
                      ${location.pathname === link.path 
                        ? 'text-brand-600 bg-brand-50' 
                        : 'text-gray-700 hover:text-brand-600 hover:bg-brand-50/50'
                      }`}
                  >
                    {link.name}
                    {link.name === 'Services' && (
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-300 ${
                          activeDropdown === 'services' ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </Link>

                  {/* Services Dropdown */}
                  {link.name === 'Services' && (
                    <AnimatePresence>
                      {activeDropdown === 'services' && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 pt-2"
                        >
                          <div className="bg-white rounded-xl shadow-xl shadow-black/10 border border-gray-100 py-2 min-w-[220px] overflow-hidden">
                            {servicesDropdown.map((item, index) => (
                              <motion.div
                                key={item.path}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <Link
                                  to={item.path}
                                  className="block px-4 py-2.5 text-gray-700 hover:text-brand-600 hover:bg-brand-50 transition-colors"
                                >
                                  {item.name}
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                to="/contact"
                className="group relative px-6 py-3 bg-gradient-to-r from-brand-600 to-brand-700 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/30"
              >
                <span className="relative z-10">Get a Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-700 to-brand-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-[10001] p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} className="text-gray-800" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <TiThMenuOutline size={24} className="text-gray-800" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-[10000]"
              onClick={() => setIsOpen(false)}
            >
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col h-full pt-20 pb-8 px-6">
                  <div className="flex-1 space-y-1">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={link.path}
                          className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                            location.pathname === link.path
                              ? 'text-brand-600 bg-brand-50'
                              : 'text-gray-700 hover:text-brand-600 hover:bg-gray-50'
                          }`}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Mobile Contact Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="border-t border-gray-200 pt-6 mt-6 space-y-4"
                  >
                    <a
                      href={`tel:${companyInfo.phone}`}
                      className="flex items-center gap-3 text-gray-600 hover:text-brand-600 transition-colors"
                    >
                      <div className="p-2 bg-brand-50 rounded-lg">
                        <Phone size={18} className="text-brand-600" />
                      </div>
                      <span>{companyInfo.phone}</span>
                    </a>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="flex items-center gap-3 text-gray-600 hover:text-brand-600 transition-colors"
                    >
                      <div className="p-2 bg-brand-50 rounded-lg">
                        <Mail size={18} className="text-brand-600" />
                      </div>
                      <span className="truncate">{companyInfo.email}</span>
                    </a>

                    <Link
                      to="/contact"
                      className="block w-full py-3 bg-gradient-to-r from-brand-600 to-brand-700 text-white font-semibold text-center rounded-lg mt-4"
                    >
                      Get a Quote
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      </div>

      {/* Spacer to account for fixed header */}
      <div className="h-16 lg:h-[104px]" />
    </>
  );
};

export default Navbar;