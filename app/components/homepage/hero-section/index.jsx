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
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 700,
              lineHeight: 1.15,
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
              fontSize: '1.125rem',
              fontWeight: 400,
              color: 'var(--color-text-secondary)',
              lineHeight: 1.75,
              marginBottom: 'var(--spacing-3xl)',
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
                  fontSize: '0.95rem',
                  color: 'var(--color-text-tertiary)',
                  textDecoration: 'none',
                  transition: 'color var(--transition-base)',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-text-tertiary)';
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
                padding: '0.75rem 1.5rem',
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
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 102, 255, 0.25)';
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
                padding: '0.75rem 1.5rem',
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
                e.currentTarget.style.backgroundColor = 'rgba(0, 102, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
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
              padding: '2rem',
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              border: '1px solid rgba(0, 102, 255, 0.2)',
              borderRadius: '0.75rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              color: 'var(--color-accent)',
              lineHeight: 1.6,
              backdropFilter: 'blur(4px)',
              overflow: 'hidden',
            }}
          >
            {/* Code block content */}
            <div style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
              <div style={{ color: 'rgba(0, 102, 255, 0.7)', marginBottom: '0.5rem' }}>
                {/* Function signature */}
                <span>const </span>
                <span style={{ color: 'var(--color-accent)' }}>buildExperience</span>
                <span> = () =&gt; &#123;</span>
              </div>
              <div style={{ paddingLeft: '1.5rem', marginBottom: '0.5rem', color: 'rgba(0, 102, 255, 0.8)' }}>
                return (
              </div>
              <div style={{ paddingLeft: '3rem', marginBottom: '0.5rem' }}>
                <span style={{ color: 'rgba(0, 102, 255, 0.7)' }}>&lt;</span>
                <span>Developer</span>
                <span style={{ color: 'rgba(0, 102, 255, 0.7)' }}>&gt;</span>
              </div>
              <div style={{ paddingLeft: '4rem', marginBottom: '0.3rem', color: 'rgba(0, 102, 255, 0.6)' }}>
                skills=&#123;['React', 'TypeScript', 'Next.js']&#125;
              </div>
              <div style={{ paddingLeft: '4rem', marginBottom: '0.3rem', color: 'rgba(0, 102, 255, 0.6)' }}>
                passion=&#123;true&#125;
              </div>
              <div style={{ paddingLeft: '4rem', marginBottom: '0.5rem', color: 'rgba(0, 102, 255, 0.6)' }}>
                ready=&#123;true&#125;
              </div>
              <div style={{ paddingLeft: '3rem', marginBottom: '0.5rem' }}>
                <span style={{ color: 'rgba(0, 102, 255, 0.7)' }}>/&gt;</span>
              </div>
              <div style={{ paddingLeft: '1.5rem', marginBottom: '0.5rem', color: 'rgba(0, 102, 255, 0.8)' }}>
                )
              </div>
              <div style={{ color: 'rgba(0, 102, 255, 0.7)' }}>
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
          <span style={{ fontSize: '0.875rem', color: 'var(--color-text-tertiary)' }}>
            Scroll to explore
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="2"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
}
