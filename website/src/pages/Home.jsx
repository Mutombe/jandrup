import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  Play, 
  CheckCircle, 
  Calendar, 
  Heart, 
  Users,
  Building2,
  Hammer,
  Layers,
  Sparkles,
  Droplets,
  Star,
  Quote,
  ChevronRight,
  Phone,
  MapPin,
  Clock
} from 'lucide-react';
import SEO, { LocalBusinessSchema } from '../components/SEO';
import EnhancedHero from '../components/EnhanceHero';
import { companyInfo, stats, testimonials, projects } from '../data/siteData';

// Icon mapping
const iconMap = {
  CheckCircle,
  Calendar,
  Heart,
  Users,
  Building2,
  Hammer,
  Layers,
  Sparkles
};

// Enhanced services with Unsplash images and unique color schemes
const enhancedServices = [
  {
    id: "construction",
    title: "Construction",
    shortDescription: "Complete construction services from foundation to finish",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    gradient: "from-slate-900 via-blue-900 to-cyan-800",
    accentColor: "#06b6d4",
    overlayGradient: "linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(30, 58, 138, 0.75) 50%, rgba(6, 182, 212, 0.6) 100%)"
  },
  {
    id: "renovation",
    title: "Home Renovation",
    shortDescription: "Transform your space with expert renovation services",
    icon: Hammer,
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80",
    gradient: "from-amber-900 via-orange-800 to-yellow-700",
    accentColor: "#f59e0b",
    overlayGradient: "linear-gradient(135deg, rgba(120, 53, 15, 0.85) 0%, rgba(194, 65, 12, 0.75) 50%, rgba(245, 158, 11, 0.6) 100%)"
  },
  {
    id: "masonry",
    title: "Masonry & Concrete",
    shortDescription: "Expert masonry and concrete work built to last",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    gradient: "from-stone-900 via-amber-900 to-orange-800",
    accentColor: "#d97706",
    overlayGradient: "linear-gradient(135deg, rgba(68, 64, 60, 0.9) 0%, rgba(120, 53, 15, 0.8) 50%, rgba(194, 65, 12, 0.65) 100%)"
  },
  {
    id: "carpentry",
    title: "Framing & Carpentry",
    shortDescription: "Precision woodwork and structural framing",
    icon: Hammer,
    image: "https://images.unsplash.com/photo-1601058268499-e52658b8bb88?w=800&q=80",
    gradient: "from-yellow-900 via-amber-800 to-orange-700",
    accentColor: "#ca8a04",
    overlayGradient: "linear-gradient(135deg, rgba(113, 63, 18, 0.9) 0%, rgba(146, 64, 14, 0.8) 50%, rgba(202, 138, 4, 0.6) 100%)"
  },
  {
    id: "cleaning",
    title: "Cleaning Services",
    shortDescription: "Professional cleaning for homes and businesses",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    gradient: "from-teal-900 via-emerald-800 to-green-600",
    accentColor: "#14b8a6",
    overlayGradient: "linear-gradient(135deg, rgba(19, 78, 74, 0.9) 0%, rgba(6, 95, 70, 0.8) 50%, rgba(20, 184, 166, 0.6) 100%)"
  },
  {
    id: "water-delivery",
    title: "Water Delivery",
    shortDescription: "Reliable water delivery when you need it",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1559825481-12a05cc00344?w=800&q=80",
    gradient: "from-blue-950 via-blue-800 to-sky-600",
    accentColor: "#0ea5e9",
    overlayGradient: "linear-gradient(135deg, rgba(23, 37, 84, 0.9) 0%, rgba(30, 64, 175, 0.8) 50%, rgba(14, 165, 233, 0.6) 100%)"
  }
];

// Enhanced projects with Unsplash images
const enhancedProjects = [
  {
    id: 1,
    title: "Avondale Executive Residence",
    category: "Residential",
    location: "Avondale, Harare",
    year: "2024",
    description: "A stunning 5-bedroom luxury residence featuring modern architecture and smart home integration.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    gradient: "from-indigo-900 to-purple-800",
    accentColor: "#8b5cf6"
  },
  {
    id: 2,
    title: "Borrowdale Corporate Office",
    category: "Commercial",
    location: "Borrowdale, Harare",
    year: "2024",
    description: "State-of-the-art office complex with sustainable design and modern amenities.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    gradient: "from-slate-900 to-zinc-800",
    accentColor: "#71717a"
  },
  {
    id: 3,
    title: "Highlands Shopping Centre",
    category: "Commercial",
    location: "Highlands, Harare",
    year: "2023",
    description: "Modern retail complex featuring 25 shops with contemporary architectural design.",
    image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&q=80",
    gradient: "from-rose-900 to-pink-800",
    accentColor: "#ec4899"
  }
];

