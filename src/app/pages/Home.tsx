import { useEffect, useRef, useState } from 'react';

import { Hero } from '../components/Hero';
import { ProductCard } from '../components/ProductCard';
import { CategoryCard } from '../components/CategoryCard';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { BrandStory } from '../components/BrandStory';
import { WhatsAppOrder } from '../components/WhatsAppOrder';
import { Campaign } from '../components/Campaign';

const categories = [
  {
    title: "Tahin",
    productCount: 3,
    image: "/images/tahin-kapak.png",
    path: "/products/altin-susamli-tahin"
  },
  {
    title: "Helva",
    productCount: 5,
    image: "/images/helva.png",
    path: "/products/tahin-helvasi"
  },
  {
    title: "Lokum",
    productCount: 6,
    image: "/images/lokum.png",
    path: "/products/lokum"
  },
  {
    title: "Doğal Yağlar",
    productCount: 3,
    image: "/images/yag.png",
    path: "/products/ozel-lezzetler"
  }
];

const featuredProducts = [
  {
    name: "Çifte Kavrulmuş Tahin (950 Gr)",
    description: "Altın susamdan üretilmiş yoğun aromalı tahin",
    price: "₺650",
    category: "En Çok Satan",
    image: "/images/cifte-kavrulmus.png"
  },
  {
    name: "Tahin Pekmez Seti",
    description: "450gr tahin + 600gr Doğal üzüm pekmezi",
    price: "₺500",
    category: "En Çok Satan",
    image: "/images/tahin-pekmez.png"
  },
  {
    name: "Antep Fıstıklı Helva (700 Gr)",
    description: "Bol fıstıklı, ağızda dağılan doğal helva",
    price: "₺600",
    category: "En Çok Satan",
    image: "/images/antepfistikli-helva.png"
  },
  {
    name: "Antep Fıstıklı Lokum (400 Gr)",
    description: "Yumuşak dokulu, bol fıstıklı lokum",
    price: "₺400",
    category: "En Çok Satan",
    image: "/images/antepli-lokum.png"
  }
];

export function Home() {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <>
      <Hero />

      {/* Categories */}
      <section className="pt-12 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
          {/* ANIMASYONLU BAŞLIK */}
          <div
            ref={titleRef}
            className="relative mb-16 flex min-h-[160px] items-center justify-center overflow-hidden"
          >
            {/* SOL TARAF (arka yazı) */}
            <span
              className={`pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-y-1/2 whitespace-nowrap text-[70px] font-extrabold tracking-[-2px] text-[#e5e2db] transition-all duration-[1400ms] ease-out md:text-[85px] ${
                titleVisible
                  ? '-translate-x-1/2 opacity-100'
                  : '-translate-x-[140%] opacity-0'
              }`}
            >
              Sofralarınıza Değer
            </span>

            {/* SAĞDAN GELEN */}
            <h2
              className={`relative z-10 mt-14 text-center text-[38px] font-bold text-[#1f1f1f] transition-all duration-[1400ms] delay-200 ease-out md:text-[60px] ${
                titleVisible
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-[140%] opacity-0'
              }`}
            >
              Katan Lezzetler
            </h2>
          </div>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      <BrandStory />
      <WhyChooseUs />

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">

          {/* ANIMASYONLU BAŞLIK */}
          <div
            ref={titleRef}
            className="relative mb-16 flex min-h-[160px] items-center justify-center overflow-hidden"
          >
            {/* SOL TARAF (arka yazı) */}
            <span
              className={`pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-y-1/2 whitespace-nowrap text-[70px] font-extrabold tracking-[-2px] text-[#e5e2db] transition-all duration-[1400ms] ease-out md:text-[85px] ${
                titleVisible
                  ? '-translate-x-1/2 opacity-100'
                  : '-translate-x-[140%] opacity-0'
              }`}
            >
              Çok Tercih Edilen
            </span>

            {/* SAĞDAN GELEN */}
            <h2
              className={`relative z-10 mt-14 text-center text-[38px] font-bold text-[#1f1f1f] transition-all duration-[1400ms] delay-200 ease-out md:text-[60px] ${
                titleVisible
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-[140%] opacity-0'
              }`}
            >
              Lezzetlerimiz
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      <Campaign />
      <WhatsAppOrder />
    </>
  );
}