import React from "react";
import { useState, useEffect, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "sonner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Modal, CookieConsent } from "./components/Modal";
import { privacyPolicy, cookiePolicy } from "./data/siteData";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Projects = lazy(() => import("./pages/Projects"));
const Careers = lazy(() => import("./pages/Careers"));
const Contact = lazy(() => import("./pages/Contact"));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-neutral-50 pacaembu-font">
    <div className="text-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-12 h-12 border-3 border-red-500/30 border-t-red-600 rounded-full mx-auto mb-4"
      />
      <p className="text-neutral-500 font-medium">Loading...</p>
    </div>
  </div>
);

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If there's a hash, scroll to that element
      const element = document.getElementById(hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      // Otherwise scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

// Page transition wrapper
const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

// Main layout component
const Layout = ({ children, onOpenPrivacy, onOpenCookies }) => {
  return (
    <div className="min-h-screen flex flex-col pacaembu-font">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>{children}</Suspense>
      </main>
      <Footer onOpenPrivacy={onOpenPrivacy} onOpenCookies={onOpenCookies} />
    </div>
  );
};

// App Routes component
const AppRoutes = ({ onOpenPrivacy, onOpenCookies }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout onOpenPrivacy={onOpenPrivacy} onOpenCookies={onOpenCookies}>
            <PageTransition>
              <Home />
            </PageTransition>
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout onOpenPrivacy={onOpenPrivacy} onOpenCookies={onOpenCookies}>
            <PageTransition>
              <About />
            </PageTransition>
          </Layout>
        }
      />
      <Route
        path="/services"
        element={
          <Layout onOpenPrivacy={onOpenPrivacy} onOpenCookies={onOpenCookies}>
            <PageTransition>
              <Services />
            </PageTransition>
          </Layout>
        }
      />
      <Route
        path="/projects"
        element={
          <Layout onOpenPrivacy={onOpenPrivacy} onOpenCookies={onOpenCookies}>
            <PageTransition>
              <Projects />
            </PageTransition>
          </Layout>
        }
      />
      <Route
        path="/careers"
        element={
          <Layout onOpenPrivacy={onOpenPrivacy} onOpenCookies={onOpenCookies}>
            <PageTransition>
              <Careers />
            </PageTransition>
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout onOpenPrivacy={onOpenPrivacy} onOpenCookies={onOpenCookies}>
            <PageTransition>
              <Contact />
            </PageTransition>
          </Layout>
        }
      />
      {/* 404 - Redirect to home */}
      <Route
        path="*"
        element={
          <Layout onOpenPrivacy={onOpenPrivacy} onOpenCookies={onOpenCookies}>
            <PageTransition>
              <Home />
            </PageTransition>
          </Layout>
        }
      />
    </Routes>
  );
};

function App() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showCookies, setShowCookies] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  // Check for cookie consent on mount
  useEffect(() => {
    const consent = localStorage.getItem("jandrup-cookie-consent");
    if (!consent) {
      // Delay showing the cookie banner for better UX
      const timer = setTimeout(() => {
        setShowCookieConsent(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Handle cookie consent
  const handleCookieConsent = (accepted) => {
    localStorage.setItem(
      "jandrup-cookie-consent",
      accepted ? "accepted" : "declined"
    );
    setShowCookieConsent(false);
  };

  return (
    <Router>
      <div id="top" className="pacaembu-font">
        <style jsx>{`
          /* Niveau Grotesk Font Face - Regular */

          /* Pacaembu Font Faces */
          @font-face {
            font-family: "Pacaembu";
            src: url("./fonts/Pacaembu-Thin-Trial.ttf") format("truetype");
            font-weight: 100;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: "Pacaembu";
            src: url("./fonts/Pacaembu-Light-Trial.ttf") format("truetype");
            font-weight: 300;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: "Pacaembu";
            src: url("./fonts/Pacaembu-Regular-Trial.ttf") format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: "Pacaembu";
            src: url("./fonts/Pacaembu-Medium-Trial.ttf") format("truetype");
            font-weight: 500;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: "Pacaembu";
            src: url("./fonts/Pacaembu-Bold-Trial.ttf") format("truetype");
            font-weight: 700;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: "Pacaembu";
            src: url("./fonts/Pacaembu-Black-Trial.ttf") format("truetype");
            font-weight: 900;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: "Pacaembu";
            src: url("./fonts/Pacaembu-Ultra-Trial.ttf") format("truetype");
            font-weight: 950;
            font-style: normal;
            font-display: swap;
          }

          .pacaembu-font {
            font-family: "Pacaembu", "Inter", "Segoe UI", Tahoma, Geneva,
              Verdana, sans-serif;
          }
        `}</style>
        <ScrollToTop />

        {/* Main App */}
        <AppRoutes
          onOpenPrivacy={() => setShowPrivacy(true)}
          onOpenCookies={() => setShowCookies(true)}
        />

        {/* Privacy Policy Modal */}
        <Modal
          isOpen={showPrivacy}
          onClose={() => setShowPrivacy(false)}
          title="Privacy Policy"
          content={privacyPolicy}
        />

        {/* Cookie Policy Modal */}
        <Modal
          isOpen={showCookies}
          onClose={() => setShowCookies(false)}
          title="Cookie Policy"
          content={cookiePolicy}
        />

        {/* Cookie Consent Banner */}
        <CookieConsent
          isVisible={showCookieConsent}
          onAccept={() => handleCookieConsent(true)}
          onDecline={() => handleCookieConsent(false)}
          onLearnMore={() => setShowCookies(true)}
        />

        {/* Toast Notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#fff",
              color: "#1f2937",
              borderRadius: "12px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
              border: "1px solid rgba(0,0,0,0.05)",
              padding: "16px",
            },
            success: {
              iconTheme: {
                primary: "#dc2626",
                secondary: "#fff",
              },
            },
            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#fff",
              },
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;
