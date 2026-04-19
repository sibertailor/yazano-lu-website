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
    name: "Çifte Kavrulmuş Tahin",
    price: "₺245",
    category: "En Çok Satan",
    image: "https://images.unsplash.com/photo-1747932984398-dd52d84886d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWhpbmklMjBzZXNhbWUlMjBwYXN0ZSUyMGJvd2x8ZW58MXx8fHwxNzc1MTUxMTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Tahin Pekmez Seti",
    price: "₺395",
    category: "En Çok Satan",
    image: "https://images.unsplash.com/photo-1682482003050-49c10c481a44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2xhc3NlcyUyMHBla21leiUyMGdyYXBlJTIwc3lydXB8ZW58MXx8fHwxNzc1MTUxMTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Antep Fıstıklı Helva",
    price: "₺285",
    category: "En Çok Satan",
    image: "https://images.unsplash.com/photo-1608196696432-baa735dd7e58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxoYWx2YSUyMHRyYWRpdGlvbmFsJTIwdHVya2lzaCUyMHN3ZWV0fGVufDF8fHx8MTc3NTE1MTE0N3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Antep Fıstıklı Lokum",
    price: "₺165",
    category: "En Çok Satan",
    image: "https://images.unsplash.com/photo-1762808626502-a25dc8f6be6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJraXNoJTIwZGVsaWdodCUyMGxva3VtJTIwZGVzc2VydHxlbnwxfHx8fDE3NzUxNTExNDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function Home() {
  return (
    <>
      <Hero />

      {/* Categories Section */}
      <section className="pt-12 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative text-center max-w-3xl mx-auto mb-12 overflow-hidden">


            <div className="relative z-10">
              <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-amber-50 text-amber-800 text-2xl font-medium tracking-wide">
                Yazanoğlu Kalitesi
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mb-4">
                Sofralarınıza Değer Katan Lezzetler
              </h2>
              <p className="text-base md:text-lg text-stone-600 leading-8">
                Altın Susam kalitesi ve Yazanoğlu ustalığıyla hazırlanan tahin, helva,
                lokum ve özel ürün çeşitlerimizi keşfedin.
              </p>
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

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-stone-900 mb-4">Öne Çıkan Ürünler</h2>
            <p className="text-xl text-stone-600">En çok tercih edilen lezzetlerimiz</p>
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