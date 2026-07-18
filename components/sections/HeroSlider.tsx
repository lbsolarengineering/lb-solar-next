'use client';

import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '@/lib/data';

const INTERVAL_MS = 5500;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = heroSlides.length;

  const go = useCallback(
    (next: number) => {
      setIndex(((next % total) + total) % total);
    },
    [total],
  );

  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => go(index + 1), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [index, paused, go]);

  return (
    <div
      className="group absolute inset-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(document.hidden)}
    >
      {heroSlides.map((slide, i) => {
        const active = i === index;
        return (
          <div
            key={`${slide.alt}-${i}`}
            className={`absolute inset-0 transition-opacity duration-[1150ms] ease-in-out ${
              active ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden={!active}
          >
            {slide.src && (
              <img
                src={encodeURI(slide.src)}
                alt={slide.alt}
                className={`h-full w-full object-cover object-center transition-transform duration-[6500ms] ease-out ${
                  active ? 'scale-110' : 'scale-100'
                }`}
                loading={i === 0 ? 'eager' : 'lazy'}
                fetchPriority={i === 0 ? 'high' : 'auto'}
                decoding={i === 0 ? 'sync' : 'async'}
              />
            )}
          </div>
        );
      })}

      <div className="hero-overlay absolute inset-0 bg-[rgba(6,24,45,0.48)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/45 via-transparent to-transparent" />

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => go(index - 1)}
        className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white/85 text-text opacity-0 shadow-md backdrop-blur-sm transition-opacity group-hover:opacity-100 md:left-5"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => go(index + 1)}
        className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white/85 text-text opacity-0 shadow-md backdrop-blur-sm transition-opacity group-hover:opacity-100 md:right-5"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => go(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? 'w-7 bg-emerald' : 'w-2.5 bg-white/70 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
