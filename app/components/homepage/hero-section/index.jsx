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
          gap: '4rem',
          alignItems: 'center',
          paddingLeft: '6rem',
          paddingRight: '6rem',
          boxSizing: 'border-box',
        }}
      >
        {/* Left Column - Text Content */}
        <div style={{ width: '100%', justifySelf: 'start' }}>
          {/* Main Headline */}
          <div style={{ marginBottom: '2rem' }}>
            <h1
              style={{
                fontFamily: 'var(--font-heading), sans-serif',
                fontSize: '3.5rem',
                fontWeight: 800,
                lineHeight: 1.2,
                marginBottom: '0.5rem',
                color: 'var(--color-text-primary)',
                letterSpacing: '-0.03em',
              }}
            >
              Hello,
            </h1>
            <h1
              style={{
                fontFamily: 'var(--font-heading), sans-serif',
                fontSize: '3.5rem',
                fontWeight: 800,
                lineHeight: 1.2,
                marginBottom: '0.5rem',
                color: 'var(--color-text-primary)',
                letterSpacing: '-0.03em',
              }}
            >
              This is <span style={{ color: 'var(--color-accent)' }}>Chirag Sood</span> ,
            </h1>
            <h1
              style={{
                fontFamily: 'var(--font-heading), sans-serif',
                fontSize: '3.5rem',
                fontWeight: 800,
                lineHeight: 1.2,
                color: 'var(--color-text-primary)',
                letterSpacing: '-0.03em',
              }}
            >
              I'm a <span style={{ color: 'var(--color-accent)' }}>Software Engineer</span>.
            </h1>
          </div>

          {/* Social Links as Icons */}
          <div
            style={{
              display: 'flex',
              gap: '1.5rem',
              marginBottom: '3rem',
              alignItems: 'center',
            }}
          >
            {[
              { name: 'GitHub', icon: '⚙️', url: '#' },
              { name: 'LinkedIn', icon: '💼', url: '#' },
              { name: 'Twitter', icon: '𝕏', url: '#' },
              { name: 'Mail', icon: '✉️', url: '#' },
              { name: 'Portfolio', icon: '📁', url: '#' },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '50%',
                  border: '2px solid var(--color-accent)',
                  fontSize: '1.25rem',
                  color: 'var(--color-accent)',
                  textDecoration: 'none',
                  transition: 'all var(--transition-base)',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-accent)';
                  e.currentTarget.style.color = 'var(--color-bg)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--color-accent)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <button
              style={{
                padding: '0.875rem 2rem',
                backgroundColor: 'transparent',
                color: 'var(--color-accent)',
                border: '2px solid var(--color-accent)',
                borderRadius: '2rem',
                fontWeight: 600,
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all var(--transition-base)',
                fontFamily: 'var(--font-sans)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-accent)';
                e.currentTarget.style.color = 'var(--color-bg)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--color-accent)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              CONTACT ME 👋
            </button>
            <button
              style={{
                padding: '0.875rem 2rem',
                backgroundColor: 'var(--color-accent)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '2rem',
                fontWeight: 600,
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all var(--transition-base)',
                fontFamily: 'var(--font-sans)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 102, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              GET RESUME 👇
            </button>
          </div>
        </div>

        {/* Right Column - Code Block */}
        <div
          style={{
            position: 'relative',
            justifySelf: 'end',
          }}
        >
          {/* Code Block */}
          <div
            style={{
              maxWidth: '550px',
              padding: '2rem',
              backgroundColor: 'rgba(20, 20, 35, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '1rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              color: 'var(--color-accent)',
              lineHeight: 1.8,
              backdropFilter: 'blur(4px)',
              overflow: 'hidden',
            }}
          >
            {/* Code block header dots */}
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#ff6b6b',
                }}
              />
              <div
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#ffd93d',
                }}
              />
              <div
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#6bcf7f',
                }}
              />
            </div>
            {/* Code content */}
            <div style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }} width="100%">
              <div style={{ color: 'var(--color-text-tertiary)', marginBottom: '0.5rem' }}>
                <span>const </span>
                <span style={{ color: 'var(--color-accent)' }}>developer</span>
                <span> = {'{'}</span>
              </div>

              <div style={{ paddingLeft: '1.5rem', marginBottom: '0.3rem', color: 'var(--color-text-tertiary)' }}>
                <span style={{ color: 'var(--color-accent)' }}>name</span>
                <span>: </span>
                <span style={{ color: '#90EE90' }}>'Chirag Sood'</span>
                <span>,</span>
              </div>

              <div style={{ paddingLeft: '1.5rem', marginBottom: '0.3rem', color: 'var(--color-text-tertiary)' }}>
                <span style={{ color: 'var(--color-accent)' }}>role</span>
                <span>: </span>
                <span style={{ color: '#90EE90' }}>'Software Engineer'</span>
                <span>,</span>
              </div>

              <div style={{ paddingLeft: '1.5rem', marginBottom: '0.3rem', color: 'var(--color-text-tertiary)' }}>
                <span style={{ color: 'var(--color-accent)' }}>skills</span>
                <span>: [</span>
              </div>

              <div style={{ paddingLeft: '3rem', marginBottom: '0.1rem', color: 'var(--color-text-tertiary)' }}>
                <span style={{ color: '#90EE90' }}>'Java'</span>
                <span>, </span>
                <span style={{ color: '#90EE90' }}>'Python'</span>
                <span>, </span>
                <span style={{ color: '#90EE90' }}>'Spring Boot'</span>
                <span>,</span>
              </div>

              <div style={{ paddingLeft: '3rem', marginBottom: '0.1rem', color: 'var(--color-text-tertiary)' }}>
                <span style={{ color: '#90EE90' }}>'Spring MVC'</span>
                <span>, </span>
                <span style={{ color: '#90EE90' }}>'Spring Data JPA'</span>
                <span>,</span>
              </div>

              <div style={{ paddingLeft: '3rem', marginBottom: '0.1rem', color: 'var(--color-text-tertiary)' }}>
                <span style={{ color: '#90EE90' }}>'HTML'</span>
                <span>, </span>
                <span style={{ color: '#90EE90' }}>'CSS'</span>
                <span>, </span>
                <span style={{ color: '#90EE90' }}>'JavaScript'</span>
                <span>,</span>
              </div>

              <div style={{ paddingLeft: '3rem', marginBottom: '0.1rem', color: 'var(--color-text-tertiary)' }}>
                <span style={{ color: '#90EE90' }}>'React'</span>
                <span>, </span>
                <span style={{ color: '#90EE90' }}>'SQL'</span>
                <span>, </span>
                <span style={{ color: '#90EE90' }}>'MySQL'</span>
                <span>,</span>
              </div>

              <div style={{ paddingLeft: '3rem', marginBottom: '0.1rem', color: 'var(--color-text-tertiary)' }}>
                <span style={{ color: '#90EE90' }}>'MongoDB'</span>
                <span>, </span>
                <span style={{ color: '#90EE90' }}>'Git'</span>
                <span>, </span>
                <span style={{ color: '#90EE90' }}>'GitHub'</span>
                <span>,</span>
              </div>

              <div style={{ paddingLeft: '3rem', marginBottom: '0.5rem', color: 'var(--color-text-tertiary)' }}>
                <span style={{ color: '#90EE90' }}>'Docker'</span>
              </div>

              <div style={{ paddingLeft: '1.5rem', marginBottom: '0.3rem', color: 'var(--color-text-tertiary)' }}>
                <span>],</span>
              </div>

              <div style={{ paddingLeft: '1.5rem', marginBottom: '0.3rem', color: 'var(--color-text-tertiary)' }}>
                <span style={{ color: 'var(--color-accent)' }}>hardWorker</span>
                <span>: </span>
                <span style={{ color: '#FFD700' }}>true</span>
                <span>,</span>
              </div>

              <div style={{ paddingLeft: '1.5rem', marginBottom: '0.3rem', color: 'var(--color-text-tertiary)' }}>
                <span style={{ color: 'var(--color-accent)' }}>quickLearner</span>
                <span>: </span>
                <span style={{ color: '#FFD700' }}>true</span>
                <span>,</span>
              </div>

              <div style={{ paddingLeft: '1.5rem', marginBottom: '0.3rem', color: 'var(--color-text-tertiary)' }}>
                <span style={{ color: 'var(--color-accent)' }}>problemSolver</span>
                <span>: </span>
                <span style={{ color: '#FFD700' }}>true</span>
                <span>,</span>
              </div>

              <div style={{ paddingLeft: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-text-tertiary)' }}>
                <span style={{ color: 'var(--color-accent)' }}>hireable</span>
                <span>: </span>
                <span style={{ color: '#FFD700' }}>true</span>
              </div>

              <div style={{ color: 'var(--color-text-tertiary)' }}>
                <span>{'}'}</span>
                <span>;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
