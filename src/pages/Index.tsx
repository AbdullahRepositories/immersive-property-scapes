
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import VirtualTourSection from '@/components/VirtualTourSection';
import BeforeAfterShowcase from '@/components/BeforeAfterShowcase';
import PortfolioPreview from '@/components/PortfolioPreview';
import ServicesOverview from '@/components/ServicesOverview';
import ContactSection from '@/components/ContactSection';
import WhatsAppFloat from '@/components/WhatsAppFloat';

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
      <main className="relative">
        <HeroSection />
        <VirtualTourSection />
        <BeforeAfterShowcase />
        <PortfolioPreview />
        <ServicesOverview />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-charcoal text-warm-beige section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="w-12 h-12 bg-deep-teal rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-warm-beige font-bold text-xl">360</span>
                </div>
                <h3 className="text-xl font-bold">الجولات الافتراضية العقارية</h3>
              </div>
              <p className="text-warm-beige/70 leading-relaxed">
                نصوّر عقارك ونحوله إلى جولة افتراضية تفاعلية تمنح العملاء تجربة حقيقية للمكان
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-bold">خدماتنا</h4>
              <ul className="space-y-2 text-warm-beige/70">
                <li className="flex items-center space-x-2 rtl:space-x-reverse">
                  <svg className="w-4 h-4 text-deep-teal flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>تصوير عقاري 360°</span>
                </li>
                <li className="flex items-center space-x-2 rtl:space-x-reverse">
                  <svg className="w-4 h-4 text-deep-teal flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>جولات افتراضية تفاعلية</span>
                </li>
                <li className="flex items-center space-x-2 rtl:space-x-reverse">
                  <svg className="w-4 h-4 text-deep-teal flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>تصوير فوتوغرافي احترافي</span>
                </li>
                <li className="flex items-center space-x-2 rtl:space-x-reverse">
                  <svg className="w-4 h-4 text-deep-teal flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>مقاطع فيديو عقارية</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-bold">تواصل معنا</h4>
              <div className="space-y-3 text-warm-beige/70">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg className="w-4 h-4 text-deep-teal flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                  </svg>
                  <span>+966 50 123 4567</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg className="w-4 h-4 text-deep-teal flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span>info@virtual-tours.sa</span>
                </div>
                <div className="flex items-start space-x-3 rtl:space-x-reverse">
                  <svg className="w-4 h-4 text-deep-teal flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                  <div>
                    <p>ساعات العمل: السبت - الخميس</p>
                    <p>9:00 ص - 6:00 م</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-warm-beige/20 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-warm-beige/60">
            <p>&copy; 2024 الجولات الافتراضية العقارية. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
