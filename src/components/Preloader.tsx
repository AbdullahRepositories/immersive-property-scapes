
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
        {/* Camera Creation Animation */}
        <div className="relative">
          {/* Camera Body */}
          <div className="relative">
            {/* Main camera body */}
            <div className="w-32 h-24 bg-charcoal rounded-lg shadow-2xl animate-pulse">
              {/* Camera top */}
              <div className="absolute -top-3 left-4 right-4 h-6 bg-charcoal rounded-t-lg"></div>
              
              {/* Viewfinder */}
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-charcoal rounded-t-md"></div>
              
              {/* Flash */}
              <div className="absolute -top-2 right-2 w-3 h-2 bg-soft-gold rounded-sm animate-pulse"></div>
              
              {/* Brand name area */}
              <div className="absolute top-2 left-3 right-3 h-2 bg-deep-teal/20 rounded"></div>
            </div>

            {/* Camera Lens - Main Focus */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {/* Outer lens ring */}
              <div className="w-20 h-20 bg-charcoal rounded-full flex items-center justify-center shadow-lg animate-spin duration-4000">
                {/* Lens markings */}
                <div className="absolute inset-0 rounded-full">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-0.5 h-2 bg-deep-teal/40"
                      style={{
                        left: '50%',
                        top: '0',
                        transformOrigin: '50% 40px',
                        transform: `translateX(-50%) rotate(${i * 30}deg)`,
                      }}
                    />
                  ))}
                </div>
                
                {/* Inner lens */}
                <div className="w-14 h-14 bg-gradient-to-br from-deep-teal/30 to-charcoal rounded-full flex items-center justify-center">
                  {/* Aperture blades */}
                  <div className="w-10 h-10 relative">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-4 bg-deep-teal rounded-full animate-pulse"
                        style={{
                          left: '50%',
                          top: '50%',
                          transformOrigin: '50% 0%',
                          transform: `translate(-50%, -50%) rotate(${i * 60}deg)`,
                          animationDelay: `${i * 0.1}s`,
                        }}
                      />
                    ))}
                    
                    {/* Center aperture */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-4 h-4 bg-charcoal rounded-full animate-pulse">
                        <div className="w-2 h-2 bg-soft-gold/30 rounded-full m-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Lens reflection */}
              <div className="absolute top-2 left-2 w-3 h-3 bg-warm-beige/60 rounded-full animate-pulse"></div>
            </div>

            {/* Camera controls */}
            <div className="absolute top-1 right-2 space-y-1">
              <div className="w-2 h-2 bg-deep-teal rounded-full animate-pulse"></div>
              <div className="w-2 h-1 bg-soft-gold/60 rounded"></div>
            </div>

            {/* Shutter button */}
            <div className="absolute -top-1 left-6 w-4 h-4 bg-deep-teal rounded-full animate-bounce"></div>
          </div>

          {/* Creating animation effect */}
          <div className="absolute -inset-4 border-2 border-deep-teal/20 rounded-2xl animate-ping"></div>
          
          {/* 360° indicator */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 border-2 border-deep-teal rounded-full animate-spin duration-2000">
                <div className="w-1 h-1 bg-deep-teal rounded-full mt-0.5 ml-0.5"></div>
              </div>
              <span className="text-deep-teal font-bold text-lg animate-pulse">360°</span>
            </div>
          </div>
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
