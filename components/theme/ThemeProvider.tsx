'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type ThemeId = 'green-sky' | 'clean-corporate' | 'deep-engineering';

export const THEMES: { id: ThemeId; label: string; swatch: string }[] = [
  { id: 'green-sky', label: 'Green Sky', swatch: '#15965D' },
  { id: 'clean-corporate', label: 'Clean Corporate', swatch: '#174A73' },
  { id: 'deep-engineering', label: 'Deep Engineering', swatch: '#0B1F33' },
];

const STORAGE_KEY = 'lb-solar-theme';
const DEFAULT_THEME: ThemeId = 'green-sky';

type ThemeContextValue = {
  theme: ThemeId;
  setTheme: (theme: ThemeId) => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: DEFAULT_THEME,
  setTheme: () => {},
});

function applyTheme(theme: ThemeId) {
  document.documentElement.setAttribute('data-theme', theme);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(DEFAULT_THEME);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as ThemeId | null;
    const initial = THEMES.some((t) => t.id === stored) ? (stored as ThemeId) : DEFAULT_THEME;
    setThemeState(initial);
    applyTheme(initial);
  }, []);

  const setTheme = (next: ThemeId) => {
    setThemeState(next);
    applyTheme(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
