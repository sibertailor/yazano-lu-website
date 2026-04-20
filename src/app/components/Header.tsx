import { useEffect, useMemo, useRef, useState } from 'react';
import { Search, ShoppingCart, MessageCircle } from 'lucide-react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const categoryLinks = [
  { name: 'Altın Susamlı Tahin', path: '/products/altin-susamli-tahin' },
  { name: 'Pekmez', path: '/products/pekmez' },
  { name: 'Lokum', path: '/products/lokum' },
  { name: 'Tahin Helvası', path: '/products/tahin-helvasi' },
  { name: 'Yazanoğlu Özel Lezzetler', path: '/products/ozel-lezzetler' },
];

const searchProducts = [
  { name: 'Çifte Kavrulmuş Tahin', category: 'Tahin', path: '/products/altin-susamli-tahin' },
  { name: 'Beyaz Tahin', category: 'Tahin', path: '/products/altin-susamli-tahin' },
  { name: 'Antep Fıstıklı Helva', category: 'Helva', path: '/products/tahin-helvasi' },
  { name: 'Kakaolu Helva', category: 'Helva', path: '/products/tahin-helvasi' },
  { name: 'Sade Helva', category: 'Helva', path: '/products/tahin-helvasi' },
  { name: 'Keçiboynuzlu Helva', category: 'Helva', path: '/products/tahin-helvasi' },
  { name: 'Antep Fıstıklı Çifte Kavrulmuş Lokum', category: 'Lokum', path: '/products/lokum' },
  { name: 'Gül Lokumu (Muska)', category: 'Lokum', path: '/products/lokum' },
  { name: 'Sade Lokum', category: 'Lokum', path: '/products/lokum' },
  { name: 'Çifte Kavrulmuş Yerfıstıklı Lokum', category: 'Lokum', path: '/products/lokum' },
  { name: 'Fındıklı Lokum', category: 'Lokum', path: '/products/lokum' },
  { name: 'Meyveli Lokum', category: 'Lokum', path: '/products/lokum' },
  { name: 'Keçiboynuzlu', category: 'Lokum', path: '/products/lokum' },
  { name: 'Keçiboynuzu Pekmezi', category: 'Pekmez', path: '/products/pekmez' },
  { name: 'Üzüm Pekmezi', category: 'Pekmez', path: '/products/pekmez' },
  { name: 'Susam Yağı', category: 'Yağlar', path: '/products/ozel-lezzetler' },
  { name: 'Çörek Otu Yağı', category: 'Yağlar', path: '/products/ozel-lezzetler' },
  { name: 'Tahin + Pekmez Seti', category: 'Set', path: '/products/ozel-lezzetler' },
  { name: 'Kahvaltı Seti', category: 'Set', path: '/products/ozel-lezzetler' },
  { name: 'Kavrulmuş Susam', category: 'Tahin', path: '/products/ozel-lezzetler' },
  { name: 'Gofret', category: 'Set', path: '/products/ozel-lezzetler' },
];

const categories = ['Tümü', 'Tahin', 'Helva', 'Lokum', 'Pekmez', 'Yağlar', 'Set'];

function normalizeText(text: string) {
  return text
    .toLocaleLowerCase('tr-TR')
    .replace(/ç/g, 'c')
    .replace(/ğ/g, 'g')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ş/g, 's')
    .replace(/ü/g, 'u');
}

function levenshtein(a: string, b: string) {
  const matrix = Array.from({ length: b.length + 1 }, () =>
    Array(a.length + 1).fill(0)
  );

  for (let i = 0; i <= a.length; i += 1) matrix[0][i] = i;
  for (let j = 0; j <= b.length; j += 1) matrix[j][0] = j;

  for (let j = 1; j <= b.length; j += 1) {
    for (let i = 1; i <= a.length; i += 1) {
      const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1,
        matrix[j - 1][i] + 1,
        matrix[j - 1][i - 1] + indicator
      );
    }
  }

  return matrix[b.length][a.length];
}

export function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const navigate = useNavigate();
  const searchBoxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchBoxRef.current &&
        !searchBoxRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

