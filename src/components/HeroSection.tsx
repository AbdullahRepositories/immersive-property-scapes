
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroImages = [
    'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1920&q=80'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center">
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
              alt={`Architecture ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-warm-beige/80 via-warm-beige/60 to-warm-beige/40"></div>
          </div>
        ))}
      </div>

      {/* Geometric Overlay */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 right-20 w-64 h-64 border border-deep-teal/20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-40 left-40 w-32 h-32 bg-deep-teal/10 rotate-12 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-20 relative">
        <div className="max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-charcoal mb-6 leading-tight">
              <span className="block">حوّل عقارك</span>
              <span className="block gradient-text">إلى تجربة غامرة</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-charcoal/80 mb-8 max-w-2xl leading-relaxed">
              نقدم خدمات التصوير ثلاثي الأبعاد والجولات الافتراضية المتطورة 
              لتحويل عقارك إلى معرض رقمي يجذب العملاء ويسرّع عملية البيع والإيجار
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-deep-teal hover:bg-deep-teal/90 text-warm-beige px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                اكتشف خدماتنا
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-warm-beige px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                شاهد أعمالنا
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-deep-teal/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-deep-teal mb-2">200+</div>
                <div className="text-charcoal/70">مشروع منجز</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-deep-teal mb-2">95%</div>
                <div className="text-charcoal/70">رضا العملاء</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-deep-teal mb-2">40%</div>
                <div className="text-charcoal/70">زيادة في السرعة</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-deep-teal mb-2">24h</div>
                <div className="text-charcoal/70">وقت التسليم</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-deep-teal rounded-full flex justify-center">
            <div className="w-1 h-3 bg-deep-teal rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
