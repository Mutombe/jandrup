// Jandrup Group - Site Data & Content

export const companyInfo = {
  name: "Jandrup Group",
  tagline: "Built Strong. Built Right. Every Time.",
  description: "Zimbabwe's premier construction company delivering excellence in construction, renovation, cleaning services, and water delivery since our founding.",
  address: "49 Dunstable Circle, Avonlea, Harare, Zimbabwe",
  phone: "+263 77 407 9678",
  email: "info@jandrupgroup.co.zw",
  website: "jandrupgroup.co.zw",
  socialLinks: {
    facebook: "https://facebook.com/jandrupgroup",
    linkedin: "https://linkedin.com/company/jandrupgroup",
    instagram: "https://instagram.com/jandrupgroup",
    twitter: "https://twitter.com/jandrupgroup"
  },
  workingHours: {
    weekdays: "Monday - Friday: 7:00 AM - 5:00 PM",
    saturday: "Saturday: 8:00 AM - 1:00 PM",
    sunday: "Sunday: Closed"
  }
};

export const services = [
  {
    id: "construction",
    title: "Construction",
    shortDescription: "Complete construction services from foundation to finish",
    fullDescription: "From groundbreaking to grand opening, we deliver comprehensive construction solutions. Our experienced team handles residential, commercial, and industrial projects with precision and dedication to quality craftsmanship.",
    icon: "Building2",
    image: "/images/construction-hero.jpg",
    features: [
      "Residential Construction",
      "Commercial Buildings",
      "Industrial Facilities",
      "Foundation Work",
      "Structural Steel",
      "Project Management"
    ],
    stats: {
      projects: "200+",
      satisfaction: "98%",
      experience: "15+ Years"
    }
  },
  {
    id: "renovation",
    title: "Home Renovation",
    shortDescription: "Transform your space with expert renovation services",
    fullDescription: "We breathe new life into existing structures. Whether it's a kitchen remodel, bathroom upgrade, or complete home transformation, our renovation experts deliver stunning results that exceed expectations.",
    icon: "Hammer",
    image: "/images/renovation-services.jpg",
    features: [
      "Kitchen Remodeling",
      "Bathroom Renovation",
      "Interior & Exterior Work",
      "Room Additions",
      "Basement Finishing",
      "Flooring & Tiling"
    ],
    stats: {
      projects: "500+",
      satisfaction: "99%",
      experience: "15+ Years"
    }
  },
  {
    id: "masonry",
    title: "Masonry & Concrete",
    shortDescription: "Expert masonry and concrete work built to last",
    fullDescription: "Our skilled masons create durable, beautiful structures using traditional techniques and modern materials. From decorative stonework to structural concrete, we deliver lasting quality.",
    icon: "Layers",
    image: "/images/construction-hero.jpg",
    features: [
      "Brick & Block Work",
      "Stone Masonry",
      "Concrete Foundations",
      "Retaining Walls",
      "Decorative Concrete",
      "Paving & Driveways"
    ],
    stats: {
      projects: "350+",
      satisfaction: "97%",
      experience: "15+ Years"
    }
  },
  {
    id: "carpentry",
    title: "Framing & Carpentry",
    shortDescription: "Precision woodwork and structural framing",
    fullDescription: "Expert carpentry services from structural framing to custom finish work. Our craftsmen take pride in creating beautiful, functional woodwork that stands the test of time.",
    icon: "Wrench",
    image: "/images/renovation-services.jpg",
    features: [
      "Structural Framing",
      "Custom Cabinetry",
      "Deck Building",
      "Trim & Molding",
      "Door & Window Installation",
      "Custom Woodwork"
    ],
    stats: {
      projects: "400+",
      satisfaction: "98%",
      experience: "15+ Years"
    }
  },
  {
    id: "cleaning",
    title: "Cleaning Services",
    shortDescription: "Professional cleaning for homes and businesses",
    fullDescription: "Comprehensive cleaning solutions for residential and commercial properties. Our trained cleaning professionals use eco-friendly products and proven methods to deliver spotless results.",
    icon: "Sparkles",
    image: "/images/renovation-services.jpg",
    features: [
      "Post-Construction Cleaning",
      "Office Cleaning",
      "Residential Deep Clean",
      "Window Cleaning",
      "Carpet Cleaning",
      "Sanitization Services"
    ],
    stats: {
      clients: "150+",
      satisfaction: "99%",
      experience: "10+ Years"
    }
  },
  {
    id: "water-delivery",
    title: "Water Delivery",
    shortDescription: "Reliable water delivery when you need it",
    fullDescription: "Dependable water delivery services for construction sites, residential properties, and commercial establishments. We ensure timely delivery with clean, quality water.",
    icon: "Droplets",
    image: "/images/construction-hero.jpg",
    features: [
      "Construction Site Delivery",
      "Residential Delivery",
      "Commercial Supply",
      "Emergency Delivery",
      "Bulk Water Supply",
      "Swimming Pool Filling"
    ],
    stats: {
      deliveries: "1000+",
      satisfaction: "98%",
      experience: "8+ Years"
    }
  }
];

