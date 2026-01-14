import React from 'react';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Cookie } from 'lucide-react';

// Main Modal Component
export const Modal = ({ isOpen, onClose, title, content }) => {
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

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const isPrivacy = title?.toLowerCase().includes('privacy');
  const Icon = isPrivacy ? Shield : Cookie;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-red-600 to-red-700 px-6 py-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Icon size={24} className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">{title}</h2>
                  <p className="text-red-100 text-sm">Last updated: {content?.lastUpdated || 'January 2025'}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="Close modal"
              >
                <X size={24} className="text-white" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto max-h-[calc(85vh-120px)]">
              <div 
                className="prose prose-neutral max-w-none
                  prose-headings:text-neutral-900 prose-headings:font-semibold prose-headings:mt-6 prose-headings:mb-3
                  prose-h3:text-lg
                  prose-p:text-neutral-600 prose-p:leading-relaxed prose-p:mb-4
                  prose-strong:text-neutral-900"
                dangerouslySetInnerHTML={{ __html: content?.content || '' }}
              />
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-neutral-50 border-t border-neutral-200 px-6 py-4 flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300"
              >
                I Understand
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Cookie Consent Banner
export const CookieConsent = ({ isVisible, onAccept, onDecline, onLearnMore }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="max-w-4xl mx-auto bg-neutral-900 text-white rounded-2xl p-6 shadow-2xl border border-white/10">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="p-3 bg-red-600/20 rounded-xl">
                <Cookie size={28} className="text-red-500" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">We value your privacy</h3>
                <p className="text-neutral-400 text-sm">
                  We use cookies to enhance your browsing experience and analyze site traffic. 
                  By clicking "Accept", you consent to our use of cookies.{' '}
                  <button 
                    onClick={onLearnMore}
                    className="text-red-400 hover:text-red-300 underline"
                  >
                    Learn more
                  </button>
                </p>
              </div>
              <div className="flex items-center gap-3 w-full md:w-auto">
                <button
                  onClick={onDecline}
                  className="flex-1 md:flex-none px-5 py-2.5 border border-white/20 rounded-lg font-medium hover:bg-white/5 transition-colors"
                >
                  Decline
                </button>
                <button
                  onClick={onAccept}
                  className="flex-1 md:flex-none px-5 py-2.5 bg-gradient-to-r from-red-600 to-red-700 rounded-lg font-medium hover:shadow-lg hover:shadow-red-500/30 transition-all"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
