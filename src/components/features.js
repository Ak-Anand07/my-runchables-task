const stages = [
  {
    step: "01",
    title: "Meet",
    text: "Position your offer and message so the right buyers self-identify quickly.",
    imageTitle: "Message-Market Fit",
    imageNote: "ICP clarity + offer positioning",
    imageSrc: "/framework/meet.svg",
  },
  {
    step: "02",
    title: "Grow",
    text: "Install repeatable acquisition channels that produce qualified demos every week.",
    imageTitle: "Pipeline Engine",
    imageNote: "Demand generation + sales rhythm",
    imageSrc: "/framework/grow.svg",
  },
  {
    step: "03",
    title: "Scale",
    text: "Build team systems for sales, onboarding, and retention without founder bottlenecks.",
    imageTitle: "Team Operating System",
    imageNote: "Delegation + process consistency",
    imageSrc: "/framework/scale.svg",
  },
  {
    step: "04",
    title: "Exit",
    text: "Track the metrics buyers care about and shape your company for strategic optionality.",
    imageTitle: "Exit Readiness",
    imageNote: "Quality revenue + buyer confidence",
    imageSrc: "/framework/exit.svg",
  },
];

export default function Features() {
  return (
    <section id="features" className="section features">
      <div className="shell">
        <div className="features-head">
          <p className="eyebrow">The FounderRise Growth Framework</p>
          <h2>A clear operating system for each stage of SaaS growth.</h2>
        </div>

        <div className="feature-grid feature-grid-4">
          {stages.map((item) => (
            <article key={item.title} className={`feature-card feature-card-stage stage-${item.title.toLowerCase()}`}>
              <span className="feature-step">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="feature-visual" aria-hidden="true">
                <div className="feature-visual-glow" />
                <img src={item.imageSrc} alt="" className="feature-visual-image" loading="lazy" />
                <strong>{item.imageTitle}</strong>
                <span>{item.imageNote}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


