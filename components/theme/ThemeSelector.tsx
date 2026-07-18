'use client';

import { useEffect, useRef, useState } from 'react';
import { Palette } from 'lucide-react';
import { THEMES, useTheme, type ThemeId } from '@/components/theme/ThemeProvider';

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, []);

  return (
    <div ref={rootRef} className="fixed bottom-5 left-5 z-50 md:bottom-6 md:left-6">
      <div className="relative">
        {open && (
          <div className="absolute bottom-14 left-0 w-56 overflow-hidden rounded-2xl border border-border bg-bg-elevated p-2 shadow-lg">
            <p className="px-2 pb-2 pt-1 text-[13px] font-bold uppercase tracking-[0.18em] text-muted">
              Theme preview
            </p>
            {THEMES.map((item) => {
              const active = theme === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setTheme(item.id as ThemeId);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                    active ? 'bg-bg-soft text-emerald' : 'text-text hover:bg-bg-soft'
                  }`}
                >
                  <span
                    className="h-3.5 w-3.5 shrink-0 rounded-full ring-2 ring-offset-1 ring-offset-bg-elevated"
                    style={{ backgroundColor: item.swatch, boxShadow: active ? `0 0 0 2px ${item.swatch}` : undefined }}
                  />
                  <span className="font-medium">{item.label}</span>
                  {active && <span className="ml-auto text-[12px] font-bold uppercase tracking-wider">Active</span>}
                </button>
              );
            })}
          </div>
        )}

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Theme selector"
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg-elevated text-emerald shadow-md transition-transform hover:scale-105"
        >
          <Palette className="h-4.5 w-4.5 h-[18px] w-[18px]" />
        </button>
      </div>
    </div>
  );
}
