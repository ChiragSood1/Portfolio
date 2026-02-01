'use client';

import { useEffect, useRef, useState } from 'react';

interface SkillsMarqueeProps {
  skills: string[];
}

export default function SkillsMarquee({ skills }: SkillsMarqueeProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const marqueeStyle = {
    display: 'flex',
    gap: 'var(--spacing-lg)',
    animation: prefersReducedMotion 
      ? 'none' 
      : isHovered 
        ? 'none' 
        : 'marquee 30s linear infinite',
    whiteSpace: 'nowrap' as const,
  };

  const skillItems = skills.map((skill, index) => (
    <div
      key={`skill-${index}`}
      style={{
        padding: '0.5rem 1rem',
        backgroundColor: 'var(--color-bg-tertiary)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--color-border)',
        fontSize: '0.875rem',
        fontWeight: 500,
        color: 'var(--color-text-primary)',
        flexShrink: 0,
        whiteSpace: 'nowrap',
      }}
    >
      {skill}
    </div>
  ));

  // Duplicate skills for seamless loop with unique keys
  const duplicatedSkills = [
    ...skillItems,
    ...skills.map((skill, index) => (
      <div
        key={`skill-duplicate-${index}`}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: 'var(--color-bg-tertiary)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-border)',
          fontSize: '0.875rem',
          fontWeight: 500,
          color: 'var(--color-text-primary)',
          flexShrink: 0,
          whiteSpace: 'nowrap',
        }}
      >
        {skill}
      </div>
    )),
  ];

  return (
    <div
      style={{
        overflow: 'hidden',
        borderRadius: 'var(--radius-lg)',
        backgroundColor: 'var(--color-bg-secondary)',
        border: '1px solid var(--color-border)',
        padding: 'var(--spacing-lg) 0',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={marqueeStyle}>
        {duplicatedSkills}
      </div>
      {prefersReducedMotion && (
        <p style={{
          fontSize: '0.8rem',
          color: 'var(--color-text-tertiary)',
          textAlign: 'center',
          marginTop: 'var(--spacing-md)',
          padding: '0 var(--spacing-lg)',
        }}>
          Motion paused per your system preferences
        </p>
      )}
    </div>
  );
}
