export default function BlogPostPage({ params }) {
  const { slug } = params;
  
  return (
    <div style={{ padding: 'var(--spacing-3xl)', minHeight: '80vh' }}>
      <h1>Blog Post: {slug}</h1>
      <p style={{ marginTop: 'var(--spacing-lg)', color: 'var(--color-text-secondary)' }}>
        Coming soon...
      </p>
    </div>
  );
}
