
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');

  const content = {
    ar: {
      title: 'الجولات الافتراضية العقارية',
      logo: '360',
      menuItems: [
        { name: 'الرئيسية', href: '#home' },
        { name: 'أعمالنا', href: '#portfolio' },
        { name: 'خدماتنا', href: '#services' },
        { name: 'من نحن', href: '#about' },
        { name: 'تواصل معنا', href: '#contact' },
      ],
      cta: 'اطلب عرض سعر',
      switchTo: 'English'
    },
    en: {
      title: 'Virtual Property Tours',
      logo: '360',
      menuItems: [
        { name: 'Home', href: '#home' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
      ],
      cta: 'Get Quote',
      switchTo: 'العربية'
    }
  };

  const toggleLanguage = () => {
    const newLang = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.body.className = newLang === 'ar' ? 'font-cairo' : 'font-montserrat';
    
    // Dispatch custom event for other components to listen to
    window.dispatchEvent(new CustomEvent('languageChange', { detail: newLang }));
  };

  const currentContent = content[language];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-beige/95 backdrop-blur-md border-b border-light-grey">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-deep-teal rounded-lg flex items-center justify-center">
              <span className="text-warm-beige font-bold text-sm sm:text-xl">{currentContent.logo}</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl font-bold text-charcoal">
                {currentContent.title}
              </h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 rtl:space-x-reverse">
            {currentContent.menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-charcoal hover:text-deep-teal transition-colors duration-300 font-medium text-sm xl:text-base"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Language Toggle & CTA */}
          <div className="flex items-center space-x-3 sm:space-x-4 rtl:space-x-reverse">
            <button
              onClick={toggleLanguage}
              className="text-xs sm:text-sm text-charcoal hover:text-deep-teal transition-colors whitespace-nowrap"
            >
              {currentContent.switchTo}
            </button>
            
            <Button className="bg-deep-teal hover:bg-deep-teal/90 text-warm-beige px-3 sm:px-6 py-2 text-xs sm:text-sm">
              {currentContent.cta}
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 sm:w-6 h-0.5 bg-charcoal transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`block w-5 sm:w-6 h-0.5 bg-charcoal mt-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-5 sm:w-6 h-0.5 bg-charcoal mt-1 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 sm:mt-6 pb-4 sm:pb-6 border-t border-light-grey pt-4 sm:pt-6">
            <div className="flex flex-col space-y-3 sm:space-y-4">
              {currentContent.menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-charcoal hover:text-deep-teal transition-colors duration-300 font-medium py-2 text-sm sm:text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
