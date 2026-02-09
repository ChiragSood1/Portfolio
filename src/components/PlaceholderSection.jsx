import { profile } from "../content/portfolio.jsx";

function PlaceholderSection({ id, title, copy }) {
  return (
    <section id={id} className="placeholder-section reveal-section">
      <div className="placeholder-inner">
        {!title && <p className="placeholder-label">{id}</p>}
        {title && <h2>{title}</h2>}
        <p>{copy}</p>
      </div>
    </section>
  );
}

export default PlaceholderSection;
