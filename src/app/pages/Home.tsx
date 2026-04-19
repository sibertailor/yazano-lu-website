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
    image: "https://images.unsplash.com/photo-1747932984398-dd52d84886d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWhpbmklMjBzZXNhbWUlMjBwYXN0ZSUyMGJvd2x8ZW58MXx8fHwxNzc1MTUxMTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Helva",
    productCount: 5,
    image: "https://images.unsplash.com/photo-1608196696432-baa735dd7e58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxoYWx2YSUyMHRyYWRpdGlvbmFsJTIwdHVya2lzaCUyMHN3ZWV0fGVufDF8fHx8MTc3NTE1MTE0N3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Lokum",
    productCount: 6,
    image: "https://images.unsplash.com/photo-1762808626502-a25dc8f6be6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJraXNoJTIwZGVsaWdodCUyMGxva3VtJTIwZGVzc2VydHxlbnwxfHx8fDE3NzUxNTExNDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Doğal Yağlar",
    productCount: 3,
    image: "https://images.unsplash.com/photo-1757801333069-f7b3cabaec4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGl2ZSUyMG9pbCUyMG5hdHVyYWwlMjBvcmdhbmljJTIwYm90dGxlfGVufDF8fHx8MTc3NTE1MTE2OXww&ixlib=rb-4.1.0&q=80&w=1080"
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-stone-900 mb-4">Ürün Kategorileri</h2>
            <p className="text-xl text-stone-600">Geleneksel lezzetlerimizi keşfedin</p>
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
