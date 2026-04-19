import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export function PageProgress() {
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer1: ReturnType<typeof setTimeout>;
    let timer2: ReturnType<typeof setTimeout>;
    let timer3: ReturnType<typeof setTimeout>;
    let timer4: ReturnType<typeof setTimeout>;

    setVisible(true);
    setProgress(18);

    timer1 = setTimeout(() => setProgress(45), 80);
    timer2 = setTimeout(() => setProgress(72), 180);
    timer3 = setTimeout(() => setProgress(92), 320);
    timer4 = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 180);
    }, 450);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [location.pathname]);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-[9999] h-1 w-full bg-transparent">
      <div
        className="h-full bg-amber-900 shadow-[0_0_10px_rgba(120,53,15,0.45)] transition-all duration-200 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}