import { useState, type FormEvent } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Cog,
  MapPin,
  Phone,
  Power,
  Settings,
  ShieldCheck,
  Snowflake,
  Wrench,
  type LucideIcon,
} from 'lucide-react'

const phoneNumber = '8603541596'
const phoneLabel = '(860) 354-1596'

const equipment: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: 'Snowblowers & Throwers',
    description: 'Carburetor cleaning, auger belts, shear pins, and drive friction discs.',
    icon: Snowflake,
  },
  {
    title: 'Generators',
    description: 'Home standby and portable units: load testing, oil and filter swaps, valve adjustments.',
    icon: Power,
  },
  {
    title: 'Lawn Tractors & Zero-Turns',
    description: 'Deck leveling, spindle rebuilds, blade sharpening, and hydro service.',
    icon: Settings,
  },
  {
    title: 'Chainsaws & Log Splitters',
    description: 'Chain sharpening, bar maintenance, and hydraulic line inspection.',
    icon: Cog,
  },
  {
    title: 'Pressure Washers & Compactors',
    description: 'Pump valve checks, unloader replacements, and seal kits.',
    icon: Wrench,
  },
  {
    title: 'Winterization & Storage Prep',
    description: 'Fuel stabilization, engine fogging, and battery maintenance.',
    icon: ShieldCheck,
  },
]

const benefits = [
  {
    title: 'Straight answers, upfront',
    text: 'We explain the diagnostic fee and what we find before any repair work begins.',
    icon: ShieldCheck,
  },
  {
    title: 'Turnaround that respects the season',
    text: 'Practical scheduling and experienced hands when the weather can’t wait.',
    icon: Clock3,
  },
  {
    title: 'Built on mechanical know-how',
    text: 'Honest diagnostics, quality OEM parts, and care for the equipment you depend on.',
    icon: Cog,
  },
]

const steps = [
  {
    number: '01',
    title: 'Tell us what’s going on',
    text: 'Send your equipment details in the form or call Mark to talk it through.',
  },
  {
    number: '02',
    title: 'Bring it to Route 7',
    text: 'Drop off at our New Milford shop. Call ahead to ask about local pickup.',
  },
  {
    number: '03',
    title: 'Get a clear repair plan',
    text: 'We diagnose the issue, share an estimate, then get your gear running strong.',
  },
]

