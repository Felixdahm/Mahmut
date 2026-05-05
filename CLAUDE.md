# CLAUDE.md — Portfolio Mahmut

## Projektübersicht

Statisches Portfolio für **Mahmut**, Software Engineer aus Berlin.
Stack: reines **HTML + CSS + JavaScript** (kein Framework, kein Build-Tool).
Sprache: **Deutsch**.

---

## Dateistruktur (Ziel)

```
Mahmut/
├── index.html          ← Einstiegspunkt
├── style.css           ← Globale Styles & CSS-Variablen
├── main.js             ← Interaktionen (Navigation, Hover, etc.)
└── assets/
    └── lebenslauf.pdf  ← Platzhalter
```

---

## Design-System

Beide Design-Varianten (`Mahmut/variant-editorial.jsx` und `Mahmut/variant-terminal.jsx`) dienen als Vorlage. Das finale HTML/CSS orientiert sich an **Variante A (Editorial Dark)** als Basis, mit Elementen aus Variante B.

### Farbpalette

| Variable          | Wert      | Verwendung                          |
|-------------------|-----------|-------------------------------------|
| `--bg`            | `#0d0d0d` | Haupt-Hintergrund                   |
| `--bg-elevated`   | `#0d0d0d` | Cards, Code-Blöcke                  |
| `--border`        | `#1f1f1f` | Trennlinien, Rahmen                 |
| `--text-bright`   | `#fafafa` | Überschriften, Haupttext            |
| `--text-primary`  | `#e8e8e8` | Body-Text                           |
| `--text-muted`    | `#aaa`    | Sekundärtext                        |
| `--text-dim`      | `#888`    | Labels, Metadaten                   |
| `--text-faint`    | `#666`    | Sektionsnummern, Timestamps         |
| `--text-ghost`    | `#555`    | Sehr dezente Texte                  |
| `--accent`        | `#a3e635` | CTAs, Punkte, Hover-Zustände        |
| `--accent-bg`     | `rgba(163,230,53,0.05)` | Subtile grüne Flächen   |
| `--accent-border` | `#2a4218` | Rahmen für grüne Elemente           |

### Typografie

```css
/* Fonts via Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@300;400;500;600&display=swap');

--font-sans:  'Inter Tight', 'Helvetica Neue', Helvetica, Arial, sans-serif;
--font-serif: 'Instrument Serif', 'Times New Roman', serif;
--font-mono:  'JetBrains Mono', 'IBM Plex Mono', ui-monospace, monospace;
```

**Einsatz:**
- `--font-sans` → Navigation, Body, Labels, Tags
- `--font-serif` → Hero-Name, große Zitat-Überschriften, Projekt-Titel, Kontakt-Heading
- `--font-mono` → Sektionsnummern `(01) — INTRO`, Metadaten, Skills-Code-Block, Terminal-Elemente

### Abstände & Spacing

| Kontext               | Wert          |
|-----------------------|---------------|
| Section padding       | `120px 64px`  |
| Hero padding          | `140px 64px 120px` |
| Nav padding           | `32px 64px`   |
| Grid gap (1fr 2fr)    | `64px`        |
| Projektzeile padding  | `40px 0`      |
| Border-Farbe          | `1px solid #1f1f1f` |

---

## Seitenstruktur / Sektionen

Die Seite ist eine **Single-Page** mit Smooth Scroll. Reihenfolge:

1. **`<nav>`** — Sticky Navigation
2. **`#hero`** — Name, Titel, Kurzinfo-Grid
3. **`#about`** — Über mich + Werdegang-Tabelle
4. **`#work`** — Ausgewählte Projekte
5. **`#skills`** — Werkzeuge / Tech-Stack
6. **`#contact`** — Kontakt + Footer

---

## Komponenten-Details

### Navigation (`<nav>`)

```
[● Verfügbar für Q3 2026]          [Über] [Arbeiten] [Skills] [Kontakt]
```

- Sticky, `backdrop-filter: blur(12px)`, Hintergrund `rgba(13,13,13,0.85)`
- Links-Seite: grüner Status-Punkt + Verfügbarkeit (`--accent`, `--font-mono`, 13px)
- Rechts-Seite: Ankerlinks in `--font-mono`, 13px, Farbe `--text-dim`
- Border-Bottom: `1px solid #1f1f1f`

### Hero (`#hero`)

2-spaltig (`1fr 1fr`), Gap `64px`:

**Links:**
- Sektionsnummer: `(01) — INTRO` → `--font-mono`, 13px, `--text-faint`
- Name: `Mahmut.` → `--font-serif`, 144px, `line-height: 0.92`, `letter-spacing: -0.04em`, Punkt in `--accent`
- Untertitel: 22px, `--text-dim`, max-width 520px

**Rechts:**
- Info-Grid `120px 1fr`: Standort / Disziplin / Erfahrung / Sprachen
- `--font-mono`, 13px, Labels in `--text-ghost`

### Über mich (`#about`)

2-spaltig (`1fr 2fr`), Gap `64px`:

**Links:** Sektionsnummer `(02) — ÜBER`

**Rechts:**
- Serif-Zitat: 40px, max-width 720px, `letter-spacing: -0.02em`
- Bio-Absätze: 2-spaltig, 16px, `--text-muted`, `line-height: 1.65`
- Werdegang-Tabelle: 3 Spalten (Jahr / Rolle / Firma), `border-top: 1px solid #1f1f1f` pro Zeile, `--font-mono` 14px

