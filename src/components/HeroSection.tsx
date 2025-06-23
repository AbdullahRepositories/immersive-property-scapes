
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  
  const heroImages = [
    'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1920&q=80'
  ];

  const content = {
    ar: {
      title1: 'صوّر عقارك',
      title2: 'واجعله جولة افتراضية',
      subtitle: 'نقوم بتصوير عقارك الجاهز باستخدام تقنيات متطورة وتحويله إلى جولة افتراضية ثلاثية الأبعاد يتمكن العملاء من خلالها من استكشاف المكان كأنهم بداخله',
      cta1: 'احجز جلسة تصوير',
      cta2: 'شاهد الجولات',
      stats: [
        { number: '300+', label: 'عقار مصوّر' },
        { number: '360°', label: 'جولة تفاعلية' },
        { number: '50%', label: 'زيادة في الاستفسارات' },
        { number: '48h', label: 'تسليم الجولة' }
      ]
    },
    en: {
      title1: 'Capture Your Property',
      title2: 'Make It a Virtual Tour',
      subtitle: 'We photograph your ready property using advanced techniques and transform it into a 3D virtual tour that allows customers to explore the space as if they were inside it',
      cta1: 'Book Photography Session',
      cta2: 'View Tours',
      stats: [
        { number: '300+', label: 'Properties Captured' },
        { number: '360°', label: 'Interactive Tours' },
        { number: '50%', label: 'Increase in Inquiries' },
        { number: '48h', label: 'Tour Delivery' }
      ]
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center pt-16 sm:pt-20">
      {/* Background Images with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-40' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Virtual Tour ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-warm-beige/80 via-warm-beige/60 to-warm-beige/40"></div>
          </div>
        ))}
      </div>

      {/* Geometric Overlay */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-10 sm:top-20 right-5 sm:right-20 w-32 sm:w-64 h-32 sm:h-64 border border-deep-teal/20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-20 sm:bottom-40 left-5 sm:left-40 w-16 sm:w-32 h-16 sm:h-32 bg-deep-teal/10 rotate-12 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 z-20 relative">
        <div className="max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-4 sm:mb-6 leading-tight">
              <span className="block">{currentContent.title1}</span>
              <span className="block gradient-text">{currentContent.title2}</span>
            </h1>
            
            <p className="text-base sm:text-xl md:text-2xl text-charcoal/80 mb-6 sm:mb-8 max-w-2xl leading-relaxed">
              {currentContent.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
              <Button 
                size="lg" 
                className="bg-deep-teal hover:bg-deep-teal/90 text-warm-beige px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
              >
                {currentContent.cta1}
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-warm-beige px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 w-full sm:w-auto"
              >
                {currentContent.cta2}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-deep-teal/20">
              {currentContent.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl sm:text-3xl font-bold text-deep-teal mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-charcoal/70 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-deep-teal rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-deep-teal rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