export const projects = [
  {
    id: 1,
    title: "Avondale Executive Residence",
    category: "Residential",
    location: "Avondale, Harare",
    year: "2024",
    description: "A stunning 5-bedroom luxury residence featuring modern architecture, premium finishes, and smart home integration.",
    image: "/images/construction-hero.jpg",
    featured: true,
    services: ["Construction", "Carpentry", "Renovation"]
  },
  {
    id: 2,
    title: "Borrowdale Corporate Office",
    category: "Commercial",
    location: "Borrowdale, Harare",
    year: "2024",
    description: "State-of-the-art office complex with sustainable design features, modern amenities, and flexible workspace solutions.",
    image: "/images/renovation-services.jpg",
    featured: true,
    services: ["Construction", "Masonry", "Cleaning"]
  },
  {
    id: 3,
    title: "Highlands Shopping Centre",
    category: "Commercial",
    location: "Highlands, Harare",
    year: "2023",
    description: "Modern retail complex featuring 25 shops, ample parking, and contemporary architectural design.",
    image: "/images/construction-hero.jpg",
    featured: true,
    services: ["Construction", "Masonry", "Carpentry"]
  },
  {
    id: 4,
    title: "Mount Pleasant Villa Renovation",
    category: "Renovation",
    location: "Mount Pleasant, Harare",
    year: "2024",
    description: "Complete transformation of a colonial-era villa into a modern family home while preserving its historic charm.",
    image: "/images/renovation-services.jpg",
    featured: false,
    services: ["Renovation", "Carpentry", "Cleaning"]
  },
  {
    id: 5,
    title: "Chisipite Industrial Warehouse",
    category: "Industrial",
    location: "Chisipite, Harare",
    year: "2023",
    description: "Large-scale industrial warehouse with modern logistics capabilities and sustainable construction practices.",
    image: "/images/construction-hero.jpg",
    featured: false,
    services: ["Construction", "Masonry", "Concrete"]
  },
  {
    id: 6,
    title: "Greendale Community Centre",
    category: "Public",
    location: "Greendale, Harare",
    year: "2023",
    description: "Multi-purpose community facility featuring event spaces, sports facilities, and recreational areas.",
    image: "/images/renovation-services.jpg",
    featured: true,
    services: ["Construction", "Renovation", "Cleaning"]
  }
];

export const stats = [
  { value: "500+", label: "Projects Completed", icon: "CheckCircle" },
  { value: "15+", label: "Years Experience", icon: "Calendar" },
  { value: "98%", label: "Client Satisfaction", icon: "Heart" },
  { value: "50+", label: "Expert Team Members", icon: "Users" }
];

