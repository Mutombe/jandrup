import React from 'react';
import { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  Building2, 
  Hammer, 
  Layers, 
  Wrench, 
  Sparkles, 
  Droplets,
  CheckCircle,
  Phone,
  Clock,
  Users,
  Award,
  Shield
} from 'lucide-react';
import SEO from '../components/SEO';
import { companyInfo } from '../data/siteData';

// Enhanced services with Unsplash images and unique color schemes
const enhancedServices = [
  {
    id: "construction",
    title: "Construction",
    shortDescription: "Complete construction services from foundation to finish",
    fullDescription: "From groundbreaking to grand opening, we deliver comprehensive construction solutions. Our experienced team handles residential, commercial, and industrial projects with precision and dedication to quality craftsmanship.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80",
    gradient: "from-slate-900 via-blue-900 to-cyan-800",
    accentColor: "#06b6d4",
    overlayGradient: "linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 58, 138, 0.8) 50%, rgba(6, 182, 212, 0.7) 100%)",
    features: [
      "Residential Construction",
      "Commercial Buildings",
      "Industrial Facilities",
      "Foundation Work",
      "Structural Steel",
      "Project Management"
    ],
    stats: { projects: "200+", satisfaction: "98%", experience: "15+ Years" }
  },
  {
    id: "renovation",
    title: "Home Renovation",
    shortDescription: "Transform your space with expert renovation services",
    fullDescription: "We breathe new life into existing structures. Whether it's a kitchen remodel, bathroom upgrade, or complete home transformation, our renovation experts deliver stunning results that exceed expectations.",
    icon: Hammer,
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80",
    gradient: "from-amber-900 via-orange-800 to-yellow-700",
    accentColor: "#f59e0b",
    overlayGradient: "linear-gradient(135deg, rgba(120, 53, 15, 0.9) 0%, rgba(194, 65, 12, 0.8) 50%, rgba(245, 158, 11, 0.7) 100%)",
    features: [
      "Kitchen Remodeling",
      "Bathroom Renovation",
      "Interior & Exterior Work",
      "Room Additions",
      "Basement Finishing",
      "Flooring & Tiling"
    ],
    stats: { projects: "500+", satisfaction: "99%", experience: "15+ Years" }
  },
  {
    id: "masonry",
    title: "Masonry & Concrete",
    shortDescription: "Expert masonry and concrete work built to last",
    fullDescription: "Our skilled masons create durable, beautiful structures using traditional techniques and modern materials. From decorative stonework to structural concrete, we deliver lasting quality.",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=1200&q=80",
    gradient: "from-stone-900 via-amber-900 to-orange-800",
    accentColor: "#d97706",
    overlayGradient: "linear-gradient(135deg, rgba(68, 64, 60, 0.9) 0%, rgba(120, 53, 15, 0.85) 50%, rgba(194, 65, 12, 0.7) 100%)",
    features: [
      "Brick & Block Work",
      "Stone Masonry",
      "Concrete Foundations",
      "Retaining Walls",
      "Decorative Concrete",
      "Paving & Driveways"
    ],
    stats: { projects: "350+", satisfaction: "97%", experience: "15+ Years" }
  },
  {
    id: "carpentry",
    title: "Framing & Carpentry",
    shortDescription: "Precision woodwork and structural framing",
    fullDescription: "Expert carpentry services from structural framing to custom finish work. Our craftsmen take pride in creating beautiful, functional woodwork that stands the test of time.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1601058268499-e52658b8bb88?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?w=1200&q=80",
    gradient: "from-yellow-900 via-amber-800 to-orange-700",
    accentColor: "#ca8a04",
    overlayGradient: "linear-gradient(135deg, rgba(113, 63, 18, 0.9) 0%, rgba(146, 64, 14, 0.85) 50%, rgba(202, 138, 4, 0.7) 100%)",
    features: [
      "Structural Framing",
      "Custom Cabinetry",
      "Deck Building",
      "Trim & Molding",
      "Door & Window Installation",
      "Custom Woodwork"
    ],
    stats: { projects: "400+", satisfaction: "98%", experience: "15+ Years" }
  },
  {
    id: "cleaning",
    title: "Cleaning Services",
    shortDescription: "Professional cleaning for homes and businesses",
    fullDescription: "Comprehensive cleaning solutions for residential and commercial properties. Our trained cleaning professionals use eco-friendly products and proven methods to deliver spotless results.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=1200&q=80",
    gradient: "from-teal-900 via-emerald-800 to-green-600",
    accentColor: "#14b8a6",
    overlayGradient: "linear-gradient(135deg, rgba(19, 78, 74, 0.9) 0%, rgba(6, 95, 70, 0.85) 50%, rgba(20, 184, 166, 0.7) 100%)",
    features: [
      "Post-Construction Cleaning",
      "Office Cleaning",
      "Residential Deep Clean",
      "Window Cleaning",
      "Carpet Cleaning",
      "Sanitization Services"
    ],
    stats: { clients: "150+", satisfaction: "99%", experience: "10+ Years" }
  },
  {
    id: "water-delivery",
    title: "Water Delivery",
    shortDescription: "Reliable water delivery when you need it",
    fullDescription: "Dependable water delivery services for construction sites, residential properties, and commercial establishments. We ensure timely delivery with clean, quality water.",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1559825481-12a05cc00344?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=1200&q=80",
    gradient: "from-blue-950 via-blue-800 to-sky-600",
    accentColor: "#0ea5e9",
    overlayGradient: "linear-gradient(135deg, rgba(23, 37, 84, 0.9) 0%, rgba(30, 64, 175, 0.85) 50%, rgba(14, 165, 233, 0.7) 100%)",
    features: [
      "Construction Site Delivery",
      "Residential Delivery",
      "Commercial Supply",
      "Emergency Delivery",
      "Bulk Water Supply",
      "Swimming Pool Filling"
    ],
    stats: { deliveries: "1000+", satisfaction: "98%", experience: "8+ Years" }
  }
];

