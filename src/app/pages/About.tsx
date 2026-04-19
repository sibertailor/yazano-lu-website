import { Award, Users, Leaf, Heart } from 'lucide-react';

export function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-stone-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-serif text-stone-900 mb-6">Hakkımızda</h1>
            <p className="text-xl text-stone-600">
              1930'dan bu yana Türk gıda kültürünün en değerli lezzetlerini, 
              geleneksel yöntemlerle üretmenin gururunu yaşıyoruz
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif text-stone-900 mb-6">Bizim Hikayemiz</h2>
              <div className="space-y-4 text-stone-600">
                <p>
                  Yazanoğlu ailesi, 1930 yılında Gaziantep'te küçük bir tahin atölyesiyle başlayan 
                  yolculuğunda, geleneksel Türk lezzetlerini en saf haliyle sunma misyonunu 
                  benimsemiştir.
                </p>
                <p>
                  Üç nesil boyunca aktarılan bilgi birikimi ve ustalık, modern teknolojiyle 
                  birleşerek, bugün binlerce ailenin sofrasına ulaşan kaliteli ürünlerin 
                  doğmasını sağlamıştır.
                </p>
                <p>
                  Büyükbabamızın elle kavurduğu susam tohumlarından, bugün modern fabrikamızda 
                  ürettiğimiz tahin, helva, lokum ve pekmeze kadar uzanan bu yolculukta, 
                  hiçbir zaman ödün vermediğimiz tek şey var: Kalite ve doğallık.
                </p>
                <p>
                  %100 organik ve doğal malzemeler kullanarak, katkı maddesi eklemeden, 
                  sadece geleneksel tarifler ve sabırla ürettiğimiz her ürün, aslında bir 
                  aile mirası hikayesidir.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop" 
                alt="Yazanoğlu fabrika"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-amber-900 text-white p-8 rounded-lg shadow-xl">
                <div className="text-5xl font-serif mb-2">94</div>
                <div className="text-sm">Yıllık Deneyim</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-stone-900 mb-4">Değerlerimiz</h2>
            <p className="text-xl text-stone-600">Bizi biz yapan ilkeler</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-amber-900" />
              </div>
              <h3 className="text-xl font-serif text-stone-900 mb-3">Doğallık</h3>
              <p className="text-stone-600">
                %100 doğal ve organik malzemeler kullanıyor, hiçbir katkı maddesi eklemiyoruz
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-amber-900" />
              </div>
              <h3 className="text-xl font-serif text-stone-900 mb-3">Kalite</h3>
              <p className="text-stone-600">
                Her ürünümüz titiz kalite kontrol süreçlerinden geçer ve uluslararası standartlara uygundur
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-amber-900" />
              </div>
              <h3 className="text-xl font-serif text-stone-900 mb-3">Gelenek</h3>
              <p className="text-stone-600">
                Dedelerimizden öğrendiğimiz geleneksel üretim yöntemlerini koruyoruz
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-amber-900" />
              </div>
              <h3 className="text-xl font-serif text-stone-900 mb-3">Tutku</h3>
              <p className="text-stone-600">
                Her ürünü sevgiyle, özenle ve tutkuyla üretiyoruz
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-stone-900 mb-4">Yönetim Ekibimiz</h2>
            <p className="text-xl text-stone-600">Yazanoğlu ailesinin bugünkü temsilcileri</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop" 
                  alt="Mehmet Yazanoğlu"
                  className="w-48 h-48 rounded-full mx-auto object-cover"
                />
              </div>
              <h3 className="text-xl font-serif text-stone-900 mb-2">Mehmet Yazanoğlu</h3>
              <p className="text-stone-600 mb-2">Kurucu & Genel Müdür</p>
              <p className="text-sm text-stone-500">
                3. nesil Yazanoğlu, ailenin geleneksel değerlerini modern iş anlayışıyla harmanlıyor
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop" 
                  alt="Ayşe Yazanoğlu"
                  className="w-48 h-48 rounded-full mx-auto object-cover"
                />
              </div>
              <h3 className="text-xl font-serif text-stone-900 mb-2">Ayşe Yazanoğlu</h3>
              <p className="text-stone-600 mb-2">Üretim Müdürü</p>
              <p className="text-sm text-stone-500">
                20 yıllık deneyimiyle geleneksel tariflerin modern üretimde hayata geçirilmesini sağlıyor
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop" 
                  alt="Can Yazanoğlu"
                  className="w-48 h-48 rounded-full mx-auto object-cover"
                />
              </div>
              <h3 className="text-xl font-serif text-stone-900 mb-2">Can Yazanoğlu</h3>
              <p className="text-stone-600 mb-2">Pazarlama Direktörü</p>
              <p className="text-sm text-stone-500">
                Geleneksel lezzetleri dijital çağda daha fazla insana ulaştırmanın yollarını arıyor
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-amber-900 to-amber-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-serif mb-2">94</div>
              <div className="text-amber-100">Yıllık Tecrübe</div>
            </div>
            <div>
              <div className="text-5xl font-serif mb-2">50K+</div>
              <div className="text-amber-100">Mutlu Müşteri</div>
            </div>
            <div>
              <div className="text-5xl font-serif mb-2">24</div>
              <div className="text-amber-100">Farklı Ürün</div>
            </div>
            <div>
              <div className="text-5xl font-serif mb-2">%100</div>
              <div className="text-amber-100">Doğal İçerik</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-stone-900 mb-4">Sertifikalarımız</h2>
            <p className="text-xl text-stone-600">Kalitemizi tescilleyen belgeler</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 border border-stone-200 rounded-lg">
              <div className="text-4xl mb-3">🏅</div>
              <div className="text-sm text-stone-700">ISO 9001</div>
              <div className="text-xs text-stone-500 mt-1">Kalite Yönetimi</div>
            </div>
            <div className="text-center p-6 border border-stone-200 rounded-lg">
              <div className="text-4xl mb-3">🌿</div>
              <div className="text-sm text-stone-700">Organik Sertifika</div>
              <div className="text-xs text-stone-500 mt-1">AB Onaylı</div>
            </div>
            <div className="text-center p-6 border border-stone-200 rounded-lg">
              <div className="text-4xl mb-3">✓</div>
              <div className="text-sm text-stone-700">HACCP</div>
              <div className="text-xs text-stone-500 mt-1">Gıda Güvenliği</div>
            </div>
            <div className="text-center p-6 border border-stone-200 rounded-lg">
              <div className="text-4xl mb-3">⭐</div>
              <div className="text-sm text-stone-700">Helal Sertifika</div>
              <div className="text-xs text-stone-500 mt-1">Uluslararası</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