const suggestions = useMemo(() => {
  const query = normalizeText(searchTerm.trim());

  let filtered = searchProducts;

  if (selectedCategory !== 'Tümü') {
    filtered = filtered.filter((item) => item.category === selectedCategory);
  }

  if (!query) {
    return filtered.slice(0, 6);
  }

  const scored = filtered
    .map((item) => {
      const normalizedName = normalizeText(item.name);
      const normalizedCategory = normalizeText(item.category);

      let score = 999;

      // Tam içerme
      if (normalizedName.includes(query)) score = 0;

      // Kelime başlangıcı
      else if (
        normalizedName.split(' ').some((word) => word.startsWith(query))
      ) {
        score = 1;
      }

      // Kategori eşleşmesi
      else if (normalizedCategory.includes(query)) {
        score = 2;
      }

      // Fuzzy sadece uzun aramalarda devreye girsin
      else if (query.length >= 5) {
        const words = normalizedName.split(' ');
        const distances = words.map((word) => levenshtein(query, word));
        const minDistance = Math.min(...distances);
        score = minDistance + 3;
      }

      return { ...item, score };
    })
    .filter((item) => {
      if (query.length < 5) {
        return item.score <= 2;
      }

      return item.score <= 4;
    })
    .sort((a, b) => a.score - b.score);

  return scored.slice(0, 8);
}, [searchTerm, selectedCategory]);

  const handleSearch = () => {
    const q = searchTerm.trim();
    const params = new URLSearchParams();

    if (q) params.set('q', q);
    if (selectedCategory !== 'Tümü') params.set('category', selectedCategory);

    navigate(`/products?${params.toString()}`);
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (name: string, path: string) => {
    navigate(path);
    setShowSuggestions(false);
    setSearchTerm(name);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-stone-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-4 lg:gap-6">
          <Link to="/" className="flex-shrink-0 min-w-[180px]">
            <h1 className="text-2xl md:text-3xl font-serif text-amber-900 leading-none">
              Yazanoğlu
            </h1>
            <p className="text-xs text-stone-600 mt-1">1930'dan beri</p>
          </Link>

          <div ref={searchBoxRef} className="flex-1">
            <div className="hidden md:flex gap-3 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-900" />

                <input
                  type="text"
                  value={searchTerm}
                  onFocus={() => setShowSuggestions(true)}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="Özenle üretilmiş tatları keşfetmek için arayın..."
                  className="w-full h-14 rounded-full border border-amber-900/40 pl-14 pr-16 text-lg text-stone-700 outline-none focus:border-amber-900"
                />

                <button
                  type="button"
                  onClick={handleSearch}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-amber-900 px-5 py-2.5 text-white hover:bg-amber-800 transition-colors"
                >
                  Ara
                </button>

                {showSuggestions && suggestions.length > 0 && (
                  <div className="absolute left-0 right-0 top-[calc(100%+10px)] z-50 rounded-3xl border border-stone-200 bg-white shadow-2xl overflow-hidden">
                    <div className="max-h-[420px] overflow-y-auto py-2">
                      {suggestions.map((item, index) => (
                        <button
                          key={`${item.name}-${index}`}
                          type="button"
                          onClick={() => handleSuggestionClick(item.name, item.path)}
                          className="flex w-full items-center justify-between px-5 py-4 text-left hover:bg-amber-50 transition-colors"
                        >
                          <div>
                            <p className="text-stone-900 font-medium">{item.name}</p>
                            <p className="text-sm text-stone-500">{item.category}</p>
                          </div>

                          <span className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-600">
                            Öneri
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>


            </div>

            <div className="mt-4 md:hidden">
              <div className="flex flex-col gap-3">
                <div className="relative w-full">
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-900" />

                  <input
                    type="text"
                    value={searchTerm}
                    onFocus={() => setShowSuggestions(true)}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setShowSuggestions(true);
                    }}
                    onKeyDown={handleKeyDown}
                    placeholder="Helva, Lokum, Tahin..."
                    className="w-full h-12 rounded-full border border-amber-900/40 pl-14 pr-20 text-base text-stone-700 outline-none focus:border-amber-900"
                  />

                  <button
                    type="button"
                    onClick={handleSearch}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-amber-900 px-4 py-1.5 text-sm text-white hover:bg-amber-800 transition-colors"
                  >
                    Ara
                  </button>

                  {showSuggestions && suggestions.length > 0 && (
                    <div className="absolute left-0 right-0 top-[calc(100%+10px)] z-50 rounded-3xl border border-stone-200 bg-white shadow-2xl overflow-hidden">
                      <div className="max-h-[320px] overflow-y-auto py-2">
                        {suggestions.map((item, index) => (
                          <button
                            key={`${item.name}-${index}`}
                            type="button"
                            onClick={() => handleSuggestionClick(item.name, item.path)}
                            className="flex w-full items-center justify-between px-4 py-3 text-left hover:bg-amber-50 transition-colors"
                          >
                            <div>
                              <p className="text-stone-900 font-medium">{item.name}</p>
                              <p className="text-sm text-stone-500">{item.category}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 lg:gap-4 ml-auto">


            <button className="p-2 hover:bg-stone-100 rounded-full transition-colors relative">
              <ShoppingCart className="w-5 h-5 text-stone-700" />
              <span className="absolute top-0 right-0 bg-amber-900 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>

            <a
              href="https://wa.me/905321316540"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-3 rounded-full hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden lg:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-amber-900">
        <div className="container mx-auto px-4">
          <nav className="flex md:justify-center justify-start items-center gap-6 overflow-x-auto whitespace-nowrap py-4 text-white">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `font-medium transition-colors border-b-2 pb-1 ${
                  isActive
                    ? 'text-amber-200 border-amber-200'
                    : 'text-white border-transparent hover:text-amber-200'
                }`
              }
            >
              Ana Sayfa
            </NavLink>

            {categoryLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `font-medium transition-colors border-b-2 pb-1 ${
                    isActive
                      ? 'text-amber-200 border-amber-200'
                      : 'text-white border-transparent hover:text-amber-200'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}