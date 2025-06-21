
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const PortfolioPreview = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', name: 'جميع الأعمال' },
    { id: 'villa', name: 'فلل' },
    { id: 'apartment', name: 'شقق' },
    { id: 'commercial', name: 'تجاري' },
    { id: 'hotel', name: 'فنادق' }
  ];

  const projects = [
    {
      id: 1,
      title: 'فيلا عصرية - الرياض',
      category: 'villa',
      image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=800&q=80',
      description: 'تصميم معماري حديث مع مساحات مفتوحة',
      tags: ['تصور ثلاثي الأبعاد', 'جولة افتراضية']
    },
    {
      id: 2,
      title: 'شقة فاخرة - جدة',
      category: 'apartment',
      image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=800&q=80',
      description: 'شقة سكنية بإطلالة بحرية مذهلة',
      tags: ['تصور ثلاثي الأبعاد', 'مخططات تفاعلية']
    },
    {
      id: 3,
      title: 'مجمع تجاري - الدمام',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80',
      description: 'مركز تسوق متعدد الطوابق',
      tags: ['رسوم متحركة', 'جولة افتراضية']
    },
    {
      id: 4,
      title: 'منتجع فندقي - المدينة',
      category: 'hotel',
      image: 'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&w=800&q=80',
      description: 'منتجع سياحي بطراز معاصر',
      tags: ['تصور ثلاثي الأبعاد', 'جولة افتراضية']
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-warm-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
            معرض أعمالنا
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto mb-12">
            استكشف مجموعة مختارة من مشاريعنا التي حولت مخططات عادية إلى تجارب بصرية غامرة
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group hover-lift bg-white rounded-2xl overflow-hidden shadow-lg animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-deep-teal text-warm-beige px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-2">
                  {project.title}
                </h3>
                <p className="text-charcoal/70 mb-4">
                  {project.description}
                </p>
                <Button
                  variant="outline"
                  className="border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-warm-beige w-full"
                >
                  عرض التفاصيل
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-deep-teal hover:bg-deep-teal/90 text-warm-beige px-8 py-4"
          >
            عرض جميع الأعمال
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
