
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useState, useEffect } from 'react';

const ServicesOverview = () => {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');

  const content = {
    ar: {
      title: 'خدمات التصوير والجولات الافتراضية',
      subtitle: 'نصوّر عقارك الجاهز ونحوله إلى جولة افتراضية ثلاثية الأبعاد يستطيع العملاء تجربتها من أي مكان',
      services: [
        {
          title: 'تصوير العقارات السكنية',
          description: 'نصوّر الفلل والشقق والمنازل وننشئ جولات افتراضية تفاعلية',
          features: ['تصوير 360 درجة', 'جولة تفاعلية', 'مخططات الأدوار', 'قياس المساحات'],
          icon: '🏠'
        },
        {
          title: 'تصوير الفنادق والمنتجعات',
          description: 'جولات افتراضية للغرف والأجنحة والمرافق لجذب النزلاء',
          features: ['غرف وأجنحة', 'مطاعم ومرافق', 'مناطق ترفيهية', 'حجز مباشر'],
          icon: '🏨'
        },
        {
          title: 'العقارات التجارية',
          description: 'تصوير المكاتب والمحلات والمرافق التجارية بجودة عالية',
          features: ['مكاتب ومحلات', 'مراكز تسوق', 'مستودعات', 'مساحات مكتبية'],
          icon: '🏢'
        },
        {
          title: 'خدمات إضافية',
          description: 'خدمات متكاملة لإبراز عقارك بأفضل صورة ممكنة',
          features: ['تصوير فوتوغرافي', 'فيديو عقاري', 'تحرير احترافي', 'استضافة سحابية'],
          icon: '📸'
        }
      ],
      howItWorks: {
        title: 'كيف نعمل؟',
        subtitle: 'عملية بسيطة وفعّالة في ثلاث خطوات',
        steps: [
          {
            step: '01',
            title: 'حجز موعد التصوير',
            description: 'تواصل معنا لتحديد موعد مناسب لتصوير عقارك'
          },
          {
            step: '02',
            title: 'التصوير الاحترافي',
            description: 'نأتي إلى موقع العقار ونصوره بتقنية 360 درجة'
          },
          {
            step: '03',
            title: 'الجولة الافتراضية',
            description: 'تستلم الجولة الافتراضية جاهزة خلال 48 ساعة'
          }
        ]
      }
    },
    en: {
      title: 'Photography and Virtual Tour Services',
      subtitle: 'We photograph your ready property and transform it into a 3D virtual tour that customers can experience from anywhere',
      services: [
        {
          title: 'Residential Property Photography',
          description: 'We photograph villas, apartments, and houses and create interactive virtual tours',
          features: ['360° Photography', 'Interactive Tours', 'Floor Plans', 'Space Measurements'],
          icon: '🏠'
        },
        {
          title: 'Hotels and Resorts Photography',
          description: 'Virtual tours for rooms, suites, and facilities to attract guests',
          features: ['Rooms & Suites', 'Restaurants & Facilities', 'Entertainment Areas', 'Direct Booking'],
          icon: '🏨'
        },
        {
          title: 'Commercial Properties',
          description: 'Photographing offices, shops, and commercial facilities with high quality',
          features: ['Offices & Shops', 'Shopping Centers', 'Warehouses', 'Office Spaces'],
          icon: '🏢'
        },
        {
          title: 'Additional Services',
          description: 'Comprehensive services to showcase your property in the best possible way',
          features: ['Professional Photography', 'Property Video', 'Professional Editing', 'Cloud Hosting'],
          icon: '📸'
        }
      ],
      howItWorks: {
        title: 'How We Work?',
        subtitle: 'Simple and effective process in three steps',
        steps: [
          {
            step: '01',
            title: 'Book Photography Session',
            description: 'Contact us to schedule a suitable time to photograph your property'
          },
          {
            step: '02',
            title: 'Professional Photography',
            description: 'We come to the property location and photograph it with 360° technology'
          },
          {
            step: '03',
            title: 'Virtual Tour',
            description: 'You receive the ready virtual tour within 48 hours'
          }
        ]
      }
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

  const serviceImages = [
    'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&w=600&q=80'
  ];

  return (
    <section id="services" className="section-padding bg-light-grey">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-on-scroll">
          <h2 className="text-responsive-3xl font-bold text-charcoal mb-4 sm:mb-6">
            {currentContent.title}
          </h2>
          <p className="text-responsive-lg text-charcoal/70 max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {currentContent.services.map((service, index) => (
            <Card
              key={service.title}
              className="hover-lift bg-white border-0 shadow-lg overflow-hidden animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-32 sm:h-48 overflow-hidden">
                <img
                  src={serviceImages[index]}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-8 sm:w-12 h-8 sm:h-12 bg-deep-teal rounded-full flex items-center justify-center text-lg sm:text-2xl">
                  {service.icon}
                </div>
              </div>
              
              <CardHeader className="pb-2 sm:pb-4">
                <CardTitle className="text-lg sm:text-2xl text-charcoal">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-charcoal/70 text-sm sm:text-lg">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center space-x-2 rtl:space-x-reverse"
                    >
                      <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-deep-teal rounded-full flex-shrink-0"></div>
                      <span className="text-charcoal/80 text-xs sm:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How It Works */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-responsive-2xl font-bold text-charcoal mb-2 sm:mb-4">
              {currentContent.howItWorks.title}
            </h3>
            <p className="text-responsive-lg text-charcoal/70">
              {currentContent.howItWorks.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {currentContent.howItWorks.steps.map((step, index) => (
              <div
                key={step.step}
                className="text-center animate-on-scroll"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-deep-teal text-warm-beige rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-4 sm:mb-6">
                  {step.step}
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-charcoal mb-2 sm:mb-4">{step.title}</h4>
                <p className="text-charcoal/70 text-sm sm:text-base leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
