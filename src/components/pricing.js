"use client";

const plans = [
  {
    name: "Starter",
    price: "$79",
    note: "per month",
    features: [
      "1 founder seat",
      "Weekly group masterminds",
      "Core growth framework access",
      "Community discussions",
      "Monthly planning template",
    ],
    cta: "Start Starter",
  },
  {
    name: "Growth",
    price: "$197",
    note: "per month",
    featured: true,
    features: [
      "Up to 3 team seats",
      "5 live masterminds per week",
      "Full Meet-Grow-Scale-Exit system",
      "Private accountability pods",
      "Operator office hours",
    ],
    cta: "Choose Growth",
  },
  {
    name: "Scale",
    price: "$499",
    note: "per month",
    features: [
      "Up to 8 team seats",
      "Priority strategy reviews",
      "Custom execution scorecards",
      "Dedicated implementation support",
      "Quarterly scale roadmap",
    ],
    cta: "Go Scale",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="shell">
        <p className="eyebrow">Pricing</p>
        <h2>Choose the plan that fits your current growth stage.</h2>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <article key={plan.name} className={`price-card${plan.featured ? " featured" : ""}`}>
              {plan.featured ? <span className="badge">Most Popular</span> : null}
              <h3>{plan.name}</h3>
              <p className="price">{plan.price}</p>
              <p className="price-note">{plan.note}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <button
                className={`btn ${plan.featured ? "btn-solid btn-apply-join" : "btn-ghost"}`}
                type="button"
                onClick={() => window.dispatchEvent(new Event("open-apply-form"))}
              >
                {plan.cta}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

