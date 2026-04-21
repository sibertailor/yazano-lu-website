import { ShoppingCart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  name: string;
  description?: string;
  price: string;
  image: string;
  category?: string;
}

export function ProductCard({
  name,
  description,
  price,
  image,
  category,
}: ProductCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden bg-stone-100">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {category && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs text-stone-700">
            {category}
          </span>
        )}
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-lg text-stone-900 mb-1">{name}</h3>

          {description && (
            <p className="text-sm text-stone-500 mb-2 leading-relaxed line-clamp-2">
              {description}
            </p>
          )}

          <p className="text-2xl text-amber-900">{price}</p>
        </div>

        <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-amber-900 text-white rounded-xl hover:bg-amber-800 transition-colors">
          <ShoppingCart className="w-4 h-4" />
          Sepete Ekle
        </button>
      </div>
    </div>
  );
}