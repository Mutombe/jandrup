import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  Award, 
  Shield, 
  Lightbulb, 
  HardHat, 
  Heart, 
  Leaf,
  Target,
  Eye,
  CheckCircle,
  Users,
  Calendar,
  Building2,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import SEO from '../components/SEO';
import { companyInfo, values, team, stats } from '../data/siteData';

// Icon mapping for values
const valueIcons = {
  Award,
  Shield,
  Lightbulb,
  HardHat,
  Heart,
  Leaf
};

const About = () => {
  return (
    <>
      <SEO 
        title="About Us"
        description="Learn about Jandrup Group - Zimbabwe's premier construction company with over 15 years of experience delivering excellence in construction, renovation, and maintenance services."
        keywords={['about Jandrup Group', 'Zimbabwe construction company history', 'construction team Harare', 'building company values']}
      />

      {/* Hero Section - Different from Home */}
      <AboutHero />

      {/* Story Section */}
      <StorySection />

      {/* Mission & Vision */}
      <MissionVisionSection />

      {/* Values Section */}
      <ValuesSection />

      {/* Team Section */}
      <TeamSection />

      {/* Timeline Section */}
      <TimelineSection />

      {/* CTA Section */}
      <AboutCTA />
    </>
  );
};

// About Hero - Asymmetric Layout
const AboutHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-600 hidden lg:block">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/jandrup-2.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Geometric Shape */}
      <div className="absolute top-0 right-1/2 w-32 h-full bg-brand-600 transform skew-x-12 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-brand-100 text-brand-700 rounded-full text-sm font-semibold mb-6">
              About Us
            </span>
            <h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            >
              BUILDING
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-800">
                ZIMBABWE'S
              </span>
              <br />
              FUTURE
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              For over 15 years, Jandrup Group has been at the forefront of Zimbabwe's construction industry, 
              delivering quality projects that stand the test of time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors flex items-center gap-2"
              >
                Work With Us <ArrowRight size={18} />
              </Link>
              <Link
                to="/projects"
                className="px-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all"
              >
                View Projects
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-brand-200 rounded-full blur-3xl opacity-50" />
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="text-center p-4"
                    >
                      <div className="text-3xl font-bold text-brand-600">{stat.value}</div>
                      <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Story Section - Enhanced with Unsplash
const StorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
                alt="Our Story"
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
            </div>
            
            {/* Secondary Image - Overlapping */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden md:block"
            >
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80"
                alt="Team at work"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -left-6 bg-gradient-to-br from-orange-500 to-amber-600 text-white p-6 rounded-2xl shadow-xl"
            >
              <div className="text-5xl font-bold mb-1">15+</div>
              <div className="text-orange-100 font-medium">Years of Excellence</div>
            </motion.div>

            {/* Decorative Element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-5 py-2 bg-orange-50 text-orange-600 rounded-full text-sm font-semibold mb-6 border border-orange-100">
              Our Story
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">
              FROM HUMBLE BEGINNINGS TO{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                INDUSTRY LEADERS
              </span>
            </h2>
            <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
              <p>
                Jandrup Group was founded with a simple vision: to deliver construction excellence that 
                transforms the Zimbabwean landscape. What started as a small team of dedicated craftsmen 
                has grown into one of the nation's most trusted construction companies.
              </p>
              <p>
                Over the years, we've expanded our services to include home renovation, masonry, 
                carpentry, cleaning services, and water delivery. Each new service maintains our 
                core commitment to quality and customer satisfaction.
              </p>
              <p>
                Today, we're proud to have completed over 500 projects across Zimbabwe, from luxury 
                residences in Borrowdale to commercial complexes in the heart of Harare.
              </p>
            </div>
            
            {/* Quick Features */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {[
                { icon: Building2, label: '500+ Projects', color: '#3b82f6' },
                { icon: Users, label: '50+ Team Members', color: '#8b5cf6' },
                { icon: Award, label: '98% Satisfaction', color: '#f59e0b' },
                { icon: TrendingUp, label: 'Growing Strong', color: '#10b981' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <item.icon size={20} style={{ color: item.color }} />
                  </div>
                  <span className="font-medium text-gray-700">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MissionVisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="group relative rounded-3xl overflow-hidden"
          >
            {/* Card Background Image */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/90 via-orange-500/85 to-amber-500/80" />
            </div>
            
            {/* Content */}
            <div className="relative p-10 min-h-[400px] flex flex-col justify-end">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 border border-white/30"
              >
                <Target size={32} className="text-white" />
              </motion.div>
              
              <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                OUR MISSION
              </h3>
              <p className="text-white/90 text-lg leading-relaxed">
                To deliver exceptional construction services that exceed client expectations, 
                built on a foundation of quality craftsmanship, integrity, and innovation. 
                We strive to be Zimbabwe's most trusted construction partner.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative rounded-3xl overflow-hidden"
          >
            {/* Card Background Image */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80"
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-cyan-800/85" />
            </div>
            
            {/* Content */}
            <div className="relative p-10 min-h-[400px] flex flex-col justify-end">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ type: 'spring', stiffness: 200, delay: 0.4 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 border border-white/30"
              >
                <Eye size={32} className="text-cyan-400" />
              </motion.div>
              
              <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                OUR VISION
              </h3>
              <p className="text-white/90 text-lg leading-relaxed">
                To be the leading construction company in Zimbabwe and beyond, recognized for 
                transforming communities through sustainable building practices and creating 
                lasting structures that inspire future generations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Values Section - Enhanced with Unique Colors

// Values Section - Hexagonal Grid
const ValuesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-brand-50 text-brand-600 rounded-full text-sm font-semibold mb-4">
            Our Values
          </span>
          <h2 
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
          >
            WHAT WE STAND FOR
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our core values guide every decision we make and every project we undertake
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = valueIcons[value.icon] || CheckCircle;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-gray-50 rounded-2xl p-8 hover:bg-brand-50 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-100 rounded-xl group-hover:bg-brand-200 transition-colors">
                    <IconComponent size={28} className="text-brand-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Team Section - Card Grid
const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-brand-50 text-brand-600 rounded-full text-sm font-semibold mb-4">
            Our Team
          </span>
          <h2 
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
          >
            MEET THE EXPERTS
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our leadership team brings decades of combined experience in construction and project management
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover-lift"
            >
              <div className="aspect-square bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
                <Users size={80} className="text-white/30" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-brand-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Timeline Section
const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const milestones = [
    { year: '2009', title: 'Founded', description: 'Jandrup Group established in Harare' },
    { year: '2012', title: 'First Major Project', description: 'Completed first commercial building' },
    { year: '2015', title: 'Expansion', description: 'Added renovation and cleaning services' },
    { year: '2018', title: '100 Projects', description: 'Celebrated 100th completed project' },
    { year: '2021', title: 'Water Delivery', description: 'Launched water delivery service' },
    { year: '2024', title: '500+ Projects', description: 'Surpassed 500 completed projects' },
  ];

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-brand-50 text-brand-600 rounded-full text-sm font-semibold mb-4">
            Our Journey
          </span>
          <h2 
            className="text-4xl sm:text-5xl font-bold text-gray-900"
          >
            MILESTONES
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-200 hidden md:block" />

          <div className="space-y-8 md:space-y-0">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative md:flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-gray-50 rounded-2xl p-6 inline-block">
                    <span className="text-brand-600 font-bold text-2xl">{milestone.year}</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2">{milestone.title}</h3>
                    <p className="text-gray-600 mt-1">{milestone.description}</p>
                  </div>
                </div>
                {/* Timeline Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-600 rounded-full hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// CTA Section
const AboutCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-r from-brand-700 to-brand-600 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            JOIN THE JANDRUP FAMILY
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Whether you're looking to build your dream project or join our team, 
            we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-brand-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              Start a Project <ArrowRight />
            </Link>
            <Link
              to="/careers"
              className="px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              View Careers
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
