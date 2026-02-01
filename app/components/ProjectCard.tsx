'use client';

import Button from "./Button";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
  github,
}: ProjectCardProps) {
  return (
    <div
      style={{
        padding: 'var(--spacing-xl)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--color-border)',
        backgroundColor: 'var(--color-bg-secondary)',
        transition: 'all var(--transition-base)',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-accent)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-md)';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-sm)';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
      }}
    >
      <h3 style={{ marginBottom: 'var(--spacing-md)', fontSize: '1.25rem' }}>{title}</h3>
      <p style={{ marginBottom: 'var(--spacing-lg)', flex: 1, fontSize: '0.95rem' }}>{description}</p>

      {/* Technologies */}
      <div style={{ marginBottom: 'var(--spacing-xl)' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--spacing-sm)',
          }}
        >
          {technologies.map((tech) => (
            <span
              key={tech}
              style={{
                padding: '0.375rem 0.75rem',
                backgroundColor: 'var(--color-accent-muted)',
                color: 'var(--color-accent)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.8rem',
                fontWeight: 500,
                border: '1px solid var(--color-accent)',
                opacity: 0.8,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div
        style={{
          display: 'flex',
          gap: 'var(--spacing-md)',
          marginTop: 'auto',
        }}
      >
        {link && <Button href={link} size="sm">View Project</Button>}
        {github && <Button href={github} variant="outline" size="sm">GitHub</Button>}
      </div>
    </div>
  );
}
