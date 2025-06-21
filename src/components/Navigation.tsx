
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');

  const menuItems = {
    ar: [
      { name: 'الرئيسية', href: '#home' },
      { name: 'أعمالنا', href: '#portfolio' },
      { name: 'خدماتنا', href: '#services' },
      { name: 'من نحن', href: '#about' },
      { name: 'تواصل معنا', href: '#contact' },
    ],
    en: [
      { name: 'Home', href: '#home' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Services', href: '#services' },
      { name: 'About', href: '#about' },
      { name: 'Contact', href: '#contact' },
    ]
  };

  const toggleLanguage = () => {
    const newLang = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.body.className = newLang === 'ar' ? 'font-cairo' : 'font-montserrat';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-beige/95 backdrop-blur-md border-b border-light-grey">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <div className="w-10 h-10 bg-deep-teal rounded-lg flex items-center justify-center">
              <span className="text-warm-beige font-bold text-xl">3D</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-charcoal">
                {language === 'ar' ? 'المناظر العقارية الغامرة' : 'Immersive Property Scapes'}
              </h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            {menuItems[language].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-charcoal hover:text-deep-teal transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Language Toggle & CTA */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <button
              onClick={toggleLanguage}
              className="text-sm text-charcoal hover:text-deep-teal transition-colors"
            >
              {language === 'ar' ? 'English' : 'العربية'}
            </button>
            
            <Button className="bg-deep-teal hover:bg-deep-teal/90 text-warm-beige px-6">
              {language === 'ar' ? 'اطلب عرض سعر' : 'Get Quote'}
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-6 h-0.5 bg-charcoal transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-charcoal mt-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-charcoal mt-1 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-light-grey pt-6">
            <div className="flex flex-col space-y-4">
              {menuItems[language].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-charcoal hover:text-deep-teal transition-colors duration-300 font-medium py-2"
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
