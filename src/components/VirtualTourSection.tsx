
import { useState, useEffect } from 'react';

const VirtualTourSection = () => {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');

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
    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail);
    };

    window.addEventListener('languageChange', handleLanguageChange as EventListener);
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange as EventListener);
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
            <div id="F_bT4A587K">
              <script 
                type="text/javascript" 
                async 
                data-short="F_bT4A587K" 
                data-path="tours" 
                data-is-self-hosted="false" 
                src="https://app.cloudpano.com/public/shareScript.js"
              ></script>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTourSection;
