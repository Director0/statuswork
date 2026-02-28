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
//  { type: "lucide", value: "globe" }
//      → Lucide icon name (kebab-case). Full list: https://lucide.dev/icons/
//        Examples: "globe", "shield-check", "database", "zap", "rocket"
//
//  { type: "img", value: "https://example.com/icon.svg" }
//      → any image URL (SVG, PNG, WebP…) or relative path like "icons/logo.png"
//
//  { type: "svg", value: "<svg>…</svg>" }
//      → paste any raw SVG string directly
//
//  LOGO also supports:
//  { type: "text", value: "⬡ ACME" }
//      → plain text / emoji (default)
// ============================================================

const CONFIG = {

  // ── BRAND ────────────────────────────────────────────────
  brand: {
    name: "SENG Pro",
    logo: { type: "text", value: "Stolposky" },
    // logo: { type: "lucide", value: "hexagon" },
    logo: { type: "img", value: "seng.svg" },
    // logo: { type: "emoji", value: "🛰️" },
    logoUrl: "/",
  },

  // ── SERVERS ──────────────────────────────────────────────
  // access: 1=OK  2=DEGRADED  3=MAINTENANCE  4=UNKNOWN
  // checkUrl: live-pinged via fetch on page load
  servers: [
    { name: "API-L Gateway",       checkUrl: "https://httpbin.org/status/200", access: 1 },
    { name: "ID Auth Service",      checkUrl: "https://httpbin.org/status/200", access: 1 },
    { name: "Database Cluster",  checkUrl: "https://httpbin.org/status/503", access: 2 },
    { name: "Lndcorpcdn-1",          checkUrl: "https://httpbin.org/status/200", access: 3 },
    { name: "NPP-promteh-00",  checkUrl: "https://httpbin.org/status/200", access: 4 },
  ],

  // ── SERVICES (display only, no ping) ─────────────────────
  services: [
    { name: "SENG Dashboard",  access: 1 },
    { name: "Lndcorpmail",    access: 1 },
    { name: "Lndcorpdynamics",       access: 1 },
    { name: "Lnd Administrator",  access: 1 },
    { name: "AI Service",      access: 3 },
  ],

  // ── GLOBAL ICONS ─────────────────────────────────────────
  // Referenced by `iconId` everywhere else.
  // access: 1=OK  2=DEGRADED  3=MAINTENANCE  4=UNKNOWN
  globalIcons: [
    { id: "globe",  access: 1, icon: { type: "lucide", value: "globe"         } },
    { id: "db",     access: 2, icon: { type: "lucide", value: "database"       } },
    { id: "shield", access: 1, icon: { type: "lucide", value: "shield-check"   } },
    { id: "rocket", access: 3, icon: { type: "lucide", value: "rocket"         } },
    { id: "bolt",   access: 4, icon: { type: "lucide", value: "zap"            } },

    // More examples:
    // { id: "fire",   access: 2, icon: { type: "emoji", value: "🔥" } },
    // { id: "aws",    access: 1, icon: { type: "img",   value: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" } },
    // { id: "custom", access: 1, icon: { type: "svg",   value: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><circle cx='12' cy='12' r='10'/></svg>" } },
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
  // heroIcon is optional (falls back to emoji).
  // Set `current: true` on EXACTLY ONE entry.
  statusMessages: [
    { title: "All Systems Operational", emoji: "✅", heroIcon: { type: "lucide", value: "check-circle-2"  }, desc: "Everything is running smoothly.",                               current: true },
    { title: "Partial Outage",          emoji: "⚠️", heroIcon: { type: "lucide", value: "alert-triangle"  }, desc: "Some services are experiencing issues. Our team is on it.",     current: false  },
    { title: "Major Outage",            emoji: "🔴", heroIcon: { type: "lucide", value: "x-circle"        }, desc: "We are experiencing a major disruption. Updates every 15 min.", current: false },
    { title: "Under Maintenance",       emoji: "🔧", heroIcon: { type: "lucide", value: "wrench"           }, desc: "Scheduled maintenance in progress. Back shortly.",              current: false },
    { title: "Investigating",           emoji: "🔍", heroIcon: { type: "lucide", value: "search"           }, desc: "We are investigating reports of issues.",                       current: false },
  ],

  // ── SERVICE MESSAGE POPUPS ───────────────────────────────
  // Shown as a popup when user clicks a matching server/service row.
  // `title` must exactly match the server or service name (case-insensitive).
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
      text:     "The deploy pipeline is under scheduled maintenance from 02:00 – 04:00 UTC. No new deployments can be triggered during this window. All running services remain unaffected. OK",
      btnColor: "#6366f1",
      btnText:  "See Schedule →",
      btnUrl:   "#",
    },
  ],

  // ── SERVICE ALERTS (persistent banners, bottom of left panel) ──
  serviceAlerts: [
    {
      iconId: "bolt",
      title:  "Security Notice",
      text:   "Worker health-checks are returning intermittent timeouts. Scheduled jobs may be delayed. We are monitoring the situation.",
    },
  ],

};
