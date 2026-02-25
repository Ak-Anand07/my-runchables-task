"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#community", label: "Community" },
  { href: "#features", label: "Framework" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "#masterminds", label: "Masterminds" },
  { href: "#contact", label: "Contact" },
];

const communityLinks = [
  { href: "#community", label: "Community Overview" },
  { href: "#testimonials", label: "Founder Results" },
  { href: "#masterminds", label: "Weekly Masterminds" },
  { href: "#contact", label: "Contact Team" },
];

const countryPhoneData = [
  { country: "Afghanistan", dialCode: "+93" },
  { country: "Albania", dialCode: "+355" },
  { country: "Algeria", dialCode: "+213" },
  { country: "Andorra", dialCode: "+376" },
  { country: "Angola", dialCode: "+244" },
  { country: "Antigua and Barbuda", dialCode: "+1-268" },
  { country: "Argentina", dialCode: "+54" },
  { country: "Armenia", dialCode: "+374" },
  { country: "Australia", dialCode: "+61" },
  { country: "Austria", dialCode: "+43" },
  { country: "Azerbaijan", dialCode: "+994" },
  { country: "Bahamas", dialCode: "+1-242" },
  { country: "Bahrain", dialCode: "+973" },
  { country: "Bangladesh", dialCode: "+880" },
  { country: "Barbados", dialCode: "+1-246" },
  { country: "Belarus", dialCode: "+375" },
  { country: "Belgium", dialCode: "+32" },
  { country: "Belize", dialCode: "+501" },
  { country: "Benin", dialCode: "+229" },
  { country: "Bhutan", dialCode: "+975" },
  { country: "Bolivia", dialCode: "+591" },
  { country: "Bosnia and Herzegovina", dialCode: "+387" },
  { country: "Botswana", dialCode: "+267" },
  { country: "Brazil", dialCode: "+55" },
  { country: "Brunei", dialCode: "+673" },
  { country: "Bulgaria", dialCode: "+359" },
  { country: "Burkina Faso", dialCode: "+226" },
  { country: "Burundi", dialCode: "+257" },
  { country: "Cambodia", dialCode: "+855" },
  { country: "Cameroon", dialCode: "+237" },
  { country: "Canada", dialCode: "+1" },
  { country: "Cape Verde", dialCode: "+238" },
  { country: "Central African Republic", dialCode: "+236" },
  { country: "Chad", dialCode: "+235" },
  { country: "Chile", dialCode: "+56" },
  { country: "China", dialCode: "+86" },
  { country: "Colombia", dialCode: "+57" },
  { country: "Comoros", dialCode: "+269" },
  { country: "Congo (Brazzaville)", dialCode: "+242" },
  { country: "Congo (Kinshasa)", dialCode: "+243" },
  { country: "Costa Rica", dialCode: "+506" },
  { country: "Cote d'Ivoire", dialCode: "+225" },
  { country: "Croatia", dialCode: "+385" },
  { country: "Cuba", dialCode: "+53" },
  { country: "Cyprus", dialCode: "+357" },
  { country: "Czech Republic", dialCode: "+420" },
  { country: "Denmark", dialCode: "+45" },
  { country: "Djibouti", dialCode: "+253" },
  { country: "Dominica", dialCode: "+1-767" },
  { country: "Dominican Republic", dialCode: "+1-809" },
  { country: "Ecuador", dialCode: "+593" },
  { country: "Egypt", dialCode: "+20" },
  { country: "El Salvador", dialCode: "+503" },
  { country: "Equatorial Guinea", dialCode: "+240" },
  { country: "Eritrea", dialCode: "+291" },
  { country: "Estonia", dialCode: "+372" },
  { country: "Eswatini", dialCode: "+268" },
  { country: "Ethiopia", dialCode: "+251" },
  { country: "Fiji", dialCode: "+679" },
  { country: "Finland", dialCode: "+358" },
  { country: "France", dialCode: "+33" },
  { country: "Gabon", dialCode: "+241" },
  { country: "Gambia", dialCode: "+220" },
  { country: "Georgia", dialCode: "+995" },
  { country: "Germany", dialCode: "+49" },
  { country: "Ghana", dialCode: "+233" },
  { country: "Greece", dialCode: "+30" },
  { country: "Grenada", dialCode: "+1-473" },
  { country: "Guatemala", dialCode: "+502" },
  { country: "Guinea", dialCode: "+224" },
  { country: "Guinea-Bissau", dialCode: "+245" },
  { country: "Guyana", dialCode: "+592" },
  { country: "Haiti", dialCode: "+509" },
  { country: "Honduras", dialCode: "+504" },
  { country: "Hungary", dialCode: "+36" },
  { country: "Iceland", dialCode: "+354" },
  { country: "India", dialCode: "+91" },
  { country: "Indonesia", dialCode: "+62" },
  { country: "Iran", dialCode: "+98" },
  { country: "Iraq", dialCode: "+964" },
  { country: "Ireland", dialCode: "+353" },
  { country: "Israel", dialCode: "+972" },
  { country: "Italy", dialCode: "+39" },
  { country: "Jamaica", dialCode: "+1-876" },
  { country: "Japan", dialCode: "+81" },
  { country: "Jordan", dialCode: "+962" },
  { country: "Kazakhstan", dialCode: "+7" },
  { country: "Kenya", dialCode: "+254" },
  { country: "Kiribati", dialCode: "+686" },
  { country: "Kuwait", dialCode: "+965" },
  { country: "Kyrgyzstan", dialCode: "+996" },
  { country: "Laos", dialCode: "+856" },
  { country: "Latvia", dialCode: "+371" },
  { country: "Lebanon", dialCode: "+961" },
  { country: "Lesotho", dialCode: "+266" },
  { country: "Liberia", dialCode: "+231" },
  { country: "Libya", dialCode: "+218" },
  { country: "Liechtenstein", dialCode: "+423" },
  { country: "Lithuania", dialCode: "+370" },
  { country: "Luxembourg", dialCode: "+352" },
  { country: "Madagascar", dialCode: "+261" },
  { country: "Malawi", dialCode: "+265" },
  { country: "Malaysia", dialCode: "+60" },
  { country: "Maldives", dialCode: "+960" },
  { country: "Mali", dialCode: "+223" },
  { country: "Malta", dialCode: "+356" },
  { country: "Marshall Islands", dialCode: "+692" },
  { country: "Mauritania", dialCode: "+222" },
  { country: "Mauritius", dialCode: "+230" },
  { country: "Mexico", dialCode: "+52" },
  { country: "Micronesia", dialCode: "+691" },
  { country: "Moldova", dialCode: "+373" },
  { country: "Monaco", dialCode: "+377" },
  { country: "Mongolia", dialCode: "+976" },
  { country: "Montenegro", dialCode: "+382" },
  { country: "Morocco", dialCode: "+212" },
  { country: "Mozambique", dialCode: "+258" },
  { country: "Myanmar", dialCode: "+95" },
  { country: "Namibia", dialCode: "+264" },
  { country: "Nauru", dialCode: "+674" },
  { country: "Nepal", dialCode: "+977" },
  { country: "Netherlands", dialCode: "+31" },
  { country: "New Zealand", dialCode: "+64" },
  { country: "Nicaragua", dialCode: "+505" },
  { country: "Niger", dialCode: "+227" },
  { country: "Nigeria", dialCode: "+234" },
  { country: "North Korea", dialCode: "+850" },
  { country: "North Macedonia", dialCode: "+389" },
  { country: "Norway", dialCode: "+47" },
  { country: "Oman", dialCode: "+968" },
  { country: "Pakistan", dialCode: "+92" },
  { country: "Palau", dialCode: "+680" },
  { country: "Panama", dialCode: "+507" },
  { country: "Papua New Guinea", dialCode: "+675" },
  { country: "Paraguay", dialCode: "+595" },
  { country: "Peru", dialCode: "+51" },
  { country: "Philippines", dialCode: "+63" },
  { country: "Poland", dialCode: "+48" },
  { country: "Portugal", dialCode: "+351" },
  { country: "Qatar", dialCode: "+974" },
  { country: "Romania", dialCode: "+40" },
  { country: "Russia", dialCode: "+7" },
  { country: "Rwanda", dialCode: "+250" },
  { country: "Saint Kitts and Nevis", dialCode: "+1-869" },
  { country: "Saint Lucia", dialCode: "+1-758" },
  { country: "Saint Vincent and the Grenadines", dialCode: "+1-784" },
  { country: "Samoa", dialCode: "+685" },
  { country: "San Marino", dialCode: "+378" },
  { country: "Sao Tome and Principe", dialCode: "+239" },
  { country: "Saudi Arabia", dialCode: "+966" },
  { country: "Senegal", dialCode: "+221" },
  { country: "Serbia", dialCode: "+381" },
  { country: "Seychelles", dialCode: "+248" },
  { country: "Sierra Leone", dialCode: "+232" },
  { country: "Singapore", dialCode: "+65" },
  { country: "Slovakia", dialCode: "+421" },
  { country: "Slovenia", dialCode: "+386" },
  { country: "Solomon Islands", dialCode: "+677" },
  { country: "Somalia", dialCode: "+252" },
  { country: "South Africa", dialCode: "+27" },
  { country: "South Korea", dialCode: "+82" },
  { country: "South Sudan", dialCode: "+211" },
  { country: "Spain", dialCode: "+34" },
  { country: "Sri Lanka", dialCode: "+94" },
  { country: "Sudan", dialCode: "+249" },
  { country: "Suriname", dialCode: "+597" },
  { country: "Sweden", dialCode: "+46" },
  { country: "Switzerland", dialCode: "+41" },
  { country: "Syria", dialCode: "+963" },
  { country: "Taiwan", dialCode: "+886" },
  { country: "Tajikistan", dialCode: "+992" },
  { country: "Tanzania", dialCode: "+255" },
  { country: "Thailand", dialCode: "+66" },
  { country: "Timor-Leste", dialCode: "+670" },
  { country: "Togo", dialCode: "+228" },
  { country: "Tonga", dialCode: "+676" },
  { country: "Trinidad and Tobago", dialCode: "+1-868" },
  { country: "Tunisia", dialCode: "+216" },
  { country: "Turkey", dialCode: "+90" },
  { country: "Turkmenistan", dialCode: "+993" },
  { country: "Tuvalu", dialCode: "+688" },
  { country: "Uganda", dialCode: "+256" },
  { country: "Ukraine", dialCode: "+380" },
  { country: "United Arab Emirates", dialCode: "+971" },
  { country: "United Kingdom", dialCode: "+44" },
  { country: "United States", dialCode: "+1" },
  { country: "Uruguay", dialCode: "+598" },
  { country: "Uzbekistan", dialCode: "+998" },
  { country: "Vanuatu", dialCode: "+678" },
  { country: "Vatican City", dialCode: "+379" },
  { country: "Venezuela", dialCode: "+58" },
  { country: "Vietnam", dialCode: "+84" },
  { country: "Yemen", dialCode: "+967" },
  { country: "Zambia", dialCode: "+260" },
  { country: "Zimbabwe", dialCode: "+263" },
];

