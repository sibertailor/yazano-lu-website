import { Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Campaign() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-900 to-amber-800 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
              <Sparkles className="w-4 h-4" />
              Özel Kampanya
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif">
              Ramazan Sofralarının<br />
              Vazgeçilmezi
            </h2>
            
            <p className="text-xl text-amber-100">
              Tahin ve Pekmez ikilisi ile sofranızı zenginleştirin. 
              Geleneksel lezzetlerin en doğal hali.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-serif mb-1">%100</div>
                <div className="text-sm text-amber-100">Doğal</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-serif mb-1">0</div>
                <div className="text-sm text-amber-100">Katkı Maddesi</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-serif mb-1">93+</div>
                <div className="text-sm text-amber-100">Yıllık Deneyim</div>
              </div>
            </div>

            <a 
              href="#products" 
              className="inline-block px-8 py-4 bg-white text-amber-900 rounded-full hover:bg-amber-50 transition-all shadow-lg hover:shadow-xl"
            >
              Kampanyayı İncele
            </a>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1588427681642-580ba78d882a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWhpbmklMjBzZXNhbWUlMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NzM0Mzk2Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Tahini and sesame"
              className="relative rounded-3xl shadow-2xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
