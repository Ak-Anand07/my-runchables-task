import Image from "next/image";

export default function Fhs() {
  return (
    <section className="section feature-highlight" id="dashboard" aria-label="Feature Highlight">
      <div className="shell">
        <div className="feature-highlight-grid">
          <div className="feature-highlight-media">
            <Image
              src="/next.svg"
              alt="Dashboard preview"
              className="feature-highlight-image"
              width={720}
              height={420}
              priority={false}
            />
          </div>
          <div className="feature-highlight-copy">
            <p className="eyebrow">Feature spotlight</p>
            <h2>Powerful Dashboard</h2>
            <p>Manage users, analytics, and workflows in one place.</p>
            <ul>
              <li>Custom health scoring for every account segment.</li>
              <li>Real-time alerts on churn risk and trial drop-off.</li>
              <li>Weekly executive digest with actionable recommendations.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
