import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // WhatsApp ile mesaj gönderme
    const message = `
Yeni İletişim Talebi
İsim: ${formData.name}
E-posta: ${formData.email}
Telefon: ${formData.phone}
Konu: ${formData.subject}
Mesaj: ${formData.message}
    `.trim();
    
    const whatsappUrl = `https://wa.me/905321316540?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Formu temizle
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-stone-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-serif text-stone-900 mb-6">İletişim</h1>
            <p className="text-xl text-stone-600">
              Sorularınız, önerileriniz veya siparişleriniz için bizimle iletişime geçin
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif text-stone-900 mb-8">İletişim Bilgileri</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-amber-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-stone-900 mb-1">Adres</h3>
                    <p className="text-stone-600">
                      Organize Sanayi Bölgesi, 4. Cadde No: 27<br />
                      Şehitkamil / Gaziantep
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-amber-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-stone-900 mb-1">Telefon</h3>
                    <p className="text-stone-600">
                      +90 342 123 45 67<br />
                      +90 342 123 45 68
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-amber-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-stone-900 mb-1">WhatsApp</h3>
                    <p className="text-stone-600 mb-2">+90 532 131 65 40</p>
                    <a 
                      href="https://wa.me/905321316540" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors text-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp ile İletişim
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-amber-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-stone-900 mb-1">E-posta</h3>
                    <p className="text-stone-600">
                      info@yazanoglu.com.tr<br />
                      siparis@yazanoglu.com.tr
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-amber-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-stone-900 mb-1">Çalışma Saatleri</h3>
                    <p className="text-stone-600">
                      Pazartesi - Cuma: 08:00 - 18:00<br />
                      Cumartesi: 09:00 - 15:00<br />
                      Pazar: Kapalı
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop" 
                  alt="Harita"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif text-stone-900 mb-8">Bize Ulaşın</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent"
                    placeholder="Adınız ve soyadınız"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                    E-posta *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent"
                    placeholder="ornek@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent"
                    placeholder="0532 123 45 67"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-2">
                    Konu *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent"
                  >
                    <option value="">Konu seçiniz</option>
                    <option value="Sipariş">Sipariş</option>
                    <option value="Ürün Bilgisi">Ürün Bilgisi</option>
                    <option value="Toptan Satış">Toptan Satış</option>
                    <option value="Bayilik">Bayilik</option>
                    <option value="Fabrika Turu">Fabrika Turu</option>
                    <option value="Öneri/Şikayet">Öneri/Şikayet</option>
                    <option value="Diğer">Diğer</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                    Mesajınız *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent resize-none"
                    placeholder="Mesajınızı buraya yazın..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-900 text-white px-6 py-4 rounded-lg hover:bg-amber-800 transition-colors flex items-center justify-center gap-2 font-medium"
                >
                  <Send className="w-5 h-5" />
                  WhatsApp ile Gönder
                </button>

                <p className="text-sm text-stone-500 text-center">
                  * işaretli alanlar zorunludur. Formunuz WhatsApp üzerinden gönderilecektir.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-stone-900 mb-8 text-center">Sıkça Sorulan Sorular</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-medium text-stone-900 mb-2">Siparişimi nasıl verebilirim?</h3>
                <p className="text-stone-600">
                  WhatsApp (0532 131 65 40) üzerinden doğrudan sipariş verebilir veya web sitemizde 
                  bulunan ürünleri seçerek WhatsApp sipariş butonunu kullanabilirsiniz.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-medium text-stone-900 mb-2">Kargo ücreti ne kadar?</h3>
                <p className="text-stone-600">
                  500 TL ve üzeri alışverişlerde kargo ücretsizdir. 500 TL altı alışverişlerde 
                  kargo ücreti 50 TL'dir.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-medium text-stone-900 mb-2">Ürünleriniz organik mi?</h3>
                <p className="text-stone-600">
                  Evet, tüm ürünlerimiz %100 organik ve doğal hammaddelerden üretilmektedir. 
                  AB onaylı organik sertifikamız mevcuttur.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-medium text-stone-900 mb-2">Toptan satış yapıyor musunuz?</h3>
                <p className="text-stone-600">
                  Evet, market, otel, restoran ve kurumsal firmalar için toptan satış yapıyoruz. 
                  Detaylı bilgi için bizimle iletişime geçebilirsiniz.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-medium text-stone-900 mb-2">Bayilik alabilir miyim?</h3>
                <p className="text-stone-600">
                  Türkiye'nin çeşitli illerinde bayilik fırsatları sunuyoruz. Bayilik başvurusu için 
                  lütfen bizimle iletişime geçin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
