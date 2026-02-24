const companies = [
  { name: "Zapier", className: "brand-zapier" },
  { name: "Ahrefs", className: "brand-ahrefs" },
  { name: "ClickUp", className: "brand-clickup" },
  { name: "ActiveCampaign", className: "brand-activecampaign" },
  { name: "Calendly", className: "brand-calendly" },
  { name: "Webflow", className: "brand-webflow" },
  { name: "Notion", className: "brand-notion" },
  { name: "Loom", className: "brand-loom" },
  { name: "Typeform", className: "brand-typeform" },
  { name: "Intercom", className: "brand-intercom" },
  { name: "Figma", className: "brand-figma" },
  { name: "Shopify", className: "brand-shopify" },
];

export default function SocialProof() {
  return (
    <section id="community" className="section social-proof" aria-label="Trusted by founders">
      <div className="shell">
        <p>Trusted by operators from high-growth SaaS teams</p>
        <div className="logo-row">
          {companies.map((company) => (
            <div className={`logo-chip text-only ${company.className}-chip`} key={company.name}>
              <span className={`logo-name ${company.className}`}>{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

