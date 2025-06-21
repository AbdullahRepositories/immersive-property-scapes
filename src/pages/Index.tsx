
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import BeforeAfterShowcase from '@/components/BeforeAfterShowcase';
import PortfolioPreview from '@/components/PortfolioPreview';
import ServicesOverview from '@/components/ServicesOverview';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all elements with animation class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-warm-beige">
      <Navigation />
      <main>
        <HeroSection />
        <BeforeAfterShowcase />
        <PortfolioPreview />
        <ServicesOverview />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-charcoal text-warm-beige py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4">
                <div className="w-12 h-12 bg-deep-teal rounded-lg flex items-center justify-center">
                  <span className="text-warm-beige font-bold text-xl">360</span>
                </div>
                <h3 className="text-xl font-bold">الجولات الافتراضية العقارية</h3>
              </div>
              <p className="text-warm-beige/70 leading-relaxed">
                نصوّر عقارك ونحوله إلى جولة افتراضية تفاعلية تمنح العملاء تجربة حقيقية للمكان
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">خدماتنا</h4>
              <ul className="space-y-2 text-warm-beige/70">
                <li>تصوير عقاري 360°</li>
                <li>جولات افتراضية تفاعلية</li>
                <li>تصوير فوتوغرافي احترافي</li>
                <li>مقاطع فيديو عقارية</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">تواصل معنا</h4>
              <div className="space-y-2 text-warm-beige/70">
                <p>الهاتف: +966 50 123 4567</p>
                <p>البريد: info@virtual-tours.sa</p>
                <p>ساعات العمل: السبت - الخميس</p>
                <p>9:00 ص - 6:00 م</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-warm-beige/20 mt-8 pt-8 text-center text-warm-beige/60">
            <p>&copy; 2024 الجولات الافتراضية العقارية. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
