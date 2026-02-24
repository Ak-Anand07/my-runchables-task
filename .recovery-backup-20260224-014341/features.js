const items = [
  {
    title: "Lifecycle Automation",
    text: "Trigger personalized flows from signup to expansion using behavior-based segments.",
  },
  {
    title: "Revenue Intelligence",
    text: "Track product usage and billing signals to flag churn risks before they impact MRR.",
  },
  {
    title: "Playbook Library",
    text: "Ship proven GTM and customer success sequences with reusable templates.",
  },
  {
    title: "Team Workspaces",
    text: "Align product, sales, and success around one real-time account timeline.",
  },
  {
    title: "AI Co-pilot",
    text: "Generate rollout plans, email drafts, and campaign variants in seconds.",
  },
  {
    title: "Native Integrations",
    text: "Connect Salesforce, Stripe, HubSpot, and your warehouse in one click.",
  },
];

export default function Features() {
  return (
    <section id="features" className="section features">
      <div className="shell">
        <p className="eyebrow">Why teams switch</p>
        <h2>Everything you need to scale without extra headcount</h2>

        <div className="feature-grid">
          {items.map((item) => (
            <article key={item.title} className="feature-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
