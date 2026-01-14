import React from 'react';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  MapPin, 
  Calendar, 
  Filter,
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import SEO from '../components/SEO';
import { projects } from '../data/siteData';

const enhancedProjects = [
  {
    id: 1,
    title: "Avondale Executive Residence",
    category: "Residential",
    location: "Avondale, Harare",
    year: "2024",
    description: "A stunning 5-bedroom luxury residence featuring modern architecture, premium finishes, and smart home integration. This project showcases our commitment to delivering exceptional living spaces.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    featured: true,
    services: ["Construction", "Carpentry", "Renovation"],
    accentColor: "#8b5cf6",
    gradient: "from-violet-600 to-purple-700"
  },
  {
    id: 2,
    title: "Borrowdale Corporate Office",
    category: "Commercial",
    location: "Borrowdale, Harare",
    year: "2024",
    description: "State-of-the-art office complex with sustainable design features, modern amenities, and flexible workspace solutions designed for the modern workforce.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    featured: true,
    services: ["Construction", "Masonry", "Cleaning"],
    accentColor: "#06b6d4",
    gradient: "from-cyan-600 to-blue-700"
  },
  {
    id: 3,
    title: "Highlands Shopping Centre",
    category: "Commercial",
    location: "Highlands, Harare",
    year: "2023",
    description: "Modern retail complex featuring 25 shops, ample parking, and contemporary architectural design that creates an inviting shopping experience.",
    image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&q=80",
    featured: true,
    services: ["Construction", "Masonry", "Carpentry"],
    accentColor: "#ec4899",
    gradient: "from-pink-600 to-rose-700"
  },
  {
    id: 4,
    title: "Mount Pleasant Villa Renovation",
    category: "Renovation",
    location: "Mount Pleasant, Harare",
    year: "2024",
    description: "Complete transformation of a colonial-era villa into a modern family home while preserving its historic charm and architectural character.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    featured: false,
    services: ["Renovation", "Carpentry", "Cleaning"],
    accentColor: "#f59e0b",
    gradient: "from-amber-600 to-orange-700"
  },
  {
    id: 5,
    title: "Chisipite Industrial Warehouse",
    category: "Industrial",
    location: "Chisipite, Harare",
    year: "2023",
    description: "Large-scale industrial warehouse with modern logistics capabilities, sustainable construction practices, and efficient space utilization.",
    image: "jandrup-6.jpeg",
    featured: false,
    services: ["Construction", "Masonry", "Concrete"],
    accentColor: "#64748b",
    gradient: "from-slate-600 to-gray-700"
  },
  {
    id: 6,
    title: "Greendale Community Centre",
    category: "Public",
    location: "Greendale, Harare",
    year: "2023",
    description: "Multi-purpose community facility featuring event spaces, sports facilities, and recreational areas designed to bring the community together.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
    featured: true,
    services: ["Construction", "Renovation", "Cleaning"],
    accentColor: "#10b981",
    gradient: "from-emerald-600 to-teal-700"
  },
  {
    id: 7,
    title: "Eastlea Apartment Complex",
    category: "Residential",
    location: "Eastlea, Harare",
    year: "2023",
    description: "Modern 24-unit apartment complex with contemporary amenities, secure parking, and beautifully landscaped communal areas.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    featured: false,
    services: ["Construction", "Masonry", "Carpentry"],
    accentColor: "#3b82f6",
    gradient: "from-blue-600 to-indigo-700"
  },
  {
    id: 8,
    title: "Msasa Office Park",
    category: "Commercial",
    location: "Msasa, Harare",
    year: "2022",
    description: "Premium office park development with multiple buildings, shared facilities, and green spaces creating an ideal business environment.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    featured: false,
    services: ["Construction", "Cleaning", "Water Delivery"],
    accentColor: "#0ea5e9",
    gradient: "from-sky-600 to-blue-700"
  }
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', ...new Set(enhancedProjects.map(p => p.category))];
  
  const filteredProjects = selectedCategory === 'All' 
    ? enhancedProjects 
    : enhancedProjects.filter(p => p.category === selectedCategory);
  return (
    <>
      <SEO 
        title="Our Projects"
        description="Explore our portfolio of completed construction projects in Zimbabwe. From luxury residences to commercial complexes, see the quality of Jandrup Group's work."
        keywords={['construction projects Zimbabwe', 'building portfolio Harare', 'completed construction projects', 'residential construction', 'commercial construction']}
      />

      {/* Hero Section - Masonry Style */}
      <ProjectsHero />

      {/* Portfolio Section */}
      <PortfolioSection 
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        filteredProjects={filteredProjects}
        setSelectedProject={setSelectedProject}
      />

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        projects={filteredProjects}
        setSelectedProject={setSelectedProject}
      />

      {/* Stats Section */}
      <ProjectStatsSection />

      {/* CTA Section */}
      <ProjectsCTA />
    </>
  );
};

