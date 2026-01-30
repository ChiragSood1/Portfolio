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
    fontSize: size === 'sm' ? '0.875rem' : size === 'lg' ? '1.125rem' : '1rem',
    fontWeight: 600,
    border: 'none',
    cursor: 'pointer',
    transition: 'all var(--transition-base)',
    textDecoration: 'none',
    display: 'inline-block',
  };

  const variantStyles = {
    primary: {
      backgroundColor: 'var(--color-accent)',
      color: '#ffffff',
      '&:hover': {
        backgroundColor: 'var(--color-accent-hover)',
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 16px rgba(0, 102, 255, 0.3)',
      },
    },
    secondary: {
      backgroundColor: 'var(--color-bg-secondary)',
      color: 'var(--color-text-primary)',
      border: '1px solid var(--color-border)',
      '&:hover': {
        backgroundColor: 'var(--color-border)',
      },
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--color-accent)',
      border: '2px solid var(--color-accent)',
      '&:hover': {
        backgroundColor: 'var(--color-accent-light)',
      },
    },
  };

  const Element = href ? 'a' : 'button';

  return (
    <Element
      href={href}
      onClick={onClick}
      style={{
        ...baseStyles,
        ...variantStyles[variant],
      } as React.CSSProperties}
    >
      {children}
    </Element>
  );
}
