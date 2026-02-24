"use client";

import { useEffect, useRef } from "react";

const sessions = [
  "Acquisition Deep Dive",
  "Sales Call Breakdown",
  "Retention + Expansion Lab",
  "Founder Q&A",
  "Execution Accountability",
];

export default function Fhs() {
  const revealRef = useRef([]);

  useEffect(() => {
    const nodes = revealRef.current.filter(Boolean);
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section feature-highlight" id="masterminds" aria-label="Masterminds">
      <div className="shell">
        <div className="fhs-wrap">
          <div
            className="fhs-top fhs-reveal"
            ref={(el) => {
              revealRef.current[0] = el;
            }}
          >
            <p className="eyebrow">Weekly cadence</p>
            <h3>Five live masterminds every week.</h3>
            <p>
              Join focused sessions with founders at your level. Bring your challenge,
              leave with an execution plan and deadlines.
            </p>
          </div>
          <div className="fhs-content-grid">
            <div
              className="fhs-content-block fhs-reveal"
              ref={(el) => {
                revealRef.current[1] = el;
              }}
              style={{ transitionDelay: "110ms" }}
            >
              <p className="eyebrow">Live sessions</p>
              <ul className="mastermind-list">
                {sessions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div
              className="fhs-content-block fhs-reveal"
              ref={(el) => {
                revealRef.current[2] = el;
              }}
              style={{ transitionDelay: "190ms" }}
            >
              <p className="eyebrow">What members get</p>
              <h2>Strategy, structure, and accountability in one room.</h2>
              <ul className="feature-highlight-list">
                <li>Private founder network with vetted SaaS operators.</li>
                <li>Proven playbooks for growth, hiring, and operating rhythm.</li>
                <li>Templates for scorecards, pipelines, and weekly planning.</li>
                <li>Direct feedback on your funnel, messaging, and retention loops.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

