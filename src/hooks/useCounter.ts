import { useEffect, useState, useRef } from 'react';

export const useCounter = (
  end: number,
  duration: number = 2000,
  start: number = 0,
  triggerOnView: boolean = true
) => {
  const [count, setCount] = useState(start);
  const [hasTriggered, setHasTriggered] = useState(!triggerOnView);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!triggerOnView) {
      setHasTriggered(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [triggerOnView, hasTriggered]);

  useEffect(() => {
    if (!hasTriggered) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Ease out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * eased;

      // Handle decimal values (like 1.2)
      if (end % 1 !== 0) {
        setCount(parseFloat(current.toFixed(1)));
      } else {
        setCount(Math.floor(current));
      }

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [hasTriggered, end, duration, start]);

  return { count, ref };
};