const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      <SEO 
        title="Quality Construction Guaranteed"
        description="Zimbabwe's premier construction company delivering excellence in construction, renovation, cleaning services, and water delivery. Built Strong. Built Right. Every Time."
        keywords={['construction Zimbabwe', 'Harare construction company', 'home renovation', 'building contractors', 'Jandrup Group']}
      />
      <LocalBusinessSchema />

      {/* Hero Section */}
      <EnhancedHero />


      {/* Services Section */}
      <ServicesSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Featured Projects */}
      <ProjectsSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />
    </>
  );
};

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span 
            className="inline-block px-5 py-2 bg-orange-50 text-orange-600 rounded-full text-sm font-semibold mb-6 border border-orange-100"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our Services
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            WHAT WE DO <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">BEST</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive construction and maintenance services delivered with excellence and precision
          </p>
        </motion.div>

        {/* Services Grid - Unique Color Blended Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {enhancedServices.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative rounded-3xl overflow-hidden cursor-pointer"
                style={{ minHeight: '420px' }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Unique Gradient Overlay */}
                <div 
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{ background: service.overlayGradient }}
                />
                
                {/* Additional Hover Gradient */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ 
                    background: `linear-gradient(to top, ${service.accentColor}40 0%, transparent 60%)`
                  }}
                />
                
                {/* Content */}
                <div className="relative h-full p-8 flex flex-col justify-end z-10">
                  {/* Icon Badge */}
                  <motion.div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110"
                    style={{ 
                      backgroundColor: `${service.accentColor}30`,
                      border: `1px solid ${service.accentColor}50`
                    }}
                  >
                    <IconComponent size={28} style={{ color: service.accentColor }} />
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {service.shortDescription}
                  </p>
                  
                  {/* CTA Link */}
                  <Link
                    to={`/services#${service.id}`}
                    className="inline-flex items-center gap-2 text-white font-semibold group/link"
                  >
                    <span 
                      className="transition-colors duration-300"
                      style={{ color: service.accentColor }}
                    >
                      Learn More
                    </span>
                    <ChevronRight 
                      size={18} 
                      className="transition-transform group-hover/link:translate-x-1"
                      style={{ color: service.accentColor }}
                    />
                  </Link>
                </div>

                {/* Decorative Corner Element */}
                <div 
                  className="absolute top-4 right-4 w-20 h-20 rounded-full opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
                  style={{ backgroundColor: service.accentColor }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* View All Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:shadow-gray-900/20 hover:scale-[1.02]"
          >
            View All Services
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
// Stats Section Component
const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-brand-700 via-brand-600 to-brand-700 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-black/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon] || CheckCircle;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ type: 'spring', stiffness: 200, delay: index * 0.1 + 0.2 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4"
                >
                  <IconComponent size={32} className="text-white" />
                </motion.div>
                <div 
                  className="text-4xl sm:text-5xl font-bold text-white mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {stat.value}
                </div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Projects Section Component
const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16"
        >
          <div>
            <span className="inline-block px-5 py-2 bg-orange-50 text-orange-600 rounded-full text-sm font-semibold mb-6 border border-orange-100">
              Our Portfolio
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
              FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">PROJECTS</span>
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all text-lg"
          >
            View All Projects <ArrowRight size={22} />
          </Link>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {enhancedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay on Image */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${project.accentColor}80 0%, transparent 100%)`
                  }}
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span 
                    className="px-4 py-1.5 text-white text-sm font-semibold rounded-full backdrop-blur-md"
                    style={{ backgroundColor: `${project.accentColor}cc` }}
                  >
                    {project.category}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-7">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {project.year}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section Component
const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-brand-50 text-brand-600 rounded-full text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
          >
            WHAT OUR CLIENTS SAY
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.slice(0, 4).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative bg-gray-50 rounded-2xl p-8 hover-lift"
            >
              <Quote size={48} className="absolute top-6 right-6 text-brand-100" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-gray-700 text-lg mb-6 relative z-10">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-brand-700 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section Component
const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/construction-hero.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            READY TO START YOUR PROJECT?
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life. Get in touch today for a free consultation and quote.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-600 to-brand-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-brand-500/30 transition-all"
            >
              Request a Quote
              <ArrowRight />
            </Link>
            <a
              href={`tel:${companyInfo.phone}`}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
            >
              <Phone />
              {companyInfo.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
