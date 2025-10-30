
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
          icon: (
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          )
        },
        {
          title: 'تصوير الفنادق والمنتجعات',
          description: 'جولات افتراضية للغرف والأجنحة والمرافق لجذب النزلاء',
          features: ['غرف وأجنحة', 'مطاعم ومرافق', 'مناطق ترفيهية', 'حجز مباشر'],
          icon: (
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          )
        },
        {
          title: 'العقارات التجارية',
          description: 'تصوير المكاتب والمحلات والمرافق التجارية بجودة عالية',
          features: ['مكاتب ومحلات', 'مراكز تسوق', 'مستودعات', 'مساحات مكتبية'],
          icon: (
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          )
        },
        {
          title: 'خدمات إضافية',
          description: 'خدمات متكاملة لإبراز عقارك بأفضل صورة ممكنة',
          features: ['تصوير فوتوغرافي', 'فيديو عقاري', 'تحرير احترافي', 'استضافة سحابية'],
          icon: (
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          )
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
          icon: (
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          )
        },
        {
          title: 'Hotels and Resorts Photography',
          description: 'Virtual tours for rooms, suites, and facilities to attract guests',
          features: ['Rooms & Suites', 'Restaurants & Facilities', 'Entertainment Areas', 'Direct Booking'],
          icon: (
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          )
        },
        {
          title: 'Commercial Properties',
          description: 'Photographing offices, shops, and commercial facilities with high quality',
          features: ['Offices & Shops', 'Shopping Centers', 'Warehouses', 'Office Spaces'],
          icon: (
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          )
        },
        {
          title: 'Additional Services',
          description: 'Comprehensive services to showcase your property in the best possible way',
          features: ['Professional Photography', 'Property Video', 'Professional Editing', 'Cloud Hosting'],
          icon: (
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2-2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          )
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
  const isRTL = language === 'ar';

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
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
                <div className={`absolute top-2 sm:top-4 ${isRTL ? 'right-2 sm:right-4' : 'left-2 sm:left-4'} w-10 sm:w-12 h-10 sm:h-12 bg-deep-teal text-warm-beige rounded-full flex items-center justify-center`}>
                  {service.icon}
                </div>
              </div>
              
              <CardHeader className="pb-2 sm:pb-4">
                <CardDescription className="text-charcoal/70 text-sm sm:text-base">
                  {service.description}
                </CardDescription>
                <CardTitle className="text-lg sm:text-xl text-charcoal">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className={`flex items-center ${isRTL ? 'space-x-2 space-x-reverse' : 'space-x-2'}`}
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
