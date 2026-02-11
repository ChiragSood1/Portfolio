import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  // keep year correct if user keeps site open across new year
  useEffect(() => {
    const t = setInterval(() => setYear(new Date().getFullYear()), 1000 * 60 * 60);
    return () => clearInterval(t);
  }, []);

  return (
    <footer className="site-footer" role="contentinfo" aria-label="Site footer">
      <div className="site-footer-inner">
        <p className="footer-copy">© {year} Chirag Sood. All rights reserved.</p>
        <p className="footer-made">Made with <span aria-hidden>❤️</span> by Chirag.</p>
      </div>
    </footer>
  );
}
