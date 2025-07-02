
import { useState, useEffect } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(progressInterval);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-warm-beige flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Logo Animation */}
        <div className="relative">
          <div className="w-24 h-24 bg-deep-teal rounded-2xl flex items-center justify-center animate-pulse">
            <svg className="w-12 h-12 text-warm-beige animate-spin" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          {/* Rotating rings */}
          <div className="absolute inset-0 border-4 border-deep-teal/20 rounded-2xl animate-ping"></div>
          <div className="absolute inset-2 border-2 border-deep-teal/40 rounded-xl animate-pulse"></div>
        </div>

        {/* Brand Text */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-charcoal animate-fade-in">
            الجولات الافتراضية العقارية
          </h1>
          <p className="text-sm text-charcoal/70 animate-fade-in" style={{animationDelay: '0.3s'}}>
            Virtual Property Tours
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto space-y-2">
          <div className="w-full bg-light-grey rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-deep-teal to-soft-gold transition-all duration-300 ease-out rounded-full"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
          <p className="text-xs text-charcoal/60">
            {Math.round(progress)}%
          </p>
        </div>

        {/* Loading Text */}
        <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
          <div className="flex space-x-1 rtl:space-x-reverse">
            <div className="w-2 h-2 bg-deep-teal rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-deep-teal rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-2 bg-deep-teal rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
          <span className="text-sm text-charcoal/70">جاري التحميل</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
