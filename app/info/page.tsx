import Link from "next/link"
import { ChevronDown, FileText, Lock, Shield, Truck, CreditCard, HelpCircle, Car } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PoliciesPage() {
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
          <Button size="sm">احجز الآن</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-muted/40 py-4">
          <div className="container">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-primary">
                الرئيسية
              </Link>
              <ChevronDown className="h-4 w-4 rotate-90" />
              <span className="font-medium text-foreground">السياسات</span>
            </div>
          </div>
        </div>

        {/* Page Header */}
        <section className="py-12 bg-white border-b">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">سياسات الشركة</h1>
              <p className="text-lg text-muted-foreground">
                نلتزم بتقديم خدمات عالية الجودة مع الشفافية الكاملة. تعرف على سياساتنا وشروطنا لضمان تجربة إيجار سيارات
                سلسة وآمنة.
              </p>
            </div>
          </div>
        </section>

        {/* Policies Navigation */}
        <section className="py-8 bg-muted/40">
          <div className="container">
            <Tabs defaultValue="terms" className="w-full">
              <div className="mb-8">
                <TabsList className="w-full justify-start overflow-x-auto flex-nowrap whitespace-nowrap p-1 h-auto">
                  <TabsTrigger value="terms" className="py-2 px-4 rounded-md">
                    <FileText className="h-4 w-4 ml-2" />
                    الشروط والأحكام
                  </TabsTrigger>
                  <TabsTrigger value="privacy" className="py-2 px-4 rounded-md">
                    <Lock className="h-4 w-4 ml-2" />
                    سياسة الخصوصية
                  </TabsTrigger>
                  <TabsTrigger value="refund" className="py-2 px-4 rounded-md">
                    <CreditCard className="h-4 w-4 ml-2" />
                    سياسة الاسترداد
                  </TabsTrigger>
                  <TabsTrigger value="insurance" className="py-2 px-4 rounded-md">
                    <Shield className="h-4 w-4 ml-2" />
                    سياسة التأمين
                  </TabsTrigger>
                  <TabsTrigger value="delivery" className="py-2 px-4 rounded-md">
                    <Truck className="h-4 w-4 ml-2" />
                    سياسة التسليم
                  </TabsTrigger>
                  <TabsTrigger value="faq" className="py-2 px-4 rounded-md">
                    <HelpCircle className="h-4 w-4 ml-2" />
                    الأسئلة الشائعة
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Terms and Conditions */}
              <TabsContent value="terms" className="mt-0">
                <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
                  <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6">الشروط والأحكام</h2>
                    <div className="prose prose-lg max-w-none">
                      <p className="text-muted-foreground mb-6">
                        تنطبق الشروط والأحكام التالية على جميع الحجوزات والخدمات المقدمة من شركة كار رينتال. يرجى
                        قراءتها بعناية قبل إجراء أي حجز.
                      </p>

                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                          <AccordionTrigger className="text-lg font-medium">1. شروط الحجز</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <ul className="list-disc mr-6 space-y-2">
                              <li>يجب أن يكون عمر السائق 21 عامًا على الأقل.</li>
                              <li>يجب تقديم رخصة قيادة سارية المفعول عند استلام السيارة.</li>
                              <li>
                                يجب تقديم بطاقة ائتمان سارية المفعول باسم السائق الرئيسي لتأمين الحجز وتغطية أي رسوم
                                إضافية.
                              </li>
                              <li>يتم تأكيد الحجز فقط بعد استلام الدفعة المقدمة أو تفاصيل بطاقة الائتمان للضمان.</li>
                              <li>قد تختلف متطلبات الحجز حسب نوع السيارة، ويمكن تطبيق شروط إضافية للسيارات الفاخرة.</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                          <AccordionTrigger className="text-lg font-medium">2. استلام وإرجاع السيارة</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <ul className="list-disc mr-6 space-y-2">
                              <li>
                                يجب استلام السيارة في الوقت والمكان المحددين في تأكيد الحجز. قد يؤدي التأخير لأكثر من
                                ساعة إلى إلغاء الحجز.
                              </li>
                              <li>
                                عند الاستلام، سيتم فحص السيارة وتوثيق حالتها. يرجى التحقق من السيارة بعناية وإبلاغنا عن
                                أي أضرار موجودة.
                              </li>
                              <li>
                                يجب إرجاع السيارة في الوقت والمكان المحددين في تأكيد الحجز. سيتم فرض رسوم إضافية على
                                التأخير في الإرجاع.
                              </li>
                              <li>
                                يجب إرجاع السيارة بنفس حالة الاستلام، مع مراعاة الاستهلاك العادي. سيتم فرض رسوم على أي
                                أضرار غير عادية.
                              </li>
                              <li>
                                يجب إرجاع السيارة بنفس مستوى الوقود عند الاستلام. سيتم فرض رسوم إضافية إذا تم إرجاع
                                السيارة بمستوى وقود أقل.
                              </li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                          <AccordionTrigger className="text-lg font-medium">3. الدفع والرسوم</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <ul className="list-disc mr-6 space-y-2">
                              <li>
                                يشمل سعر الإيجار الأساسي استخدام السيارة للفترة المحددة، والتأمين الأساسي، والصيانة
                                العادية.
                              </li>
                              <li>
                                الرسوم الإضافية قد تشمل: سائق إضافي، مقعد أطفال، نظام تحديد المواقع، تأمين إضافي، رسوم
                                التوصيل والاستلام.
                              </li>
                              <li>
                                يتم دفع جميع الرسوم المعروفة مقدمًا عند الحجز أو الاستلام. الرسوم الإضافية (مثل المخالفات
                                المرورية، رسوم الوقود، الأضرار) سيتم خصمها من بطاقة الائتمان المقدمة.
                              </li>
                              <li>
                                قد يتم احتجاز مبلغ تأمين على بطاقة الائتمان الخاصة بك عند الاستلام، وسيتم إعادته عند
                                إرجاع السيارة بحالة جيدة.
                              </li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4">
                          <AccordionTrigger className="text-lg font-medium">4. قيود الاستخدام</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <ul className="list-disc mr-6 space-y-2">
                              <li>
                                يجب استخدام السيارة فقط على الطرق المعبدة والمخصصة للسير العام. يحظر القيادة خارج الطرق
                                ما لم يتم التصريح بذلك صراحة.
                              </li>
                              <li>
                                يحظر استخدام السيارة: للأغراض غير القانونية، لنقل البضائع الخطرة، للمشاركة في السباقات
                                أو الاختبارات، للتعليم التجاري للقيادة، لسحب أو دفع مركبات أخرى.
                              </li>
                              <li>يحظر التدخين داخل السيارة. سيتم فرض رسوم تنظيف خاصة في حالة مخالفة هذه السياسة.</li>
                              <li>
                                يجب أن يقود السيارة فقط السائقون المصرح لهم والمذكورون في عقد الإيجار. أي سائق غير مصرح
                                له سيؤدي إلى إبطال التأمين وتحمل المستأجر المسؤولية الكاملة.
                              </li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5">
                          <AccordionTrigger className="text-lg font-medium">5. المسؤولية والتأمين</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <ul className="list-disc mr-6 space-y-2">
                              <li>
                                يشمل الإيجار تأمينًا أساسيًا يغطي الأضرار الناتجة عن الحوادث، مع تحمل المستأجر لمبلغ معين
                                (يختلف حسب نوع السيارة).
                              </li>
                              <li>
                                يمكن شراء تغطية تأمينية إضافية لتقليل أو إلغاء مبلغ التحمل. يرجى الاستفسار عن خيارات
                                التأمين المتاحة.
                              </li>
                              <li>
                                لا يغطي التأمين: الأضرار الناتجة عن الإهمال أو سوء الاستخدام، فقدان أو تلف الأمتعة
                                الشخصية، فقدان مفاتيح السيارة، الأضرار الناتجة عن القيادة تحت تأثير الكحول أو المخدرات.
                              </li>
                              <li>
                                في حالة وقوع حادث، يجب إبلاغ الشركة فورًا والحصول على تقرير من الشرطة، بغض النظر عن حجم
                                الضرر.
                              </li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-6">
                          <AccordionTrigger className="text-lg font-medium">6. إلغاء الحجز</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <ul className="list-disc mr-6 space-y-2">
                              <li>
                                يمكن إلغاء الحجز مجانًا قبل 48 ساعة من وقت الاستلام المحدد. سيتم رد المبلغ المدفوع
                                بالكامل.
                              </li>
                              <li>
                                الإلغاء بين 24 و 48 ساعة قبل وقت الاستلام سيخضع لرسوم إلغاء تعادل 30% من قيمة الحجز.
                              </li>
                              <li>
                                الإلغاء في أقل من 24 ساعة قبل وقت الاستلام سيخضع لرسوم إلغاء تعادل 50% من قيمة الحجز.
                              </li>
                              <li>عدم الحضور دون إشعار مسبق سيؤدي إلى فرض رسوم كاملة للحجز.</li>
                              <li>
                                في حالة الظروف الاستثنائية (مثل الحالات الطبية الطارئة)، قد يتم التنازل عن رسوم الإلغاء
                                وفقًا لتقدير الشركة وبعد تقديم الوثائق المناسبة.
                              </li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-7">
                          <AccordionTrigger className="text-lg font-medium">7. تعديل الحجز</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <ul className="list-disc mr-6 space-y-2">
                              <li>
                                يمكن تعديل الحجز (تغيير التواريخ، نوع السيارة، مكان الاستلام/الإرجاع) مجانًا قبل 48 ساعة
                                من وقت الاستلام المحدد، وفقًا لتوفر السيارات.
                              </li>
                              <li>
                                التعديلات في أقل من 48 ساعة قبل وقت الاستلام قد تخضع لرسوم إدارية وتعتمد على توفر
                                السيارات.
                              </li>
                              <li>
                                تمديد فترة الإيجار يتطلب موافقة مسبقة من الشركة وقد يخضع لتوفر السيارة ورسوم إضافية.
                              </li>
                              <li>
                                في حالة الرغبة في إرجاع السيارة قبل نهاية فترة الإيجار المتفق عليها، لا يتم رد أي مبالغ
                                عن الأيام غير المستخدمة ما لم يتم الاتفاق على ذلك مسبقًا.
                              </li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-8">
                          <AccordionTrigger className="text-lg font-medium">8. القانون المطبق</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <p className="mb-4">
                              تخضع هذه الشروط والأحكام لقوانين المملكة العربية السعودية. أي نزاع ينشأ عن أو فيما يتعلق
                              بهذه الشروط سيخضع للاختصاص القضائي الحصري للمحاكم في المملكة العربية السعودية.
                            </p>
                            <p>
                              تحتفظ شركة كار رينتال بالحق في تعديل هذه الشروط والأحكام في أي وقت. ستكون النسخة المحدثة
                              متاحة على موقعنا الإلكتروني، وستكون سارية المفعول فور نشرها.
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Privacy Policy */}
              <TabsContent value="privacy" className="mt-0">
                <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
                  <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6">سياسة الخصوصية</h2>
                    <div className="prose prose-lg max-w-none">
                      <p className="text-muted-foreground mb-6">
                        تلتزم شركة كار رينتال بحماية خصوصية عملائها. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية
                        المعلومات الشخصية التي تقدمها لنا.
                      </p>

                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                          <AccordionTrigger className="text-lg font-medium">1. المعلومات التي نجمعها</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <p className="mb-4">قد نجمع المعلومات التالية:</p>
                            <ul className="list-disc mr-6 space-y-2">
                              <li>المعلومات الشخصية: الاسم، العنوان، رقم الهاتف، البريد الإلكتروني، تاريخ الميلاد.</li>
                              <li>
                                معلومات الهوية: رقم الهوية الوطنية أو جواز السفر، رخصة القيادة، تفاصيل بطاقة الائتمان.
                              </li>
                              <li>
                                معلومات الحجز: تواريخ الإيجار، نوع السيارة، مواقع الاستلام والإرجاع، الخدمات الإضافية.
                              </li>
                              <li>
                                معلومات الاستخدام: بيانات حول كيفية استخدامك لموقعنا الإلكتروني وتطبيقنا وخدماتنا.
                              </li>
                              <li>
                                المعلومات الفنية: عنوان IP، نوع المتصفح، نظام التشغيل، معلومات الجهاز المستخدم للوصول
                                إلى خدماتنا.
                              </li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                          <AccordionTrigger className="text-lg font-medium">
                            2. كيفية استخدام المعلومات
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <p className="mb-4">نستخدم المعلومات التي نجمعها للأغراض التالية:</p>
                            <ul className="list-disc mr-6 space-y-2">
                              <li>توفير وإدارة خدمات تأجير السيارات التي طلبتها.</li>
                              <li>معالجة المدفوعات وإدارة حسابك معنا.</li>
                              <li>التحقق من هويتك وأهليتك لاستئجار السيارة.</li>
                              <li>التواصل معك بخصوص حجزك أو أي استفسارات أخرى.</li>
                              <li>إرسال معلومات حول العروض والخدمات التي قد تهمك (إذا اخترت الاشتراك).</li>
                              <li>تحسين خدماتنا ومنتجاتنا وموقعنا الإلكتروني.</li>
                              <li>الامتثال للالتزامات القانونية والتنظيمية.</li>
                              <li>منع الاحتيال وحماية مصالحنا التجارية المشروعة.</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                          <AccordionTrigger className="text-lg font-medium">3. مشاركة المعلومات</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <p className="mb-4">قد نشارك معلوماتك الشخصية مع:</p>
                            <ul className="list-disc mr-6 space-y-2">
                              <li>
                                شركات المجموعة: قد نشارك معلوماتك مع الشركات التابعة لمجموعتنا لتقديم خدمات متكاملة.
                              </li>
                              <li>
                                مزودي الخدمات: نستعين بأطراف ثالثة لتقديم خدمات نيابة عنا (مثل معالجة المدفوعات، استضافة
                                الموقع، خدمات التسويق).
                              </li>
                              <li>شركات التأمين: قد نشارك المعلومات مع شركات التأمين في حالة وقوع حوادث أو مطالبات.</li>
                              <li>
                                السلطات القانونية: قد نكشف عن معلوماتك إذا كان ذلك مطلوبًا بموجب القانون أو في إطار
                                إجراءات قانونية.
                              </li>
                              <li>
                                أطراف ثالثة في حالة الاندماج أو الاستحواذ: في حالة بيع أو نقل أعمالنا أو أصولنا (كليًا أو
                                جزئيًا).
                              </li>
                            </ul>
                            <p className="mt-4">
                              لن نبيع أو نؤجر معلوماتك الشخصية لأطراف ثالثة لأغراض تسويقية دون موافقتك الصريحة.
                            </p>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4">
                          <AccordionTrigger className="text-lg font-medium">4. أمن المعلومات</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <p className="mb-4">
                              نلتزم بحماية معلوماتك الشخصية ونتخذ تدابير أمنية مناسبة لحمايتها من الوصول غير المصرح به
                              أو التغيير أو الإفصاح أو الإتلاف. تشمل هذه التدابير:
                            </p>
                            <ul className="list-disc mr-6 space-y-2">
                              <li>استخدام التشفير لحماية البيانات الحساسة المنقولة عبر الإنترنت.</li>
                              <li>تقييد الوصول إلى المعلومات الشخصية للموظفين المصرح لهم فقط.</li>
                              <li>تطبيق ضوابط أمنية مادية في مرافق تخزين البيانات.</li>
                              <li>إجراء مراجعات دورية لإجراءاتنا الأمنية.</li>
                            </ul>
                            <p className="mt-4">
                              رغم جهودنا، لا يمكن ضمان أمن المعلومات المرسلة عبر الإنترنت بشكل مطلق. نحن نبذل قصارى
                              جهدنا لحماية معلوماتك الشخصية، لكن لا يمكننا ضمان أمنها بنسبة 100%.
                            </p>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5">
                          <AccordionTrigger className="text-lg font-medium">5. حقوقك</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <p className="mb-4">فيما يتعلق بمعلوماتك الشخصية، لديك الحقوق التالية:</p>
                            <ul className="list-disc mr-6 space-y-2">
                              <li>حق الوصول: يمكنك طلب نسخة من المعلومات الشخصية التي نحتفظ بها عنك.</li>
                              <li>حق التصحيح: يمكنك طلب تصحيح أي معلومات غير دقيقة أو غير كاملة.</li>
                              <li>حق الحذف: يمكنك طلب حذف معلوماتك الشخصية في ظروف معينة.</li>
                              <li>حق تقييد المعالجة: يمكنك طلب تقييد معالجة معلوماتك في ظروف معينة.</li>
                              <li>
                                حق الاعتراض: يمكنك الاعتراض على معالجة معلوماتك لأغراض التسويق المباشر أو لأسباب تتعلق
                                بوضعك الخاص.
                              </li>
                              <li>حق نقل البيانات: يمكنك طلب نقل معلوماتك إلى منظمة أخرى في ظروف معينة.</li>
                            </ul>
                            <p className="mt-4">
                              لممارسة أي من هذه الحقوق، يرجى التواصل معنا عبر معلومات الاتصال المذكورة أدناه.
                            </p>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-6">
                          <AccordionTrigger className="text-lg font-medium">6. ملفات تعريف الارتباط</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <p className="mb-4">
                              نستخدم ملفات تعريف الارتباط (الكوكيز) وتقنيات مماثلة لتحسين تجربتك على موقعنا وتحليل كيفية
                              استخدام الموقع وتخصيص المحتوى والإعلانات.
                            </p>
                            <p className="mb-4">
                              يمكنك التحكم في ملفات تعريف الارتباط من خلال إعدادات متصفحك. ومع ذلك، قد يؤدي تعطيل بعض
                              ملفات تعريف الارتباط إلى التأثير على تجربتك وقدرتك على استخدام بعض ميزات موقعنا.
                            </p>
                            <p>
                              لمزيد من المعلومات حول كيفية استخدامنا لملفات تعريف الارتباط، يرجى الاطلاع على سياسة ملفات
                              تعريف الارتباط الخاصة بنا.
                            </p>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-7">
                          <AccordionTrigger className="text-lg font-medium">
                            7. التغييرات على سياسة الخصوصية
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <p className="mb-4">
                              قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر لتعكس التغييرات في ممارساتنا أو لأسباب
                              تشغيلية أو قانونية أو تنظيمية.
                            </p>
                            <p className="mb-4">
                              سنقوم بنشر أي تغييرات على موقعنا الإلكتروني وسنبذل جهودًا معقولة لإعلامك بأي تغييرات
                              جوهرية.
                            </p>
                            <p>
                              نشجعك على مراجعة سياسة الخصوصية هذه بشكل دوري للبقاء على اطلاع بكيفية حماية معلوماتك
                              الشخصية.
                            </p>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-8">
                          <AccordionTrigger className="text-lg font-medium">8. اتصل بنا</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <p className="mb-4">
                              إذا كانت لديك أي أسئلة أو استفسارات حول سياسة الخصوصية هذه أو كيفية تعاملنا مع معلوماتك
                              الشخصية، يرجى التواصل معنا على:
                            </p>
                            <ul className="list-disc mr-6 space-y-2">
                              <li>البريد الإلكتروني: privacy@carrentalexample.com</li>
                              <li>الهاتف: +966 12 345 6789</li>
                              <li>العنوان: شارع الملك فهد، الرياض، المملكة العربية السعودية</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Refund Policy */}
              <TabsContent value="refund" className="mt-0">
                <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
                  <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6">سياسة الاسترداد</h2>
                    <div className="prose prose-lg max-w-none">
                      <p className="text-muted-foreground mb-6">
                        توضح سياسة الاسترداد هذه الشروط والظروف التي يمكن بموجبها استرداد المدفوعات المتعلقة بخدمات
                        تأجير السيارات لدينا.
                      </p>

                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                          <AccordionTrigger className="text-lg font-medium">
                            1. إلغاء الحجز قبل الاستلام
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <ul className="list-disc mr-6 space-y-2">
                              <li>
                                <strong>الإلغاء قبل 48 ساعة أو أكثر:</strong> استرداد كامل للمبلغ المدفوع (100%).
                              </li>
                              <li>
                                <strong>الإلغاء بين 24 و 48 ساعة:</strong> استرداد جزئي (70% من المبلغ المدفوع).
                              </li>
                              <li>
                                <strong>الإلغاء في أقل من 24 ساعة:</strong> استرداد جزئي (50% من المبلغ المدفوع).
                              </li>
                              <li>
                                <strong>عدم الحضور:</strong> لا يتم استرداد أي مبلغ في حالة عدم الحضور دون إشعار مسبق.
                              </li>
                            </ul>
                            <p className="mt-4">
                              يتم معالجة المبالغ المستردة خلال 7-14 يوم عمل، وستتم إعادتها بنفس طريقة الدفع الأصلية.
                            </p>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                          <AccordionTrigger className="text-lg font-medium">2. الإرجاع المبكر للسيارة</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <ul className="list-disc mr-6 space-y-2">
                              <li>
                                في حالة إرجاع السيارة قبل نهاية فترة الإيجار المتفق عليها، لا يتم استرداد أي مبالغ عن
                                الأيام غير المستخدمة كقاعدة عامة.
                              </li>
                              <li>
                                في ظروف استثنائية (مثل حالات طبية طارئة موثقة)، قد نقدم استردادًا جزئيًا أو رصيدًا
                                للاستخدام في المستقبل، وفقًا لتقديرنا.
                              </li>
                              <li>
                                إذا تم الاتفاق على الإرجاع المبكر مسبقًا (قبل 24 ساعة على الأقل)، قد نقدم استردادًا جزئيًا
                                بعد خصم رسوم إدارية.
                              </li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                          <AccordionTrigger className="text-lg font-medium">3. الإلغاء من قبل الشركة</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <ul className="list-disc mr-6 space-y-2">
                              <li>
                                في حالة عدم توفر السيارة المحجوزة بسبب ظروف خارجة عن إرادتنا (مثل حادث أو عطل ميكانيكي)،
                                سنقدم سيارة بديلة من نفس الفئة أو أعلى دون تكلفة إضافية.
                              </li>
                              <li>إذا لم تكن هناك سيارة بديلة متاحة، سيتم استرداد المبلغ المدفوع بالكامل.</li>
                              <li>
                                في حالة الإلغاء بسبب ظروف قاهرة (مثل الكوارث الطبيعية أو الاضطرابات المدنية)، سيتم
                                استرداد المبلغ المدفوع بالكامل.
                              </li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4">
                          <AccordionTrigger className="text-lg font-medium">
                            4. الرسوم الإضافية والودائع
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <ul className="list-disc mr-6 space-y-2">
                              <li>
                                سيتم استرداد مبلغ التأمين (الوديعة) بالكامل عند إرجاع السيارة في حالة جيدة دون أضرار
                                وبنفس مستوى الوقود عند الاستلام.
                              </li>
                              <li>
                                في حالة وجود أضرار أو نقص في الوقود، سيتم خصم التكاليف المناسبة من مبلغ التأمين قبل
                                استرداد المبلغ المتبقي.
                              </li>
                              <li>
                                الرسوم الإضافية (مثل رسوم التنظيف الخاصة، المخالفات المرورية، رسوم الطرق) غير قابلة
                                للاسترداد.
                              </li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5">
                          <AccordionTrigger className="text-lg font-medium">5. الظروف الاستثنائية</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <p className="mb-4">
                              قد نقدم استردادًا كاملاً أو جزئيًا في الظروف الاستثنائية التالية، بعد تقديم الوثائق المناسبة:
                            </p>
                            <ul className="list-disc mr-6 space-y-2">
                              <li>حالة طبية طارئة للمستأجر أو أحد أفراد أسرته المباشرين.</li>
                              <li>وفاة المستأجر أو أحد أفراد أسرته المباشرين.</li>
                              <li>استدعاء المستأجر للخدمة العسكرية أو الواجب الوطني.</li>
                              <li>تغييرات جوهرية في ظروف السفر بسبب قيود حكومية أو أحداث دولية.</li>
                            </ul>
                            <p className="mt-4">يتم تقييم كل حالة على حدة، ويكون القرار النهائي وفقًا لتقدير الشركة.</p>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-6">
                          <AccordionTrigger className="text-lg font-medium">6. عملية الاسترداد</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <ul className="list-disc mr-6 space-y-2">
                              <li>
                                يجب تقديم طلبات الاسترداد كتابيًا عبر البريد الإلكتروني أو من خلال نموذج الاتصال على
                                موقعنا.
                              </li>
                              <li>
                                يجب تقديم جميع الوثائق الداعمة (مثل التقارير الطبية) في غضون 14 يومًا من تاريخ الإلغاء.
                              </li>
                              <li>
                                سيتم معالجة المبالغ المستردة خلال 7-14 يوم عمل من تاريخ الموافقة على طلب الاسترداد.
                              </li>
                              <li>
                                سيتم إرجاع المبالغ المستردة بنفس طريقة الدفع الأصلية، ما لم يتم الاتفاق على خلاف ذلك.
                              </li>
                              <li>
                                قد تخضع بعض طرق الدفع لرسوم معالجة من قبل مزود خدمة الدفع، وهذه الرسوم غير قابلة
                                للاسترداد.
                              </li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Insurance Policy */}
              <TabsContent value="insurance" className="mt-0">
                <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
                  <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6">سياسة التأمين</h2>
                    <div className="prose prose-lg max-w-none">
                      <p className="text-muted-foreground mb-6">
                        توفر شركة كار رينتال خيارات تأمين متنوعة لحماية عملائنا أثناء فترة الإيجار. فيما يلي تفاصيل
                        تغطية التأمين المتاحة.
                      </p>

                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                          <AccordionTrigger className="text-lg font-medium">1. التأمين الأساسي</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <p className="mb-4">يتم تضمين التأمين الأساسي في جميع عقود الإيجار ويشمل:</p>
                            <ul className="list-disc mr-6 space-y-2">
                              <li>
                                <strong>تأمين المسؤولية تجاه الغير:</strong> يغطي الأضرار التي تلحق بممتلكات الغير أو
                                الإصابات الجسدية التي تسببها السيارة المؤجرة للآخرين.
                              </li>
                              <li>
                                <strong>تأمين ضد الحوادث:</strong> يغطي الأضرار التي تلحق بالسيارة المؤجرة في حالة وقوع
                                حادث، مع تحمل المستأجر لمبلغ معين (يختلف حسب نوع السيارة).
                              </li>
                              <li>
                                <strong>تأمين ضد السرقة:</strong> يغطي سرقة السيارة، مع تحمل المستأجر لمبلغ معين.
                              </li>
                            </ul>
                            <p className="mt-4">
                              <strong>مبلغ التحمل:</strong> يتراوح مبلغ التحمل للتأمين الأساسي بين 1,000 و 5,000 ريال
                              سعودي، اعتمادًا على نوع وقيمة السيارة.
                            </p>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                          <AccordionTrigger className="text-lg font-medium">2. التأمين الشامل</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <p className="mb-4">يمكن شراء التأمين الشامل كخيار إضافي، ويوفر تغطية موسعة تشمل:</p>
                            <ul className="list-disc mr-6 space-y-2">
                              <li>
                                <strong>تقليل أو إلغاء مبلغ التحمل:</strong> يقلل أو يلغي المبلغ الذي يتحمله المستأجر في
                                حالة الحوادث أو السرقة.
                              </li>
                              <li>
                                <strong>تغطية الزجاج والإطارات:</strong> يغطي الأضرار التي تلحق بزجاج السيارة والإطارات،
                                والتي عادة ما تكون مستثناة من التأمين الأساسي.
                              </li>
                              <li>
                                <strong>تغطية السقف والهيكل السفلي:</strong> يغطي الأضرار التي تلحق بسقف السيارة والهيكل
                                السفلي، والتي عادة ما تكون مستثناة من التأمين الأساسي.
                              </li>
                              <li>
                                <strong>المساعدة على الطريق:</strong> خدمات المساعدة على الطريق على مدار الساعة، بما في
                                ذلك سحب السيارة وتغيير الإطارات وبدء تشغيل البطارية.
                              </li>
                            </ul>
                            <p className="mt-4">
                              <strong>التكلفة:</strong> تتراوح تكلفة التأمين الشامل بين 50 و 150 ريال سعودي يوميًا،
                              اعتمادًا على نوع السيارة ومدة الإيجار.
                            </p>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                          <AccordionTrigger className="text-lg font-medium">3. تأمين الحماية الشخصية</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <p className="mb-4">
                              يمكن شراء تأمين الحماية الشخصية كخيار إضافي، ويوفر تغطية للسائق والركاب في حالة الإصابة أو
                              الوفاة نتيجة حادث. يشمل:
                            </p>
                            <ul className="list-disc mr-6 space-y-2">
                              <li>
                                <strong>تعويض الوفاة أو العجز:</strong> تعويض مالي في حالة الوفاة أو العجز الدائم نتيجة
                                حادث.
                              </li>
                              <li>
                                <strong>تغطية النفقات الطبية:</strong> تغطية النفقات الطبية الناتجة عن إصابات الحادث.
                              </li>
                              <li>
                                <strong>تعويض فقدان الأمتعة:</strong> تعويض عن فقدان أو تلف الأمتعة الشخصية الموجودة في
                                السيارة نتيجة حادث أو سرقة.
                              </li>
                            </ul>
                            <p className="mt-4">
                              <strong>التكلفة:</strong> تتراوح تكلفة تأمين الحماية الشخصية بين 30 و 70 ريال سعودي يوميًا،
                              اعتمادًا على عدد الركاب ومستوى التغطية.
                            </p>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4">
                          <AccordionTrigger className="text-lg font-medium">4. الاستثناءات</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <p className="mb-4">لا تغطي وثائق التأمين لدينا الحالات التالية:</p>
                            <ul className="list-disc mr-6 space-y-2">
                              <li>الأضرار الناتجة عن القيادة تحت تأثير الكحول أو المخدرات.</li>
                              <li>الأضرار الناتجة عن الاستخدام غير المصرح به للسيارة.</li>
                              <li>الأضرار الناتجة عن القيادة خارج الطرق المعبدة (ما لم يتم التصريح بذلك صراحة).</li>
                              <li>الأضرار الناتجة عن الإهمال الجسيم أو سوء الاستخدام المتعمد.</li>
                              <li>فقدان أو تلف الأمتعة الشخصية (ما لم يتم شراء تأمين الحماية الشخصية).</li>
                              <li>فقدان مفاتيح السيارة أو وثائقها.</li>
                              <li>الأضرار الناتجة عن استخدام نوع وقود غير مناسب.</li>
                              <li>الأضرار الناتجة عن القيادة بواسطة شخص غير مصرح له في عقد الإيجار.</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5">
                          <AccordionTrigger className="text-lg font-medium">5. في حالة وقوع حادث</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <p className="mb-4">
                              في حالة وقوع حادث، يجب اتباع الإجراءات التالية لضمان تفعيل التغطية التأمينية:
                            </p>
                            <ul className="list-disc mr-6 space-y-2">
                              <li>
                                <strong>إبلاغ الشرطة:</strong> يجب إبلاغ الشرطة فورًا عن أي حادث، بغض النظر عن حجم الضرر،
                                والحصول على تقرير رسمي.
                              </li>
                              <li>
                                <strong>إبلاغ الشركة:</strong> يجب إبلاغ شركة كار رينتال في أقرب وقت ممكن (في غضون 24
                                ساعة) عن طريق الاتصال برقم الطوارئ المذكور في عقد الإيجار.
                              </li>
                              <li>
                                <strong>توثيق الحادث:</strong> التقاط صور للأضرار وموقع الحادث، وتسجيل تفاصيل الأطراف
                                الأخرى المشاركة في الحادث (الاسم، رقم الهاتف، رقم لوحة السيارة، شركة التأمين).
                              </li>
                              <li>
                                <strong>ملء نموذج الحادث:</strong> ملء نموذج تقرير الحادث الموجود في السيارة بدقة
                                وتوقيعه.
                              </li>
                              <li>
                                <strong>عدم الاعتراف بالمسؤولية:</strong> لا تعترف بالمسؤولية أو تقدم أي وعود بالدفع
                                للأطراف الأخرى.
                              </li>
                            </ul>
                            <p className="mt-4">
                              عدم اتباع هذه الإجراءات قد يؤدي إلى إبطال التغطية التأمينية وتحمل المستأجر للمسؤولية
                              الكاملة عن الأضرار.
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Delivery Policy */}
              <TabsContent value="delivery" className="mt-0">
                <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
                  <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6">سياسة التسليم</h2>
                    <div className="prose prose-lg max-w-none">
                      <p className="text-muted-foreground mb-6">
                        توفر شركة كار رينتال خدمات توصيل واستلام السيارات لراحة عملائنا. فيما يلي تفاصيل سياسة التسليم
                        لدينا.
                      </p>

                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                          <AccordionTrigger className="text-lg font-medium">1. خدمة التوصيل والاستلام</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <ul className="list-disc mr-6 space-y-2">
                              <li>
                                <strong>المواقع المتاحة:</strong> نقدم خدمة توصيل واستلام السيارات في المطارات الرئيسية،
                                الفنادق، مراكز المدن، والمواقع السكنية ضمن حدود المدينة.
                              </li>
                              <li>
                                <strong>ساعات الخدمة:</strong> تتوفر خدمة التوصيل والاستلام من الساعة 8:00 صباحًا حتى
                                10:00 مساءً. خارج هذه الساعات، قد تطبق رسوم إضافية.
                              </li>
                              <li>
                                <strong>الحجز المسبق:</strong> يجب حجز خدمة التوصيل والاستلام مسبقًا (قبل 24 ساعة على
                                الأقل) لضمان توفرها. يمكن إضافة الخدمة عند الحجز الأولي أو لاحقًا عن طريق الاتصال بخدمة
                                العملاء.
                              </li>
                              <li>
                                <strong>التأكيد:</strong> سيتم تأكيد موعد التوصيل أو الاستلام قبل ساعتين من الموعد
                                المحدد عن طريق رسالة نصية أو مكالمة هاتفية.
                              </li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                          <AccordionTrigger className="text-lg font-medium">2. الرسوم</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <ul className="list-disc mr-6 space-y-2">
                              <li>
                                <strong>داخل المدينة:</strong> تبدأ رسوم التوصيل والاستلام داخل حدود المدينة من 50 ريال
                                سعودي لكل رحلة، اعتمادًا على المسافة.
                              </li>
                              <li>
                                <strong>المطارات:</strong> تبدأ رسوم التوصيل والاستلام من وإلى المطارات الرئيسية من 75
                                ريال سعودي لكل رحلة.
                              </li>
                              <li>
                                <strong>خارج المدينة:</strong> تحتسب رسوم التوصيل والاستلام خارج حدود المدينة على أساس
                                المسافة (5 ريال سعودي لكل كيلومتر إضافي).
                              </li>
                              <li>
                                <strong>ساعات الذروة:</strong> قد تطبق رسوم إضافية (25%) خلال ساعات الذروة (7:00-9:00
                                صباحًا و 4:00-7:00 مساءً).
                              </li>
                              <li>
                                <strong>خارج ساعات العمل:</strong> تطبق رسوم إضافية (50%) للتوصيل أو الاستلام خارج ساعات
                                العمل العادية (10:00 مساءً - 8:00 صباحًا).
                              </li>
                            </ul>
                            <p className="mt-4">
                              <strong>ملاحظة:</strong> قد يتم التنازل عن رسوم التوصيل والاستلام للحجوزات طويلة المدة
                              (أكثر من 7 أيام) أو للعملاء المميزين.
                            </p>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                          <AccordionTrigger className="text-lg font-medium">
                            3. إجراءات التسليم والاستلام
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <p className="mb-4">
                              <strong>عند التسليم:</strong>
                            </p>
                            <ul className="list-disc mr-6 space-y-2 mb-4">
                              <li>سيصل ممثل الشركة في الموعد المحدد (مع هامش 15 دقيقة).</li>
                              <li>
                                يجب تقديم رخصة القيادة الأصلية وبطاقة الهوية/جواز السفر وبطاقة الائتمان المستخدمة للحجز.
                              </li>
                              <li>سيتم فحص السيارة معك وتوثيق حالتها قبل التسليم.</li>
                              <li>سيتم شرح ميزات السيارة وتعليمات التشغيل.</li>
                              <li>يجب التوقيع على عقد الإيجار وأي مستندات إضافية.</li>
                            </ul>
                            <p className="mb-4">
                              <strong>عند الاستلام:</strong>
                            </p>
                            <ul className="list-disc mr-6 space-y-2">
                              <li>
                                يرجى الالتزام بالموعد المحدد للاستلام. التأخير لأكثر من 30 دقيقة قد يؤدي إلى رسوم
                                إضافية.
                              </li>
                              <li>سيتم فحص السيارة للتأكد من حالتها وتوثيق أي أضرار جديدة.</li>
                              <li>سيتم التحقق من مستوى الوقود ومقارنته بمستوى التسليم.</li>
                              <li>سيتم حساب أي رسوم إضافية (مثل التأخير، الوقود، الأضرار) وتحصيلها.</li>
                              <li>سيتم إصدار إيصال استلام نهائي.</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4">
                          <AccordionTrigger className="text-lg font-medium">4. التأخير والإلغاء</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <ul className="list-disc mr-6 space-y-2">
                              <li>
                                <strong>تأخير العميل:</strong> في حالة تأخر العميل عن الموعد المحدد، سينتظر ممثل الشركة
                                لمدة 30 دقيقة. بعد ذلك، قد يغادر الممثل ويتم اعتبار الموعد ملغيًا، مع تطبيق رسوم الإلغاء.
                              </li>
                              <li>
                                <strong>تأخير الشركة:</strong> في حالة تأخر ممثل الشركة لأكثر من 30 دقيقة، سيتم تقديم
                                خصم 50% على رسوم التوصيل أو الاستلام.
                              </li>
                              <li>
                                <strong>إلغاء خدمة التوصيل/الاستلام:</strong> يمكن إلغاء خدمة التوصيل أو الاستلام مجانًا
                                قبل 6 ساعات من الموعد المحدد. الإلغاء في وقت أقرب سيخضع لرسوم إلغاء تعادل 50% من رسوم
                                الخدمة.
                              </li>
                              <li>
                                <strong>تغيير الموعد:</strong> يمكن تغيير موعد التوصيل أو الاستلام مجانًا قبل 6 ساعات من
                                الموعد المحدد. التغييرات في وقت أقرب تخضع لتوفر الخدمة وقد تطبق رسوم إدارية.
                              </li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5">
                          <AccordionTrigger className="text-lg font-medium">5. القيود والاستثناءات</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <ul className="list-disc mr-6 space-y-2">
                              <li>
                                <strong>المناطق النائية:</strong> قد لا تتوفر خدمة التوصيل والاستلام في بعض المناطق
                                النائية أو قد تخضع لرسوم إضافية.
                              </li>
                              <li>
                                <strong>الظروف الجوية:</strong> قد يتم تأجيل أو إلغاء خدمة التوصيل أو الاستلام في حالة
                                الظروف الجوية السيئة التي قد تؤثر على سلامة موظفينا.
                              </li>
                              <li>
                                <strong>السيارات الفاخرة:</strong> قد تخضع السيارات الفاخرة لسياسات توصيل واستلام خاصة
                                وقد تتطلب رسومًا إضافية.
                              </li>
                              <li>
                                <strong>المطارات الدولية:</strong> يرجى السماح بوقت إضافي (30-60 دقيقة) للتسليم في
                                المطارات الدولية بسبب إجراءات الأمن والجمارك.
                              </li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* FAQ */}
              <TabsContent value="faq" className="mt-0">
                <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
                  <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6">الأسئلة الشائعة</h2>
                    <div className="prose prose-lg max-w-none">
                      <p className="text-muted-foreground mb-6">
                        فيما يلي إجابات على الأسئلة الشائعة حول سياساتنا وإجراءاتنا. إذا لم تجد إجابة لسؤالك، يرجى
                        التواصل مع فريق خدمة العملاء.
                      </p>

                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                          <AccordionTrigger className="text-lg font-medium">
                            ما هي المستندات المطلوبة لاستئجار سيارة؟
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <p>تحتاج إلى تقديم المستندات التالية:</p>
                            <ul className="list-disc mr-6 space-y-2">
                              <li>رخصة قيادة سارية المفعول (محلية أو دولية للزوار الأجانب).</li>
                              <li>بطاقة هوية وطنية أو جواز سفر ساري المفعول.</li>
                              <li>بطاقة ائتمان سارية المفعول باسم السائق الرئيسي (للتأمين والدفع).</li>
                              <li>إثبات الإقامة (للمقيمين) أو تأشيرة سارية المفعول (للزوار).</li>
                            </ul>
                            <p className="mt-4">
                              قد تكون هناك متطلبات إضافية للسيارات الفاخرة أو للسائقين الذين تقل أعمارهم عن 25 عامًا.
                            </p>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                          <AccordionTrigger className="text-lg font-medium">
                            هل يمكنني إلغاء حجزي واسترداد المبلغ؟
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <p>نعم، يمكنك إلغاء حجزك واسترداد المبلغ وفقًا لسياسة الإلغاء التالية:</p>
                            <ul className="list-disc mr-6 space-y-2">
                              <li>الإلغاء قبل 48 ساعة أو أكثر: استرداد كامل للمبلغ المدفوع (100%).</li>
                              <li>الإلغاء بين 24 و 48 ساعة: استرداد جزئي (70% من المبلغ المدفوع).</li>
                              <li>الإلغاء في أقل من 24 ساعة: استرداد جزئي (50% من المبلغ المدفوع).</li>
                              <li>عدم الحضور: لا يتم استرداد أي مبلغ في حالة عدم الحضور دون إشعار مسبق.</li>
                            </ul>
                            <p className="mt-4">
                              في حالة الظروف الاستثنائية (مثل الحالات الطبية الطارئة)، قد يتم التنازل عن رسوم الإلغاء
                              وفقًا لتقدير الشركة وبعد تقديم الوثائق المناسبة.
                            </p>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                          <AccordionTrigger className="text-lg font-medium">ما هي سياسة الوقود؟</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <p>نتبع سياسة "الاستلام ممتلئ والإرجاع ممتلئ". هذا يعني:</p>
                            <ul className="list-disc mr-6 space-y-2">
                              <li>ستستلم السيارة بخزان وقود ممتلئ.</li>
                              <li>يجب إرجاع السيارة بخزان وقود ممتلئ.</li>
                              <li>
                                إذا تم إرجاع السيارة بمستوى وقود أقل، سيتم احتساب تكلفة الوقود الناقص بالإضافة إلى رسوم
                                خدمة (50 ريال سعودي).
                              </li>
                              <li>
                                نقدم أيضًا خيار "الدفع المسبق للوقود" بسعر تنافسي، حيث يمكنك دفع قيمة خزان وقود كامل
                                مقدمًا وإرجاع السيارة بأي مستوى وقود دون رسوم إضافية.
                              </li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4">
                          <AccordionTrigger className="text-lg font-medium">
                            هل هناك حد أقصى للمسافة المقطوعة؟
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <p>تختلف سياسة المسافة المقطوعة حسب نوع الحجز:</p>
                            <ul className="list-disc mr-6 space-y-2">
                              <li>
                                <strong>الحجوزات القياسية:</strong> تأتي معظم حجوزاتنا مع كيلومترات غير محدودة.
                              </li>
                              <li>
                                <strong>العروض الخاصة والأسعار المخفضة:</strong> قد تتضمن حدًا يوميًا للكيلومترات (عادة
                                250-300 كم في اليوم).
                              </li>
                              <li>
                                <strong>السيارات الفاخرة والرياضية:</strong> عادة ما تأتي مع حد يومي للكيلومترات
                                (150-200 كم في اليوم).
                              </li>
                            </ul>
                            <p className="mt-4">
                              يتم احتساب رسوم إضافية على الكيلومترات الزائدة (تتراوح بين 0.5 و 2 ريال سعودي لكل كيلومتر
                              إضافي، اعتمادًا على نوع السيارة).
                            </p>
                            <p className="mt-2">يمكن شراء حزم كيلومترات إضافية مقدمًا بأسعار مخفضة.</p>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5">
                          <AccordionTrigger className="text-lg font-medium">
                            هل يمكنني قيادة السيارة خارج المملكة؟
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <p>
                              لا يُسمح بقيادة السيارات المستأجرة خارج حدود المملكة العربية السعودية دون إذن كتابي مسبق من
                              الشركة. إذا كنت ترغب في القيادة إلى دول مجلس التعاون الخليجي المجاورة:
                            </p>
                            <ul className="list-disc mr-6 space-y-2">
                              <li>يجب طلب الإذن قبل 72 ساعة على الأقل من موعد السفر.</li>
                              <li>سيتم تطبيق رسوم إضافية (تبدأ من 500 ريال سعودي).</li>
                              <li>يجب شراء تأمين دولي إضافي.</li>
                              <li>قد تكون هناك قيود على أنواع معينة من السيارات.</li>
                              <li>يجب على العميل التأكد من امتلاك جميع الوثائق اللازمة لعبور الحدود.</li>
                            </ul>
                            <p className="mt-4">
                              القيادة خارج المملكة دون إذن مسبق تعتبر انتهاكًا للعقد وستؤدي إلى إبطال التأمين وقد تؤدي
                              إلى غرامات كبيرة.
                            </p>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-6">
                          <AccordionTrigger className="text-lg font-medium">
                            ماذا يحدث في حالة وقوع حادث أو عطل؟
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <p className="mb-4">
                              <strong>في حالة وقوع حادث:</strong>
                            </p>
                            <ol className="list-decimal mr-6 space-y-2 mb-4">
                              <li>تأكد من سلامة جميع الركاب واطلب المساعدة الطبية إذا لزم الأمر.</li>
                              <li>أبلغ الشرطة فورًا واحصل على تقرير رسمي، بغض النظر عن حجم الضرر.</li>
                              <li>اتصل بخط الطوارئ الخاص بنا على الرقم المذكور في عقد الإيجار.</li>
                              <li>التقط صورًا للحادث والأضرار.</li>
                              <li>املأ نموذج تقرير الحادث الموجود في السيارة.</li>
                              <li>لا تقم بإصلاح السيارة أو نقلها دون موافقة مسبقة من الشركة.</li>
                            </ol>
                            <p className="mb-4">
                              <strong>في حالة عطل ميكانيكي:</strong>
                            </p>
                            <ol className="list-decimal mr-6 space-y-2">
                              <li>أوقف السيارة في مكان آمن.</li>
                              <li>اتصل بخط المساعدة على الطريق المذكور في عقد الإيجار.</li>
                              <li>سنقوم بإرسال فني أو سيارة بديلة، اعتمادًا على طبيعة العطل والموقع.</li>
                              <li>لا تقم بإصلاح السيارة بنفسك أو عن طريق طرف ثالث دون موافقة مسبقة.</li>
                            </ol>
                            <p className="mt-4">
                              نوفر خدمة المساعدة على الطريق على مدار الساعة طوال أيام الأسبوع لجميع عملائنا.
                            </p>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-7">
                          <AccordionTrigger className="text-lg font-medium">
                            هل يمكنني تعديل حجزي بعد التأكيد؟
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <p>نعم، يمكنك تعديل حجزك وفقًا للشروط التالية:</p>
                            <ul className="list-disc mr-6 space-y-2">
                              <li>
                                <strong>تغيير التواريخ:</strong> يمكن تغيير تواريخ الحجز مجانًا قبل 48 ساعة من وقت
                                الاستلام المحدد، وفقًا لتوفر السيارات.
                              </li>
                              <li>
                                <strong>تغيير نوع السيارة:</strong> يمكن ترقية أو تخفيض فئة السيارة قبل 48 ساعة من وقت
                                الاستلام، مع تعديل السعر وفقًا للفئة الجديدة.
                              </li>
                              <li>
                                <strong>تغيير مكان الاستلام/الإرجاع:</strong> يمكن تغيير مواقع الاستلام والإرجاع قبل 48
                                ساعة، وقد تطبق رسوم إضافية.
                              </li>
                              <li>
                                <strong>إضافة خدمات:</strong> يمكن إضافة خدمات إضافية (مثل GPS، مقعد أطفال، سائق إضافي)
                                في أي وقت قبل الاستلام، وفقًا للتوفر.
                              </li>
                            </ul>
                            <p className="mt-4">
                              التعديلات في أقل من 48 ساعة قبل وقت الاستلام قد تخضع لرسوم إدارية وتعتمد على توفر
                              السيارات. يرجى الاتصال بخدمة العملاء لتعديل حجزك.
                            </p>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-8">
                          <AccordionTrigger className="text-lg font-medium">
                            هل يمكنني تمديد فترة الإيجار؟
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <p>نعم، يمكنك تمديد فترة الإيجار وفقًا للشروط التالية:</p>
                            <ul className="list-disc mr-6 space-y-2">
                              <li>يجب طلب التمديد قبل 24 ساعة على الأقل من وقت الإرجاع المحدد.</li>
                              <li>يخضع التمديد لتوفر السيارة للفترة المطلوبة.</li>
                              <li>سيتم احتساب الأيام الإضافية وفقًا للسعر اليومي الحالي، وقد يختلف عن السعر الأصلي.</li>
                              <li>قد يتطلب التمديد تحديث عقد الإيجار وتقديم دفعة إضافية.</li>
                              <li>في حالة عدم توفر نفس السيارة، قد نقدم سيارة بديلة من نفس الفئة.</li>
                            </ul>
                            <p className="mt-4">
                              <strong>تحذير:</strong> الاحتفاظ بالسيارة بعد وقت الإرجاع المحدد دون موافقة مسبقة يعتبر
                              انتهاكًا للعقد وقد يؤدي إلى رسوم تأخير كبيرة (ضعف السعر اليومي) وإبلاغ السلطات.
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-12 bg-primary text-white">
          <div className="container text-center">
            <h2 className="text-2xl font-bold mb-4">هل لديك أسئلة أخرى؟</h2>
            <p className="max-w-2xl mx-auto mb-8">
              فريق خدمة العملاء لدينا متاح للإجابة على جميع استفساراتك. لا تتردد في التواصل معنا.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="gap-2">
                <HelpCircle className="h-5 w-5" />
                تواصل معنا
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white hover:bg-white/10">
                +966 12 345 6789
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-200 py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Car className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl text-white">كار رينتال</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-400">© {new Date().getFullYear()} كار رينتال. جميع الحقوق محفوظة.</p>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">فيسبوك</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                <span className="sr-only">تويتر</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">انستغرام</span>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
