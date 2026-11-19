import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';

interface CountUpMetricProps {
  target: number;
  suffix?: string;
  durationMs?: number;
}

export function CountUpMetric({
  target,
  suffix = '',
  durationMs = 1200,
}: CountUpMetricProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setDisplayValue(target);
      return;
    }

    let animationFrameId = 0;
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // Curva de desaceleração suave (easeOutQuart)
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplayValue(Math.round(eased * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, target, durationMs]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue.toLocaleString('pt-BR')}
      {suffix}
    </span>
  );
}
