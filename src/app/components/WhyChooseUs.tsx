import { useEffect, useRef, useState } from 'react';


function Counter({
  end,
  duration = 2000,
}: {
  end: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCount(0);
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let frameId = 0;
    let startTime: number | null = null;

    const animate = (time: number) => {
      if (startTime === null) startTime = time;

      const progress = Math.min((time - startTime) / duration, 1);
      const current = Math.floor(progress * end);

      setCount(current);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [started, end, duration]);

  return <span ref={ref}>{count.toLocaleString('tr-TR')}+</span>;
}

export function WhyChooseUs() {
  const stats = [
    {
      icon: '/icons/image1.png',
      value: 1542,
      label: 'Müşteri',
    },
    {
      icon: '/icons/image2.png',
      value: 182,
      label: 'Saha Çalışanı',
    },
    {
      icon: '/icons/image3.png',
      value: 100,
      label: 'Ürün Yelpazesi',
    },
    {
      icon: '/icons/image4.png',
      value: 10,
      label: 'Sertifikalı Üretim',
    },
  ];

  return (
    <section className="w-full bg-[#f4f4e8] py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-center gap-5 px-8 py-6 ${
                index !== stats.length - 1
                  ? 'xl:border-r xl:border-dashed xl:border-[#d8d2c7]'
                  : ''
              }`}
            >
              <div className="shrink-0 w-[72px] flex justify-center">
                <img
                  src={item.icon}
                  alt={item.label}
                  className="h-[58px] w-auto object-contain"
                />
              </div>

              <div className="flex flex-col">
                <span className="text-[34px] font-bold leading-none text-[#1f1f1f] md:text-[42px]">
                  <Counter end={item.value} />
                </span>

                <span className="mt-2 text-[18px] font-semibold leading-none text-[#4b4b4b]">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}