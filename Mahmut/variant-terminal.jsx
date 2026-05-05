// Variante B: Terminal / Engineering Doc
// Monospace-orientiert, kompakter, code-inspired

const { PROFILE: PB, PROJECTS: PRB, SKILLS: SB, EXPERIENCE: EB } = window.PORTFOLIO_DATA;

const terminalStyles = {
  root: {
    width: "100%",
    minHeight: "100%",
    background: "#0a0a0a",
    color: "#d4d4d4",
    fontFamily: "'JetBrains Mono', 'IBM Plex Mono', ui-monospace, monospace",
    fontSize: 14,
    lineHeight: 1.6,
    overflow: "hidden",
    position: "relative",
  },
  green: { color: "#a3e635" },
  dim: { color: "#666" },
  faint: { color: "#444" },
  bright: { color: "#fafafa" },
  comment: { color: "#555", fontStyle: "italic" },
};

function TerminalChrome({ children }) {
  return (
    <div style={{
      borderBottom: "1px solid #1a1a1a",
      padding: "14px 24px",
      display: "flex",
      alignItems: "center",
      gap: 12,
      background: "#0d0d0d",
      position: "sticky",
      top: 0,
      zIndex: 10,
      backdropFilter: "blur(10px)",
    }}>
      <div style={{ display: "flex", gap: 6 }}>
        <div style={{ width: 11, height: 11, borderRadius: 999, background: "#2a2a2a" }} />
        <div style={{ width: 11, height: 11, borderRadius: 999, background: "#2a2a2a" }} />
        <div style={{ width: 11, height: 11, borderRadius: 999, background: "#2a2a2a" }} />
      </div>
      <div style={{ ...terminalStyles.dim, fontSize: 12, marginLeft: 8 }}>
        ~ / mahmut / portfolio.md
      </div>
      <div style={{ marginLeft: "auto", display: "flex", gap: 24, fontSize: 12 }}>
        <a href="#about" style={{ ...terminalStyles.dim, textDecoration: "none" }}>about</a>
        <a href="#work" style={{ ...terminalStyles.dim, textDecoration: "none" }}>work</a>
        <a href="#stack" style={{ ...terminalStyles.dim, textDecoration: "none" }}>stack</a>
        <a href="#contact" style={{ ...terminalStyles.dim, textDecoration: "none" }}>contact</a>
      </div>
    </div>
  );
}

function TerminalLine({ prompt, children, style }) {
  return (
    <div style={{ display: "flex", gap: 12, ...style }}>
      {prompt && <span style={terminalStyles.faint}>{prompt}</span>}
      <span>{children}</span>
    </div>
  );
}

function TerminalHero() {
  return (
    <section style={{
      padding: "56px 56px 48px",
      borderBottom: "1px solid #1a1a1a",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 56,
      alignItems: "start",
    }}>
      <div>
        <div style={{ ...terminalStyles.dim, fontSize: 12, marginBottom: 32 }}>
          $ whoami --verbose
        </div>
        <h1 style={{
          fontSize: 88,
          fontWeight: 500,
          letterSpacing: "-0.04em",
          margin: 0,
          color: "#fafafa",
          lineHeight: 1,
        }}>
          mahmut
          <span style={{ ...terminalStyles.green, fontWeight: 400, animation: "blink 1.1s steps(2) infinite" }}>_</span>
        </h1>
        <div style={{ marginTop: 24, color: "#aaa", fontSize: 15, maxWidth: 460, lineHeight: 1.55 }}>
          Software Engineer · Backend & verteilte Systeme · 7+ Jahre · Berlin
        </div>
        <div style={{ marginTop: 32, display: "flex", gap: 8, flexWrap: "wrap" }}>
          <span style={{
            ...terminalStyles.green,
            border: "1px solid #2a4218",
            background: "rgba(163,230,53,0.05)",
            padding: "6px 12px",
            borderRadius: 4,
            fontSize: 12,
          }}>● status: open to work</span>
          <span style={{
            border: "1px solid #1f1f1f",
            padding: "6px 12px",
            borderRadius: 4,
            fontSize: 12,
            color: "#888",
          }}>remote · hybrid (Berlin)</span>
        </div>
      </div>

      <div style={{
        background: "#0d0d0d",
        border: "1px solid #1a1a1a",
        borderRadius: 6,
        padding: 24,
        fontSize: 13,
      }}>
        <div style={{ ...terminalStyles.comment, marginBottom: 12 }}>// profile.toml</div>
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", rowGap: 8, columnGap: 24 }}>
          <span style={terminalStyles.dim}>name</span>
          <span style={terminalStyles.bright}>"Mahmut"</span>
          <span style={terminalStyles.dim}>role</span>
          <span style={terminalStyles.bright}>"Software Engineer"</span>
          <span style={terminalStyles.dim}>focus</span>
          <span style={terminalStyles.bright}>["backend", "infra", "tooling"]</span>
          <span style={terminalStyles.dim}>location</span>
          <span style={terminalStyles.bright}>"Berlin, DE"</span>
          <span style={terminalStyles.dim}>timezone</span>
          <span style={terminalStyles.bright}>"Europe/Berlin"</span>
          <span style={terminalStyles.dim}>experience</span>
          <span style={terminalStyles.bright}>7</span>
          <span style={terminalStyles.dim}>languages</span>
          <span style={terminalStyles.bright}>["de", "en", "tr"]</span>
          <span style={terminalStyles.dim}>availability</span>
          <span style={{ ...terminalStyles.green }}>"Q3 2026"</span>
        </div>
      </div>
      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
    </section>
  );
}

