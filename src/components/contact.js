export default function Contact() {
  return (
    <section className="section contact" id="contact" aria-label="Contact">
      <div className="shell">
        <div className="contact-wrap">
          <div className="contact-copy">
            <p className="eyebrow">Contact</p>
            <h2>Talk to the FounderRise team about your current growth stage.</h2>
            <p>
              Share your goals, constraints, and timeline. We will guide you to the right
              plan and show how the weekly system fits your team.
            </p>
            <form className="contact-form" action="#" method="post">
              <div className="contact-form-grid">
                <label className="contact-field">
                  <span>First Name</span>
                  <input type="text" name="firstName" placeholder="Enter first name" required />
                </label>
                <label className="contact-field">
                  <span>Last Name</span>
                  <input type="text" name="lastName" placeholder="Enter last name" required />
                </label>
              </div>
              <label className="contact-field">
                <span>Email</span>
                <input type="email" name="email" placeholder="Enter email address" required />
              </label>
              <button className="btn btn-solid btn-apply-join" type="submit">
                Submit
              </button>
            </form>
          </div>

          <aside className="contact-side desktop-only" aria-hidden="true">
            <div className="contact-side-card">
              <p className="contact-side-kicker">What You Get</p>
              <h3>Direct operator support designed for SaaS founders.</h3>
              <ul>
                <li>Weekly execution checkpoints</li>
                <li>Peer reviews for growth decisions</li>
                <li>Playbooks across demand, sales, and retention</li>
              </ul>
              <div className="contact-side-tags">
                <span>Peer Network</span>
                <span>Weekly Cadence</span>
                <span>Operator Playbooks</span>
              </div>
            </div>
            <div className="contact-side-stats">
              <div>
                <strong>150+</strong>
                <span>Active SaaS founders</span>
              </div>
              <div>
                <strong>30+</strong>
                <span>Mastermind sessions / month</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}




