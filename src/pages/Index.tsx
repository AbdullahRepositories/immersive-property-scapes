
import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import VirtualTourSection from '@/components/VirtualTourSection';
import BeforeAfterShowcase from '@/components/BeforeAfterShowcase';
import PortfolioPreview from '@/components/PortfolioPreview';
import ServicesOverview from '@/components/ServicesOverview';
import ContactSection from '@/components/ContactSection';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Index = () => {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');

  const footerContent = {
    ar: {
      title: 'الجولات الافتراضية العقارية',
      description: 'نصوّر عقارك ونحوله إلى جولة افتراضية تفاعلية تمنح العملاء تجربة حقيقية للمكان',
      servicesTitle: 'خدماتنا',
      services: [
        'تصوير عقاري 360°',
        'جولات افتراضية تفاعلية',
        'تصوير فوتوغرافي احترافي',
        'مقاطع فيديو عقارية'
      ],
      contactTitle: 'تواصل معنا',
      phone: '+966 50 123 4567',
      email: 'info@virtual-tours.sa',
      workingHours: 'ساعات العمل: السبت - الخميس',
      workingTime: '9:00 ص - 6:00 م',
      copyright: '© 2024 الجولات الافتراضية العقارية. جميع الحقوق محفوظة.'
    },
    en: {
      title: 'Virtual Property Tours',
      description: 'We photograph your property and transform it into an interactive virtual tour that gives customers a real experience of the place',
      servicesTitle: 'Our Services',
      services: [
        '360° Property Photography',
        'Interactive Virtual Tours',
        'Professional Photography',
        'Property Videos'
      ],
      contactTitle: 'Contact Us',
      phone: '+966 50 123 4567',
      email: 'info@virtual-tours.sa',
      workingHours: 'Working Hours: Saturday - Thursday',
      workingTime: '9:00 AM - 6:00 PM',
      copyright: '© 2024 Virtual Property Tours. All rights reserved.'
    }
  };

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

    // Language change listener
    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail);
    };

    window.addEventListener('languageChange', handleLanguageChange as EventListener);

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
      window.removeEventListener('languageChange', handleLanguageChange as EventListener);
    };
  }, []);

  const currentFooterContent = footerContent[language];
  const isRTL = language === 'ar';

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
              <div className={`flex items-center ${isRTL ? 'space-x-4 space-x-reverse' : 'space-x-4'}`}>
                <div className="w-12 h-12 bg-deep-teal rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-warm-beige" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">{currentFooterContent.title}</h3>
              </div>
              <p className="text-warm-beige/70 leading-relaxed">
                {currentFooterContent.description}
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-bold">{currentFooterContent.servicesTitle}</h4>
              <ul className="space-y-2 text-warm-beige/70">
                {currentFooterContent.services.map((service, index) => (
                  <li key={index} className={`flex items-center ${isRTL ? 'space-x-2 space-x-reverse' : 'space-x-2'}`}>
                    <svg className="w-4 h-4 text-deep-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-bold">{currentFooterContent.contactTitle}</h4>
              <div className="space-y-3 text-warm-beige/70">
                <div className={`flex items-center ${isRTL ? 'space-x-3 space-x-reverse' : 'space-x-3'}`}>
                  <svg className="w-4 h-4 text-deep-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{currentFooterContent.phone}</span>
                </div>
                <div className={`flex items-center ${isRTL ? 'space-x-3 space-x-reverse' : 'space-x-3'}`}>
                  <svg className="w-4 h-4 text-deep-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{currentFooterContent.email}</span>
                </div>
                <div className={`flex items-start ${isRTL ? 'space-x-3 space-x-reverse' : 'space-x-3'}`}>
                  <svg className="w-4 h-4 text-deep-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p>{currentFooterContent.workingHours}</p>
                    <p>{currentFooterContent.workingTime}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-warm-beige/20 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-warm-beige/60">
            <p>{currentFooterContent.copyright}</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
