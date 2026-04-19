import { Leaf, Factory, Clock, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: "%100 Doğal Ürünler",
    description: "Glikoz şurubu, yapay aroma ve koruyucu içermez"
  },
  {
    icon: Factory,
    title: "Geleneksel Üretim",
    description: "1930'dan beri değişmeyen geleneksel üretim yöntemleri"
  },
  {
    icon: Clock,
    title: "Taze Üretim",
    description: "Her gün taze olarak üretilen ürünler"
  },
  {
    icon: ShieldCheck,
    title: "Güvenli Alışveriş",
    description: "Hızlı ve güvenilir teslimat garantisi"
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-stone-900 mb-4">Neden Yazanoğlu?</h2>
          <p className="text-xl text-stone-600">Kalite ve güven odaklı üretim anlayışımız</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-amber-900" />
                </div>
                <h3 className="text-xl text-stone-900 mb-3">{feature.title}</h3>
                <p className="text-stone-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