### Projekte (`#work`)

Header 2-spaltig, dann Projektliste:

**Projektzeile (hover-interaktiv):**
- 4 Spalten: `120px 1fr 1.4fr 200px`
- Hover: `padding-left` animiert von `0` → `24px` (`transition: 0.5s cubic-bezier(.2,.8,.2,1)`)
- Projekt-Titel: `--font-serif`, 40px, Hover-Farbe = Projekt-Akzentfarbe
- Tags: Pill-Shape, `border: 1px solid #2a2a2a`, `border-radius: 999px`, `--font-mono` 11px
- Rechts: Metrik in Serif 22px, Rolle in Mono 13px, `Case Study →` mit Arrow-Slide-Animation

**Projekt-Daten:**

| # | Titel    | Untertitel                          | Tags                            | Metrik     | Farbe     |
|---|----------|-------------------------------------|---------------------------------|------------|-----------|
| 1 | Atlas    | Verteiltes Job-Scheduling-System    | Go, PostgreSQL, Kubernetes, gRPC | 12M Jobs/Tag | `#a3e635` |
| 2 | Pier     | Open-Source CLI für DB-Migrationen  | Rust, SQLite, PostgreSQL        | 2.4k ★     | `#e8e8e8` |
| 3 | Nordlicht| Realtime-Analytics-Plattform        | TypeScript, ClickHouse, Kafka, React | < 800ms | `#888`    |

### Skills (`#skills`)

2-spaltig (`1fr 2fr`), Gap `64px`:

**Links:** Sektionsnummer `(04) — WERKZEUGE`

**Rechts:** 2×2-Grid der Skill-Gruppen:

| Gruppe        | Items                                      |
|---------------|--------------------------------------------|
| Sprachen      | Go, Rust, TypeScript, Python, SQL          |
| Infrastruktur | Kubernetes, Terraform, AWS, Docker, Linux  |
| Datenbanken   | PostgreSQL, ClickHouse, Redis, SQLite      |
| Methoden      | System Design, API Design, Code Review, Mentoring |

Jede Gruppe: Gruppenname in `--font-mono` 12px uppercase mit `border-bottom`, Items in `--font-serif` 24px, getrennt durch `·` in `#444`.

### Kontakt (`#contact`)

2-spaltig (`1fr 2fr`):

**Links:** Sektionsnummer `(05) — KONTAKT`

**Rechts:**
- Heading: `Lass uns reden.` → `--font-serif`, 96px, Punkt in `--accent`
- CTA-Button Email: `background: #a3e635`, `color: #0d0d0d`, Pill, `--font-mono` 14px
- Secondary Button: `border: 1px solid #2a2a2a`, Pill, `↓ Lebenslauf (PDF)`

**Footer** (border-top):
- `© 2026 Mahmut` | GitHub-Link | LinkedIn-Link | `Berlin · [Uhrzeit] CET`
- `--font-mono` 12px, `--text-ghost`

---

## Personen-Daten (Platzhalter — zu ersetzen)

```js
const PROFILE = {
  name: "Mahmut",
  role: "Software Engineer",
  location: "Berlin, Deutschland",
  email: "hallo@mahmut.dev",          // ← anpassen
  github: "github.com/mahmut",        // ← anpassen
  linkedin: "linkedin.com/in/mahmut", // ← anpassen
  erfahrung: "7+ Jahre",
  sprachen: "Deutsch, English, Türkçe",
  verfuegbar: "Q3 2026",
};

const EXPERIENCE = [
  { year: "2022 – heute", role: "Senior Software Engineer", company: "Klarwerk GmbH" },
  { year: "2020 – 2022", role: "Software Engineer",         company: "Nordstern Tech" },
  { year: "2018 – 2020", role: "Backend Developer",         company: "Aurora Labs" },
];
```

---

## Interaktionen (JavaScript)

- **Smooth Scroll**: `html { scroll-behavior: smooth; }` via CSS
- **Projekt-Hover**: `padding-left` Slide-Animation + Titel-Farbwechsel + Arrow-Translate
- **Navigation Highlight**: aktiven Abschnitt per `IntersectionObserver` markieren
- **Uhrzeit im Footer**: lokale Berliner Zeit live via `Intl.DateTimeFormat`
- **Kein Kontaktformular** — nur E-Mail-Link (`mailto:`)

---

## Implementierungs-Hinweise

- **Kein Framework** — reines Vanilla HTML/CSS/JS
- Alle Animationen über CSS `transition`, kein JS für Hover-Effekte außer Klassen-Toggle
- `position: sticky` für die Navigation
- Fonts per `<link>` aus Google Fonts einbinden (preconnect!)
- Scrollbar dezent stylen: `8px`, Thumb `#2a2a2a`
- `box-sizing: border-box` global
- `font-feature-settings: "ss01", "cv11"` für Inter Tight aktivieren
- Mobile-Breakpoint bei `768px`: einspaltige Layouts, Padding reduzieren

---

## Quell-Design (Referenz)

Die originalen Design-Mockups liegen in `Mahmut/`:
- `variant-editorial.jsx` → Vorlage für das finale Design
- `variant-terminal.jsx` → Alternative / Inspirationsquelle für Code-Blöcke
- `data.jsx` → Daten-Vorlage
