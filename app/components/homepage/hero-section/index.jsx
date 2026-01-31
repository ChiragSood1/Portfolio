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
      {/* Background with gradient and vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Hero Content Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: 'var(--spacing-3xl)',
          paddingRight: 'var(--spacing-3xl)',
          boxSizing: 'border-box',
        }}
      >
        {/* Left Content */}
        <div style={{ maxWidth: '600px', flex: 1, paddingRight: 'var(--spacing-3xl)' }}>
          <h1
            style={{
              fontSize: '4.5rem',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: 'var(--spacing-lg)',
              color: 'var(--color-text-primary)',
              letterSpacing: '-1px',
            }}
          >
            Build beautiful
            <br />
            experiences
          </h1>

          <p
            style={{
              fontSize: '1.25rem',
              fontWeight: 400,
              color: 'var(--color-text-secondary)',
              lineHeight: 1.8,
              marginBottom: 'var(--spacing-2xl)',
            }}
          >
            I craft modern web applications with attention to detail, clean code, and thoughtful design. Let&apos;s create something remarkable together.
          </p>

          <div style={{ display: 'flex', gap: 'var(--spacing-lg)' }}>
            <button
              style={{
                padding: 'var(--spacing-md) var(--spacing-xl)',
                backgroundColor: 'var(--color-accent)',
                color: '#ffffff',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                fontWeight: 600,
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all var(--transition-base)',
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
              View My Work
            </button>
            <button
              style={{
                padding: 'var(--spacing-md) var(--spacing-xl)',
                backgroundColor: 'transparent',
                color: 'var(--color-accent)',
                border: '2px solid var(--color-accent)',
                borderRadius: 'var(--radius-md)',
                fontWeight: 600,
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all var(--transition-base)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-accent-light)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Right Side - Animated Cube Grid */}
        <div
          style={{
            position: 'relative',
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '500px',
          }}
        >
          {/* Cube Grid Container */}
          <svg
            width="400"
            height="400"
            viewBox="0 0 400 400"
            style={{
              position: 'absolute',
              opacity: 0.5,
              animation: 'float 8s ease-in-out infinite',
            }}
          >
            <defs>
              <style>
                {`
                  .cube-line {
                    stroke: var(--color-accent);
                    stroke-width: 1.5;
                    fill: none;
                    opacity: 0.8;
                  }
                `}
              </style>
            </defs>

            {/* Back cube */}
            <g
              style={{
                opacity: 0.3,
                animation: 'float-delayed 10s ease-in-out infinite',
              }}
            >
              <rect x="40" y="40" width="80" height="80" className="cube-line" />
              <line x1="40" y1="40" x2="60" y2="20" className="cube-line" />
              <line x1="120" y1="40" x2="140" y2="20" className="cube-line" />
              <line x1="140" y1="20" x2="60" y2="20" className="cube-line" />
              <line x1="60" y1="20" x2="60" y2="100" className="cube-line" />
              <line x1="140" y1="20" x2="140" y2="100" className="cube-line" />
            </g>

            {/* Middle cube - Main focus */}
            <g
              style={{
                animation: 'float 6s ease-in-out infinite',
              }}
            >
              <rect x="120" y="120" width="100" height="100" className="cube-line" />
              <line x1="120" y1="120" x2="150" y2="90" className="cube-line" />
              <line x1="220" y1="120" x2="250" y2="90" className="cube-line" />
              <line x1="250" y1="90" x2="150" y2="90" className="cube-line" />
              <line x1="150" y1="90" x2="150" y2="190" className="cube-line" />
              <line x1="250" y1="90" x2="250" y2="190" className="cube-line" />
            </g>

            {/* Front cube */}
            <g
              style={{
                opacity: 0.4,
                animation: 'float-delayed-2 12s ease-in-out infinite',
              }}
            >
              <rect x="200" y="200" width="90" height="90" className="cube-line" />
              <line x1="200" y1="200" x2="225" y2="170" className="cube-line" />
              <line x1="290" y1="200" x2="315" y2="170" className="cube-line" />
              <line x1="315" y1="170" x2="225" y2="170" className="cube-line" />
              <line x1="225" y1="170" x2="225" y2="260" className="cube-line" />
              <line x1="315" y1="170" x2="315" y2="260" className="cube-line" />
            </g>

            {/* Grid background lines */}
            <g style={{ opacity: 0.2 }}>
              <line x1="0" y1="200" x2="400" y2="200" className="cube-line" />
              <line x1="200" y1="0" x2="200" y2="400" className="cube-line" />
            </g>
          </svg>
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
