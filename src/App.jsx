import { useEffect, useRef, useState } from "react";
import { person, research, projects, experience, education, courses, skills } from "./content.js";

const SECTIONS = [
  { id: "research", label: "Research" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const cvHref = `${import.meta.env.BASE_URL}${person.cvFile}`;

function ExternalLink({ href, children, className }) {
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

/* Highlights the nav item for the section currently on screen. */
function useActiveSection() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const ids = ["top", ...SECTIONS.map((s) => s.id)];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          // back in the hero means no section is active
          if (e.isIntersecting) setActive(e.target.id === "top" ? "" : e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return active;
}

function Nav() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav__inner">
        <a href="#top" className="nav__name" onClick={() => setOpen(false)}>
          {person.shortName}
        </a>
        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav id="nav-links" className={`nav__links${open ? " nav__links--open" : ""}`} aria-label="Sections">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`nav__link${active === s.id ? " nav__link--active" : ""}`}
              aria-current={active === s.id ? "true" : undefined}
              onClick={() => setOpen(false)}
            >
              {s.label}
            </a>
          ))}
          <a href={cvHref} className="nav__cv" target="_blank" rel="noopener">
            CV (PDF)
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <h1 className="hero__name">{person.name}</h1>
      <p className="hero__statement">{person.statement}</p>
      <p className="hero__intro">{person.intro}</p>
      <div className="hero__actions">
        <ExternalLink href={research.links[0].href} className="button button--primary">
          Try the BanglaLex demo
        </ExternalLink>
        <a href={cvHref} className="button" target="_blank" rel="noopener">
          Download my CV
        </a>
      </div>
      <ul className="hero__links">
        {person.links.map((l) => (
          <li key={l.label}>
            <ExternalLink href={l.href} className="textlink">
              {l.label}
            </ExternalLink>
          </li>
        ))}
        <li>
          <a href={`mailto:${person.email}`} className="textlink">
            Email
          </a>
        </li>
      </ul>
    </section>
  );
}

/* The one animated moment on the page: the four stages light up in order
   the first time the diagram scrolls into view. */
function Pipeline() {
  const ref = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setOn(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.45 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <figure ref={ref} className={`pipeline${on ? " pipeline--on" : ""}`}>
      <figcaption className="visually-hidden">
        How BanglaLex handles a complaint, in four stages
      </figcaption>
      <p className="pipeline__end pipeline__end--in">
        {research.pipelineInput.en} or <span lang="bn">{research.pipelineInput.bn}</span>
      </p>
      <ol className="pipeline__stages">
        {research.pipeline.map((stage, i) => (
          <li key={stage.name} className="stage" style={{ "--i": i }}>
            <span className="stage__num" aria-hidden="true">
              {i + 1}
            </span>
            <h4 className="stage__name">{stage.name}</h4>
            <p className="stage__does">{stage.does}</p>
          </li>
        ))}
      </ol>
      <p className="pipeline__end pipeline__end--out">{research.pipelineOutput}</p>
    </figure>
  );
}