function TerminalAbout() {
  return (
    <section id="about" style={{ padding: "56px", borderBottom: "1px solid #1a1a1a" }}>
      <div style={{ ...terminalStyles.dim, fontSize: 12, marginBottom: 32 }}>
        $ cat about.md
      </div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
        gap: 56,
      }}>
        <div>
          <h2 style={{
            fontSize: 32,
            color: "#fafafa",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            margin: "0 0 24px",
            lineHeight: 1.25,
          }}>
            # Software für Teams, die <span style={terminalStyles.green}>Klarheit</span> über <span style={terminalStyles.green}>Trends</span> stellen.
          </h2>
          <div style={{ color: "#aaa", fontSize: 14, lineHeight: 1.7 }}>
            {PB.bio_long.map((p, i) => (
              <p key={i} style={{ margin: "0 0 16px", maxWidth: 560 }}>{p}</p>
            ))}
          </div>
        </div>

        <div>
          <div style={{ ...terminalStyles.comment, marginBottom: 16, fontSize: 12 }}>// experience.log</div>
          <div style={{
            background: "#0d0d0d",
            border: "1px solid #1a1a1a",
            borderRadius: 6,
            overflow: "hidden",
          }}>
            {EB.map((e, i) => (
              <div key={i} style={{
                padding: "16px 20px",
                borderTop: i === 0 ? "none" : "1px solid #161616",
                display: "grid",
                gridTemplateColumns: "140px 1fr",
                gap: 16,
                alignItems: "baseline",
                fontSize: 13,
              }}>
                <span style={terminalStyles.dim}>{e.year}</span>
                <div>
                  <div style={terminalStyles.bright}>{e.role}</div>
                  <div style={{ ...terminalStyles.dim, fontSize: 12, marginTop: 2 }}>@ {e.company}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 32, ...terminalStyles.comment, fontSize: 12, marginBottom: 12 }}>// links</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 13 }}>
            <a href="#" style={{ color: "#aaa", textDecoration: "none" }}>
              <span style={terminalStyles.faint}>→</span> {PB.github}
            </a>
            <a href="#" style={{ color: "#aaa", textDecoration: "none" }}>
              <span style={terminalStyles.faint}>→</span> {PB.linkedin}
            </a>
            <a href={`mailto:${PB.email}`} style={{ color: "#aaa", textDecoration: "none" }}>
              <span style={terminalStyles.faint}>→</span> {PB.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TerminalProjectRow({ p, i }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        borderTop: "1px solid #1a1a1a",
        padding: 24,
        display: "grid",
        gridTemplateColumns: "60px 220px 1fr 140px",
        gap: 24,
        alignItems: "start",
        background: hover ? "#0e0e0e" : "transparent",
        transition: "background 0.3s",
        cursor: "pointer",
        position: "relative",
      }}
    >
      <div style={{ ...terminalStyles.faint, fontSize: 12, paddingTop: 4 }}>
        [{String(i + 1).padStart(2, "0")}]
      </div>
      <div>
        <div style={{
          fontSize: 24,
          color: hover ? "#a3e635" : "#fafafa",
          fontWeight: 500,
          letterSpacing: "-0.02em",
          transition: "color 0.3s",
          marginBottom: 4,
        }}>
          {p.title}
        </div>
        <div style={{ ...terminalStyles.dim, fontSize: 12 }}>
          {p.year} · {p.role}
        </div>
      </div>
      <div>
        <div style={{ color: "#ccc", fontSize: 13, lineHeight: 1.65, marginBottom: 14, maxWidth: 560 }}>
          {p.summary}
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {p.tags.map(t => (
            <span key={t} style={{
              fontSize: 11,
              color: "#888",
              background: "#161616",
              padding: "3px 8px",
              borderRadius: 3,
            }}>{t}</span>
          ))}
        </div>
      </div>
      <div style={{ textAlign: "right" }}>
        <div style={{
          fontSize: 18,
          color: "#fafafa",
          fontWeight: 500,
          marginBottom: 4,
          letterSpacing: "-0.01em",
        }}>
          {p.metric}
        </div>
        <div style={{
          ...terminalStyles.dim,
          fontSize: 12,
          color: hover ? "#a3e635" : "#555",
          transition: "color 0.3s",
        }}>
          read more {hover ? "→" : "·"}
        </div>
      </div>
    </div>
  );
}

