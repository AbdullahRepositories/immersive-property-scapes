
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesOverview = () => {
  const services = [
    {
      title: 'تصوير العقارات السكنية',
      description: 'نصوّر الفلل والشقق والمنازل وننشئ جولات افتراضية تفاعلية',
      features: ['تصوير 360 درجة', 'جولة تفاعلية', 'مخططات الأدوار', 'قياس المساحات'],
      image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=600&q=80',
      icon: '🏠'
    },
    {
      title: 'تصوير الفنادق والمنتجعات',
      description: 'جولات افتراضية للغرف والأجنحة والمرافق لجذب النزلاء',
      features: ['غرف وأجنحة', 'مطاعم ومرافق', 'مناطق ترفيهية', 'حجز مباشر'],
      image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=600&q=80',
      icon: '🏨'
    },
    {
      title: 'العقارات التجارية',
      description: 'تصوير المكاتب والمحلات والمرافق التجارية بجودة عالية',
      features: ['مكاتب ومحلات', 'مراكز تسوق', 'مستودعات', 'مساحات مكتبية'],
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80',
      icon: '🏢'
    },
    {
      title: 'خدمات إضافية',
      description: 'خدمات متكاملة لإبراز عقارك بأفضل صورة ممكنة',
      features: ['تصوير فوتوغرافي', 'فيديو عقاري', 'تحرير احترافي', 'استضافة سحابية'],
      image: 'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&w=600&q=80',
      icon: '📸'
    }
  ];

  return (
    <section id="services" className="py-20 bg-light-grey">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
            خدمات التصوير والجولات الافتراضية
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            نصوّر عقارك الجاهز ونحوله إلى جولة افتراضية ثلاثية الأبعاد يستطيع العملاء تجربتها من أي مكان
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="hover-lift bg-white border-0 shadow-lg overflow-hidden animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 w-12 h-12 bg-deep-teal rounded-full flex items-center justify-center text-2xl">
                  {service.icon}
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-charcoal">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-charcoal/70 text-lg">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center space-x-2 rtl:space-x-reverse"
                    >
                      <div className="w-2 h-2 bg-deep-teal rounded-full"></div>
                      <span className="text-charcoal/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How It Works */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-charcoal mb-4">
              كيف نعمل؟
            </h3>
            <p className="text-xl text-charcoal/70">
              عملية بسيطة وفعّالة في ثلاث خطوات
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
            ].map((step, index) => (
              <div
                key={step.step}
                className="text-center animate-on-scroll"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="w-20 h-20 bg-deep-teal text-warm-beige rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h4 className="text-xl font-bold text-charcoal mb-4">{step.title}</h4>
                <p className="text-charcoal/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
