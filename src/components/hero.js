"use client";

import { useEffect, useState } from "react";

const outcomes = [
  { target: 900, label: "SaaS founders coached", format: (value) => `${value}+` },
  { target: 100, label: "Cumulative ARR influenced", format: (value) => `$${value}M+` },
  { target: 5, label: "Live calls every week", format: (value) => `${value}` },
];

const slides = [
  {
    kicker: "From the founder",
    title: "The old playbook no longer works.",
    text:
      "Ad costs are up, retention is harder, and random tactics are expensive. We built FounderRise to give founders structure, accountability, and the right room.",
    points: [
      { label: "Weekly GTM teardown", value: "Live" },
      { label: "Scale systems templates", value: "Included" },
      { label: "Exit-readiness scorecard", value: "Quarterly" },
    ],
  },
  {
    kicker: "Execution system",
    title: "Move from ideas to weekly execution.",
    text:
      "Each week has a clear plan: one growth focus, one retention focus, and one founder metric review so momentum compounds.",
    points: [
      { label: "Sprint planning rhythm", value: "Weekly" },
      { label: "Founder accountability", value: "Built-in" },
      { label: "Progress checkpoints", value: "Every Friday" },
    ],
  },
  {
    kicker: "Community edge",
    title: "Get feedback from founders at your stage.",
    text:
      "You are in curated rooms with operators solving similar bottlenecks, so advice is contextual and actionable, not generic.",
    points: [
      { label: "Peer founder hot seats", value: "5x / week" },
      { label: "Operator office hours", value: "Live" },
      { label: "Private member channels", value: "24/7" },
    ],
  },
];

export default function Hero() {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [activeSlide, setActiveSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState(null);
  const [metricValues, setMetricValues] = useState(() =>
    outcomes.map((item) => (prefersReducedMotion ? item.target : 0))
  );

  const goToSlide = (nextIndex) => {
    if (nextIndex === activeSlide) return;
    setPreviousSlide(activeSlide);
    setActiveSlide(nextIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => {
        setPreviousSlide(prev);
        return (prev + 1) % slides.length;
      });
    }, 4200);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const motionReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (motionReduced) return;

    const duration = 1400;
    const start = performance.now();
    let rafId;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;

      setMetricValues(
        outcomes.map((item) => Math.round(item.target * eased))
      );

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="section hero" id="hero">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Founder-Led SaaS Growth Community</p>
          <h1>Build a SaaS that can scale and eventually sell.</h1>
          <p className="hero-subtitle">
            FounderRise gives founders a proven roadmap, elite peer network, and weekly masterminds
            so you can move from messy growth to predictable milestones.
          </p>
          <div className="hero-actions">
            <button
              className="btn btn-solid btn-apply-join btn-lg"
              type="button"
              onClick={() => window.dispatchEvent(new Event("open-apply-form"))}
            >
              Apply to Join
            </button>
            <a className="btn btn-ghost btn-lg" href="#features">See the Framework</a>
          </div>
          <div className="hero-metrics">
            {outcomes.map((item, idx) => (
              <div key={item.label}>
                <strong>{item.format(metricValues[idx])}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="hero-panel" aria-label="Founder note">
          <div className="hero-panel-head">
            {slides.map((slide, idx) => (
              <button
                key={slide.title}
                type="button"
                className={`hero-head-dot${idx === activeSlide ? " is-active" : ""}`}
                aria-label={`Show slide ${idx + 1}`}
                aria-current={idx === activeSlide ? "true" : "false"}
                onClick={() => goToSlide(idx)}
              />
            ))}
          </div>
          <div className="hero-carousel">
            {slides.map((slide, idx) => (
              <article
                key={slide.title}
                className={`hero-panel-body${idx === activeSlide ? " is-active" : ""}${idx === previousSlide ? " is-exit-left" : ""}`}
              >
                <p className="panel-kicker">{slide.kicker}</p>
                <h3>{slide.title}</h3>
                <p>{slide.text}</p>
                <ul>
                  {slide.points.map((point) => (
                    <li key={point.label}>
                      <span>{point.label}</span>
                      <strong>{point.value}</strong>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

