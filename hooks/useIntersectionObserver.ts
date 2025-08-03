// hooks/useIntersectionObserver.ts
import { useEffect, useState, useRef, RefObject } from 'react';

type UseIntersectionObserverResult = [RefObject<HTMLElement>, boolean];

export default function useIntersectionObserver(
  options?: IntersectionObserverInit
): UseIntersectionObserverResult {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        observer.disconnect(); // Optional: disconnect after intersection
      }
    }, options);

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
}
