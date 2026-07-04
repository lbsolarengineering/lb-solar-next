import { ReactNode } from 'react';

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export default function GlassCard({ children, className = '', hover = true }: GlassCardProps) {
  return (
    <article className={`rounded-2xl p-6 md:p-8 ${hover ? 'glass glass-hover' : 'glass'} ${className}`}>
      {children}
    </article>
  );
}
