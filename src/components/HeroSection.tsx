import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const {
    language,
    isRTL
  } = useLanguage();
  const heroImages = ['https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=1920&q=80', 'https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=1920&q=80', 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1920&q=80'];
  const content = {
    ar: {
      title1: 'صوّر عقارك',
      title2: 'واجعله جولة افتراضية',
      subtitle: 'نقوم بتصوير عقارك الجاهز باستخدام تقنيات متطورة وتحويله إلى جولة افتراضية ثلاثية الأبعاد يتمكن العملاء من خلالها من استكشاف المكان كأنهم بداخله',
      cta1: 'احجز جلسة تصوير',
      cta2: 'شاهد الجولات',
      stats: [{
        number: '300+',
        label: 'عقار مصوّر',
        icon: 'home'
      }, {
        number: '360°',
        label: 'جولة تفاعلية',
        icon: 'rotation'
      }, {
        number: '50%',
        label: 'زيادة في الاستفسارات',
        icon: 'trending'
      }, {
        number: '48h',
        label: 'تسليم الجولة',
        icon: 'clock'
      }]
    },
    en: {
      title1: 'Capture Your Property',
      title2: 'Make It a Virtual Tour',
      subtitle: 'We photograph your ready property using advanced techniques and transform it into a 3D virtual tour that allows customers to explore the space as if they were inside it',
      cta1: 'Book Photography Session',
      cta2: 'View Tours',
      stats: [{
        number: '300+',
        label: 'Properties Captured',
        icon: 'home'
      }, {
        number: '360°',
        label: 'Interactive Tours',
        icon: 'rotation'
      }, {
        number: '50%',
        label: 'Increase in Inquiries',
        icon: 'trending'
      }, {
        number: '48h',
        label: 'Tour Delivery',
        icon: 'clock'
      }]
    }
  };
  const getStatIcon = (iconType: string) => {
    switch (iconType) {
      case 'home':
        return <svg className="w-4 h-4 text-deep-teal/60 mb-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>;
      case 'rotation':
        return <svg className="w-4 h-4 text-deep-teal/60 mb-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z" />
          </svg>;
      case 'trending':
        return <svg className="w-4 h-4 text-deep-teal/60 mb-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
          </svg>;
      case 'clock':
        return <svg className="w-4 h-4 text-deep-teal/60 mb-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
            <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
          </svg>;
      default:
        return null;
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const currentContent = content[language];
  return <section id="home" className="min-h-screen relative overflow-hidden flex items-center pt-20 sm:pt-24">
      {/* Background Images with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-40' : 'opacity-0'}`}>
            <img src={image} alt={`Virtual Tour ${index + 1}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-l from-warm-beige/80 via-warm-beige/60 to-warm-beige/40"></div>
          </div>)}
      </div>

      {/* Geometric Overlay */}
      <div className="absolute inset-0 z-10">
        <div className={`absolute top-10 sm:top-20 w-32 sm:w-64 h-32 sm:h-64 border border-deep-teal/20 rotate-45 animate-pulse ${isRTL ? 'left-5 sm:left-20' : 'right-5 sm:right-20'}`}></div>
        <div className={`absolute bottom-20 sm:bottom-40 w-16 sm:w-32 h-16 sm:h-32 bg-deep-teal/10 rotate-12 animate-pulse ${isRTL ? 'right-5 sm:right-40' : 'left-5 sm:left-40'}`}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto container-padding z-20 relative">
        <div className={`max-w-4xl mx-auto ${isRTL ? 'lg:mr-0' : 'lg:ml-0'}`}>
          <div className={`animate-fade-in text-center ${isRTL ? 'lg:text-right' : 'lg:text-left'}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-charcoal mb-4 sm:mb-6 leading-tight">
              <span className="block text-right">{currentContent.title1}</span>
              <span className="block gradient-text py-[8px] text-6xl text-right">{currentContent.title2}</span>
            </h1>
            
            <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-charcoal/80 mb-6 sm:mb-8 max-w-2xl mx-auto ${isRTL ? 'lg:mr-0' : 'lg:ml-0'} leading-relaxed px-4 sm:px-0`}>
              {currentContent.subtitle}
            </p>

            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center ${isRTL ? 'lg:justify-end' : 'lg:justify-start'}`}>
              <Button size="lg" className="bg-deep-teal hover:bg-deep-teal/90 text-warm-beige px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto min-h-[48px]">
                {currentContent.cta1}
              </Button>
              
              <Button size="lg" variant="outline" className="border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-warm-beige px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 w-full sm:w-auto min-h-[48px]">
                {currentContent.cta2}
              </Button>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 border-t border-deep-teal/20 max-w-4xl mx-auto ${isRTL ? 'lg:mr-0' : 'lg:ml-0'}`}>
              {currentContent.stats.map((stat, index) => <div key={index} className="text-center p-4 rounded-lg bg-warm-beige/50 backdrop-blur-sm">
                  <div className="flex justify-center">
                    {getStatIcon(stat.icon)}
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-deep-teal mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-charcoal/70 leading-tight">{stat.label}</div>
                </div>)}
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
    </section>;
};
export default HeroSection;