// Geteilte Daten für beide Varianten

const PROFILE = {
  name: "Mahmut",
  role: "Software Engineer",
  location: "Berlin, Deutschland",
  email: "hallo@mahmut.dev",
  github: "github.com/mahmut",
  linkedin: "linkedin.com/in/mahmut",
  bio_short: "Software Engineer mit Fokus auf Backend-Systeme, verteilte Architekturen und Developer Tools. Ich baue robuste Software, die nicht im Weg steht.",
  bio_long: [
    "Seit über sieben Jahren entwickle ich Software für Teams, die Wert auf Qualität und Klarheit legen. Mein Schwerpunkt liegt auf skalierbaren Backend-Systemen, API-Design und der Infrastruktur, die alles am Laufen hält.",
    "Vorher habe ich Informatik an der TU Berlin studiert und in mehreren Startups gearbeitet — von kleinen Teams bis zu Engineering-Organisationen mit mehr als hundert Entwicklern.",
    "Wenn ich nicht code, lese ich Fachliteratur, gehe klettern oder probiere neue Kaffeesorten."
  ]
};

const PROJECTS = [
  {
    id: "p1",
    year: "2025",
    title: "Atlas",
    subtitle: "Verteiltes Job-Scheduling-System",
    summary: "Ein selbst-entwickeltes Scheduling-System für lange laufende Tasks. Verarbeitet täglich über 12 Millionen Jobs mit garantierter Ausführung und horizontaler Skalierung.",
    tags: ["Go", "PostgreSQL", "Kubernetes", "gRPC"],
    role: "Lead Engineer",
    metric: "12M Jobs/Tag",
    color: "#a3e635"
  },
  {
    id: "p2",
    year: "2024",
    title: "Pier",
    subtitle: "Open-Source CLI für Datenbank-Migrationen",
    summary: "Ein Werkzeug, das Schema-Änderungen sicher und nachvollziehbar macht. Über 2.400 GitHub-Sterne, im Einsatz bei mittelständischen und großen Teams.",
    tags: ["Rust", "SQLite", "PostgreSQL"],
    role: "Maintainer",
    metric: "2.4k ★",
    color: "#e8e8e8"
  },
  {
    id: "p3",
    year: "2023",
    title: "Nordlicht",
    subtitle: "Realtime-Analytics-Plattform",
    summary: "Eine Streaming-Pipeline für Produkt-Analytics. Sub-Sekunden-Latenz vom Event bis zum Dashboard, gebaut für ein E-Commerce-Unternehmen mit 4M MAU.",
    tags: ["TypeScript", "ClickHouse", "Kafka", "React"],
    role: "Tech Lead",
    metric: "< 800ms",
    color: "#888"
  }
];

const SKILLS = [
  { group: "Sprachen", items: ["Go", "Rust", "TypeScript", "Python", "SQL"] },
  { group: "Infrastruktur", items: ["Kubernetes", "Terraform", "AWS", "Docker", "Linux"] },
  { group: "Datenbanken", items: ["PostgreSQL", "ClickHouse", "Redis", "SQLite"] },
  { group: "Methoden", items: ["System Design", "API Design", "Code Review", "Mentoring"] }
];

const EXPERIENCE = [
  { year: "2022 – heute", role: "Senior Software Engineer", company: "Klarwerk GmbH" },
  { year: "2020 – 2022", role: "Software Engineer", company: "Nordstern Tech" },
  { year: "2018 – 2020", role: "Backend Developer", company: "Aurora Labs" }
];

window.PORTFOLIO_DATA = { PROFILE, PROJECTS, SKILLS, EXPERIENCE };
