// ============================================================
//  STATUS PAGE — CONFIGURATION FILE
//  Edit everything here. No coding knowledge required.
// ============================================================
//
//  ICON SYSTEM — four types, mix freely anywhere an icon appears:
//
//  { type: "emoji",  value: "🌐" }
//      → any emoji or unicode character
//
//  { type: "lucide", value: "Globe" }
//      → Lucide icon name. Full list: https://lucide.dev/icons/
//        Use the PascalCase name shown on that page.
//        e.g. "ShieldCheck", "Database", "Zap", "Rocket", "Globe"
//
//  { type: "img", value: "https://example.com/icon.svg" }
//      → any image URL (SVG, PNG, WebP…) or relative path like "icons/logo.svg"
//
//  { type: "svg", value: "<svg xmlns=…>…</svg>" }
//      → raw inline SVG string pasted directly
//
//  LOGO additionally supports:
//  { type: "text", value: "⬡ ACME" }
//      → plain text / emoji logo (default)
// ============================================================

const CONFIG = {

  // ── BRAND ────────────────────────────────────────────────
  brand: {
    name: "Acme Systems",
    logo: { type: "text", value: "⬡ ACME" },
    // Examples:
    // logo: { type: "img",    value: "https://example.com/logo.svg" },
    // logo: { type: "lucide", value: "Hexagon" },
    // logo: { type: "svg",    value: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><circle cx='12' cy='12' r='10' fill='currentColor'/></svg>" },
    logoUrl: "/",
  },

  // ── SERVERS ──────────────────────────────────────────────
  // access: 1=OK  2=DEGRADED  3=MAINTENANCE  4=UNKNOWN
  // checkUrl: live-pinged on page load to verify reachability
  servers: [
    { name: "API Gateway",       checkUrl: "https://httpbin.org/status/200", access: 1 },
    { name: "Auth Service",      checkUrl: "https://httpbin.org/status/200", access: 1 },
    { name: "Database Cluster",  checkUrl: "https://httpbin.org/status/503", access: 2 },
    { name: "CDN Edge",          checkUrl: "https://httpbin.org/status/200", access: 3 },
    { name: "WebSocket Server",  checkUrl: "https://httpbin.org/status/200", access: 4 },
  ],

  // ── SERVICES (display only, no ping) ─────────────────────
  services: [
    { name: "Web Dashboard",  access: 1 },
    { name: "Mobile Apps",    access: 1 },
    { name: "Payments",       access: 2 },
    { name: "Notifications",  access: 3 },
    { name: "Analytics",      access: 1 },
  ],

  // ── GLOBAL SERVICE ICONS ─────────────────────────────────
  // Referenced by id throughout the rest of the config.
  // access: 1=OK  2=DEGRADED  3=MAINTENANCE  4=UNKNOWN
  globalIcons: [
    { id: "globe",  access: 1, icon: { type: "lucide", value: "Globe" }        },
    { id: "db",     access: 2, icon: { type: "lucide", value: "Database" }     },
    { id: "shield", access: 1, icon: { type: "lucide", value: "ShieldCheck" }  },
    { id: "rocket", access: 3, icon: { type: "lucide", value: "Rocket" }       },
    { id: "bolt",   access: 4, icon: { type: "lucide", value: "Zap" }          },

    // Emoji example:
    // { id: "fire", access: 2, icon: { type: "emoji", value: "🔥" } },

    // Image URL example:
    // { id: "aws", access: 1, icon: { type: "img", value: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" } },

    // Inline SVG example:
    // { id: "custom", access: 1, icon: { type: "svg", value: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><rect x='3' y='3' width='18' height='18' rx='3'/><path d='M3 9h18'/></svg>" } },
  ],

  // ── SERVICE STATUS CARDS (right panel) ───────────────────
  serviceStatus: [
    { name: "Global Network",   desc: "All edge nodes operational",     iconId: "globe"  },
    { name: "Data Storage",     desc: "Elevated latency on EU cluster", iconId: "db"     },
    { name: "Security Layer",   desc: "All checks passing",             iconId: "shield" },
    { name: "Deploy Pipeline",  desc: "Scheduled maintenance window",   iconId: "rocket" },
    { name: "Background Jobs",  desc: "Status unknown — investigating", iconId: "bolt"   },
  ],

  // ── STATUS MESSAGES ──────────────────────────────────────
  // heroIcon is optional — uses emoji as fallback.
  // Set `current: true` on EXACTLY ONE entry.
  statusMessages: [
    { title: "All Systems Operational", emoji: "✅", heroIcon: { type: "lucide", value: "CheckCircle2"   }, desc: "Everything is running smoothly.",                                       current: false },
    { title: "Partial Outage",          emoji: "⚠️", heroIcon: { type: "lucide", value: "AlertTriangle"  }, desc: "Some services are experiencing issues. Our team is on it.",             current: true  },
    { title: "Major Outage",            emoji: "🔴", heroIcon: { type: "lucide", value: "XCircle"        }, desc: "We are experiencing a major disruption. Updates every 15 min.",         current: false },
    { title: "Under Maintenance",       emoji: "🔧", heroIcon: { type: "lucide", value: "Wrench"         }, desc: "Scheduled maintenance in progress. Back shortly.",                      current: false },
    { title: "Investigating",           emoji: "🔍", heroIcon: { type: "lucide", value: "Search"         }, desc: "We are investigating reports of issues.",                               current: false },
  ],

  // ── SERVICE MESSAGE POPUPS ───────────────────────────────
  // Shown as a centred popup when the user clicks a matching row.
  // btnUrl: optional href for the button (default "#").
  serviceMessages: [
    {
      iconId:   "db",
      title:    "Database Cluster",
      text:     "We are currently experiencing elevated query latency on our EU cluster. Reads remain available; some write operations may be delayed by up to 30 s. Our team is actively investigating and expects full resolution within the hour.",
      btnColor: "#f59e0b",
      btnText:  "View Incident →",
      btnUrl:   "#",
    },
    {
      iconId:   "rocket",
      title:    "Deploy Pipeline",
      text:     "The deploy pipeline is under scheduled maintenance from 02:00 – 04:00 UTC. No new deployments can be triggered during this window. All running services remain unaffected.",
      btnColor: "#6366f1",
      btnText:  "See Schedule →",
      btnUrl:   "#",
    },
  ],

  // ── SERVICE ALERTS (persistent banners at bottom of left panel) ──
  serviceAlerts: [
    {
      iconId: "bolt",
      title:  "Background Job Worker",
      text:   "Worker health-checks are returning intermittent timeouts. Scheduled jobs may be delayed. We are monitoring the situation.",
    },
  ],

};