function App() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <style>{`
        html { scroll-behavior: smooth; scroll-padding-top: 92px; }
        body { margin: 0; background: #09090b; }
        #root { display: block; width: 100%; max-width: none; min-height: 100vh; margin: 0; border: 0; text-align: left; }
        .site-shell { width: 100%; min-height: 100vh; overflow: hidden; background: #09090b; color: #f4f4f5; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
        .site-shell * { box-sizing: border-box; }
        .container { width: min(1160px, calc(100% - 40px)); margin: 0 auto; }
        .seasonal-strip { display: flex; justify-content: center; align-items: center; min-height: 38px; padding: 8px 16px; background: #ea580c; color: #fff; text-align: center; font-size: 11px; font-weight: 850; letter-spacing: .09em; }
        .seasonal-strip a { color: inherit; text-decoration: none; }
        .site-header { position: sticky; top: 0; z-index: 20; border-bottom: 1px solid #27272a; background: rgba(9,9,11,.94); backdrop-filter: blur(14px); }
        .header-inner { display: flex; min-height: 76px; align-items: center; justify-content: space-between; gap: 20px; }
        .brand { display: inline-flex; align-items: center; gap: 11px; color: #fafafa; text-decoration: none; flex: 0 0 auto; }
        .brand-mark { display: grid; width: 42px; height: 42px; place-items: center; border: 1px solid #f97316; border-radius: 10px; background: #18181b; color: #fb923c; }
        .brand-copy { display: grid; gap: 2px; }
        .brand-name { font-size: 12px; font-weight: 950; line-height: 1.1; letter-spacing: .085em; }
        .brand-sub { color: #a1a1aa; font-size: 9px; font-weight: 750; letter-spacing: .17em; }
        .main-nav { display: flex; align-items: center; gap: clamp(12px, 2.1vw, 26px); }
        .main-nav a { color: #d4d4d8; font-size: 12px; font-weight: 700; text-decoration: none; transition: color .15s ease; white-space: nowrap; }
        .main-nav a:hover { color: #fb923c; }
        .header-actions { display: flex; align-items: center; gap: 9px; flex: 0 0 auto; }
        .button { display: inline-flex; min-height: 44px; align-items: center; justify-content: center; gap: 9px; padding: 0 16px; border: 1px solid transparent; border-radius: 7px; font-size: 12px; font-weight: 850; text-decoration: none; transition: background .15s ease, border-color .15s ease, transform .15s ease; cursor: pointer; }
        .button:hover { transform: translateY(-1px); }
        .button-primary { background: #ea580c; color: white; }
        .button-primary:hover { background: #f97316; }
        .button-outline { border-color: #3f3f46; background: #18181b; color: #fafafa; }
        .button-outline:hover { border-color: #f97316; }
        .hero { position: relative; border-bottom: 1px solid #27272a; background: radial-gradient(ellipse at 83% 35%, rgba(234,88,12,.17), transparent 34%), linear-gradient(105deg, #09090b 0%, #111113 65%, #18120f 100%); }
        .hero::after { position: absolute; right: -90px; bottom: -170px; width: 510px; height: 510px; border: 1px solid rgba(249,115,22,.12); border-radius: 50%; content: ""; pointer-events: none; box-shadow: 0 0 0 48px rgba(249,115,22,.025), 0 0 0 96px rgba(249,115,22,.02); }
        .hero-inner { position: relative; z-index: 1; display: grid; min-height: 510px; grid-template-columns: minmax(0, 1.2fr) minmax(280px, .8fr); align-items: center; gap: 48px; padding-top: 68px; padding-bottom: 68px; }
        .eyebrow { display: inline-flex; align-items: center; gap: 8px; margin-bottom: 20px; color: #fb923c; font-size: 11px; font-weight: 900; letter-spacing: .16em; text-transform: uppercase; }
        .eyebrow-dot { width: 7px; height: 7px; border-radius: 50%; background: #f97316; box-shadow: 0 0 12px #f97316; }
        .hero h1 { max-width: 720px; margin: 0; color: #fafafa; font-size: clamp(42px, 6vw, 70px); font-weight: 950; line-height: .99; letter-spacing: -.055em; }
        .hero h1 span { color: #fb923c; }
        .hero-copy { max-width: 650px; margin: 23px 0 0; color: #a1a1aa; font-size: 16px; line-height: 1.75; }
        .hero-actions { display: flex; flex-wrap: wrap; gap: 11px; margin-top: 28px; }
        .hero-actions .button { min-height: 50px; padding: 0 20px; font-size: 13px; }
        .hero-proof { display: flex; flex-wrap: wrap; gap: 12px 19px; margin-top: 28px; color: #d4d4d8; font-size: 11px; font-weight: 750; }
        .proof-item { display: inline-flex; align-items: center; gap: 7px; }
        .proof-item svg { color: #fb923c; }
        .hero-side { position: relative; display: flex; min-height: 315px; align-items: flex-end; padding: 25px; overflow: hidden; border: 1px solid #3f3f46; border-radius: 12px; background: linear-gradient(155deg, rgba(39,39,42,.86), rgba(24,24,27,.96)); box-shadow: 0 22px 70px rgba(0,0,0,.35); }
        .hero-side::before { position: absolute; top: 34px; right: 42px; width: 170px; height: 170px; border: 1px solid rgba(251,146,60,.36); border-radius: 50%; content: ""; box-shadow: 0 0 0 19px rgba(251,146,60,.055), 0 0 0 42px rgba(251,146,60,.035); }
        .hero-machine { position: absolute; top: 70px; right: 76px; color: #fb923c; filter: drop-shadow(0 8px 20px rgba(234,88,12,.22)); }
        .hero-machine svg { width: 100px; height: 100px; stroke-width: 1.15; }
        .hero-side-copy { position: relative; z-index: 1; width: 100%; padding-top: 24px; border-top: 1px solid #3f3f46; }
        .hero-side-label { color: #fb923c; font-size: 10px; font-weight: 900; letter-spacing: .16em; text-transform: uppercase; }
        .hero-side-title { margin-top: 7px; color: #fafafa; font-size: 21px; font-weight: 900; letter-spacing: -.03em; }
        .hero-side-detail { display: flex; align-items: center; gap: 6px; margin-top: 9px; color: #a1a1aa; font-size: 12px; }
        .section { padding: 86px 0; }
        .section-muted { border-top: 1px solid #27272a; border-bottom: 1px solid #27272a; background: #111113; }
        .section-heading { max-width: 690px; margin-bottom: 35px; }
        .section-kicker { margin: 0 0 11px; color: #fb923c; font-size: 10px; font-weight: 900; letter-spacing: .17em; text-transform: uppercase; }
        .section-title { margin: 0; color: #fafafa; font-size: clamp(30px, 4vw, 43px); font-weight: 950; line-height: 1.08; letter-spacing: -.045em; }
        .section-intro { margin: 14px 0 0; color: #a1a1aa; font-size: 14px; line-height: 1.75; }
        .equipment-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; }
        .equipment-card { min-height: 208px; padding: 23px; border: 1px solid #303034; border-radius: 9px; background: #141416; transition: border-color .18s ease, transform .18s ease, background .18s ease; }
        .equipment-card:hover { transform: translateY(-3px); border-color: #7c2d12; background: #191513; }
        .equipment-icon { display: grid; width: 42px; height: 42px; place-items: center; margin-bottom: 19px; border: 1px solid rgba(249,115,22,.28); border-radius: 8px; background: rgba(234,88,12,.1); color: #fb923c; }
        .equipment-card h3 { margin: 0; color: #f4f4f5; font-size: 15px; font-weight: 850; letter-spacing: -.015em; }
        .equipment-card p { margin: 9px 0 0; color: #a1a1aa; font-size: 12px; line-height: 1.7; }
        .why-grid { display: grid; grid-template-columns: .86fr 1.14fr; align-items: center; gap: 70px; }
        .why-callout { padding: 27px; border: 1px solid #7c2d12; border-radius: 10px; background: linear-gradient(135deg, rgba(124,45,18,.23), rgba(24,24,27,.7)); }
        .why-callout svg { color: #fb923c; }
        .why-callout blockquote { margin: 18px 0 0; color: #fafafa; font-size: 21px; font-weight: 800; line-height: 1.45; letter-spacing: -.025em; }
        .why-callout cite { display: block; margin-top: 15px; color: #a1a1aa; font-size: 11px; font-style: normal; font-weight: 750; letter-spacing: .08em; text-transform: uppercase; }
        .benefit-list { display: grid; gap: 23px; }
        .benefit { display: grid; grid-template-columns: 42px 1fr; gap: 14px; }
        .benefit-icon { display: grid; width: 40px; height: 40px; place-items: center; border-radius: 8px; background: #27272a; color: #fb923c; }
        .benefit h3 { margin: 1px 0 5px; color: #f4f4f5; font-size: 14px; font-weight: 850; }
        .benefit p { margin: 0; color: #a1a1aa; font-size: 12px; line-height: 1.7; }
        .steps-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
        .step-card { position: relative; padding: 26px; border: 1px solid #303034; border-radius: 9px; background: #141416; }
        .step-number { color: #fb923c; font-size: 12px; font-weight: 950; letter-spacing: .13em; }
        .step-card h3 { margin: 17px 0 8px; color: #fafafa; font-size: 17px; font-weight: 850; }
        .step-card p { margin: 0; color: #a1a1aa; font-size: 12px; line-height: 1.7; }
        .request-section { background: linear-gradient(180deg, #111113, #09090b); }
        .request-layout { display: grid; grid-template-columns: .8fr 1.2fr; gap: 64px; align-items: start; }
        .request-aside { position: sticky; top: 110px; }
        .request-aside .section-intro { max-width: 390px; }
        .request-note { display: flex; gap: 10px; margin-top: 24px; padding: 14px; border: 1px solid #303034; border-radius: 8px; color: #a1a1aa; font-size: 11px; line-height: 1.65; }
        .request-note svg { flex: 0 0 auto; color: #fb923c; }
        .form-card { padding: 27px; border: 1px solid #3f3f46; border-radius: 10px; background: #141416; box-shadow: 0 18px 50px rgba(0,0,0,.22); }
        .form-card h3 { margin: 0 0 6px; color: #fafafa; font-size: 19px; font-weight: 900; }
        .form-description { margin: 0 0 22px; color: #a1a1aa; font-size: 12px; line-height: 1.6; }
        .form-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 15px; }
        .field { display: grid; gap: 7px; }
        .field-wide { grid-column: 1 / -1; }
        .field label { color: #e4e4e7; font-size: 11px; font-weight: 800; }
        .field input, .field select, .field textarea { width: 100%; min-height: 43px; padding: 11px 12px; border: 1px solid #3f3f46; border-radius: 6px; outline: none; background: #09090b; color: #f4f4f5; font: inherit; font-size: 12px; }
        .field textarea { min-height: 105px; resize: vertical; }
        .field input::placeholder, .field textarea::placeholder { color: #71717a; }
        .field input:focus, .field select:focus, .field textarea:focus { border-color: #f97316; box-shadow: 0 0 0 3px rgba(249,115,22,.13); }
        .form-submit { width: 100%; margin-top: 17px; }
        .form-success { display: flex; gap: 11px; margin-top: 17px; padding: 14px; border: 1px solid #166534; border-radius: 7px; background: rgba(22,101,52,.14); color: #bbf7d0; font-size: 12px; line-height: 1.6; }
        .form-success svg { flex: 0 0 auto; margin-top: 1px; }
        .location-layout { display: grid; grid-template-columns: 1fr .92fr; gap: 18px; }
        .location-card { padding: 29px; border: 1px solid #3f3f46; border-radius: 10px; background: #141416; }
        .location-card h3 { margin: 0 0 9px; color: #fafafa; font-size: 21px; font-weight: 900; }
        .location-address { color: #d4d4d8; font-size: 14px; line-height: 1.7; }
        .location-landmark { display: inline-flex; align-items: center; gap: 7px; margin-top: 17px; color: #fb923c; font-size: 11px; font-weight: 850; }
        .location-actions { display: flex; flex-wrap: wrap; gap: 9px; margin-top: 24px; }
        .hours-card { display: flex; flex-direction: column; justify-content: space-between; min-height: 225px; padding: 27px; border: 1px solid #7c2d12; border-radius: 10px; background: radial-gradient(ellipse at right top, rgba(234,88,12,.18), transparent 52%), #141416; }
        .hours-card p { margin: 0; color: #a1a1aa; font-size: 12px; line-height: 1.7; }
        .hours-card h3 { margin: 8px 0; color: #fafafa; font-size: 19px; font-weight: 900; }
        .hours-card a { display: inline-flex; align-items: center; gap: 9px; color: #fb923c; font-size: 19px; font-weight: 900; text-decoration: none; }
        .site-footer { border-top: 1px solid #27272a; background: #070708; }
        .footer-inner { display: flex; align-items: center; justify-content: space-between; gap: 22px; padding-top: 25px; padding-bottom: 25px; }
        .footer-copy { color: #71717a; font-size: 10px; line-height: 1.8; }
        .footer-copy strong { color: #d4d4d8; font-weight: 800; }
        .footer-phone { display: inline-flex; align-items: center; gap: 7px; color: #f4f4f5; font-size: 12px; font-weight: 850; text-decoration: none; white-space: nowrap; }
        @media (max-width: 1020px) {
          .main-nav { display: none; }
          .hero-inner { gap: 28px; }
          .why-grid, .request-layout { gap: 38px; }
        }
        @media (max-width: 720px) {
          .container { width: min(100% - 32px, 560px); }
          .seasonal-strip { font-size: 9px; letter-spacing: .045em; }
          .header-inner { min-height: 66px; }
          .brand-mark { width: 38px; height: 38px; }
          .brand-name { font-size: 10px; }
          .brand-sub { font-size: 8px; }
          .header-actions .button { min-height: 39px; padding: 0 10px; font-size: 10px; }
          .header-actions .button-outline { display: none; }
          .hero-inner { min-height: auto; grid-template-columns: 1fr; gap: 32px; padding-top: 58px; padding-bottom: 50px; }
          .hero h1 { font-size: clamp(42px, 12vw, 62px); }
          .hero-copy { margin-top: 17px; font-size: 14px; }
          .hero-proof { gap: 10px 14px; font-size: 10px; }
          .hero-side { min-height: 240px; }
          .hero-machine { top: 37px; right: 47px; }
          .hero-machine svg { width: 80px; height: 80px; }
          .hero-side::before { top: 12px; right: 18px; width: 140px; height: 140px; }
          .section { padding: 64px 0; }
          .equipment-grid { grid-template-columns: repeat(2, minmax(0,1fr)); gap: 10px; }
          .equipment-card { min-height: 205px; padding: 16px; }
          .equipment-card h3 { font-size: 13px; line-height: 1.35; }
          .equipment-card p { font-size: 11px; }
          .equipment-icon { margin-bottom: 15px; }
          .why-grid, .request-layout, .location-layout { grid-template-columns: 1fr; gap: 25px; }
          .request-aside { position: static; }
          .steps-grid { grid-template-columns: 1fr; gap: 10px; }
          .step-card { padding: 21px; }
          .step-card h3 { margin-top: 10px; }
          .footer-inner { align-items: flex-start; flex-direction: column; gap: 12px; }
        }
        @media (max-width: 380px) {
          .brand { gap: 7px; }
          .brand-name { font-size: 9px; }
          .header-actions .button { padding: 0 8px; }
          .hero-actions { flex-direction: column; }
          .hero-actions .button { width: 100%; }
          .form-card { padding: 19px; }
          .form-grid { grid-template-columns: 1fr; }
          .field-wide { grid-column: auto; }
        }
      `}</style>

      <div className="site-shell bg-zinc-950 text-white">
        <div className="seasonal-strip">
          <a href={`tel:${phoneNumber}`}>
            ❄️ SNOWBLOWER TUNE-UPS &amp; GENERATOR REPAIRS • Beat the First Storm • Call {phoneLabel}
          </a>
        </div>

        <header className="site-header">
          <div className="container header-inner">
            <a className="brand" href="#top" aria-label="Candlewood Valley Small Engine home">
              <span className="brand-mark"><Cog size={24} strokeWidth={2.3} /></span>
              <span className="brand-copy">
                <span className="brand-name">CANDLEWOOD VALLEY</span>
                <span className="brand-sub">SMALL ENGINE LLC</span>
              </span>
            </a>
            <nav className="main-nav" aria-label="Main navigation">
              <a href="#services">Services</a>
              <a href="#equipment">Equipment We Service</a>
              <a href="#process">How It Works</a>
              <a href="#location">Location</a>
              <a href="#request">Book Service</a>
            </nav>
            <div className="header-actions">
              <a className="button button-primary" href="#request">Schedule Tune-Up</a>
              <a className="button button-outline" href={`tel:${phoneNumber}`}><Phone size={15} /> Call {phoneLabel}</a>
            </div>
          </div>
        </header>

        <main id="top">
          <section className="hero">
            <div className="container hero-inner">
              <div>
                <div className="eyebrow"><span className="eyebrow-dot" /> New Milford, Connecticut · Route 7</div>
                <h1>Reliable Power<br />When You Need It <span>Most.</span></h1>
                <p className="hero-copy">
                  New Milford&apos;s trusted small engine specialists on Route 7. From snowblower tune-ups and generator service to lawn tractor overhauls, we keep your equipment running strong.
                </p>
                <div className="hero-actions">
                  <a className="button button-primary" href="#request">Request Equipment Service <ArrowRight size={16} /></a>
                  <a className="button button-outline" href={`tel:${phoneNumber}`}><Phone size={16} /> Call {phoneLabel}</a>
                </div>
                <div className="hero-proof">
                  <span className="proof-item"><CheckCircle2 size={15} /> Route 7 Location</span>
                  <span className="proof-item"><CheckCircle2 size={15} /> Commercial &amp; Residential</span>
                  <span className="proof-item"><CheckCircle2 size={15} /> Factory Spec Diagnostics</span>
                </div>
              </div>
              <aside className="hero-side" aria-label="Seasonal equipment service">
                <div className="hero-machine"><Wrench aria-hidden="true" /></div>
                <div className="hero-side-copy">
                  <div className="hero-side-label">Ready for the next season</div>
                  <div className="hero-side-title">Winter service starts here.</div>
                  <div className="hero-side-detail"><MapPin size={14} /> 229 Danbury Rd, New Milford, CT</div>
                </div>
              </aside>
            </div>
          </section>

          <section className="section" id="equipment">
            <div className="container">
              <div className="section-heading">
                <p className="section-kicker">Equipment we service</p>
                <h2 className="section-title">Built for hard work.<br />Backed by the right repair.</h2>
                <p className="section-intro">Residential and commercial outdoor power equipment, diagnosed carefully and repaired with quality parts.</p>
              </div>
              <div className="equipment-grid">
                {equipment.map(({ title, description, icon: Icon }) => (
                  <article className="equipment-card" key={title}>
                    <div className="equipment-icon"><Icon size={21} /></div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section section-muted" id="services">
            <div className="container why-grid">
              <div>
                <div className="section-heading">
                  <p className="section-kicker">Why Candlewood Valley</p>
                  <h2 className="section-title">Good work.<br />No guesswork.</h2>
                  <p className="section-intro">When equipment lets you down, you deserve a straightforward diagnosis and a repair you can feel good about.</p>
                </div>
                <div className="why-callout">
                  <Wrench size={24} />
                  <blockquote>&ldquo;We&apos;ll tell you what it needs, what it costs, and get your approval before work begins.&rdquo;</blockquote>
                  <cite>Mark · Owner &amp; Lead Specialist</cite>
                </div>
              </div>
              <div className="benefit-list">
                {benefits.map(({ title, text, icon: Icon }) => (
                  <article className="benefit" key={title}>
                    <div className="benefit-icon"><Icon size={19} /></div>
                    <div><h3>{title}</h3><p>{text}</p></div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section" id="process">
            <div className="container">
              <div className="section-heading">
                <p className="section-kicker">Simple drop-off process</p>
                <h2 className="section-title">From problem to power in 3 steps.</h2>
              </div>
              <div className="steps-grid">
                {steps.map(({ number, title, text }) => (
                  <article className="step-card" key={number}>
                    <span className="step-number">{number} / SERVICE</span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section request-section" id="request">
            <div className="container request-layout">
              <div className="request-aside">
                <p className="section-kicker">Service &amp; drop-off request</p>
                <h2 className="section-title">Let&apos;s get your equipment back to work.</h2>
                <p className="section-intro">Share a few details and Mark will follow up to discuss your repair and schedule a drop-off.</p>
                <div className="request-note"><ShieldCheck size={17} /> Submitting this form is a request only. We&apos;ll confirm details and timing with you directly.</div>
              </div>
              <div className="form-card">
                <h3>Tell us about your equipment</h3>
                <p className="form-description">Fields marked required help us get back to you with the right next steps.</p>
                <form onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="field">
                      <label htmlFor="full-name">Full Name *</label>
                      <input id="full-name" name="name" autoComplete="name" placeholder="Your name" required />
                    </div>
                    <div className="field">
                      <label htmlFor="phone">Phone Number *</label>
                      <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="(860) 555-0123" required />
                    </div>
                    <div className="field field-wide">
                      <label htmlFor="equipment-type">Equipment Type *</label>
                      <select id="equipment-type" name="equipment" defaultValue="" required>
                        <option value="" disabled>Select equipment type</option>
                        <option>Snowblower</option>
                        <option>Generator</option>
                        <option>Lawn Tractor/Zero Turn</option>
                        <option>Chainsaw/Trimmer</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="field field-wide">
                      <label htmlFor="brand-model">Brand &amp; Model</label>
                      <input id="brand-model" name="brand-model" placeholder="e.g. Honda, Ariens, Toro, Briggs &amp; Stratton" />
                    </div>
                    <div className="field field-wide">
                      <label htmlFor="issue">Issue Description *</label>
                      <textarea id="issue" name="issue" placeholder="Tell us what it’s doing (or not doing)..." required />
                    </div>
                  </div>
                  <button className="button button-primary form-submit" type="submit">Request Service <ArrowRight size={16} /></button>
                  {submitted && (
                    <div className="form-success" role="status" aria-live="polite">
                      <CheckCircle2 size={18} />
                      <span><strong>Request submitted!</strong> Mark will review your equipment details and call/text you shortly to schedule your drop-off.</span>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </section>

          <section className="section section-muted" id="location">
            <div className="container">
              <div className="section-heading">
                <p className="section-kicker">Find the shop</p>
                <h2 className="section-title">Your Route 7 small engine shop.</h2>
              </div>
              <div className="location-layout">
                <div className="location-card">
                  <h3>Candlewood Valley Small Engine LLC</h3>
                  <div className="location-address">229 Danbury Rd<br />New Milford, CT 06776</div>
                  <div className="location-landmark"><MapPin size={15} /> Conveniently located on Route 7</div>
                  <div className="location-actions">
                    <a className="button button-primary" href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent('229 Danbury Rd, New Milford, CT 06776')}`} target="_blank" rel="noreferrer">Get Directions <ArrowRight size={15} /></a>
                    <a className="button button-outline" href={`tel:${phoneNumber}`}><Phone size={15} /> Call the Shop</a>
                  </div>
                </div>
                <div className="hours-card">
                  <div>
                    <p>Have a question before dropping off?</p>
                    <h3>Talk to Mark about your repair.</h3>
                    <p>Call ahead to discuss your equipment, seasonal service, or local pickup options.</p>
                  </div>
                  <a href={`tel:${phoneNumber}`}><Phone size={18} /> {phoneLabel}</a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="container footer-inner">
            <div className="footer-copy">
              <strong>© {new Date().getFullYear()} Candlewood Valley Small Engine LLC</strong><br />
              229 Danbury Rd, New Milford, CT 06776 · Proudly serving New Milford and nearby communities.
            </div>
            <a className="footer-phone" href={`tel:${phoneNumber}`}><Phone size={15} /> {phoneLabel}</a>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
