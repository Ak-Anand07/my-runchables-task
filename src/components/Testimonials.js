"use client";

import { useEffect, useRef } from "react";

const items = [
  {
    quote:
      "Before joining, we were trying five channels at once and none of them were consistent. In two months we narrowed to one outbound motion and one webinar motion, and demos went from 18 to 41 per month.",
    name: "Rohan Mehta",
    role: "Founder, LeadOrbit (B2B SaaS)",
    avatar: "/testimonials/rohan.svg",
  },
  {
    quote:
      "The most useful part is the weekly accountability. I show up with numbers, leave with 2-3 decisions, and execute. Our trial-to-paid moved from 11% to 17% in one quarter.",
    name: "Aisha Khan",
    role: "Co-founder, FlowLedger",
    avatar: "/testimonials/aisha.svg",
  },
  {
    quote:
      "I expected another generic founder community, but the feedback is very practical. We fixed onboarding handoff issues and reduced month-1 churn by 22% over the last 90 days.",
    name: "Daniel Brooks",
    role: "CEO, InvoiceLoop",
    avatar: "/testimonials/daniel.svg",
  },
];

export default function Testimonials() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.22, rootMargin: "0px 0px -8% 0px" }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="testimonials">
      <div className="shell">
        <p className="eyebrow">Founder Results</p>
        <h2>What founders are actually seeing after joining.</h2>
        <div className="testimonials-grid">
          {items.map((item, idx) => (
            <article
              className="testimonial-card"
              key={item.name}
              ref={(el) => {
                cardsRef.current[idx] = el;
              }}
              style={{ transitionDelay: `${idx * 110}ms` }}
            >
              <img className="testimonial-avatar" src={item.avatar} alt={`${item.name} profile`} loading="lazy" />
              <span className="quote-symbol" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                  <path d="M10.5 7.5C7.8 8.1 6 10.2 6 13.4v3.1h5.1v-4H8.9c.1-1.3.9-2.3 2.4-2.8L10.5 7.5Zm7.5 0c-2.7.6-4.5 2.7-4.5 5.9v3.1h5.1v-4h-2.2c.1-1.3.9-2.3 2.4-2.8L18 7.5Z" />
                </svg>
              </span>
              <p>{item.quote}</p>
              <h3>{item.name}</h3>
              <span>{item.role}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