function TerminalWork() {
  return (
    <section id="work" style={{ padding: "56px 0", borderBottom: "1px solid #1a1a1a" }}>
      <div style={{ padding: "0 56px 32px" }}>
        <div style={{ ...terminalStyles.dim, fontSize: 12, marginBottom: 16 }}>
          $ ls -la projects/ | head -3
        </div>
        <h2 style={{
          fontSize: 28,
          color: "#fafafa",
          fontWeight: 500,
          letterSpacing: "-0.02em",
          margin: 0,
        }}>
          ## Ausgewählte Arbeiten <span style={terminalStyles.dim}>(3)</span>
        </h2>
      </div>
      <div style={{ padding: "0 32px" }}>
        {PRB.map((p, i) => <TerminalProjectRow key={p.id} p={p} i={i} />)}
        <div style={{ borderTop: "1px solid #1a1a1a" }} />
      </div>
    </section>
  );
}

function TerminalSkills() {
  return (
    <section id="stack" style={{ padding: "56px", borderBottom: "1px solid #1a1a1a" }}>
      <div style={{ ...terminalStyles.dim, fontSize: 12, marginBottom: 32 }}>
        $ cat stack.json
      </div>
      <div style={{
        background: "#0d0d0d",
        border: "1px solid #1a1a1a",
        borderRadius: 6,
        padding: 24,
        fontSize: 13,
        lineHeight: 1.85,
      }}>
        <div style={terminalStyles.dim}>{"{"}</div>
        {SB.map((s, i) => (
          <div key={s.group} style={{ paddingLeft: 24 }}>
            <span style={terminalStyles.green}>"{s.group.toLowerCase()}"</span>
            <span style={terminalStyles.dim}>: [</span>
            {s.items.map((it, j) => (
              <React.Fragment key={it}>
                <span style={terminalStyles.bright}>"{it}"</span>
                {j < s.items.length - 1 && <span style={terminalStyles.dim}>, </span>}
              </React.Fragment>
            ))}
            <span style={terminalStyles.dim}>]{i < SB.length - 1 ? "," : ""}</span>
          </div>
        ))}
        <div style={terminalStyles.dim}>{"}"}</div>
      </div>
    </section>
  );
}

function TerminalContact() {
  return (
    <section id="contact" style={{ padding: "56px" }}>
      <div style={{ ...terminalStyles.dim, fontSize: 12, marginBottom: 32 }}>
        $ ./contact.sh
      </div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
        gap: 56,
        alignItems: "start",
        marginBottom: 56,
      }}>
        <div>
          <h2 style={{
            fontSize: 56,
            color: "#fafafa",
            fontWeight: 500,
            letterSpacing: "-0.03em",
            margin: 0,
            lineHeight: 1.05,
          }}>
            Kein bullshit.<br/>
            Nur <span style={terminalStyles.green}>solides</span> Engineering.
          </h2>
          <div style={{ marginTop: 28, color: "#aaa", fontSize: 14, maxWidth: 480, lineHeight: 1.6 }}>
            Wenn du an einem schwierigen technischen Problem arbeitest oder jemanden suchst, der dein Backend in Form bringt — schreib mir.
          </div>
        </div>
        <div style={{
          background: "#0d0d0d",
          border: "1px solid #1a1a1a",
          borderRadius: 6,
          padding: 24,
        }}>
          <div style={{ ...terminalStyles.comment, fontSize: 12, marginBottom: 16 }}>// reach out</div>
          <a href={`mailto:${PB.email}`} style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "14px 16px",
            background: "#a3e635",
            color: "#0a0a0a",
            borderRadius: 4,
            textDecoration: "none",
            fontSize: 13,
            fontWeight: 500,
            marginBottom: 8,
          }}>
            <span>{PB.email}</span>
            <span>→</span>
          </a>
          <a href="#" style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "14px 16px",
            background: "transparent",
            color: "#fafafa",
            border: "1px solid #2a2a2a",
            borderRadius: 4,
            textDecoration: "none",
            fontSize: 13,
          }}>
            <span>↓ lebenslauf.pdf</span>
            <span style={terminalStyles.dim}>184 KB</span>
          </a>
        </div>
      </div>

      <div style={{
        paddingTop: 24,
        borderTop: "1px solid #1a1a1a",
        display: "flex",
        justifyContent: "space-between",
        ...terminalStyles.faint,
        fontSize: 12,
      }}>
        <div>© 2026 mahmut · last commit: 3d ago</div>
        <div>build: stable · v1.0.0</div>
      </div>
    </section>
  );
}

function VariantTerminal() {
  return (
    <div style={terminalStyles.root}>
      <TerminalChrome />
      <TerminalHero />
      <TerminalAbout />
      <TerminalWork />
      <TerminalSkills />
      <TerminalContact />
    </div>
  );
}

window.VariantTerminal = VariantTerminal;