// Projects Hero
const ProjectsHero = () => {
  return (
    <section className="relative min-h-[50vh] flex items-center bg-gray-900 overflow-hidden">
      {/* Background Pattern - Masonry Grid */}
      <div className="absolute inset-0 grid grid-cols-4 gap-2 opacity-20">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`bg-brand-600 ${i % 3 === 0 ? 'row-span-2' : ''}`} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 bg-brand-600/20 text-brand-400 rounded-full text-sm font-semibold mb-6">
            Our Portfolio
          </span>
          <h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            PROJECTS THAT
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">
              SPEAK FOR US
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Explore our portfolio of successful projects across Zimbabwe. Each one represents our commitment to quality and excellence.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Portfolio Section with Filters - Enhanced
const PortfolioSection = ({ categories, selectedCategory, setSelectedCategory, filteredProjects, setSelectedProject }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-16"
        >
          <Filter size={20} className="text-gray-400" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group cursor-pointer ${
                  project.featured && index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
                onClick={() => setSelectedProject(project)}
              >
                <div className={`relative rounded-3xl overflow-hidden bg-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  project.featured && index === 0 ? 'aspect-square' : 'aspect-[4/3]'
                }`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  {/* Colored Hover Overlay */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${project.accentColor}80 0%, transparent 70%)`
                    }}
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span 
                      className="px-4 py-2 text-white text-sm font-semibold rounded-full backdrop-blur-md"
                      style={{ backgroundColor: `${project.accentColor}cc` }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="flex items-center gap-4 text-white/70 text-sm mb-3">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {project.year}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-sm line-clamp-2 mb-4">
                      {project.description}
                    </p>
                    <span 
                      className="inline-flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all"
                      style={{ color: project.accentColor }}
                    >
                      View Project <ExternalLink size={16} />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

// Project Modal - Enhanced
const ProjectModal = ({ project, onClose, projects, setSelectedProject }) => {
  const currentIndex = projects.findIndex(p => p?.id === project?.id);
  
  const goToProject = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % projects.length
      : (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[newIndex]);
  };

  return (
    <AnimatePresence>
      {project && (
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
            className="absolute inset-0 bg-black/95 backdrop-blur-md"
          />

          {/* Navigation Arrows */}
          <button
            onClick={(e) => { e.stopPropagation(); goToProject('prev'); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-4 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all z-10 border border-white/20"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goToProject('next'); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-4 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all z-10 border border-white/20"
          >
            <ChevronRight size={28} />
          </button>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:top-8 md:right-8 p-4 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all z-10 border border-white/20"
          >
            <X size={24} />
          </button>

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2">
              {/* Image Side */}
              <div className="relative aspect-square md:aspect-auto md:h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div 
                  className="absolute inset-0 opacity-40"
                  style={{
                    background: `linear-gradient(135deg, ${project.accentColor}80 0%, transparent 70%)`
                  }}
                />
              </div>

              {/* Content Side */}
              <div className="p-8 md:p-10 flex flex-col">
                <span 
                  className="inline-block px-4 py-2 text-white text-sm font-semibold rounded-full w-fit mb-6"
                  style={{ backgroundColor: project.accentColor }}
                >
                  {project.category}
                </span>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-3">{project.title}</h2>
                
                <div className="flex items-center gap-4 text-gray-500 text-sm mb-6">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={16} />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={16} />
                    {project.year}
                  </span>
                </div>

                <p className="text-gray-600 mb-8 flex-1 leading-relaxed">
                  {project.description}
                </p>

                {/* Services Used */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Services Provided</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service, i) => (
                      <span 
                        key={i} 
                        className="px-4 py-2 text-sm rounded-full font-medium"
                        style={{ 
                          backgroundColor: `${project.accentColor}15`,
                          color: project.accentColor
                        }}
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className={`w-full py-4 text-white font-semibold text-center rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] bg-gradient-to-r ${project.gradient}`}
                >
                  Start Your Project <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


// Project Stats Section
const ProjectStatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projectStats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '15+', label: 'Years Experience' },
    { value: '50+', label: 'Team Members' },
    { value: '100%', label: 'Client Commitment' }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {projectStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div 
                className="text-4xl sm:text-5xl font-bold text-brand-600 mb-2"
              
              >
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects CTA
const ProjectsCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
          
          >
            YOUR PROJECT COULD BE NEXT
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Ready to join our portfolio of successful projects? Let's discuss how we can bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors"
          >
            Start Your Project <ArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
