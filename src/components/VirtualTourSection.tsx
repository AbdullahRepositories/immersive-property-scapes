
import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const VirtualTourSection = () => {
  const { language } = useLanguage();

  const content = {
    ar: {
      title: 'جولة افتراضية تفاعلية',
      subtitle: 'استكشف هذا العقار من خلال جولة افتراضية تفاعلية بتقنية 360 درجة'
    },
    en: {
      title: 'Interactive Virtual Tour',
      subtitle: 'Explore this property through an interactive 360-degree virtual tour'
    }
  };

  useEffect(() => {
    // Ensure the CloudPano script loads properly
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.setAttribute('data-short', 'F_bT4A587K');
    script.setAttribute('data-path', 'tours');
    script.setAttribute('data-is-self-hosted', 'false');
    script.src = 'https://app.cloudpano.com/public/shareScript.js';
    
    const container = document.getElementById('F_bT4A587K');
    if (container) {
      // Clear any existing content
      container.innerHTML = '';
      container.appendChild(script);
    }

    return () => {
      // Cleanup
      if (container && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const currentContent = content[language];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-responsive-3xl font-bold text-charcoal mb-4 sm:mb-6">
            {currentContent.title}
          </h2>
          <p className="text-responsive-lg text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="max-w-6xl mx-auto animate-on-scroll">
          <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl bg-light-grey min-h-[500px]">
            <div 
              id="F_bT4A587K" 
              style={{ width: '100%', height: '500px', minHeight: '500px' }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTourSection;
