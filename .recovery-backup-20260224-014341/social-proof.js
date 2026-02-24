const logos = [
  "Google",
  "Microsoft",
  "Amazon",
  "Meta",
  "Netflix",
  "Adobe",
  "Salesforce",
  "HubSpot",
  "Stripe",
  "Shopify",
  "Slack",
  "Notion",
];

export default function SocialProof() {
  return (
    <section id="customers" className="section social-proof" aria-label="Trusted by teams">
      <div className="shell">
        <p>Trusted by high-growth SaaS companies</p>
        <div className="logo-row">
          {logos.map((name) => (
            <article className="logo-chip" key={name} aria-label={`${name} logo`}>
              <span className="logo-mark" aria-hidden="true">
                {name.slice(0, 2).toUpperCase()}
              </span>
              <span className="logo-name">{name}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
