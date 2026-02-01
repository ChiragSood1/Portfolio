'use client';

export default function HeroSection() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        marginLeft: 'calc(-50vw + 50%)',
      }}
    >
      {/* Vignette Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Hero Content Container - Two Column Layout */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          height: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--spacing-3xl)',
          alignItems: 'center',
          justifyItems: 'center',
          paddingLeft: 'var(--spacing-3xl)',
          paddingRight: 'var(--spacing-3xl)',
          boxSizing: 'border-box',
        }}
      >
        {/* Left Column - Text Content */}
        <div style={{ width: '100%', maxWidth: '600px', justifySelf: 'end', paddingRight: 'var(--spacing-2xl)' }}>
          {/* Headline */}
          <h1
            style={{
              fontFamily: 'var(--font-heading), sans-serif',
              fontSize: 'clamp(2.25rem, 5.5vw, 4.5rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: 'var(--spacing-lg)',
              color: 'var(--color-text-primary)',
              letterSpacing: '-0.03em',
            }}
          >
            Software developer
          </h1>

          {/* Description */}
          <p
            style={{
              fontSize: '1.0625rem',
              fontWeight: 400,
              color: 'var(--color-text-secondary)',
              lineHeight: 1.8,
              marginBottom: 'var(--spacing-3xl)',
              maxWidth: '550px',
            }}
          >
            Full-stack developer building modern web experiences with React, Next.js, and thoughtful design.
          </p>

          {/* Social Links */}
          <div
            style={{
              display: 'flex',
              gap: 'var(--spacing-lg)',
              marginBottom: 'var(--spacing-3xl)',
              alignItems: 'center',
            }}
          >
            {['GitHub', 'Twitter', 'LinkedIn'].map((social) => (
              <a
                key={social}
                href="#"
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: 'var(--color-text-tertiary)',
                  textDecoration: 'none',
                  transition: 'color var(--transition-fast)',
                  cursor: 'pointer',
                  paddingBottom: '2px',
                  borderBottom: '1px solid transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-accent)';
                  e.currentTarget.style.borderBottomColor = 'var(--color-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-text-tertiary)';
                  e.currentTarget.style.borderBottomColor = 'transparent';
                }}
              >
                {social}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: 'var(--spacing-md)', flexWrap: 'wrap' }}>
            <button
              style={{
                padding: 'var(--spacing-md) var(--spacing-lg)',
                backgroundColor: 'var(--color-accent)',
                color: '#ffffff',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                fontWeight: 600,
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'all var(--transition-base)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              View Projects
            </button>
            <button
              style={{
                padding: 'var(--spacing-md) var(--spacing-lg)',
                backgroundColor: 'transparent',
                color: 'var(--color-accent)',
                border: '1.5px solid var(--color-accent)',
                borderRadius: 'var(--radius-md)',
                fontWeight: 600,
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'all var(--transition-base)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-accent-muted)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Say Hello
            </button>
          </div>
        </div>

        {/* Right Column - Decorative Code Panel */}
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            justifySelf: 'start',
            paddingLeft: 'var(--spacing-2xl)',
          }}
        >
          {/* Code-style panel */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '500px',
              padding: 'var(--spacing-2xl)',
              backgroundColor: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              color: 'var(--color-accent)',
              lineHeight: 1.7,
              backdropFilter: 'blur(4px)',
              overflow: 'hidden',
            }}
          >
            {/* Code block content */}
            <div style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
              <div style={{ color: 'var(--color-text-tertiary)', marginBottom: '0.5rem' }}>
                {/* Function signature */}
                <span>const </span>
                <span style={{ color: 'var(--color-accent)' }}>buildExperience</span>
                <span> = () =&gt; &#123;</span>
              </div>
              <div style={{ paddingLeft: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-accent)' }}>
                return (
              </div>
              <div style={{ paddingLeft: '3rem', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--color-text-tertiary)' }}>&lt;</span>
                <span style={{ color: 'var(--color-accent)' }}>Developer</span>
                <span style={{ color: 'var(--color-text-tertiary)' }}>&gt;</span>
              </div>
              <div style={{ paddingLeft: '4rem', marginBottom: '0.3rem', color: 'var(--color-text-tertiary)' }}>
                skills=&#123;['React', 'TypeScript', 'Next.js']&#125;
              </div>
              <div style={{ paddingLeft: '4rem', marginBottom: '0.3rem', color: 'var(--color-text-tertiary)' }}>
                passion=&#123;true&#125;
              </div>
              <div style={{ paddingLeft: '4rem', marginBottom: '0.5rem', color: 'var(--color-text-tertiary)' }}>
                ready=&#123;true&#125;
              </div>
              <div style={{ paddingLeft: '3rem', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--color-text-tertiary)' }}>/&gt;</span>
              </div>
              <div style={{ paddingLeft: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-accent)' }}>
                )
              </div>
              <div style={{ color: 'var(--color-text-tertiary)' }}>
                <span>&#125;</span>
              </div>
            </div>

            {/* Cursor blink animation */}
            <span
              style={{
                display: 'inline-block',
                width: '2px',
                height: '1rem',
                backgroundColor: 'var(--color-accent)',
                marginLeft: '0.25rem',
                animation: 'blink 1s infinite',
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 20,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            animation: 'bounce 2s ease-in-out infinite',
          }}
        >
          <span style={{ fontSize: '0.8rem', color: 'var(--color-text-tertiary)', fontWeight: 500 }}>
            Scroll to explore
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
}
