import { MessageCircle, Package, Send, Truck } from 'lucide-react';

const steps = [
  {
    icon: Package,
    title: "Ürünü Seç",
    description: "İstediğiniz ürünleri belirleyin"
  },
  {
    icon: Send,
    title: "WhatsApp'tan Sipariş Ver",
    description: "Tek tıkla sipariş oluşturun"
  },
  {
    icon: Truck,
    title: "Hızlı Teslimat",
    description: "Kapınıza kadar getiriyoruz"
  }
];

export function WhatsAppOrder() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full text-green-900 text-sm mb-6">
            <MessageCircle className="w-4 h-4" />
            WhatsApp Siparişi
          </div>
          
          <h2 className="text-4xl font-serif text-stone-900 mb-4">
            WhatsApp ile Kolay Sipariş
          </h2>
          <p className="text-xl text-stone-600 mb-12">
            Hızlı ve güvenli bir şekilde WhatsApp üzerinden sipariş verin
          </p>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-[60%] w-full h-0.5 bg-green-200"></div>
                  )}
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm">
                      {index + 1}
                    </div>
                    <h3 className="text-lg text-stone-900 mb-2">{step.title}</h3>
                    <p className="text-stone-600">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <a 
            href="https://wa.me/905321316540" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 text-white text-lg rounded-full hover:bg-green-700 transition-all shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-6 h-6" />
            <span>0532 131 65 40</span>
          </a>
          <p className="text-sm text-stone-500 mt-4">
            Mesai saatleri içinde size dönüş yapıyoruz
          </p>
        </div>
      </div>
    </section>
  );
}
