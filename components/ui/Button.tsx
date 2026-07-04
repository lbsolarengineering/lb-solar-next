import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'outline';
  external?: boolean;
  className?: string;
};

export default function Button({
  href,
  children,
  variant = 'primary',
  external = false,
  className = '',
}: ButtonProps) {
  const classes = `${variant === 'primary' ? 'btn-primary' : 'btn-outline'} ${className}`;

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
