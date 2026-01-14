import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Building2, Users, Award, Clock } from 'lucide-react';

const EnhancedHero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const stats = [
    { value: '25+', label: 'Years Experience', icon: Clock },
    { value: '500+', label: 'Projects Completed', icon: Building2 },
    { value: '150+', label: 'Professional Workers', icon: Users },
    { value: '50+', label: 'Industry Awards', icon: Award },
  ];

  // Grid images - replace with your actual construction images
  const gridImages = [
    { src: '/construction-1.jpg', alt: 'Construction site overview' },
    { src: '/construction-2.jpg', alt: 'Building in progress' },
    { src: '/16.jpg', alt: 'Construction equipment' },
    { src: '/17.jpg', alt: 'Team at work' },
    { src: '/19.jpg', alt: 'Completed project' },
  ];

  // Dot pattern component
  const DotPattern = ({ className }) => (
    <div className={`grid grid-cols-6 gap-1.5 ${className}`}>
      {[...Array(24)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-brand-500/40"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 + i * 0.02, duration: 0.3 }}
        />
      ))}
    </div>
  );

  return (
    <section
      ref={heroRef}
      className="relative h-screen max-h-screen overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950"
    >
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gradient Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-brand-600/10 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-brand-500/5 via-transparent to-transparent" />

      {/* Main Content Container */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 lg:pt-24 lg:pb-12 h-full"
        style={{ opacity: heroOpacity }}
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center h-full">
          {/* Left Content */}
          <div className="order-2 lg:order-1 relative z-20">
            {/* Decorative Dots - Top */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-8 -left-4 hidden lg:block"
            >
              <DotPattern className="opacity-60" />
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-500/10 backdrop-blur-sm rounded-full border border-brand-500/30 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              <span className="text-brand-400 text-sm font-medium tracking-wide">
                Zimbabwe's Premier Construction Company
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-[1.1] tracking-tight"
            >
              Building{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600">
                  Dreams
                </span>
                <motion.svg
                  className="absolute -bottom-1 left-0 w-full h-3"
                  viewBox="0 0 120 12"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.9 }}
                >
                  <motion.path
                    d="M2 7 C 15 7, 20 3, 35 5 S 55 9, 70 6 S 90 2, 105 5 Q 115 7, 118 4"
                    stroke="url(#curl-gradient)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.9 }}
                  />
                  <defs>
                    <linearGradient id="curl-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#fb3c3cff" />
                      <stop offset="50%" stopColor="#f91616ff" />
                      <stop offset="100%" stopColor="#ea580c" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </span>
              ,
              <br />
              One Brick at
              <br />a Time
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg text-neutral-400 mb-6 max-w-md leading-relaxed"
            >
              With our team of skilled professionals, we transform your vision
              into reality, paying meticulous attention to every detail along
              the way.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <Link
                to="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-brand-500/30 hover:-translate-y-0.5"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start A Project
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-brand-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <Link
                to="/projects"
                className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-xl flex items-center gap-2 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-brand-500/20 flex items-center justify-center group-hover:bg-brand-500/30 transition-colors">
                  <Play size={14} className="text-brand-400 ml-0.5" fill="currentColor" />
                </div>
                Learn More
              </Link>
            </motion.div>

            {/* Quick Stats - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-6 lg:hidden"
            >
              {stats.slice(0, 2).map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-brand-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-neutral-500 text-xs">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="order-1 lg:order-2 relative">
            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -top-4 -right-4 w-24 h-24 border-2 border-brand-500/20 rounded-2xl hidden lg:block"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-8 -left-8 hidden lg:block"
            >
              <DotPattern className="opacity-40" />
            </motion.div>

            {/* Image Grid Container */}
            <motion.div
              className="relative grid grid-cols-3 gap-3 sm:gap-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Large Main Image */}
              <motion.div
                className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden aspect-[5/4]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{ scale: imageScale }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
                <img
                  src="/jandrup-1.png"
                  alt="Main construction project"
                  loading='eager'
                  className="w-full h-full object-cover"
                />
                {/* Floating Badge on Image */}
                <motion.div
                  className="absolute bottom-4 left-4 z-20 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-neutral-800 text-sm font-medium">
                      Currently Building
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Top Right Small Image */}
              <motion.div
                className="relative rounded-xl overflow-hidden aspect-square bg-brand-500/10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <img
                  src="/16.jpg"
                  alt="Construction detail"
                  loading='eager'
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-500/20 mix-blend-overlay" />
              </motion.div>

              {/* Bottom Right Small Image */}
              <motion.div
                className="relative rounded-xl overflow-hidden aspect-square bg-brand-600/10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <img
                  src="/19.jpg"
                  alt="Building progress"
                  loading='eager'
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Stat Cards - Desktop */}
              <motion.div
                className="absolute -right-2 top-1/4 z-30 hidden lg:block"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="bg-brand-500 text-white px-4 py-3 rounded-xl shadow-xl shadow-brand-500/30">
                  <div className="text-2xl font-bold">25+</div>
                  <div className="text-brand-100 text-xs">Years Experience</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -left-4 bottom-1/3 z-30 hidden lg:block"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              >
                <div className="bg-white text-neutral-900 px-4 py-3 rounded-xl shadow-xl">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-neutral-500 text-xs">Projects Done</div>
                </div>
              </motion.div>

              {/* Third Floating Card */}
              <motion.div
                className="absolute right-1/4 -bottom-3 z-30 hidden lg:block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <div className="bg-neutral-800/90 backdrop-blur-sm text-white px-4 py-3 rounded-xl border border-neutral-700/50">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-brand-500/20 flex items-center justify-center">
                      <Users className="w-4 h-4 text-brand-400" />
                    </div>
                    <div>
                      <div className="text-lg font-bold">150+</div>
                      <div className="text-neutral-400 text-[10px]">Pro Workers</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Stats Bar - Desktop */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-neutral-950 via-neutral-950/95 to-transparent pt-8 pb-4 hidden lg:block"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between border-t border-white/10 pt-4">
            <div className="flex items-center gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="group flex items-center gap-2 cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-500/20 group-hover:border-brand-500/30 transition-all duration-300">
                    <stat.icon className="w-4 h-4 text-neutral-400 group-hover:text-brand-400 transition-colors" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white group-hover:text-brand-400 transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-neutral-500 text-xs">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 text-neutral-500 text-sm">
              <a href="#" className="hover:text-brand-400 transition-colors">Facebook</a>
              <a href="#" className="hover:text-brand-400 transition-colors">Instagram</a>
              <a href="#" className="hover:text-brand-400 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 lg:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-brand-500 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Animated Background Lines */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 -left-20 w-[600px] h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent"
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-2/3 -right-20 w-[400px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{ x: ['200%', '-100%'] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    </section>
  );
};

export default EnhancedHero;