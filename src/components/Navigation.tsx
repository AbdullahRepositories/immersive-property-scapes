import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    language,
    isRTL,
    toggleLanguage
  } = useLanguage();
  const content = {
    ar: {
      title: 'الجولات الافتراضية العقارية',
      logo: '360',
      menuItems: [{
        name: 'الرئيسية',
        href: '#home'
      }, {
        name: 'أعمالنا',
        href: '#portfolio'
      }, {
        name: 'خدماتنا',
        href: '#services'
      }, {
        name: 'من نحن',
        href: '#about'
      }, {
        name: 'تواصل معنا',
        href: '#contact'
      }],
      cta: 'اطلب عرض سعر',
      switchTo: 'English'
    },
    en: {
      title: 'Virtual Property Tours',
      logo: '360',
      menuItems: [{
        name: 'Home',
        href: '#home'
      }, {
        name: 'Portfolio',
        href: '#portfolio'
      }, {
        name: 'Services',
        href: '#services'
      }, {
        name: 'About',
        href: '#about'
      }, {
        name: 'Contact',
        href: '#contact'
      }],
      cta: 'Get Quote',
      switchTo: 'العربية'
    }
  };
  const currentContent = content[language];
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-beige/95 backdrop-blur-md border-b border-light-grey">
      <div className="container mx-auto container-padding py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className={`flex items-center gap-3`}>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-deep-teal rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-warm-beige" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl font-bold text-charcoal">
                {currentContent.title}
              </h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className={`hidden lg:flex items-center gap-8 xl:gap-10`}>
            {currentContent.menuItems.map(item => <a key={item.name} href={item.href} className="text-charcoal hover:text-deep-teal transition-colors duration-300 font-medium text-sm xl:text-base">
                {item.name}
              </a>)}
          </div>

          {/* Language Toggle & CTA */}
          <div className={`flex items-center gap-3 sm:gap-4`}>
            <button onClick={toggleLanguage} className="flex items-center text-xs sm:text-sm text-charcoal hover:text-deep-teal transition-colors whitespace-nowrap px-2 py-1 rounded-md hover:bg-light-grey">
              
              {currentContent.switchTo}
            </button>
            
            <Button className="bg-deep-teal hover:bg-deep-teal/90 text-warm-beige px-3 sm:px-6 py-2 text-xs sm:text-sm font-medium">
              {currentContent.cta}
            </Button>

            {/* Mobile Menu Toggle */}
            <button className="lg:hidden p-2 rounded-md hover:bg-light-grey transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              <div className="w-5 h-5 sm:w-6 sm:h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 sm:w-6 h-0.5 bg-charcoal transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`block w-5 sm:w-6 h-0.5 bg-charcoal mt-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-5 sm:w-6 h-0.5 bg-charcoal mt-1 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="lg:hidden mt-4 sm:mt-6 pb-4 sm:pb-6 border-t border-light-grey pt-4 sm:pt-6">
            <div className="flex flex-col space-y-3 sm:space-y-4">
              {currentContent.menuItems.map(item => <a key={item.name} href={item.href} className="text-charcoal hover:text-deep-teal transition-colors duration-300 font-medium py-2 text-sm sm:text-base px-2 rounded-md hover:bg-light-grey" onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </a>)}
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;