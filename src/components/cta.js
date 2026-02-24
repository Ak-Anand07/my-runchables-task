"use client";

export default function Cta() {
  return (
    <section className="section cta" id="apply">
      <div className="shell">
        <div className="cta-wrap">
          <div>
            <p className="eyebrow">Limited Intake</p>
            <h2>Ready to scale with a founder room that holds you accountable?</h2>
            <p>Applications are reviewed weekly. We only accept founders we can actively support.</p>
          </div>
          <button
            className="btn btn-solid btn-apply-lite btn-lg"
            type="button"
            onClick={() => window.dispatchEvent(new Event("open-apply-form"))}
          >
            Apply to FounderRise
          </button>
        </div>
      </div>
    </section>
  );
}


