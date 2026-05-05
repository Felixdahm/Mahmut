// Variante A: Editorial Dark
// Großzügige Typo, Grid-Layout, ruhig und strukturiert

const { PROFILE: PA, PROJECTS: PRA, SKILLS: SA, EXPERIENCE: EA } = window.PORTFOLIO_DATA;

const editorialStyles = {
  root: {
    width: "100%",
    minHeight: "100%",
    background: "#0d0d0d",
    color: "#e8e8e8",
    fontFamily: "'Inter Tight', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontFeatureSettings: '"ss01", "cv11"',
    overflow: "hidden",
    position: "relative",
  },
  serif: {
    fontFamily: "'Instrument Serif', 'Times New Roman', serif",
  },
  mono: {
    fontFamily: "'JetBrains Mono', 'IBM Plex Mono', ui-monospace, monospace",
  },
};

function EditorialNav() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "32px 64px",
      borderBottom: "1px solid #1f1f1f",
      position: "sticky",
      top: 0,
      background: "rgba(13,13,13,0.85)",
      backdropFilter: "blur(12px)",
      zIndex: 10,
      fontSize: 14,
    }}>
      <div style={{ ...editorialStyles.mono, letterSpacing: "0.02em", color: "#a3e635", fontSize: 13 }}>
        ● Verfügbar für Q3 2026
      </div>
      <div style={{ display: "flex", gap: 36, ...editorialStyles.mono, fontSize: 13, color: "#888" }}>
        <a href="#about" style={{ color: "inherit", textDecoration: "none" }}>Über</a>
        <a href="#work" style={{ color: "inherit", textDecoration: "none" }}>Arbeiten</a>
        <a href="#skills" style={{ color: "inherit", textDecoration: "none" }}>Skills</a>
        <a href="#contact" style={{ color: "inherit", textDecoration: "none" }}>Kontakt</a>
      </div>
    </nav>
  );
}

