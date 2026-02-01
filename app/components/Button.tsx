'use client';

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
}: ButtonProps) {
  const baseStyles = {
    padding:
      size === 'sm'
        ? 'var(--spacing-sm) var(--spacing-md)'
        : size === 'lg'
          ? 'var(--spacing-lg) var(--spacing-xl)'
          : 'var(--spacing-md) var(--spacing-lg)',
    borderRadius: 'var(--radius-md)',
    fontSize: size === 'sm' ? '0.875rem' : size === 'lg' ? '1rem' : '0.95rem',
    fontWeight: 600,
    border: 'none',
    cursor: 'pointer',
    transition: 'all var(--transition-base)',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--spacing-sm)',
  };

  const [isHovered, setIsHovered] = React.useState(false);

  const variantStyles = {
    primary: {
      backgroundColor: 'var(--color-accent)',
      color: '#ffffff',
    },
    secondary: {
      backgroundColor: 'var(--color-bg-secondary)',
      color: 'var(--color-text-primary)',
      border: '1px solid var(--color-border)',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--color-accent)',
      border: '1.5px solid var(--color-accent)',
    },
  };

  const hoverStyles = {
    primary: {
      backgroundColor: 'var(--color-accent-hover)',
      transform: 'translateY(-2px)',
      boxShadow: 'var(--shadow-md)',
    },
    secondary: {
      backgroundColor: 'var(--color-bg-tertiary)',
      borderColor: 'var(--color-text-tertiary)',
    },
    outline: {
      backgroundColor: 'var(--color-accent-muted)',
      transform: 'translateY(-2px)',
      boxShadow: 'var(--shadow-sm)',
    },
  };

  const Element = href ? 'a' : 'button';

  return (
    <Element
      href={href}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        ...baseStyles,
        ...variantStyles[variant],
        ...(isHovered ? hoverStyles[variant] : {}),
      } as React.CSSProperties}
    >
      {children}
    </Element>
  );
}
