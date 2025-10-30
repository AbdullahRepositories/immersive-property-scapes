
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const BeforeAfterShowcase = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const { language } = useLanguage();

  const content = {
    ar: {
      title: 'شاهد الفرق المذهل',
      subtitle: 'من صور عادية إلى جولة افتراضية تفاعلية تمنح عملاءك تجربة حقيقية لاستكشاف العقار',
      before: 'قبل: الصور العادية',
      after: 'بعد: الجولة الافتراضية',
      instruction: 'اسحب الخط للمقارنة بين الصورتين'
    },
    en: {
      title: 'See the Amazing Difference',
      subtitle: 'From regular photos to an interactive virtual tour that gives your customers a real experience of exploring the property',
      before: 'Before: Regular Photos',
      after: 'After: Virtual Tour',
      instruction: 'Drag the line to compare between the two images'
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const currentContent = content[language];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-light-grey">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-on-scroll">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-4 sm:mb-6">
            {currentContent.title}
          </h2>
          <p className="text-base sm:text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div 
            className="relative h-64 sm:h-96 md:h-[500px] lg:h-[600px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl cursor-ew-resize select-none"
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Before Image */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1600563438938-a42d098f3b04?auto=format&fit=crop&w=1200&q=80"
                alt="Before - Regular Photos"
                className="w-full h-full object-cover"
                draggable={false}
              />
              <div className="absolute top-3 sm:top-6 left-3 sm:left-6 bg-charcoal/80 text-warm-beige px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm">
                {currentContent.before}
              </div>
            </div>

            {/* After Image */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=1200&q=80"
                alt="After - Virtual Tour"
                className="w-full h-full object-cover"
                draggable={false}
              />
              <div className="absolute top-3 sm:top-6 right-3 sm:right-6 bg-deep-teal text-warm-beige px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm">
                {currentContent.after}
              </div>
            </div>

            {/* Slider Line */}
            <div 
              className="absolute top-0 bottom-0 w-0.5 sm:w-1 bg-warm-beige shadow-lg cursor-ew-resize z-10"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 bg-warm-beige rounded-full shadow-lg flex items-center justify-center border-2 sm:border-4 border-deep-teal">
                <div className="flex space-x-0.5 sm:space-x-1">
                  <div className="w-0.5 sm:w-1 h-2 sm:h-4 bg-deep-teal rounded"></div>
                  <div className="w-0.5 sm:w-1 h-2 sm:h-4 bg-deep-teal rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="text-center mt-4 sm:mt-8">
            <p className="text-charcoal/60 text-sm sm:text-lg">
              {currentContent.instruction}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterShowcase;
