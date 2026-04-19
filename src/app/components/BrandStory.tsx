import { ImageWithFallback } from './figma/ImageWithFallback';

export function BrandStory() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-amber-100 rounded-3xl -rotate-3"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1759508858607-d2cb26efdbcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwb3JnYW5pYyUyMGZvb2QlMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc3MzQzOTY4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Traditional production"
              className="relative rounded-3xl shadow-xl w-full h-[500px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-amber-100 rounded-full text-amber-900 text-sm">
              Hikayemiz
            </div>
            <h2 className="text-4xl font-serif text-stone-900">
              1930'dan Beri<br />
              Kalite ve Gelenek
            </h2>
            <div className="space-y-4 text-stone-600 text-lg">
              <p>
                1930'dan beri geleneksel üretim anlayışı ile doğal ve katkısız ürünler üretiyoruz. 
                Seri üretim değil kalite odaklı üretim yapıyoruz.
              </p>
              <p>
                Ürünlerimizde gerçek susam, gerçek üzüm pekmezi ve doğal malzemeler kullanıyoruz. 
                Glikoz şurubu, yapay aroma ve koruyucu madde içermez.
              </p>
              <p>
                Geleneksel ustalık, doğal ürünler ve premium kalite anlayışımızla, 
                ailenize güvenle sunabileceğiniz lezzetler üretiyoruz.
              </p>
            </div>
            <div className="flex gap-8 pt-6">
              <div>
                <div className="text-4xl font-serif text-amber-900 mb-2">93+</div>
                <div className="text-stone-600">Yıllık Deneyim</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-amber-900 mb-2">100%</div>
                <div className="text-stone-600">Doğal Ürün</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-amber-900 mb-2">20+</div>
                <div className="text-stone-600">Farklı Ürün</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
