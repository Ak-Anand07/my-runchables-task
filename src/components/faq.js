"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Who is FounderRise for?",
    a: "Bootstrapped and funded SaaS founders from early traction to multi-million ARR stages.",
  },
  {
    q: "How much time do I need each week?",
    a: "Most members commit 2-4 focused hours weekly across live calls, planning, and execution.",
  },
  {
    q: "Is this a course or a community?",
    a: "It is an implementation community: live masterminds, practical frameworks, and founder feedback loops.",
  },
  {
    q: "Can my co-founder join too?",
    a: "Yes. Teams can apply together, and we support shared planning inside the same operating cadence.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="faq" className="section">
      <div className="shell">
        <p className="eyebrow">FAQ</p>
        <h2>Everything founders ask before joining.</h2>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <div
              className={`faq-item faq-accordion${openIndex === index ? " is-open" : ""}`}
              key={item.q}
            >
              <button
                className="faq-question"
                type="button"
                aria-expanded={openIndex === index}
                onClick={() => setOpenIndex((prev) => (prev === index ? -1 : index))}
              >
                <h3>{item.q}</h3>
                <span className="faq-icon" aria-hidden="true" />
              </button>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