function Section({ id, title, children }) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-title`}>
      <h2 className="section__title" id={`${id}-title`}>
        {title}
      </h2>
      <div className="section__body">{children}</div>
    </section>
  );
}

function Research() {
  return (
    <Section id="research" title="Research">
      <article className="feature">
        <h3 className="feature__title">{research.title}</h3>
        <p className="meta">
          {research.context}. {research.supervisor}. {research.status}.
        </p>
        <p className="lead">{research.summary}</p>

        <Pipeline />

        <dl className="facts">
          {research.facts.map((f) => (
            <div key={f.label} className="fact">
              <dt>
                <span className="fact__figure">{f.figure}</span>
                <span className="fact__label">{f.label}</span>
              </dt>
              <dd className="fact__detail">{f.detail}</dd>
            </div>
          ))}
        </dl>

        <aside className="leak" aria-labelledby="leak-title">
          <h4 className="leak__title" id="leak-title">
            {research.leak.title}
          </h4>
          <p>{research.leak.body}</p>
        </aside>

        <div className="feature__actions">
          {research.links.map((l) => (
            <ExternalLink key={l.label} href={l.href} className={`button${l.primary ? " button--primary" : ""}`}>
              {l.label}
            </ExternalLink>
          ))}
        </div>
        <p className="small">{research.demoNote}</p>
      </article>
    </Section>
  );
}

function ResultChart({ result }) {
  const max = Math.max(...result.bars.map((b) => b.value));
  return (
    <figure className="chart">
      <figcaption className="chart__caption">{result.caption}</figcaption>
      <div className="chart__rows">
        {result.bars.map((b) => (
          <div key={b.label} className={`chart__row${b.highlight ? " chart__row--highlight" : ""}`}>
            <span className="chart__label">{b.label}</span>
            <span className="chart__track" aria-hidden="true">
              <span className="chart__bar" style={{ width: `${(b.value / max) * 100}%` }} />
            </span>
            <span className="chart__value">
              {b.value.toFixed(1)} {result.unit}
            </span>
          </div>
        ))}
      </div>
      <p className="chart__note">{result.note}</p>
    </figure>
  );
}

function Projects() {
  return (
    <Section id="projects" title="Projects">
      {projects.map((p) => (
        <article key={p.title} className="project">
          <h3 className="project__title">
            {p.title}
            <span className="project__subtitle">{p.subtitle}</span>
          </h3>
          <p>{p.summary}</p>
          {p.result && <ResultChart result={p.result} />}
          <p className="stack">
            <span className="visually-hidden">Built with: </span>
            {p.stack.join(", ")}
          </p>
          {p.links.length > 0 && (
            <p className="project__links">
              {p.links.map((l) => (
                <ExternalLink key={l.label} href={l.href} className="textlink">
                  {l.label}
                </ExternalLink>
              ))}
            </p>
          )}
        </article>
      ))}
    </Section>
  );
}

function Timeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((x) => (
        <li key={`${x.role || x.what}-${x.when}`} className="timeline__item">
          <span className="timeline__when">{x.when}</span>
          <div>
            <h4 className="timeline__what">
              {x.href ? (
                <ExternalLink href={x.href} className="textlink">
                  {x.role || x.what}
                </ExternalLink>
              ) : (
                x.role || x.what
              )}
            </h4>
            <p className="timeline__where">{x.org || x.where}</p>
            {x.detail && <p className="timeline__detail">{x.detail}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}

function Experience() {
  return (
    <Section id="experience" title="Experience">
      <Timeline items={experience} />
      <h3 className="subhead">Education</h3>
      <Timeline items={education} />
      <h3 className="subhead">Courses</h3>
      <Timeline items={courses} />
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="skills">
        {skills.map((s) => (
          <div key={s.group} className="skills__row">
            <dt>{s.group}</dt>
            <dd>{s.items}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(person.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${person.email}`;
    }
  };

  return (
    <Section id="contact" title="Contact">
      <p className="lead">Email is the fastest way to reach me.</p>
      <p className="contact__email">
        <a href={`mailto:${person.email}`}>{person.email}</a>
      </p>
      <div className="contact__actions">
        <button type="button" className="button" onClick={copy}>
          {copied ? "Address copied" : "Copy address"}
        </button>
        <span className="visually-hidden" aria-live="polite">
          {copied ? "Email address copied to clipboard" : ""}
        </span>
        {person.links.map((l) => (
          <ExternalLink key={l.label} href={l.href} className="textlink">
            {l.label}
          </ExternalLink>
        ))}
      </div>
      <p className="small">Based in {person.location}.</p>
    </Section>
  );
}

export default function App() {
  return (
    <>
      <a href="#research" className="skip">
        Skip to content
      </a>
      <Nav />
      <main className="page">
        <Hero />
        <Research />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {person.name}
        </p>
      </footer>
    </>
  );
}