export const testimonials = [
  {
    id: 1,
    name: "Michael Chigwedere",
    role: "Property Developer",
    company: "Harare Properties Ltd",
    content: "Jandrup Group transformed our vision into reality. Their attention to detail and commitment to quality is unmatched in Zimbabwe. Highly recommended for any construction project.",
    rating: 5,
    image: null
  },
  {
    id: 2,
    name: "Sarah Moyo",
    role: "Homeowner",
    company: "Borrowdale",
    content: "The renovation of our family home exceeded all expectations. The team was professional, punctual, and delivered exceptional craftsmanship. Our home has never looked better!",
    rating: 5,
    image: null
  },
  {
    id: 3,
    name: "David Mukwena",
    role: "CEO",
    company: "Mukwena Enterprises",
    content: "We've partnered with Jandrup Group on multiple commercial projects. Their reliability, expertise, and dedication to deadlines make them our go-to construction partner.",
    rating: 5,
    image: null
  },
  {
    id: 4,
    name: "Grace Ndlovu",
    role: "Facilities Manager",
    company: "Zimbabwe Mining Corp",
    content: "Their cleaning and maintenance services keep our facilities in pristine condition. Professional team, excellent results, competitive pricing. A pleasure to work with.",
    rating: 5,
    image: null
  }
];

export const team = [
  {
    name: "James Jandrup",
    role: "Founder & CEO",
    bio: "With over 20 years in construction, James founded Jandrup Group with a vision to deliver excellence in every project.",
    image: null
  },
  {
    name: "Peter Ncube",
    role: "Operations Director",
    bio: "Peter oversees all project operations, ensuring quality standards and timely delivery across all divisions.",
    image: null
  },
  {
    name: "Mary Chirume",
    role: "Finance Director",
    bio: "Mary manages the financial operations, ensuring sustainable growth and excellent client value.",
    image: null
  },
  {
    name: "Thomas Banda",
    role: "Head of Construction",
    bio: "Thomas leads our construction team with 15+ years of experience in residential and commercial projects.",
    image: null
  }
];

export const careers = [
  {
    id: 1,
    title: "Senior Site Engineer",
    department: "Construction",
    type: "Full-time",
    location: "Harare",
    experience: "5+ years",
    description: "Lead construction projects from planning to completion, ensuring quality standards and safety compliance.",
    requirements: [
      "Bachelor's degree in Civil Engineering",
      "5+ years construction experience",
      "Project management skills",
      "Valid driver's license",
      "Strong communication skills"
    ],
    benefits: [
      "Competitive salary",
      "Medical aid",
      "Performance bonuses",
      "Professional development",
      "Company vehicle"
    ]
  },
  {
    id: 2,
    title: "Project Manager",
    department: "Operations",
    type: "Full-time",
    location: "Harare",
    experience: "7+ years",
    description: "Manage multiple construction projects, coordinate teams, and ensure client satisfaction.",
    requirements: [
      "Degree in Construction Management or related field",
      "7+ years project management experience",
      "PMP certification preferred",
      "Excellent leadership skills",
      "Strong analytical abilities"
    ],
    benefits: [
      "Competitive salary",
      "Medical aid",
      "Performance bonuses",
      "Leadership training",
      "Company vehicle"
    ]
  },
  {
    id: 3,
    title: "Skilled Mason",
    department: "Construction",
    type: "Full-time",
    location: "Harare",
    experience: "3+ years",
    description: "Perform quality masonry work including brick laying, plastering, and concrete work.",
    requirements: [
      "Trade certificate in Masonry",
      "3+ years practical experience",
      "Knowledge of building codes",
      "Physical fitness",
      "Teamwork abilities"
    ],
    benefits: [
      "Competitive wages",
      "Medical aid",
      "Safety equipment provided",
      "Skills training",
      "Overtime opportunities"
    ]
  },
  {
    id: 4,
    title: "Administrative Assistant",
    department: "Administration",
    type: "Full-time",
    location: "Harare",
    experience: "2+ years",
    description: "Provide administrative support to the management team and handle client communications.",
    requirements: [
      "Diploma in Business Administration",
      "2+ years office experience",
      "Proficient in MS Office",
      "Excellent communication skills",
      "Organizational abilities"
    ],
    benefits: [
      "Competitive salary",
      "Medical aid",
      "Training opportunities",
      "Flexible hours",
      "Career growth"
    ]
  }
];

