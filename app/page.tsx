import Image from "next/image"
import Link from "next/link"
import { CalendarDays, Car, CheckCircle, CreditCard, MapPin, Phone, Shield, Star, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CarBookingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="bg-white py-4 border-b sticky top-0 z-10">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Car className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">كار رينتال</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              الرئيسية
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              السيارات
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              كيفية الحجز
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              عن الشركة
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              اتصل بنا
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Phone className="h-4 w-4 ml-2" />
              اتصل بنا
            </Button>
            <Button size="sm">احجز الآن</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-24">
          <div className="container flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 text-right space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">احجز سيارتك بكل سهولة وأمان</h1>
              <p className="text-lg text-muted-foreground">
                نقدم لك خدمة حجز السيارات بأفضل الأسعار وأعلى مستويات الجودة. اختر من بين مجموعة واسعة من السيارات واحجز
                بخطوات بسيطة.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="gap-2">
                  احجز الآن
                  <Car className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  تصفح السيارات
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="صورة سيارة فاخرة"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Booking Steps */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">خطوات حجز السيارة</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                عملية حجز السيارة لدينا بسيطة وسريعة. اتبع الخطوات التالية للحصول على سيارتك المفضلة.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center border-2 border-primary/10 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-2">
                    <Car className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>1. اختر السيارة</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    تصفح مجموعتنا الواسعة من السيارات واختر السيارة التي تناسب احتياجاتك.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-primary/10 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-2">
                    <CalendarDays className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>2. حدد التاريخ والمدة</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">اختر تاريخ الاستلام والإرجاع ومدة الإيجار التي تناسبك.</p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-primary/10 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-2">
                    <CreditCard className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>3. أكمل الحجز والدفع</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">أدخل بياناتك الشخصية وقم بالدفع بطريقة آمنة لتأكيد الحجز.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-slate-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">مميزات خدمة حجز السيارات</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                نقدم لك العديد من المميزات التي تجعل تجربة حجز السيارة لدينا فريدة ومميزة.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                <Shield className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">ضمان الجودة</h3>
                <p className="text-muted-foreground">جميع سياراتنا في حالة ممتازة ويتم صيانتها بانتظام.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                <Star className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">أسعار تنافسية</h3>
                <p className="text-muted-foreground">نقدم أفضل الأسعار في السوق مع خيارات دفع مرنة.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                <MapPin className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">توصيل واستلام</h3>
                <p className="text-muted-foreground">خدمة توصيل واستلام السيارة من وإلى المكان الذي تحدده.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                <CheckCircle className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">دعم على مدار الساعة</h3>
                <p className="text-muted-foreground">فريق دعم متاح 24/7 للإجابة على استفساراتك ومساعدتك.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">احجز سيارتك الآن</h2>
                <p className="text-muted-foreground">
                  املأ النموذج التالي لحجز السيارة التي تناسبك. سنتواصل معك لتأكيد الحجز.
                </p>
              </div>

              <Tabs defaultValue="rental" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="rental">إيجار سيارة</TabsTrigger>
                  <TabsTrigger value="airport">خدمة المطار</TabsTrigger>
                </TabsList>
                <TabsContent value="rental">
                  <Card>
                    <CardHeader>
                      <CardTitle>نموذج حجز سيارة</CardTitle>
                      <CardDescription>أدخل تفاصيل الحجز للحصول على سيارتك</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="car-type">نوع السيارة</Label>
                            <Select>
                              <SelectTrigger id="car-type">
                                <SelectValue placeholder="اختر نوع السيارة" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="economy">اقتصادية</SelectItem>
                                <SelectItem value="sedan">سيدان</SelectItem>
                                <SelectItem value="suv">دفع رباعي</SelectItem>
                                <SelectItem value="luxury">فاخرة</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="pickup-location">موقع الاستلام</Label>
                            <Select>
                              <SelectTrigger id="pickup-location">
                                <SelectValue placeholder="اختر موقع الاستلام" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="airport">المطار</SelectItem>
                                <SelectItem value="downtown">وسط المدينة</SelectItem>
                                <SelectItem value="hotel">الفندق</SelectItem>
                                <SelectItem value="custom">موقع مخصص</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="pickup-date">تاريخ الاستلام</Label>
                            <Input type="date" id="pickup-date" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="return-date">تاريخ الإرجاع</Label>
                            <Input type="date" id="return-date" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="name">الاسم الكامل</Label>
                            <Input id="name" placeholder="أدخل اسمك الكامل" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">رقم الهاتف</Label>
                            <Input id="phone" placeholder="أدخل رقم هاتفك" />
                          </div>
                          <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="email">البريد الإلكتروني</Label>
                            <Input id="email" type="email" placeholder="أدخل بريدك الإلكتروني" />
                          </div>
                        </div>
                        <Button type="submit" className="w-full">
                          تأكيد الحجز
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="airport">
                  <Card>
                    <CardHeader>
                      <CardTitle>خدمة توصيل المطار</CardTitle>
                      <CardDescription>احجز سيارة لاستقبالك في المطار</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="flight-number">رقم الرحلة</Label>
                            <Input id="flight-number" placeholder="أدخل رقم الرحلة" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="arrival-time">وقت الوصول</Label>
                            <Input type="time" id="arrival-time" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="arrival-date">تاريخ الوصول</Label>
                            <Input type="date" id="arrival-date" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="passengers">عدد الركاب</Label>
                            <Select>
                              <SelectTrigger id="passengers">
                                <SelectValue placeholder="اختر عدد الركاب" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1">1</SelectItem>
                                <SelectItem value="2">2</SelectItem>
                                <SelectItem value="3">3</SelectItem>
                                <SelectItem value="4">4+</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="name-airport">الاسم الكامل</Label>
                            <Input id="name-airport" placeholder="أدخل اسمك الكامل" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone-airport">رقم الهاتف</Label>
                            <Input id="phone-airport" placeholder="أدخل رقم هاتفك" />
                          </div>
                          <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="destination">وجهة التوصيل</Label>
                            <Input id="destination" placeholder="أدخل عنوان الوجهة" />
                          </div>
                        </div>
                        <Button type="submit" className="w-full">
                          تأكيد الحجز
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-slate-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">الأسئلة الشائعة</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                إليك بعض الأسئلة الشائعة حول خدمة حجز السيارات لدينا.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>ما هي المستندات المطلوبة لحجز سيارة؟</AccordionTrigger>
                  <AccordionContent>
                    تحتاج إلى رخصة قيادة سارية المفعول، بطاقة هوية أو جواز سفر، وبطاقة ائتمان باسمك لتأمين الحجز.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>هل يمكنني إلغاء الحجز؟</AccordionTrigger>
                  <AccordionContent>
                    نعم، يمكنك إلغاء الحجز قبل 24 ساعة من موعد الاستلام مع استرداد كامل المبلغ. الإلغاء في وقت أقرب قد
                    يخضع لرسوم.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>هل يشمل السعر التأمين؟</AccordionTrigger>
                  <AccordionContent>
                    نعم، جميع أسعارنا تشمل التأمين الأساسي. يمكنك ترقية التأمين إلى تغطية شاملة مقابل رسوم إضافية.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>ما هي سياسة الوقود؟</AccordionTrigger>
                  <AccordionContent>
                    نتبع سياسة "الاستلام ممتلئ والإرجاع ممتلئ". ستستلم السيارة بخزان وقود ممتلئ ويجب إرجاعها بنفس
                    المستوى.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>هل هناك حد أقصى للمسافة المقطوعة؟</AccordionTrigger>
                  <AccordionContent>
                    معظم حجوزاتنا تأتي مع كيلومترات غير محدودة. في بعض الحالات الخاصة، قد يكون هناك حد يومي يتم توضيحه
                    عند الحجز.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">جاهز لحجز سيارتك؟</h2>
            <p className="max-w-2xl mx-auto mb-8">
              احجز سيارتك الآن واستمتع بتجربة قيادة مميزة مع أفضل خدمة تأجير سيارات.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="gap-2">
                <Car className="h-5 w-5" />
                احجز الآن
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white hover:bg-white/10 gap-2">
                <Phone className="h-5 w-5" />
                اتصل بنا
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-200 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Car className="h-6 w-6 text-primary" />
                <span className="font-bold text-xl text-white">كار رينتال</span>
              </div>
              <p className="text-slate-400 mb-4">
                شركة رائدة في مجال تأجير السيارات، نقدم خدمات عالية الجودة بأسعار تنافسية.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-primary">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-primary">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-primary">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">روابط سريعة</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-slate-400 hover:text-primary">
                    الرئيسية
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-primary">
                    السيارات المتاحة
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-primary">
                    كيفية الحجز
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-primary">
                    الشروط والأحكام
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-primary">
                    سياسة الخصوصية
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">اتصل بنا</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-slate-400">شارع الملك فهد، الرياض، المملكة العربية السعودية</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-slate-400">+966 12 345 6789</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-slate-400">info@carrentalexample.com</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">ساعات العمل</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-slate-400">الأحد - الخميس:</span>
                  <span className="text-slate-400">8:00 ص - 8:00 م</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">الجمعة:</span>
                  <span className="text-slate-400">9:00 ص - 6:00 م</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">السبت:</span>
                  <span className="text-slate-400">9:00 ص - 4:00 م</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>© {new Date().getFullYear()} كار رينتال. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
