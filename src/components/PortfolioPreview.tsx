
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const PortfolioPreview = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');

  const content = {
    ar: {
      title: 'معرض الجولات الافتراضية',
      subtitle: 'استكشف مجموعة من الجولات الافتراضية التي أنشأناها لعملائنا في مختلف أنواع العقارات',
      filters: [
        { id: 'all', name: 'جميع الأعمال' },
        { id: 'villa', name: 'فلل' },
        { id: 'apartment', name: 'شقق' },
        { id: 'hotel', name: 'فنادق' },
        { id: 'commercial', name: 'تجاري' }
      ],
      projects: [
        {
          title: 'فيلا فاخرة - الرياض',
          description: 'جولة افتراضية شاملة لفيلا من 4 غرف مع حديقة',
          tags: ['جولة 360°', 'مخطط تفاعلي']
        },
        {
          title: 'شقة عصرية - جدة',
          description: 'شقة 3 غرف بإطلالة بحرية مع جولة افتراضية',
          tags: ['تصوير 360°', 'قياس مساحات']
        },
        {
          title: 'جناح فندقي - المدينة',
          description: 'جناح فاخر مع جولة تفاعلية للنزلاء',
          tags: ['جولة فندقية', 'حجز مباشر']
        },
        {
          title: 'معرض تجاري - الدمام',
          description: 'معرض سيارات مع جولة افتراضية شاملة',
          tags: ['مساحة تجارية', 'عرض منتجات']
        }
      ],
      viewTour: 'مشاهدة الجولة',
      viewAll: 'عرض جميع الجولات'
    },
    en: {
      title: 'Virtual Tours Gallery',
      subtitle: 'Explore a collection of virtual tours we created for our clients across different types of properties',
      filters: [
        { id: 'all', name: 'All Work' },
        { id: 'villa', name: 'Villas' },
        { id: 'apartment', name: 'Apartments' },
        { id: 'hotel', name: 'Hotels' },
        { id: 'commercial', name: 'Commercial' }
      ],
      projects: [
        {
          title: 'Luxury Villa - Riyadh',
          description: 'Comprehensive virtual tour of a 4-bedroom villa with garden',
          tags: ['360° Tour', 'Interactive Floor Plan']
        },
        {
          title: 'Modern Apartment - Jeddah',
          description: '3-bedroom apartment with sea view and virtual tour',
          tags: ['360° Photography', 'Space Measurements']
        },
        {
          title: 'Hotel Suite - Medina',
          description: 'Luxury suite with interactive tour for guests',
          tags: ['Hotel Tour', 'Direct Booking']
        },
        {
          title: 'Commercial Showroom - Dammam',
          description: 'Car showroom with comprehensive virtual tour',
          tags: ['Commercial Space', 'Product Display']
        }
      ],
      viewTour: 'View Tour',
      viewAll: 'View All Tours'
    }
  };

  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail);
    };

    window.addEventListener('languageChange', handleLanguageChange as EventListener);
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange as EventListener);
    };
  }, []);

  const currentContent = content[language];

  const projects = [
    {
      id: 1,
      category: 'villa',
      image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      category: 'apartment',
      image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      category: 'hotel',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&w=800&q=80',
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-warm-beige">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-on-scroll">
          <h2 className="text-responsive-3xl font-bold text-charcoal mb-4 sm:mb-6">
            {currentContent.title}
          </h2>
          <p className="text-responsive-lg text-charcoal/70 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed">
            {currentContent.subtitle}
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            {currentContent.filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                  activeFilter === filter.id
                    ? 'bg-deep-teal text-warm-beige shadow-lg'
                    : 'bg-light-grey text-charcoal hover:bg-deep-teal/10'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group hover-lift bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-48 sm:h-64">
                <img
                  src={project.image}
                  alt={currentContent.projects[index].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {currentContent.projects[index].tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-deep-teal text-warm-beige px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-2">
                  {currentContent.projects[index].title}
                </h3>
                <p className="text-charcoal/70 mb-4 text-sm sm:text-base">
                  {currentContent.projects[index].description}
                </p>
                <Button
                  variant="outline"
                  className="border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-warm-beige w-full text-sm sm:text-base"
                >
                  {currentContent.viewTour}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-deep-teal hover:bg-deep-teal/90 text-warm-beige px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
          >
            {currentContent.viewAll}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
