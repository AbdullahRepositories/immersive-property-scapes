import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
const ContactSection = () => {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    language,
    isRTL
  } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const content = {
    ar: {
      title: 'ابدأ مشروعك اليوم',
      subtitle: 'احصل على عرض سعر مخصص لمشروعك واكتشف كيف يمكننا تحويل عقارك إلى تجربة غامرة',
      formTitle: 'اطلب عرض سعر مجاني',
      fields: {
        name: 'الاسم الكامل *',
        namePlaceholder: 'أدخل اسمك الكامل',
        email: 'البريد الإلكتروني *',
        emailPlaceholder: 'your@email.com',
        phone: 'رقم الهاتف *',
        phonePlaceholder: '+966 5X XXX XXXX',
        projectType: 'نوع المشروع *',
        projectTypePlaceholder: 'اختر نوع المشروع',
        message: 'تفاصيل المشروع',
        messagePlaceholder: 'أخبرنا عن مشروعك، المساحة، والخدمات المطلوبة...'
      },
      projectTypes: ['فيلا سكنية', 'شقة', 'مجمع سكني', 'مشروع تجاري', 'فندق أو منتجع', 'أخرى'],
      submitButton: 'احصل على عرض سعر مجاني',
      submittingButton: 'جاري الإرسال...',
      contactTitle: 'تواصل معنا مباشرة',
      contactInfo: {
        phone: 'الهاتف',
        email: 'البريد الإلكتروني',
        hours: 'ساعات العمل',
        hoursValue: 'السبت - الخميس: 9:00 ص - 6:00 م'
      },
      whyChooseTitle: 'لماذا تختارنا؟',
      whyChoose: ['تسليم سريع خلال 24 ساعة', 'جودة عالمية مضمونة', 'أسعار تنافسية', 'مراجعات مجانية'],
      toastTitle: 'تم إرسال طلبك بنجاح!',
      toastDescription: 'سنتواصل معك خلال 24 ساعة لمناقشة مشروعك'
    },
    en: {
      title: 'Start Your Project Today',
      subtitle: 'Get a customized quote for your project and discover how we can transform your property into an immersive experience',
      formTitle: 'Request Free Quote',
      fields: {
        name: 'Full Name *',
        namePlaceholder: 'Enter your full name',
        email: 'Email Address *',
        emailPlaceholder: 'your@email.com',
        phone: 'Phone Number *',
        phonePlaceholder: '+966 5X XXX XXXX',
        projectType: 'Project Type *',
        projectTypePlaceholder: 'Select project type',
        message: 'Project Details',
        messagePlaceholder: 'Tell us about your project, space, and required services...'
      },
      projectTypes: ['Residential Villa', 'Apartment', 'Residential Complex', 'Commercial Project', 'Hotel or Resort', 'Other'],
      submitButton: 'Get Free Quote',
      submittingButton: 'Submitting...',
      contactTitle: 'Contact Us Directly',
      contactInfo: {
        phone: 'Phone',
        email: 'Email',
        hours: 'Working Hours',
        hoursValue: 'Saturday - Thursday: 9:00 AM - 6:00 PM'
      },
      whyChooseTitle: 'Why Choose Us?',
      whyChoose: ['Fast delivery within 24 hours', 'Guaranteed international quality', 'Competitive prices', 'Free revisions'],
      toastTitle: 'Request sent successfully!',
      toastDescription: 'We will contact you within 24 hours to discuss your project'
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    toast({
      title: currentContent.toastTitle,
      description: currentContent.toastDescription
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
  const currentContent = content[language];
  return <section id="contact" className="py-20 bg-warm-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
            {currentContent.title}
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-xl border-0 bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-charcoal text-justify">{currentContent.formTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-charcoal font-medium mb-2">
                    {currentContent.fields.name}
                  </label>
                  <Input name="name" value={formData.name} onChange={handleInputChange} required placeholder={currentContent.fields.namePlaceholder} className="w-full bg-cyan-700" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-charcoal font-medium mb-2">
                      {currentContent.fields.email}
                    </label>
                    <Input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder={currentContent.fields.emailPlaceholder} className="bg-cyan-700" />
                  </div>
                  <div>
                    <label className="block text-charcoal font-medium mb-2">
                      {currentContent.fields.phone}
                    </label>
                    <Input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required placeholder={currentContent.fields.phonePlaceholder} className="bg-cyan-700" />
                  </div>
                </div>

                <div>
                  <label className="block text-charcoal font-medium mb-2">
                    {currentContent.fields.projectType}
                  </label>
                  <select name="projectType" value={formData.projectType} onChange={handleInputChange} required className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-deep-teal">
                    <option value="">{currentContent.fields.projectTypePlaceholder}</option>
                    {currentContent.projectTypes.map(type => <option key={type} value={type}>
                        {type}
                      </option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-charcoal font-medium mb-2">
                    {currentContent.fields.message}
                  </label>
                  <Textarea name="message" value={formData.message} onChange={handleInputChange} rows={4} placeholder={currentContent.fields.messagePlaceholder} className="bg-cyan-700" />
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-deep-teal hover:bg-deep-teal/90 text-warm-beige py-4 text-lg font-semibold">
                  {isSubmitting ? currentContent.submittingButton : currentContent.submitButton}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-lg border-0 bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-charcoal mb-6">{currentContent.contactTitle}</h3>
                
                <div className="space-y-6">
                  <div className={`flex items-center gap-4`}>
                    <div className="w-12 h-12 bg-deep-teal rounded-full flex items-center justify-center">
                      <span className="text-warm-beige text-xl">📞</span>
                    </div>
                    <div>
                      <div className="font-medium text-charcoal">{currentContent.contactInfo.phone}</div>
                      <div className="text-charcoal/70">+966 50 123 4567</div>
                    </div>
                  </div>

                  <div className={`flex items-center gap-4`}>
                    <div className="w-12 h-12 bg-deep-teal rounded-full flex items-center justify-center">
                      <span className="text-warm-beige text-xl">✉️</span>
                    </div>
                    <div>
                      <div className="font-medium text-charcoal">{currentContent.contactInfo.email}</div>
                      <div className="text-charcoal/70">info@immersive-props.sa</div>
                    </div>
                  </div>

                  <div className={`flex items-center gap-4`}>
                    <div className="w-12 h-12 bg-deep-teal rounded-full flex items-center justify-center">
                      <span className="text-warm-beige text-xl">⏰</span>
                    </div>
                    <div>
                      <div className="font-medium text-charcoal">{currentContent.contactInfo.hours}</div>
                      <div className="text-charcoal/70">{currentContent.contactInfo.hoursValue}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-deep-teal text-warm-beige">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">{currentContent.whyChooseTitle}</h3>
                <div className="space-y-4">
                  {currentContent.whyChoose.map((item, index) => <div key={index} className={`flex items-center gap-3`}>
                      <span className="text-2xl text-center">
                        {index === 0 ? '⚡' : index === 1 ? '🏆' : index === 2 ? '💰' : '🔄'}
                      </span>
                      <span>{item}</span>
                    </div>)}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;