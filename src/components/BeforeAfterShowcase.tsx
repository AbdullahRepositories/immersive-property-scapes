
import { useState } from 'react';

const BeforeAfterShowcase = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section className="py-20 bg-light-grey">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
            شاهد التحول المذهل
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            من مخطط عادي إلى تجربة بصرية غامرة تجذب انتباه عملائك وتحفزهم على اتخاذ القرار
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div 
            className="relative h-96 md:h-[600px] rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize"
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* Before Image */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=1200&q=80"
                alt="Before - 2D Floor Plan"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 bg-charcoal/80 text-warm-beige px-4 py-2 rounded-lg font-semibold">
                قبل: المخطط الأساسي
              </div>
            </div>

            {/* After Image */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=1200&q=80"
                alt="After - 3D Visualization"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 right-6 bg-deep-teal text-warm-beige px-4 py-2 rounded-lg font-semibold">
                بعد: التصور ثلاثي الأبعاد
              </div>
            </div>

            {/* Slider Line */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-warm-beige shadow-lg cursor-ew-resize z-10"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-warm-beige rounded-full shadow-lg flex items-center justify-center border-4 border-deep-teal">
                <div className="flex space-x-1">
                  <div className="w-1 h-4 bg-deep-teal rounded"></div>
                  <div className="w-1 h-4 bg-deep-teal rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="text-center mt-8">
            <p className="text-charcoal/60 text-lg">
              اسحب الخط للمقارنة بين الصورتين
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterShowcase;
