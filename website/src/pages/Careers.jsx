import React from 'react';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign,
  ChevronRight,
  ChevronDown,
  Heart,
  Shield,
  Users,
  TrendingUp,
  Coffee,
  Zap,
  Award,
  CheckCircle,
  Upload,
  Send,
  Building,
  HardHat,
  X,
  GraduationCap,
  Sparkles
} from 'lucide-react';
import { toast } from 'sonner';
import SEO, { LocalBusinessSchema } from '../components/SEO';
import { careers, companyInfo } from '../data/siteData';

// Benefits data
const benefits = [
  {
    icon: Shield,
    title: 'Health Insurance',
    description: 'Comprehensive medical coverage for you and your family'
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Clear paths for advancement and skill development'
  },
  {
    icon: Coffee,
    title: 'Work-Life Balance',
    description: 'Flexible schedules and generous leave policies'
  },
  {
    icon: Award,
    title: 'Recognition',
    description: 'Performance bonuses and employee appreciation programs'
  },
  {
    icon: Users,
    title: 'Team Environment',
    description: 'Collaborative culture with supportive colleagues'
  },
  {
    icon: GraduationCap,
    title: 'Training & Development',
    description: 'Continuous learning opportunities and certifications'
  }
];

// Culture values
const cultureValues = [
  { label: 'Safety First', value: '100%', description: 'Zero compromise on workplace safety' },
  { label: 'Team Retention', value: '92%', description: 'Employees who stay 3+ years' },
  { label: 'Promotions', value: '40%', description: 'Internal promotions annually' },
  { label: 'Training Hours', value: '200+', description: 'Hours of training per employee' }
];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [expandedJob, setExpandedJob] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    resume: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error('File size must be less than 5MB');
        return;
      }
      setFormData(prev => ({ ...prev, resume: file }));
      toast.success('Resume uploaded successfully');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success('Application submitted successfully! We\'ll be in touch soon.');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      message: '',
      resume: null
    });
    setSelectedJob(null);
    setIsSubmitting(false);
  };

  const scrollToForm = (jobTitle) => {
    setSelectedJob(jobTitle);
    setFormData(prev => ({ ...prev, position: jobTitle }));
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <SEO 
        title="Careers"
        description="Join the Jandrup Group team. Explore exciting career opportunities in construction, project management, and more. Build your future with Zimbabwe's leading construction company."
        keywords="construction jobs Zimbabwe, Jandrup careers, Harare construction jobs, building industry careers"
      />
      <LocalBusinessSchema />

      {/* Hero Section - Split diagonal design */}
      <section className="relative min-h-[90vh] overflow-hidden">
        {/* Background split */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900" />
          <div 
            className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-600 to-red-700"
            style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)' }}
          />
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="pattern-grid w-full h-full" />
        </div>

        <div className="relative z-10 container mx-auto px-4 min-h-[90vh] flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-24">
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
                <Sparkles className="w-4 h-4 text-red-400" />
                <span className="text-white/90 text-sm font-medium">Join Our Growing Team</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 pacaembu-font">
                BUILD YOUR
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                  CAREER
                </span>
                <br />
                WITH US
              </h1>

              <p className="text-xl text-white/70 mb-8 max-w-lg leading-relaxed">
                Join Zimbabwe's premier construction company and be part of building 
                the nation's future. We offer competitive salaries, excellent benefits, 
                and a path to grow your career.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#openings"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 rounded-full font-semibold hover:bg-red-50 transition-colors"
                >
                  View Open Positions
                  <ChevronRight className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#culture"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
                >
                  Our Culture
                </motion.a>
              </div>
            </motion.div>

            {/* Right Content - Floating cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              {/* Main floating card */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center">
                    <HardHat className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">We're Hiring</h3>
                    <p className="text-white/60">{careers.length} Open Positions</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {careers.slice(0, 3).map((job, index) => (
                    <motion.div
                      key={job.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-white/5 rounded-xl"
                    >
                      <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-red-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">{job.title}</p>
                        <p className="text-white/50 text-xs">{job.type}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Stats floating card */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-5 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-neutral-800">92%</p>
                    <p className="text-sm text-neutral-500">Employee Satisfaction</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Culture Section */}
      <section id="culture" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
              Our Culture
            </span>
            <h2 className="text-4xl md:text-5xl  font-bold text-neutral-800 mb-6">
              WHY WORK WITH US
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              At Jandrup Group, we believe our people are our greatest asset. 
              We foster a culture of growth, safety, and excellence.
            </p>
          </motion.div>

          {/* Culture Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {cultureValues.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl p-8 text-center border border-neutral-200 hover:border-red-200 transition-all duration-300 hover:shadow-xl">
                  <p className="text-5xl  font-bold text-red-600 mb-2">
                    {item.value}
                  </p>
                  <p className="text-lg font-semibold text-neutral-800 mb-1">{item.label}</p>
                  <p className="text-sm text-neutral-500">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-white rounded-2xl p-8 border border-neutral-200 hover:border-red-300 hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-800 mb-3">{benefit.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="openings" className="py-24 bg-gradient-to-b from-neutral-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
              Job Openings
            </span>
            <h2 className="text-4xl md:text-5xl  font-bold text-neutral-800 mb-6">
              OPEN POSITIONS
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Find your perfect role and start building your career with us today.
            </p>
          </motion.div>

          {/* Job Listings */}
          <div className="max-w-4xl mx-auto space-y-4">
            {careers.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div 
                  className={`bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                    expandedJob === job.id 
                      ? 'border-red-500 shadow-xl' 
                      : 'border-neutral-200 hover:border-red-300 hover:shadow-lg'
                  }`}
                >
                  {/* Job Header */}
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-red-100 to-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Briefcase className="w-7 h-7 text-red-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {job.type}
                            </span>
                            <span className="flex items-center gap-1">
                              <Building className="w-4 h-4" />
                              {job.department}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                          {job.salary}
                        </span>
                        <motion.div
                          animate={{ rotate: expandedJob === job.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-6 h-6 text-neutral-400" />
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedJob === job.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-neutral-100 pt-6">
                          <p className="text-neutral-600 mb-6">{job.description}</p>
                          
                          <div className="grid md:grid-cols-2 gap-6 mb-6">
                            {/* Requirements */}
                            <div>
                              <h4 className="font-semibold text-neutral-800 mb-3 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-red-500" />
                                Requirements
                              </h4>
                              <ul className="space-y-2">
                                {job.requirements.map((req, i) => (
                                  <li key={i} className="flex items-start gap-2 text-neutral-600">
                                    <ChevronRight className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                                    {req}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Benefits */}
                            <div>
                              <h4 className="font-semibold text-neutral-800 mb-3 flex items-center gap-2">
                                <Heart className="w-5 h-5 text-red-500" />
                                Benefits
                              </h4>
                              <ul className="space-y-2">
                                {job.benefits.map((benefit, i) => (
                                  <li key={i} className="flex items-start gap-2 text-neutral-600">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                    {benefit}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => scrollToForm(job.title)}
                            className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-xl font-semibold hover:from-red-700 hover:to-red-600 transition-all flex items-center justify-center gap-2"
                          >
                            Apply for This Position
                            <Send className="w-4 h-4" />
                          </motion.button>
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

      {/* Application Form Section */}
      <section ref={formRef} className="py-24 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 opacity-5">
          <div className="pattern-dots w-full h-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-1.5 bg-red-500/20 text-red-400 rounded-full text-sm font-medium mb-4">
                Apply Now
              </span>
              <h2 className="text-4xl md:text-5xl  font-bold text-white mb-6">
                {selectedJob ? `APPLY FOR ${selectedJob.toUpperCase()}` : 'SUBMIT YOUR APPLICATION'}
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                Ready to join our team? Fill out the form below and we'll get back to you shortly.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                    placeholder="+263 XX XXX XXXX"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Position Applied For *
                  </label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all appearance-none cursor-pointer"
                    style={{ backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3e%3cpath stroke=%27%239ca3af%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3e%3c/svg%3e")', backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5rem' }}
                  >
                    <option value="" className="bg-neutral-800">Select a position</option>
                    {careers.map(job => (
                      <option key={job.id} value={job.title} className="bg-neutral-800">
                        {job.title}
                      </option>
                    ))}
                    <option value="Other" className="bg-neutral-800">Other / General Application</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Years of Experience *
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all appearance-none cursor-pointer"
                    style={{ backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3e%3cpath stroke=%27%239ca3af%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3e%3c/svg%3e")', backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5rem' }}
                  >
                    <option value="" className="bg-neutral-800">Select experience level</option>
                    <option value="0-1" className="bg-neutral-800">0-1 years</option>
                    <option value="1-3" className="bg-neutral-800">1-3 years</option>
                    <option value="3-5" className="bg-neutral-800">3-5 years</option>
                    <option value="5-10" className="bg-neutral-800">5-10 years</option>
                    <option value="10+" className="bg-neutral-800">10+ years</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Resume / CV *
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div className="w-full px-5 py-4 bg-white/10 border border-white/20 border-dashed rounded-xl text-white/60 flex items-center justify-center gap-2 hover:border-red-500/50 transition-colors">
                      <Upload className="w-5 h-5" />
                      {formData.resume ? formData.resume.name : 'Upload your resume (PDF, DOC)'}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Cover Letter / Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all resize-none"
                  placeholder="Tell us why you'd be a great fit for this position..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all ${
                  isSubmitting 
                    ? 'bg-neutral-600 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl  font-bold text-neutral-800 mb-6">
              DON'T SEE THE RIGHT POSITION?
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              We're always looking for talented individuals. Send us your resume and 
              we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href={`mailto:${companyInfo.email}?subject=General%20Application`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full font-semibold hover:from-red-700 hover:to-red-600 transition-all"
              >
                Send Your Resume
                <Send className="w-5 h-5" />
              </a>
              <a
                href={`tel:${companyInfo.phone}`}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-neutral-200 text-neutral-700 rounded-full font-semibold hover:border-red-500 hover:text-red-600 transition-all"
              >
                Call Us
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Careers;