const Services = () => {
  const location = useLocation();

  // Handle hash navigation
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <SEO 
        title="Our Services"
        description="Comprehensive construction services including building construction, home renovation, masonry, carpentry, cleaning services, and water delivery in Harare, Zimbabwe."
        keywords={['construction services Zimbabwe', 'home renovation Harare', 'masonry contractors', 'cleaning services Zimbabwe', 'water delivery Harare']}
      />

      {/* Hero Section */}
      <ServicesHero />

      {/* Services Overview */}
      <ServicesOverview />

      {/* Individual Service Sections */}
      {enhancedServices.map((service, index) => (
        <ServiceDetail key={service.id} service={service} index={index} />
      ))}

      {/* Process Section */}
      <ProcessSection />

      {/* CTA Section */}
      <ServicesCTA />
    </>
  );
};

// Services Hero - Enhanced
const ServicesHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
          alt="Construction services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-orange-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/3 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(234, 88, 12, 0.15) 0%, transparent 70%)',
          }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Animated Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 -left-20 w-96 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(234, 88, 12, 0.5), transparent)'
          }}
          animate={{ x: ['-100%', '400%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
              </span>
              <span className="text-white/90 text-sm font-medium tracking-wide">What We Offer</span>
            </motion.span>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              OUR
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400">
                SERVICES
              </span>
            </h1>
            
            <p className="text-xl text-white/70 mb-8 max-w-lg leading-relaxed">
              Comprehensive construction and maintenance solutions tailored to your needs. 
              From groundbreaking to finishing touches, we've got you covered.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            {/* Service Icons Grid */}
            <div className="grid grid-cols-3 gap-4">
              {enhancedServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.a
                    key={service.id}
                    href={`#${service.id}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition-all cursor-pointer border border-white/10 hover:border-white/20"
                  >
                    <div 
                      className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-3 transition-all duration-300 group-hover:scale-110"
                      style={{ 
                        backgroundColor: `${service.accentColor}30`,
                        border: `1px solid ${service.accentColor}50`
                      }}
                    >
                      <IconComponent size={26} style={{ color: service.accentColor }} />
                    </div>
                    <div className="text-white text-sm font-medium">{service.title}</div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Services Overview - Enhanced Cards
const ServicesOverview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-5 py-2 bg-orange-50 text-orange-600 rounded-full text-sm font-semibold mb-6 border border-orange-100">
            All Services
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            COMPLETE <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">SOLUTIONS</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We offer a full range of services to meet all your construction and maintenance needs
          </p>
        </motion.div>

        {/* Service Cards - Horizontal Scroll */}
        <div className="relative">
          <div className="flex overflow-x-auto pb-8 -mx-4 px-4 gap-6 snap-x snap-mandatory scrollbar-hide">
            {enhancedServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.a
                  key={service.id}
                  href={`#${service.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex-none w-[320px] snap-start group"
                >
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                    {/* Card Image Header */}
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div 
                        className="absolute inset-0"
                        style={{ background: service.overlayGradient }}
                      />
                      <div 
                        className="absolute top-4 left-4 p-3 rounded-xl backdrop-blur-sm"
                        style={{ 
                          backgroundColor: `${service.accentColor}30`,
                          border: `1px solid ${service.accentColor}50`
                        }}
                      >
                        <IconComponent size={24} style={{ color: service.accentColor }} />
                      </div>
                    </div>
                    
                    {/* Card Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{service.shortDescription}</p>
                      <span 
                        className="inline-flex items-center gap-2 font-semibold group-hover:gap-3 transition-all"
                        style={{ color: service.accentColor }}
                      >
                        Learn More <ArrowRight size={18} />
                      </span>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// Individual Service Detail Section - Enhanced
const ServiceDetail = ({ service, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const IconComponent = service.icon;
  const isEven = index % 2 === 0;

  return (
    <section 
      ref={ref}
      id={service.id}
      className={`py-28 scroll-mt-24 relative overflow-hidden ${isEven ? 'bg-gray-50' : 'bg-white'}`}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: service.accentColor }}
        />
        <div 
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-5"
          style={{ backgroundColor: service.accentColor }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -40 : 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className={`${!isEven ? 'lg:order-2' : ''}`}
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] group shadow-2xl">
              <img
                src={service.heroImage}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Gradient Overlay */}
              <div 
                className="absolute inset-0 opacity-60"
                style={{ background: service.overlayGradient }}
              />
              
              {/* Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex gap-3 flex-wrap">
                {Object.entries(service.stats).map(([key, value], i) => (
                  <motion.div 
                    key={i} 
                    className="bg-white/20 backdrop-blur-md rounded-xl px-4 py-3 border border-white/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <div className="text-white font-bold text-lg">{value}</div>
                    <div className="text-white/70 text-xs capitalize">{key.replace('_', ' ')}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 40 : -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`${!isEven ? 'lg:order-1' : ''}`}
          >
            <div className="flex items-center gap-4 mb-8">
              <div 
                className="p-4 rounded-2xl"
                style={{ 
                  backgroundColor: `${service.accentColor}15`,
                  border: `1px solid ${service.accentColor}30`
                }}
              >
                <IconComponent size={36} style={{ color: service.accentColor }} />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
                {service.title.toUpperCase()}
              </h2>
            </div>

            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              {service.fullDescription}
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {service.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <CheckCircle size={20} style={{ color: service.accentColor }} className="flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
              style={{ 
                background: `linear-gradient(135deg, ${service.accentColor} 0%, ${service.accentColor}dd 100%)`,
                boxShadow: `0 10px 40px ${service.accentColor}40`
              }}
            >
              Get a Quote <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Process Section - Enhanced
const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We discuss your vision, requirements, and budget to understand your needs completely.',
      icon: Users,
      color: '#06b6d4'
    },
    {
      number: '02',
      title: 'Planning',
      description: 'Our team creates detailed plans, timelines, and cost estimates for your project.',
      icon: Clock,
      color: '#8b5cf6'
    },
    {
      number: '03',
      title: 'Execution',
      description: 'Skilled craftsmen bring your project to life with quality materials and workmanship.',
      icon: Shield,
      color: '#f59e0b'
    },
    {
      number: '04',
      title: 'Delivery',
      description: 'We conduct final inspections and hand over your completed project with full documentation.',
      icon: Award,
      color: '#10b981'
    }
  ];

  return (
    <section ref={ref} className="py-28 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/95" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6 border border-white/20">
            How We Work
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">PROCESS</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A streamlined approach to ensure your project is delivered on time and within budget
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-white/20 to-transparent" />
                )}

                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-white/20">
                  {/* Step Number */}
                  <div 
                    className="text-6xl font-bold mb-6 opacity-20"
                    style={{ color: step.color }}
                  >
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ 
                      backgroundColor: `${step.color}20`,
                      border: `1px solid ${step.color}40`
                    }}
                  >
                    <IconComponent size={28} style={{ color: step.color }} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/60 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Services CTA - Enhanced
const ServicesCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/95 via-orange-500/90 to-amber-500/90" />
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-300/20 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative p-12 md:p-16 text-center">
            <motion.span 
              className="inline-flex items-center gap-2 px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-semibold mb-8 border border-white/30"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Sparkles size={16} />
              Get Started Today
            </motion.span>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              READY TO GET STARTED?
            </h2>
            
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Contact us today for a free consultation and quote. Let's build something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-10 py-5 bg-white text-orange-600 font-semibold rounded-xl flex items-center justify-center gap-3 hover:bg-gray-100 transition-all duration-300 hover:shadow-xl text-lg hover:scale-[1.02]"
              >
                Request a Quote <ArrowRight size={22} />
              </Link>
              <a
                href={`tel:${companyInfo.phone}`}
                className="w-full sm:w-auto px-10 py-5 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl flex items-center justify-center gap-3 hover:bg-white/20 transition-all duration-300 text-lg"
              >
                <Phone size={22} /> Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;