const countryNames = [...new Set(countryPhoneData.map((item) => item.country))].sort((a, b) =>
  a.localeCompare(b)
);

const countryPhoneOptions = countryPhoneData.map((item) => (
  <option key={`${item.country}-${item.dialCode}`} value={`${item.country}|${item.dialCode}`}>
    {item.country} {item.dialCode}
  </option>
));

const countryNameOptions = countryNames.map((country) => (
  <option key={country} value={country}>
    {country}
  </option>
));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [applyOpen, setApplyOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onOpenApply = () => {
      setMenuOpen(false);
      setApplyOpen(true);
    };

    window.addEventListener("open-apply-form", onOpenApply);
    return () => window.removeEventListener("open-apply-form", onOpenApply);
  }, []);

  useEffect(() => {
    if (!menuOpen && !applyOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, applyOpen]);

  const headerClass = `site-header${scrolled ? " is-scrolled" : ""}${menuOpen ? " menu-open" : ""}`;
  const openApplyPanel = () => {
    setMenuOpen(false);
    setApplyOpen(true);
  };

  return (
    <header className={headerClass}>
      <div className="shell nav-shell">
        <a className="brand" href="#hero">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="brand-text">
            Founder<span className="brand-text-accent">Rise</span>
          </span>
        </a>

        <nav className="nav-links desktop-only" aria-label="Primary">
          {navLinks.map((link) =>
            link.label === "Community" ? (
              <div key={link.href} className="nav-dropdown">
                <a href={link.href}>
                  {link.label}
                  <span className="nav-caret" aria-hidden="true">▾</span>
                </a>
                <div className="nav-dropdown-menu" role="menu" aria-label="Community menu">
                  {communityLinks.map((item) => (
                    <a key={item.href} href={item.href} role="menuitem">
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="nav-actions desktop-only">
          <a className="btn btn-ghost" href="/login">Log In</a>
          <button className="btn btn-solid btn-apply-join" type="button" onClick={openApplyPanel}>
            Apply to Join
          </button>
        </div>

        <button
          className={`mobile-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-menu${menuOpen ? " is-open" : ""}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <div className="mobile-menu-actions">
          <a className="btn btn-ghost" href="/login" onClick={() => setMenuOpen(false)}>Log In</a>
          <button className="btn btn-solid btn-apply-join" type="button" onClick={openApplyPanel}>
            Apply to Join
          </button>
        </div>
      </div>

      <button
        className={`apply-overlay${applyOpen ? " is-open" : ""}`}
        type="button"
        aria-label="Close membership form"
        onClick={() => setApplyOpen(false)}
      />

      <aside className={`apply-offcanvas${applyOpen ? " is-open" : ""}`} aria-label="Membership form">
        <div className="apply-offcanvas-scroll">
          <div className="apply-offcanvas-head">
            <div className="apply-brand">
              <span className="apply-brand-mark" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span className="apply-brand-text">FounderRise</span>
            </div>
            <h3>Membership Application</h3>
            <button type="button" className="apply-close" aria-label="Close form" onClick={() => setApplyOpen(false)}>
              x
            </button>
          </div>

          <form className="apply-offcanvas-form" action="#" method="post">
            <p className="apply-offcanvas-note">
              Our community is only for SaaS CEOs and founders with $1M to $100M in ARR
            </p>

            <div className="apply-offcanvas-grid">
              <label className="apply-field">
                <span>First Name</span>
                <input type="text" name="firstName" placeholder="First name" required />
              </label>
              <label className="apply-field">
                <span>Last Name</span>
                <input type="text" name="lastName" placeholder="Last name" required />
              </label>
            </div>

            <label className="apply-field">
              <span>Email</span>
              <input type="email" name="email" placeholder="you@company.com" required />
            </label>

            <label className="apply-field">
              <span>Mobile Number</span>
              <div className="apply-mobile-row">
                <select className="apply-select-modern apply-select-compact" name="mobileCountry" defaultValue="India|+91">
                  {countryPhoneOptions}
                </select>
                <input type="tel" name="mobile" placeholder="" required />
              </div>
              <small>We send an SMS upon acceptance</small>
            </label>

            <div className="apply-offcanvas-grid">
              <label className="apply-field">
                <span>Company</span>
                <input type="text" name="company" placeholder="Company name" required />
              </label>
              <label className="apply-field">
                <span>Job Title</span>
                <input type="text" name="jobTitle" placeholder="Job title" required />
              </label>
            </div>

            <div className="apply-offcanvas-grid">
              <label className="apply-field">
                <span>City</span>
                <input type="text" name="city" placeholder="City" required />
              </label>
              <label className="apply-field">
                <span>Country</span>
                <select className="apply-select-modern apply-select-compact" name="country" defaultValue="India" required>
                  {countryNameOptions}
                </select>
              </label>
            </div>

            <label className="apply-field">
              <span>State/Region</span>
              <input type="text" name="stateRegion" placeholder="State / Region" required />
            </label>

            <label className="apply-field">
              <span>Annual Revenue (Last Month x12)</span>
              <select className="apply-select-modern" name="arr" required defaultValue="">
                <option value="" disabled>Select one...</option>
                <option value="under-1m">Below $1M</option>
                <option value="1m-3m">$1M to $3M</option>
                <option value="3m-10m">$3M to $10M</option>
                <option value="10m-25m">$10M to $25M</option>
                <option value="25m-50m">$25M to $50M</option>
                <option value="50m-100m">$50M to $100M</option>
                <option value="above-100m">Above $100M</option>
              </select>
            </label>

            <label className="apply-field">
              <span>What Makes You Excited to Join FounderRise?</span>
              <textarea name="excited" rows={3} placeholder="Share what excites you most." required />
            </label>

            <label className="apply-field">
              <span>Why would you like to join the community?</span>
              <textarea name="whyJoin" rows={3} placeholder="Tell us your goal for joining." required />
            </label>

            <label className="apply-field">
              <span>How Did You Hear About Us?</span>
              <input
                type="text"
                name="source"
                placeholder="e.g., Google search, social media, referral..."
                required
              />
            </label>

            <label className="apply-confirm">
              <input type="checkbox" name="consent" required />
              <span>
                If my application is approved, I understand that I will receive an email and text
                message from FounderRise with the link to officially sign up and join the community.
                I've double-checked my email and phone number above.
              </span>
            </label>

            <button className="btn btn-solid btn-apply-join" type="submit">
              Submit Application
            </button>
          </form>
        </div>
      </aside>
    </header>
  );
}