export const values = [
  {
    title: "Quality Excellence",
    description: "We never compromise on quality. Every project receives our full attention and commitment to excellence.",
    icon: "Award"
  },
  {
    title: "Integrity",
    description: "Honesty and transparency guide every interaction with clients, partners, and team members.",
    icon: "Shield"
  },
  {
    title: "Innovation",
    description: "We embrace modern techniques and technologies to deliver better results for our clients.",
    icon: "Lightbulb"
  },
  {
    title: "Safety First",
    description: "The safety of our team and clients is paramount in everything we do.",
    icon: "HardHat"
  },
  {
    title: "Client Focus",
    description: "Your satisfaction is our success. We listen, understand, and deliver beyond expectations.",
    icon: "Heart"
  },
  {
    title: "Sustainability",
    description: "We build with the future in mind, using sustainable practices and materials where possible.",
    icon: "Leaf"
  }
];

export const faqItems = [
  {
    question: "What areas do you serve?",
    answer: "We primarily serve the Greater Harare area including Avondale, Borrowdale, Mount Pleasant, Highlands, Greendale, and surrounding suburbs. For larger projects, we can extend our services nationwide."
  },
  {
    question: "How do I get a quote for my project?",
    answer: "Simply contact us via phone, email, or through our website contact form. We'll schedule a site visit to assess your needs and provide a detailed, no-obligation quote within 48 hours."
  },
  {
    question: "Do you offer warranties on your work?",
    answer: "Yes, we provide comprehensive warranties on all our construction and renovation work. Warranty periods vary by service type and are clearly outlined in our contracts."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. A typical home renovation might take 4-8 weeks, while new construction can range from 3-12 months. We provide detailed timelines during the quotation process."
  },
  {
    question: "Are you fully licensed and insured?",
    answer: "Absolutely. Jandrup Group is fully licensed, registered, and carries comprehensive insurance coverage for all our services, giving you complete peace of mind."
  },
  {
    question: "Can you work within my budget?",
    answer: "We work with clients across various budget ranges. Our team will help you prioritize needs and find creative solutions to achieve your goals within your budget constraints."
  }
];

export const privacyPolicy = {
  lastUpdated: "January 2025",
  content: `
    <h3>1. Information We Collect</h3>
    <p>We collect information you provide directly, including name, email, phone number, and project details when you contact us or request a quote.</p>
    
    <h3>2. How We Use Your Information</h3>
    <p>We use collected information to respond to inquiries, provide quotes, manage projects, and improve our services. We may also send relevant updates about our services with your consent.</p>
    
    <h3>3. Information Sharing</h3>
    <p>We do not sell or rent your personal information. We may share information with trusted partners who assist in our operations, under strict confidentiality agreements.</p>
    
    <h3>4. Data Security</h3>
    <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.</p>
    
    <h3>5. Your Rights</h3>
    <p>You have the right to access, correct, or delete your personal information. Contact us at info@jandrupgroup.co.zw to exercise these rights.</p>
    
    <h3>6. Contact Us</h3>
    <p>For privacy-related inquiries, contact us at info@jandrupgroup.co.zw or call +263 77 407 9678.</p>
  `
};

export const cookiePolicy = {
  lastUpdated: "January 2025",
  content: `
    <h3>What Are Cookies</h3>
    <p>Cookies are small text files stored on your device when you visit our website. They help us provide a better browsing experience.</p>
    
    <h3>How We Use Cookies</h3>
    <p>We use cookies to remember your preferences, understand how you use our site, and improve our services. This includes essential cookies for site functionality and analytics cookies to understand visitor behavior.</p>
    
    <h3>Types of Cookies We Use</h3>
    <p><strong>Essential Cookies:</strong> Required for basic site functionality.</p>
    <p><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site.</p>
    <p><strong>Preference Cookies:</strong> Remember your settings and preferences.</p>
    
    <h3>Managing Cookies</h3>
    <p>You can control cookies through your browser settings. Note that disabling certain cookies may affect site functionality.</p>
    
    <h3>Contact Us</h3>
    <p>For questions about our cookie policy, contact info@jandrupgroup.co.zw.</p>
  `
};

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" }
];
