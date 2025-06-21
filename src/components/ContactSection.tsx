
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const projectTypes = [
    'فيلا سكنية',
    'شقة',
    'مجمع سكني',
    'مشروع تجاري',
    'فندق أو منتجع',
    'أخرى'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "تم إرسال طلبك بنجاح!",
      description: "سنتواصل معك خلال 24 ساعة لمناقشة مشروعك",
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: ''
    });
    
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-warm-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
            ابدأ مشروعك اليوم
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            احصل على عرض سعر مخصص لمشروعك واكتشف كيف يمكننا تحويل عقارك إلى تجربة غامرة
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-xl border-0 bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-charcoal">اطلب عرض سعر مجاني</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-charcoal font-medium mb-2">
                    الاسم الكامل *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-charcoal font-medium mb-2">
                      البريد الإلكتروني *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-charcoal font-medium mb-2">
                      رقم الهاتف *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+966 5X XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-charcoal font-medium mb-2">
                    نوع المشروع *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-deep-teal"
                  >
                    <option value="">اختر نوع المشروع</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-charcoal font-medium mb-2">
                    تفاصيل المشروع
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="أخبرنا عن مشروعك، المساحة، والخدمات المطلوبة..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-deep-teal hover:bg-deep-teal/90 text-warm-beige py-4 text-lg font-semibold"
                >
                  {isSubmitting ? 'جاري الإرسال...' : 'احصل على عرض سعر مجاني'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-lg border-0 bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-charcoal mb-6">تواصل معنا مباشرة</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-deep-teal rounded-full flex items-center justify-center">
                      <span className="text-warm-beige text-xl">📞</span>
                    </div>
                    <div>
                      <div className="font-medium text-charcoal">الهاتف</div>
                      <div className="text-charcoal/70">+966 50 123 4567</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-deep-teal rounded-full flex items-center justify-center">
                      <span className="text-warm-beige text-xl">✉️</span>
                    </div>
                    <div>
                      <div className="font-medium text-charcoal">البريد الإلكتروني</div>
                      <div className="text-charcoal/70">info@immersive-props.sa</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-deep-teal rounded-full flex items-center justify-center">
                      <span className="text-warm-beige text-xl">⏰</span>
                    </div>
                    <div>
                      <div className="font-medium text-charcoal">ساعات العمل</div>
                      <div className="text-charcoal/70">السبت - الخميس: 9:00 ص - 6:00 م</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-deep-teal text-warm-beige">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">لماذا تختارنا؟</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="text-2xl">⚡</span>
                    <span>تسليم سريع خلال 24 ساعة</span>
                  </div>
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="text-2xl">🏆</span>
                    <span>جودة عالمية مضمونة</span>
                  </div>
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="text-2xl">💰</span>
                    <span>أسعار تنافسية</span>
                  </div>
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="text-2xl">🔄</span>
                    <span>مراجعات مجانية</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
