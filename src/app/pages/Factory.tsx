import { Factory as FactoryIcon, Droplets, Wheat, Flame, PackageCheck, Award } from 'lucide-react';

export function Factory() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-stone-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-serif text-stone-900 mb-6">Fabrikamız</h1>
            <p className="text-xl text-stone-600">
              Modern teknoloji ve geleneksel ustalığın buluştuğu, hijyen standartlarının 
              en üst seviyede tutulduğu üretim tesisimiz
            </p>
          </div>
        </div>
      </section>

      {/* Facility Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop" 
                alt="Yazanoğlu fabrika iç görünüm"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-serif text-stone-900 mb-6">Üretim Tesisimiz</h2>
              <div className="space-y-4 text-stone-600">
                <p>
                  Gaziantep Organize Sanayi Bölgesi'nde yer alan 5.000 m² kapalı alana sahip 
                  modern fabrikamız, en son teknoloji ile donatılmış üretim hatlarına ev sahipliği yapmaktadır.
                </p>
                <p>
                  Tüm üretim süreçlerimiz ISO 9001 Kalite Yönetim Sistemi ve HACCP Gıda 
                  Güvenliği standartları çerçevesinde gerçekleştirilmektedir.
                </p>
                <p>
                  Fabrikamızda günlük 10 ton tahin, 8 ton helva, 5 ton lokum ve 3 ton pekmez 
                  üretim kapasitesine sahibiz.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-stone-50 p-4 rounded-lg">
                  <div className="text-3xl font-serif text-amber-900 mb-1">5.000m²</div>
                  <div className="text-sm text-stone-600">Kapalı Alan</div>
                </div>
                <div className="bg-stone-50 p-4 rounded-lg">
                  <div className="text-3xl font-serif text-amber-900 mb-1">150+</div>
                  <div className="text-sm text-stone-600">Çalışan</div>
                </div>
                <div className="bg-stone-50 p-4 rounded-lg">
                  <div className="text-3xl font-serif text-amber-900 mb-1">26 Ton</div>
                  <div className="text-sm text-stone-600">Günlük Kapasite</div>
                </div>
                <div className="bg-stone-50 p-4 rounded-lg">
                  <div className="text-3xl font-serif text-amber-900 mb-1">4</div>
                  <div className="text-sm text-stone-600">Üretim Hattı</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-stone-900 mb-4">Üretim Sürecimiz</h2>
            <p className="text-xl text-stone-600">Hammaddeden bitmiş ürüne her aşama kontrollü</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Wheat className="w-8 h-8 text-amber-900" />
              </div>
              <h3 className="text-xl font-serif text-stone-900 mb-3">1. Hammadde Seçimi</h3>
              <p className="text-stone-600">
                Sadece en kaliteli, %100 organik hammaddeler seçilir. Her parti laboratuvar 
                testlerinden geçer ve onaylanır.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Droplets className="w-8 h-8 text-amber-900" />
              </div>
              <h3 className="text-xl font-serif text-stone-900 mb-3">2. Temizleme</h3>
              <p className="text-stone-600">
                Hammaddeler modern temizleme ve yıkama sistemlerinden geçirilerek 
                tüm yabancı maddelerden arındırılır.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Flame className="w-8 h-8 text-amber-900" />
              </div>
              <h3 className="text-xl font-serif text-stone-900 mb-3">3. Kavrulma</h3>
              <p className="text-stone-600">
                Geleneksel ustalık ile modern teknoloji birleşerek, optimal sıcaklıkta 
                mükemmel kavrulma sağlanır.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <FactoryIcon className="w-8 h-8 text-amber-900" />
              </div>
              <h3 className="text-xl font-serif text-stone-900 mb-3">4. İşleme</h3>
              <p className="text-stone-600">
                Kavrulmuş hammaddeler, ürün tipine göre öğütme, karıştırma veya 
                pişirme işlemlerinden geçer.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-amber-900" />
              </div>
              <h3 className="text-xl font-serif text-stone-900 mb-3">5. Kalite Kontrol</h3>
              <p className="text-stone-600">
                Her ürün, tat, koku, renk ve kıvam açısından titizlikle kontrol edilir. 
                Sadece mükemmel olanlar paketlemeye gider.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <PackageCheck className="w-8 h-8 text-amber-900" />
              </div>
              <h3 className="text-xl font-serif text-stone-900 mb-3">6. Paketleme</h3>
              <p className="text-stone-600">
                Ürünler hijyenik koşullarda, oksijen geçirmez ambalajlarda paketlenerek 
                tazeliğini korur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Tradition */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif text-stone-900 mb-4">Teknoloji ve Gelenek</h2>
              <p className="text-xl text-stone-600">
                Modern makineler ve geleneksel ustalığın mükemmel uyumu
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-amber-50 p-8 rounded-lg">
                <h3 className="text-2xl font-serif text-stone-900 mb-4">Modern Teknoloji</h3>
                <ul className="space-y-3 text-stone-600">
                  <li className="flex items-start">
                    <span className="text-amber-900 mr-2">•</span>
                    Tam otomatik tahin ve helva üretim hatları
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-900 mr-2">•</span>
                    Bilgisayar kontrollü sıcaklık ve nem sistemi
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-900 mr-2">•</span>
                    İleri teknoloji laboratuvar test cihazları
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-900 mr-2">•</span>
                    Otomatik paketleme ve etiketleme makineleri
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-900 mr-2">•</span>
                    Dijital kalite kontrol sistemleri
                  </li>
                </ul>
              </div>

              <div className="bg-stone-50 p-8 rounded-lg">
                <h3 className="text-2xl font-serif text-stone-900 mb-4">Geleneksel Ustalık</h3>
                <ul className="space-y-3 text-stone-600">
                  <li className="flex items-start">
                    <span className="text-amber-900 mr-2">•</span>
                    Ustalarımızın 30+ yıllık deneyimi
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-900 mr-2">•</span>
                    Elle yapılan lokum katlaması
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-900 mr-2">•</span>
                    Geleneksel tariflerle hazırlanan karışımlar
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-900 mr-2">•</span>
                    Tat ve kıvam kontrolü için usta tecrübesi
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-900 mr-2">•</span>
                    Nesilden nesile aktarılan üretim sırları
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-gradient-to-br from-amber-900 to-amber-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif mb-8">Kalite ve Hijyen Standartlarımız</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-5xl font-serif mb-2">ISO 9001</div>
                <div className="text-amber-100">Kalite Yönetim Sistemi</div>
              </div>
              <div>
                <div className="text-5xl font-serif mb-2">HACCP</div>
                <div className="text-amber-100">Gıda Güvenliği Sistemi</div>
              </div>
              <div>
                <div className="text-5xl font-serif mb-2">TSE</div>
                <div className="text-amber-100">Türk Standartları Enstitüsü</div>
              </div>
            </div>

            <p className="text-lg text-amber-50 leading-relaxed">
              Tüm üretim süreçlerimiz uluslararası gıda güvenliği standartlarına uygun olarak 
              gerçekleştirilmekte, düzenli aralıklarla bağımsız denetimlerden geçmektedir. 
              Personelimiz sürekli eğitim programlarıyla bilgi ve becerilerini güncel tutmaktadır.
            </p>
          </div>
        </div>
      </section>

      {/* Factory Tour CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-serif text-stone-900 mb-6">Fabrika Turumuza Katılın</h2>
            <p className="text-xl text-stone-600 mb-8">
              Ürünlerimizin nasıl üretildiğini görmek ister misiniz? Gruplar halinde 
              fabrika turları düzenliyoruz. Rezervasyon için bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/905321316540?text=Merhaba, fabrika turu hakkında bilgi almak istiyorum" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors inline-flex items-center justify-center gap-2"
              >
                WhatsApp ile Rezervasyon
              </a>
              <a 
                href="/contact"
                className="bg-stone-200 text-stone-900 px-8 py-3 rounded-full hover:bg-stone-300 transition-colors"
              >
                İletişim Formu
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
