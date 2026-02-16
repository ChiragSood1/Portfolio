export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo" aria-label="Site footer">
      <div className="site-footer-inner">
        <p className="footer-copy">© {new Date().getFullYear()} Chirag Sood. All rights reserved.</p>
        <p className="footer-made">Made with <span aria-hidden="true">❤️</span> by Chirag.</p>
      </div>
    </footer>
  );
}
