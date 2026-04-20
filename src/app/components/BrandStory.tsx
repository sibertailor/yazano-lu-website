import { useEffect, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function BrandStory() {
  const [titleAnimated, setTitleAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTitleAnimated(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-amber-100 rounded-3xl -rotate-3"></div>
            <ImageWithFallback
              src="/images/susamtop.png"
              alt="Traditional production"
              className="relative rounded-3xl shadow-xl w-full h-[500px] object-cover"
            />
          </div>

          <div className="space-y-6">
            <div className="relative mb-2 flex min-h-[160px] items-center justify-center">
              <span
                className={`pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[70px] font-extrabold tracking-[-2px] text-[#e5e2db] transition-all duration-1000 md:text-[85px] ${
                  titleAnimated ? 'opacity-100 blur-0' : 'opacity-0 blur-[2px]'
                }`}
              >
                Gelenekten Gelen
              </span>

              <h2
                className={`relative z-10 translate-y-4 text-center text-[38px] font-bold text-[#1f1f1f] transition-all duration-700 md:text-[60px] ${
                  titleAnimated ? 'translate-y-4 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                Doğal Lezzet
              </h2>
            </div>

            <div className="space-y-4 text-stone-600 text-lg">
              <p>
                1930 yılından bu yana, köklü üretim geleneğimizi modern kalite
                standartlarıyla birleştirerek doğal ve katkısız ürünler sunuyoruz.
                Seri üretim yerine, her aşaması titizlikle kontrol edilen, kalite
                odaklı bir üretim anlayışını benimsiyoruz.
              </p>
              <p>
                Ürünlerimizde yalnızca gerçek susam, doğal üzüm pekmezi ve özenle
                seçilmiş hammaddeler kullanılır. Glikoz şurubu, yapay aroma ve
                koruyucu katkı maddelerine kesinlikle yer verilmez.
              </p>
              <p>
                Geleneksel ustalığın deneyimi ile doğal içerikleri buluşturan
                üretim yaklaşımımız sayesinde, aileniz için güvenle tercih
                edebileceğiniz, yüksek kalite standartlarında lezzetler sunuyoruz.
              </p>
            </div>

            <div className="flex gap-8 pt-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
}