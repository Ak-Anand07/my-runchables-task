export default function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <p className="eyebrow">FounderRise</p>
            <h3>Founder-first operating system for SaaS growth.</h3>
            <p className="footer-text">
              We help founders execute faster with weekly masterminds, proven frameworks,
              and practical feedback loops that improve acquisition, retention, and team rhythm.
            </p>
            <p className="footer-meta">
              Built for teams from early traction to multi-million ARR.
            </p>
          </div>

          <div className="footer-columns">
            <nav className="footer-column" aria-label="Program links">
              <h4>Program</h4>
              <a href="#community">Community</a>
              <a href="#features">Framework</a>
              <a href="#masterminds">Masterminds</a>
              <a href="#pricing">Pricing</a>
            </nav>

            <nav className="footer-column" aria-label="Resources links">
              <h4>Resources</h4>
              <a href="#faq">FAQ</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#contact">Contact</a>
              <a href="#apply">Apply</a>
            </nav>

            <div className="footer-column">
              <h4>Company</h4>
              <a href="mailto:hello@saasrise.com">hello@saasrise.com</a>
              <a href="#footer">Privacy</a>
              <a href="#footer">Terms</a>
              <span className="footer-note">Remote-first, global community</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>(c) 2026 FounderRise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


