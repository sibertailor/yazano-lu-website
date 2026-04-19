import { useEffect, useRef, useState } from 'react';

export function Hero() {
  const videoARef = useRef<HTMLVideoElement | null>(null);
  const videoBRef = useRef<HTMLVideoElement | null>(null);

  const [activeVideo, setActiveVideo] = useState<'A' | 'B'>('A');

  useEffect(() => {
    const videoA = videoARef.current;
    const videoB = videoBRef.current;

    if (!videoA || !videoB) return;

    let transitionTimeout: ReturnType<typeof setTimeout> | null = null;
    let started = false;

    const CROSSFADE_DURATION = 900;
    const SAFETY_BUFFER = 700;

    const scheduleNextTransition = (current: HTMLVideoElement, next: HTMLVideoElement) => {
      const durationMs = current.duration * 1000;

      if (!durationMs || Number.isNaN(durationMs)) return;

      const waitTime = Math.max(durationMs - CROSSFADE_DURATION - SAFETY_BUFFER, 500);

      transitionTimeout = setTimeout(async () => {
        try {
          next.currentTime = 0;
          await next.play();
        } catch (err) {
          console.error('İkinci video başlatılamadı:', err);
        }

        setActiveVideo(current === videoA ? 'B' : 'A');

        setTimeout(() => {
          current.pause();
          current.currentTime = 0;

          scheduleNextTransition(next, current);
        }, CROSSFADE_DURATION);
      }, waitTime);
    };

    const startSequence = async () => {
      if (started) return;
      started = true;

      try {
        videoA.currentTime = 0;
        await videoA.play();
        scheduleNextTransition(videoA, videoB);
      } catch (err) {
        console.error('Video başlatılamadı:', err);
      }
    };

    if (videoA.readyState >= 1) {
      startSequence();
    } else {
      videoA.addEventListener('loadedmetadata', startSequence, { once: true });
    }

    return () => {
      if (transitionTimeout) clearTimeout(transitionTimeout);
      videoA.pause();
      videoB.pause();
    };
  }, []);

  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-amber-50 to-stone-100 overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative overflow-hidden rounded-3xl p-8 min-h-[500px] flex items-center shadow-xl">
          <img
            src="/images/tahin.png"
            alt="tahin background"
            className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"
          />

          <div className="absolute inset-0 bg-white/10"></div>

            <div className="relative z-10 space-y-6">
              <div className="inline-block px-4 py-2 bg-amber-100 rounded-full text-amber-900 text-sm shadow-sm">
                %100 Doğal ve Katkısız
              </div>

              <h2 className="text-5xl md:text-6xl font-serif text-stone-900 leading-tight">
                1930&apos;dan Beri
                <br />
                <span className="text-amber-900">Doğal Lezzet</span>
              </h2>

              <p className="text-xl text-stone-1500 max-w-md leading-relaxed">
                Geleneksel üretim anlayışımızla tahin, helva ve doğal ürünleri sofralarınıza taşıyoruz.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#products"
                  className="px-8 py-4 bg-amber-900 text-white rounded-full hover:bg-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Ürünleri Keşfet
                </a>

                <a
                  href="#about"
                  className="px-8 py-4 border-2 border-amber-900 text-stone-900 font-semibold rounded-full hover:bg-amber-100 transition-all duration-300"
                >
                  Hikayemiz
                </a>
              </div>

              <div className="flex flex-wrap gap-6 pt-4 text-sm text-stone-700">
                <span>✔ Altın Susam</span>
                <span>✔ Geleneksel Üretim</span>
                <span>✔ Katkısız</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-amber-200 rounded-3xl blur-3xl opacity-30" />

            <div className="relative rounded-3xl shadow-2xl overflow-hidden h-[500px] bg-stone-100">
              <video
                ref={videoARef}
                muted
                playsInline
                preload="auto"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[500ms] ${
                  activeVideo === 'A' ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <source src="/videos/tahin.mp4" type="video/mp4" />
              </video>

              <video
                ref={videoBRef}
                muted
                playsInline
                preload="auto"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[500ms] ${
                  activeVideo === 'B' ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <source src="/videos/tahin.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}