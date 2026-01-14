import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title, 
  description, 
  keywords = [], 
  image = '/images/logo.png',
  type = 'website',
  noIndex = false 
}) => {
  const location = useLocation();
  const siteUrl = 'https://jandrupgroup.co.zw';
  const fullUrl = `${siteUrl}${location.pathname}`;
  const fullTitle = title ? `${title} | Jandrup Group` : 'Jandrup Group - Quality Construction Guaranteed';
  
  useEffect(() => {
    // Update document title
    document.title = fullTitle;
    
    // Update meta description
    updateMetaTag('description', description);
    
    // --- FIX START: Handle keywords safely (Array or String) ---
    let keywordString = '';
    if (Array.isArray(keywords)) {
      keywordString = keywords.join(', ');
    } else if (typeof keywords === 'string') {
      keywordString = keywords;
    }

    if (keywordString) {
      updateMetaTag('keywords', keywordString);
    }
    // --- FIX END ---
    
    // Open Graph tags
    updateMetaTag('og:title', fullTitle, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:url', fullUrl, 'property');
    updateMetaTag('og:image', `${siteUrl}${image}`, 'property');
    updateMetaTag('og:type', type, 'property');
    updateMetaTag('og:site_name', 'Jandrup Group', 'property');
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', 'name');
    updateMetaTag('twitter:title', fullTitle, 'name');
    updateMetaTag('twitter:description', description, 'name');
    updateMetaTag('twitter:image', `${siteUrl}${image}`, 'name');
    
    // Canonical URL
    updateCanonical(fullUrl);
    
    // Robots
    if (noIndex) {
      updateMetaTag('robots', 'noindex, nofollow');
    } else {
      updateMetaTag('robots', 'index, follow');
    }
    
    // Geo tags for local SEO
    updateMetaTag('geo.region', 'ZW-HA');
    updateMetaTag('geo.placename', 'Harare');
    updateMetaTag('geo.position', '-17.8252;31.0335');
    updateMetaTag('ICBM', '-17.8252, 31.0335');
    
  }, [fullTitle, description, keywords, image, fullUrl, type, noIndex]);
  
  const updateMetaTag = (name, content, attribute = 'name') => {
    if (!content) return;
    
    let element = document.querySelector(`meta[${attribute}="${name}"]`);
    
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attribute, name);
      document.head.appendChild(element);
    }
    
    element.setAttribute('content', content);
  };
  
  const updateCanonical = (url) => {
    let canonical = document.querySelector('link[rel="canonical"]');
    
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    
    canonical.setAttribute('href', url);
  };
  
  return null;
};

// Structured Data Component for Local Business
export const LocalBusinessSchema = () => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://jandrupgroup.co.zw",
      "name": "Jandrup Group",
      "image": "https://jandrupgroup.co.zw/images/logo.png",
      "description": "Zimbabwe's premier construction company delivering excellence in construction, renovation, cleaning services, and water delivery.",
      "url": "https://jandrupgroup.co.zw",
      "telephone": "+263774079678",
      "email": "info@jandrupgroup.co.zw",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "49 Dunstable Circle, Avonlea",
        "addressLocality": "Harare",
        "addressCountry": "ZW"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -17.8252,
        "longitude": 31.0335
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "07:00",
          "closes": "17:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "08:00",
          "closes": "13:00"
        }
      ],
      "sameAs": [
        "https://facebook.com/jandrupgroup",
        "https://linkedin.com/company/jandrupgroup",
        "https://instagram.com/jandrupgroup"
      ],
      "priceRange": "$$",
      "areaServed": {
        "@type": "City",
        "name": "Harare"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Construction Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Construction"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Home Renovation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Masonry & Concrete"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cleaning Services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Water Delivery"
            }
          }
        ]
      }
    };
    
    let script = document.querySelector('script[type="application/ld+json"]');
    
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    
    script.textContent = JSON.stringify(schema);
    
    return () => {
      if (script) {
        script.remove();
      }
    };
  }, []);
  
  return null;
};

export default SEO;