function EditorialHero() {
  return (
    <section style={{
      padding: "140px 64px 120px",
      borderBottom: "1px solid #1f1f1f",
      position: "relative",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 64,
        alignItems: "end",
      }}>
        <div>
          <div style={{ ...editorialStyles.mono, fontSize: 13, color: "#666", marginBottom: 32, letterSpacing: "0.05em" }}>
            (01) — INTRO
          </div>
          <h1 style={{
            ...editorialStyles.serif,
            fontSize: 144,
            lineHeight: 0.92,
            letterSpacing: "-0.04em",
            margin: 0,
            fontWeight: 400,
            color: "#fafafa",
          }}>
            Mahmut<span style={{ color: "#a3e635" }}>.</span>
          </h1>
          <div style={{
            fontSize: 22,
            color: "#888",
            marginTop: 24,
            maxWidth: 520,
            lineHeight: 1.4,
          }}>
            Software Engineer aus Berlin. Ich baue Backend-Systeme und Developer Tools, die einfach funktionieren.
          </div>
        </div>
        <div style={{
          ...editorialStyles.mono,
          fontSize: 13,
          color: "#888",
          paddingBottom: 24,
        }}>
          <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", rowGap: 14, columnGap: 16 }}>
            <div style={{ color: "#555" }}>Standort</div>
            <div>{PA.location}</div>
            <div style={{ color: "#555" }}>Disziplin</div>
            <div>{PA.role}</div>
            <div style={{ color: "#555" }}>Erfahrung</div>
            <div>7+ Jahre</div>
            <div style={{ color: "#555" }}>Sprachen</div>
            <div>Deutsch, English, Türkçe</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EditorialAbout() {
  return (
    <section id="about" style={{
      padding: "120px 64px",
      borderBottom: "1px solid #1f1f1f",
      display: "grid",
      gridTemplateColumns: "1fr 2fr",
      gap: 64,
    }}>
      <div>
        <div style={{ ...editorialStyles.mono, fontSize: 13, color: "#666", letterSpacing: "0.05em" }}>
          (02) — ÜBER
        </div>
      </div>
      <div>
        <div style={{
          ...editorialStyles.serif,
          fontSize: 40,
          lineHeight: 1.2,
          letterSpacing: "-0.02em",
          color: "#fafafa",
          marginBottom: 48,
          maxWidth: 720,
        }}>
          Ich entwickle Software für Teams, die Wert auf Klarheit, Verlässlichkeit und durchdachtes Engineering legen.
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          fontSize: 16,
          lineHeight: 1.65,
          color: "#aaa",
          maxWidth: 880,
        }}>
          {PA.bio_long.map((p, i) => (
            <p key={i} style={{ margin: 0 }}>{p}</p>
          ))}
        </div>

        <div style={{ marginTop: 80 }}>
          <div style={{ ...editorialStyles.mono, fontSize: 12, color: "#555", marginBottom: 24, letterSpacing: "0.08em" }}>
            WERDEGANG
          </div>
          <div>
            {EA.map((e, i) => (
              <div key={i} style={{
                display: "grid",
                gridTemplateColumns: "180px 1fr 1fr",
                padding: "20px 0",
                borderTop: "1px solid #1f1f1f",
                fontSize: 16,
                ...editorialStyles.mono,
                fontSize: 14,
              }}>
                <div style={{ color: "#666" }}>{e.year}</div>
                <div style={{ color: "#fafafa" }}>{e.role}</div>
                <div style={{ color: "#888" }}>{e.company}</div>
              </div>
            ))}
            <div style={{ borderTop: "1px solid #1f1f1f" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

function EditorialProjectCard({ p, i }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href="#" style={{ textDecoration: "none", color: "inherit", display: "block" }}
       onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <article style={{
        display: "grid",
        gridTemplateColumns: "120px 1fr 1.4fr 200px",
        gap: 32,
        padding: "40px 0",
        borderTop: "1px solid #1f1f1f",
        alignItems: "start",
        transition: "padding 0.5s cubic-bezier(.2,.8,.2,1)",
        paddingLeft: hover ? 24 : 0,
      }}>
        <div style={{ ...editorialStyles.mono, fontSize: 13, color: "#666" }}>
          {String(i + 1).padStart(2, "0")} / {p.year}
        </div>
        <div>
          <div style={{
            ...editorialStyles.serif,
            fontSize: 40,
            letterSpacing: "-0.02em",
            color: hover ? p.color : "#fafafa",
            transition: "color 0.4s",
            lineHeight: 1,
            marginBottom: 8,
          }}>
            {p.title}
          </div>
          <div style={{ ...editorialStyles.mono, fontSize: 13, color: "#888" }}>
            {p.subtitle}
          </div>
        </div>
        <div>
          <div style={{ fontSize: 15, lineHeight: 1.6, color: "#aaa", marginBottom: 16, maxWidth: 480 }}>
            {p.summary}
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {p.tags.map(t => (
              <span key={t} style={{
                ...editorialStyles.mono,
                fontSize: 11,
                color: "#888",
                border: "1px solid #2a2a2a",
                padding: "4px 10px",
                borderRadius: 999,
              }}>{t}</span>
            ))}
          </div>
        </div>
        <div style={{
          ...editorialStyles.mono,
          fontSize: 13,
          color: "#666",
          textAlign: "right",
        }}>
          <div style={{ color: "#fafafa", fontSize: 22, ...editorialStyles.serif, marginBottom: 4 }}>{p.metric}</div>
          <div>{p.role}</div>
          <div style={{
            marginTop: 24,
            color: hover ? p.color : "#555",
            transition: "color 0.4s",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 8,
          }}>
            Case Study
            <span style={{ transform: hover ? "translateX(4px)" : "translateX(0)", transition: "transform 0.4s" }}>→</span>
          </div>
        </div>
      </article>
    </a>
  );
}

function EditorialWork() {
  return (
    <section id="work" style={{ padding: "120px 64px", borderBottom: "1px solid #1f1f1f" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        gap: 64,
        marginBottom: 64,
      }}>
        <div style={{ ...editorialStyles.mono, fontSize: 13, color: "#666", letterSpacing: "0.05em" }}>
          (03) — AUSGEWÄHLTE ARBEITEN
        </div>
        <div style={{
          ...editorialStyles.serif,
          fontSize: 32,
          lineHeight: 1.3,
          color: "#fafafa",
          letterSpacing: "-0.02em",
        }}>
          Drei Projekte, die zeigen, woran ich gerne arbeite.
        </div>
      </div>
      <div>
        {PRA.map((p, i) => <EditorialProjectCard key={p.id} p={p} i={i} />)}
        <div style={{ borderTop: "1px solid #1f1f1f" }} />
      </div>
    </section>
  );
}

function EditorialSkills() {
  return (
    <section id="skills" style={{
      padding: "120px 64px",
      borderBottom: "1px solid #1f1f1f",
      display: "grid",
      gridTemplateColumns: "1fr 2fr",
      gap: 64,
    }}>
      <div style={{ ...editorialStyles.mono, fontSize: 13, color: "#666", letterSpacing: "0.05em" }}>
        (04) — WERKZEUGE
      </div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 48,
      }}>
        {SA.map((s) => (
          <div key={s.group}>
            <div style={{
              ...editorialStyles.mono,
              fontSize: 12,
              color: "#555",
              letterSpacing: "0.08em",
              marginBottom: 20,
              paddingBottom: 12,
              borderBottom: "1px solid #1f1f1f",
            }}>
              {s.group.toUpperCase()}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, ...editorialStyles.serif, fontSize: 24, color: "#fafafa", letterSpacing: "-0.01em" }}>
              {s.items.map((it, i) => (
                <span key={it}>
                  {it}{i < s.items.length - 1 && <span style={{ color: "#444", marginLeft: 16 }}>·</span>}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EditorialContact() {
  return (
    <section id="contact" style={{ padding: "140px 64px 80px" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        gap: 64,
        marginBottom: 80,
      }}>
        <div style={{ ...editorialStyles.mono, fontSize: 13, color: "#666", letterSpacing: "0.05em" }}>
          (05) — KONTAKT
        </div>
        <div>
          <h2 style={{
            ...editorialStyles.serif,
            fontSize: 96,
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            color: "#fafafa",
            margin: 0,
            fontWeight: 400,
          }}>
            Lass uns reden<span style={{ color: "#a3e635" }}>.</span>
          </h2>
          <div style={{
            marginTop: 48,
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
          }}>
            <a href={`mailto:${PA.email}`} style={{
              ...editorialStyles.mono,
              fontSize: 14,
              color: "#0d0d0d",
              background: "#a3e635",
              padding: "16px 28px",
              borderRadius: 999,
              textDecoration: "none",
              fontWeight: 500,
            }}>
              {PA.email}
            </a>
            <a href="#" style={{
              ...editorialStyles.mono,
              fontSize: 14,
              color: "#fafafa",
              border: "1px solid #2a2a2a",
              padding: "16px 28px",
              borderRadius: 999,
              textDecoration: "none",
            }}>
              ↓ Lebenslauf (PDF)
            </a>
          </div>
        </div>
      </div>

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        ...editorialStyles.mono,
        fontSize: 12,
        color: "#555",
        paddingTop: 32,
        borderTop: "1px solid #1f1f1f",
      }}>
        <div>© 2026 Mahmut</div>
        <div style={{ display: "flex", gap: 24 }}>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>{PA.github}</a>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>{PA.linkedin}</a>
        </div>
        <div>Berlin · 13:42 CET</div>
      </div>
    </section>
  );
}

function VariantEditorial() {
  return (
    <div style={editorialStyles.root}>
      <EditorialNav />
      <EditorialHero />
      <EditorialAbout />
      <EditorialWork />
      <EditorialSkills />
      <EditorialContact />
    </div>
  );
}

window.VariantEditorial = VariantEditorial;
