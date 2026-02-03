'use client';

export default function HeroSection() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        minHeight: '100vh',
        overflow: 'hidden',
        marginLeft: 'calc(-50vw + 50%)',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '4rem',
        paddingBottom: '4rem',
      }}
    >
      {/* Hero Content Container - Two Column Layout */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '6rem',
          alignItems: 'center',
          paddingLeft: 'max(6rem, 8vw)',
          paddingRight: 'max(6rem, 8vw)',
          boxSizing: 'border-box',
        }}
      >
<div style={{ width: '100%', justifySelf: 'start' }}>
  {/* Main Headline */}
  <div style={{ marginBottom: '3rem' }}>
    <h1
      style={{
        fontFamily: 'var(--font-heading), sans-serif',
        fontSize: 'clamp(2.1rem, 4.5vw, 3.4rem)',
        fontWeight: 700,
        lineHeight: 1.15,
        marginBottom: '0',
        color: 'var(--color-text-primary)',
        letterSpacing: '-0.02em',
      }}
    >
      Hello,
    </h1>
            <h1
              style={{
                fontFamily: 'var(--font-heading), sans-serif',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 700,
                lineHeight: 1.15,
                marginBottom: '0',
                color: 'var(--color-text-primary)',
                letterSpacing: '-0.02em',
              }}
            >
              This is <span style={{ color: 'var(--color-accent)' }}>Chirag Sood</span>,
            </h1>
            <h1
              style={{
                fontFamily: 'var(--font-heading), sans-serif',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 700,
                lineHeight: 1.15,
                marginBottom: '0',
                color: 'var(--color-text-primary)',
                letterSpacing: '-0.02em',
              }}
            >
              I'm a Junior <span style={{ color: 'var(--color-success)' }}>Student</span>.
            </h1>
          </div>

          {/* Social Links as Icons */}
          <div
            style={{
              display: 'flex',
              gap: '1.25rem',
              marginBottom: '3rem',
              alignItems: 'center',
            }}
          >
            {[
              { 
                name: 'GitHub', 
                svg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
                url: '#' 
              },
              { 
                name: 'LinkedIn', 
                svg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>',
                url: '#' 
              },
              { 
                name: 'Facebook', 
                svg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>',
                url: '#' 
              },
              { 
                name: 'Mail', 
                svg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>',
                url: '#' 
              },
              { 
                name: 'Twitter', 
                svg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
                url: '#' 
              },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '50%',
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: 'var(--color-accent)',
                  textDecoration: 'none',
                  transition: 'all var(--transition-base)',
                  cursor: 'pointer',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-accent-hover)';
                  e.currentTarget.style.transform = 'translateY(-4px) scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-accent)';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                }}
                title={social.name}
                dangerouslySetInnerHTML={{ __html: social.svg }}
              />
            ))}
          </div>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <button
              style={{
                padding: '1rem 2.25rem',
                backgroundColor: 'transparent',
                color: 'var(--color-accent)',
                border: '2px solid var(--color-accent)',
                borderRadius: '3rem',
                fontWeight: 600,
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'all var(--transition-base)',
                fontFamily: 'var(--font-sans)',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-accent)';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--color-accent)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              CONTACT ME 👋
            </button>
            <button
              style={{
                padding: '1rem 2.25rem',
                background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-hover) 100%)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '3rem',
                fontWeight: 600,
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'all var(--transition-base)',
                fontFamily: 'var(--font-sans)',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(9, 105, 218, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              GET RESUME ⬇
            </button>
          </div>
        </div>

        {/* Right Column - Code Block */}
        <div
          style={{
            position: 'relative',
            justifySelf: 'end',
            width: '100%',
            maxWidth: '600px',
          }}
        >
          {/* Code Block */}
          <div
            style={{
              width: '100%',
              padding: '1.75rem',
              backgroundColor: 'rgba(13, 17, 23, 0.85)',
              border: '1px solid rgba(88, 166, 255, 0.2)',
              borderRadius: '0.75rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.875rem',
              lineHeight: 1.7,
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            }}
          >
            {/* Code block header dots */}
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#ff5f56',
                }}
              />
              <div
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#ffbd2e',
                }}
              />
              <div
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#27c93f',
                }}
              />
            </div>
            
            {/* Code content */}
            <div style={{ whiteSpace: 'pre', fontFamily: 'var(--font-mono)', fontSize: '0.875rem' }}>
              <div style={{ color: '#c9d1d9' }}>
                <span style={{ color: '#ff7b72' }}>const</span>
                <span> </span>
                <span style={{ color: '#79c0ff' }}>developer</span>
                <span> </span>
                <span style={{ color: '#ff7b72' }}>=</span>
                <span> {'{'}</span>
              </div>

              <div style={{ paddingLeft: '1.5rem', color: '#c9d1d9' }}>
                <span style={{ color: '#79c0ff' }}>name</span>
                <span>: </span>
                <span style={{ color: '#a5d6ff' }}>'Chirag Sood'</span>
                <span>,</span>
              </div>

              <div style={{ paddingLeft: '1.5rem', color: '#c9d1d9' }}>
                <span style={{ color: '#79c0ff' }}>role</span>
                <span>: </span>
                <span style={{ color: '#a5d6ff' }}>'Software Engineer'</span>
                <span>,</span>
              </div>

              <div style={{ paddingLeft: '1.5rem', color: '#c9d1d9' }}>
                <span style={{ color: '#79c0ff' }}>skills</span>
                <span>: [</span>
              </div>

              <div style={{ paddingLeft: '3rem', color: '#c9d1d9' }}>
                <span style={{ color: '#a5d6ff' }}>'Java'</span>
                <span>, </span>
                <span style={{ color: '#a5d6ff' }}>'Python'</span>
                <span>, </span>
                <span style={{ color: '#a5d6ff' }}>'Spring Boot'</span>
                <span>, </span>
                <span style={{ color: '#a5d6ff' }}>'Spring MVC'</span>
                <span>,</span>
              </div>

              <div style={{ paddingLeft: '3rem', color: '#c9d1d9' }}>
                <span style={{ color: '#a5d6ff' }}>'Spring Data JPA'</span>
                <span>, </span>
                <span style={{ color: '#a5d6ff' }}>'HTML'</span>
                <span>, </span>
                <span style={{ color: '#a5d6ff' }}>'CSS'</span>
                <span>, </span>
                <span style={{ color: '#a5d6ff' }}>'JavaScript'</span>
                <span>,</span>
              </div>

              <div style={{ paddingLeft: '3rem', color: '#c9d1d9' }}>
                <span style={{ color: '#a5d6ff' }}>'React'</span>
                <span>, </span>
                <span style={{ color: '#a5d6ff' }}>'SQL'</span>
                <span>, </span>
                <span style={{ color: '#a5d6ff' }}>'MySQL'</span>
                <span>, </span>
                <span style={{ color: '#a5d6ff' }}>'MongoDB'</span>
                <span>,</span>
              </div>

              <div style={{ paddingLeft: '3rem', color: '#c9d1d9' }}>
                <span style={{ color: '#a5d6ff' }}>'Git'</span>
                <span>, </span>
                <span style={{ color: '#a5d6ff' }}>'GitHub'</span>
                <span>, </span>
                <span style={{ color: '#a5d6ff' }}>'Docker'</span>
                <span>],</span>
              </div>

              <div style={{ paddingLeft: '1.5rem', color: '#c9d1d9' }}>
                <span style={{ color: '#79c0ff' }}>hardWorker</span>
                <span>: </span>
                <span style={{ color: '#79c0ff' }}>true</span>
                <span>,</span>
              </div>

              <div style={{ paddingLeft: '1.5rem', color: '#c9d1d9' }}>
                <span style={{ color: '#79c0ff' }}>quickLearner</span>
                <span>: </span>
                <span style={{ color: '#79c0ff' }}>true</span>
                <span>,</span>
              </div>

              <div style={{ paddingLeft: '1.5rem', color: '#c9d1d9' }}>
                <span style={{ color: '#79c0ff' }}>problemSolver</span>
                <span>: </span>
                <span style={{ color: '#79c0ff' }}>true</span>
                <span>,</span>
              </div>

              <div style={{ paddingLeft: '1.5rem', color: '#c9d1d9' }}>
                <span style={{ color: '#79c0ff' }}>hireable</span>
                <span>: </span>
                <span style={{ color: '#ff7b72' }}>function</span>
                <span>() {'{'}</span>
              </div>

              <div style={{ paddingLeft: '3rem', color: '#c9d1d9' }}>
                <span style={{ color: '#ff7b72' }}>return</span>
                <span> (</span>
              </div>

              <div style={{ paddingLeft: '4.5rem', color: '#c9d1d9' }}>
                <span style={{ color: '#ff7b72' }}>this</span>
                <span>.</span>
                <span style={{ color: '#79c0ff' }}>hardWorker</span>
                <span> </span>
                <span style={{ color: '#ff7b72' }}>&&</span>
              </div>

              <div style={{ paddingLeft: '4.5rem', color: '#c9d1d9' }}>
                <span style={{ color: '#ff7b72' }}>this</span>
                <span>.</span>
                <span style={{ color: '#79c0ff' }}>problemSolver</span>
                <span> </span>
                <span style={{ color: '#ff7b72' }}>&&</span>
              </div>

              <div style={{ paddingLeft: '4.5rem', color: '#c9d1d9' }}>
                <span style={{ color: '#ff7b72' }}>this</span>
                <span>.</span>
                <span style={{ color: '#79c0ff' }}>skills</span>
                <span>.</span>
                <span style={{ color: '#79c0ff' }}>length</span>
                <span> </span>
                <span style={{ color: '#ff7b72' }}>&gt;=</span>
                <span> </span>
                <span style={{ color: '#79c0ff' }}>5</span>
              </div>

              <div style={{ paddingLeft: '3rem', color: '#c9d1d9' }}>
                <span>);</span>
              </div>

              <div style={{ paddingLeft: '1.5rem', color: '#c9d1d9' }}>
                <span>{'}'}</span>
              </div>

              <div style={{ color: '#c9d1d9' }}>
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
