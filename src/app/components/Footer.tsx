import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-stone-900 text-white pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-amber-400">Yazanoğlu</h3>
            <p className="text-stone-400">
              1930'dan beri geleneksel üretim ile doğal ve katkısız ürünler
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-900 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-900 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-900 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4 text-amber-400">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors">Ana Sayfa</a></li>
              <li><a href="#products" className="text-stone-400 hover:text-white transition-colors">Ürünler</a></li>
              <li><a href="#about" className="text-stone-400 hover:text-white transition-colors">Hakkımızda</a></li>
              <li><a href="#factory" className="text-stone-400 hover:text-white transition-colors">Fabrika</a></li>
              <li><a href="#contact" className="text-stone-400 hover:text-white transition-colors">İletişim</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg mb-4 text-amber-400">Ürünlerimiz</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors">Tahin</a></li>
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors">Helva</a></li>
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors">Pekmez</a></li>
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors">Lokum</a></li>
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors">Doğal Yağlar</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg mb-4 text-amber-400">İletişim</h4>
            <ul className="space-y-3">
              <li className="flex gap-3 text-stone-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>Sanayi Mahallesi 2031 Sokak No:3<br />Manavgat / Antalya</span>
              </li>
              <li className="flex gap-3 text-stone-400">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+905321316540" className="hover:text-white transition-colors">0532 131 65 40</a>
              </li>
              <li className="flex gap-3 text-stone-400">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:info@yazanoglu.com" className="hover:text-white transition-colors">info@yazanoglu.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-400 text-sm">
            © 2026 Yazanoğlu. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-stone-400 hover:text-white transition-colors">Gizlilik Politikası</a>
            <a href="#" className="text-stone-400 hover:text-white transition-colors">Kullanım Koşulları</a>
            <a href="#" className="text-stone-400 hover:text-white transition-colors">KVKK</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
