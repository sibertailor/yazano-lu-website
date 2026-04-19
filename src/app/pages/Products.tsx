import { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { Filter } from 'lucide-react';

const allProducts = [
  {
    name: "Çifte Kavrulmuş Tahin",
    price: "₺245",
    category: "Tahin",
    image: "https://images.unsplash.com/photo-1543463573-35e4afd0ab43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWhpbmklMjBqYXIlMjBwcm9kdWN0fGVufDF8fHx8MTc3MzQzOTY4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Beyaz Tahin",
    price: "₺235",
    category: "Tahin",
    image: "https://images.unsplash.com/photo-1588427681642-580ba78d882a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWhpbmklMjBzZXNhbWUlMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NzM0Mzk2Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Organik Tahin",
    price: "₺265",
    category: "Tahin",
    image: "https://images.unsplash.com/photo-1543463573-35e4afd0ab43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWhpbmklMjBqYXIlMjBwcm9kdWN0fGVufDF8fHx8MTc3MzQzOTY4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Antep Fıstıklı Helva",
    price: "₺285",
    category: "Helva",
    image: "https://images.unsplash.com/photo-1767796781395-4b3163d894ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWx2YSUyMHN3ZWV0JTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzczNDM5NjgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Kakaolu Helva",
    price: "₺225",
    category: "Helva",
    image: "https://images.unsplash.com/photo-1767796781395-4b3163d894ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWx2YSUyMHN3ZWV0JTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzczNDM5NjgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Sade Helva",
    price: "₺195",
    category: "Helva",
    image: "https://images.unsplash.com/photo-1767796781395-4b3163d894ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWx2YSUyMHN3ZWV0JTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzczNDM5NjgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Cevizli Helva",
    price: "₺255",
    category: "Helva",
    image: "https://images.unsplash.com/photo-1767796781395-4b3163d894ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWx2YSUyMHN3ZWV0JTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzczNDM5NjgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Fındıklı Helva",
    price: "₺245",
    category: "Helva",
    image: "https://images.unsplash.com/photo-1767796781395-4b3163d894ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWx2YSUyMHN3ZWV0JTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzczNDM5NjgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Antep Fıstıklı Lokum",
    price: "₺165",
    category: "Lokum",
    image: "https://images.unsplash.com/photo-1516774818621-7d41943dd5b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJraXNoJTIwZGVsaWdodCUyMGxva3VtfGVufDF8fHx8MTc3MzQzOTY4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Gül Lokumu",
    price: "₺135",
    category: "Lokum",
    image: "https://images.unsplash.com/photo-1516774818621-7d41943dd5b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJraXNoJTIwZGVsaWdodCUyMGxva3VtfGVufDF8fHx8MTc3MzQzOTY4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Karışık Lokum",
    price: "₺145",
    category: "Lokum",
    image: "https://images.unsplash.com/photo-1516774818621-7d41943dd5b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJraXNoJTIwZGVsaWdodCUyMGxva3VtfGVufDF8fHx8MTc3MzQzOTY4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Çifte Kavrulmuş Lokum",
    price: "₺155",
    category: "Lokum",
    image: "https://images.unsplash.com/photo-1516774818621-7d41943dd5b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJraXNoJTIwZGVsaWdodCUyMGxva3VtfGVufDF8fHx8MTc3MzQzOTY4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Fındıklı Lokum",
    price: "₺175",
    category: "Lokum",
    image: "https://images.unsplash.com/photo-1516774818621-7d41943dd5b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJraXNoJTIwZGVsaWdodCUyMGxva3VtfGVufDF8fHx8MTc3MzQzOTY4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Çikolatalı Lokum",
    price: "₺185",
    category: "Lokum",
    image: "https://images.unsplash.com/photo-1516774818621-7d41943dd5b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJraXNoJTIwZGVsaWdodCUyMGxva3VtfGVufDF8fHx8MTc3MzQzOTY4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Keçiboynuzu Pekmezi",
    price: "₺185",
    category: "Pekmez",
    image: "https://images.unsplash.com/photo-1588427681642-580ba78d882a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWhpbmklMjBzZXNhbWUlMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NzM0Mzk2Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Dut Pekmezi",
    price: "₺175",
    category: "Pekmez",
    image: "https://images.unsplash.com/photo-1588427681642-580ba78d882a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWhpbmklMjBzZXNhbWUlMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NzM0Mzk2Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Üzüm Pekmezi",
    price: "₺165",
    category: "Pekmez",
    image: "https://images.unsplash.com/photo-1588427681642-580ba78d882a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWhpbmklMjBzZXNhbWUlMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NzM0Mzk2Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Susam Yağı",
    price: "₺195",
    category: "Yağlar",
    image: "https://images.unsplash.com/photo-1708861617671-0d201a7b0ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXNhbWUlMjBvaWwlMjBib3R0bGV8ZW58MXx8fHwxNzczNDM0OTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Çörek Otu Yağı",
    price: "₺215",
    category: "Yağlar",
    image: "https://images.unsplash.com/photo-1708861617671-0d201a7b0ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXNhbWUlMjBvaWwlMjBib3R0bGV8ZW58MXx8fHwxNzczNDM0OTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Zeytin Yağı",
    price: "₺285",
    category: "Yağlar",
    image: "https://images.unsplash.com/photo-1708861617671-0d201a7b0ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXNhbWUlMjBvaWwlMjBib3R0bGV8ZW58MXx8fHwxNzczNDM0OTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Tahin + Pekmez Seti",
    price: "₺395",
    category: "Set",
    image: "https://images.unsplash.com/photo-1761314025611-957a20e3e8a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXNhbWUlMjBzZWVkcyUyMGJvd2x8ZW58MXx8fHwxNzczNDM5NjgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Kahvaltı Seti",
    price: "₺445",
    category: "Set",
    image: "https://images.unsplash.com/photo-1761314025611-957a20e3e8a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXNhbWUlMjBzZWVkcyUyMGJvd2x8ZW58MXx8fHwxNzczNDM5NjgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Premium Hediye Seti",
    price: "₺585",
    category: "Set",
    image: "https://images.unsplash.com/photo-1761314025611-957a20e3e8a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXNhbWUlMjBzZWVkcyUyMGJvd2x8ZW58MXx8fHwxNzczNDM5NjgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

const categories = ["Tümü", "Tahin", "Helva", "Lokum", "Pekmez", "Yağlar", "Set"];

export function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = (searchParams.get('q') || '').trim().toLowerCase();
  const categoryFromUrl = searchParams.get('category') || 'Tümü';

  const [selectedCategory, setSelectedCategory] = useState(
    categories.includes(categoryFromUrl) ? categoryFromUrl : 'Tümü'
  );

  useEffect(() => {
    const nextCategory = categories.includes(categoryFromUrl) ? categoryFromUrl : 'Tümü';
    setSelectedCategory(nextCategory);
  }, [categoryFromUrl]);

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const categoryMatch =
        selectedCategory === 'Tümü' || product.category === selectedCategory;

      const searchMatch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);

      return categoryMatch && searchMatch;
    });
  }, [selectedCategory, query]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);

    const nextParams = new URLSearchParams(searchParams);

    if (category === 'Tümü') {
      nextParams.delete('category');
    } else {
      nextParams.set('category', category);
    }

    setSearchParams(nextParams);
  };

  return (
    <>
      <section className="relative bg-gradient-to-br from-amber-50 to-stone-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-serif text-stone-900 mb-6">Tüm Ürünlerimiz</h1>
            <p className="text-xl text-stone-600 mb-4">
              1930'dan beri %100 doğal ve organik malzemelerle ürettiğimiz geleneksel Türk lezzetlerini keşfedin
            </p>

            {query && (
              <p className="text-stone-700">
                <span className="font-medium">"{searchParams.get('q')}"</span> için sonuçlar gösteriliyor
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-stone-200 sticky top-[120px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-stone-700" />
            <span className="text-stone-700">Kategori:</span>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-amber-900 text-white'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <p className="text-stone-600">
              <span className="font-medium">{filteredProducts.length}</span> ürün gösteriliyor
            </p>

            {(query || selectedCategory !== 'Tümü') && (
              <button
                onClick={() => {
                  setSelectedCategory('Tümü');
                  setSearchParams({});
                }}
                className="text-sm text-amber-900 hover:text-amber-700"
              >
                Filtreleri temizle
              </button>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="rounded-3xl border border-stone-200 bg-white p-10 text-center shadow-sm">
              <h2 className="text-2xl font-serif text-stone-800">Sonuç bulunamadı</h2>
              <p className="mt-3 text-stone-600">
                Farklı bir kelime ya da kategori ile tekrar deneyebilirsiniz.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <ProductCard key={`${product.name}-${index}`} {...product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}