import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  title: string;
  image: string;
  productCount: number;
  path: string;
}

export function CategoryCard({ title, image, productCount, path }: CategoryCardProps) {
  return (
    <Link to={path} className="block">
      <div className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
        <div className="aspect-[4/5] relative">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h3 className="text-3xl font-serif mb-2">{title}</h3>
            <p className="text-stone-200 mb-4">{productCount} Ürün</p>
            <div className="flex items-center gap-2 text-sm group-hover:gap-4 transition-all">
              <span>Keşfet</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}