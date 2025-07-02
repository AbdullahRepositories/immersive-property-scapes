
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
        {/* 360° Camera Lens Animation */}
        <div className="relative">
          {/* Outer rotating ring representing 360° */}
          <div className="w-32 h-32 border-4 border-deep-teal/30 rounded-full animate-spin duration-3000">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-3 h-3 bg-deep-teal rounded-full"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-3 h-3 bg-deep-teal rounded-full"></div>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-3 h-3 bg-deep-teal rounded-full"></div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1 w-3 h-3 bg-deep-teal rounded-full"></div>
          </div>
          
          {/* Camera lens center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-charcoal rounded-full flex items-center justify-center shadow-lg">
              {/* Lens aperture blades */}
              <div className="w-16 h-16 relative">
                <div className="absolute inset-0 rounded-full border-2 border-deep-teal animate-pulse">
                  {/* Aperture blades */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-0.5 h-6 bg-deep-teal"
                      style={{
                        left: '50%',
                        top: '50%',
                        transformOrigin: '50% 0%',
                        transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                      }}
                    />
                  ))}
                </div>
                
                {/* Inner lens reflection */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-deep-teal/20 to-soft-gold/20 animate-pulse">
                  <div className="absolute top-1 left-1 w-2 h-2 bg-warm-beige/40 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 360° text indicator */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <span className="text-deep-teal font-bold text-xl animate-pulse">360°</span>
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
