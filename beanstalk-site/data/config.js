// ============================================================
// BEANSTALK SITE CONFIG
// Edit this file to customize the site for each client.
// Deploy a copy per client via Vercel environment or fork.
// ============================================================

export const siteConfig = {
  // ── Branding ────────────────────────────────────────────
  title: "Beanstalk 2026",
  tagline: "Partnership Overview",
  year: "2026",
  accentColor: "#C8A96E", // gold

  // ── Client Personalization (leave blank for generic) ────
  clientName: "",         // e.g. "Acme Corp" — shown in hero if set
  clientNote: "",         // Optional note shown under hero, e.g. "Prepared exclusively for Acme Corp"

  // ── Event Details ────────────────────────────────────────
  event: {
    dates: "September 14–16, 2026",
    location: "Industry City, Brooklyn, NY",
    description:
      "The largest gathering of executives from Disruptor Brands in North America. Unlike other conferences focused on content, 90% of time at Beanstalk is spent in 1:1 or small group, peer-led discussions.",
    attendeeProfile:
      "Invite-only. C-Suite or equivalent Heads of Functions only — ensuring every person you meet is a decision maker. 90%+ VP and above, upwards of 2× the next leading conference.",
    brandRatio:
      "An industry-leading ratio of Solution Providers to Brands — ensuring meaningful connections, not noise.",
  },

  // ── Pricing Deadlines ────────────────────────────────────
  pricing: {
    meetingRate: 795,
    meetingDeadline: "May 30, 2026",
    ticketRate: 3695,
    ticketDeadline: "April 30, 2026",
    ticketTiers: [
      { price: "$3,695", deadline: "April 30, 2026" },
      { price: "$3,895", deadline: "May 31, 2026" },
      { price: "$4,095", deadline: "July 30, 2026" },
      { price: "$4,495", deadline: "August 14, 2026" },
    ],
    meetingTiers: [
      { price: "$795/meeting", deadline: "May 30, 2026" },
      { price: "$895/meeting", deadline: "July 30, 2026" },
    ],
  },

  // ── Partnership Packages ─────────────────────────────────
  packages: [
    {
      id: "entry",
      name: "Entry Level",
      subtitle: "Efficient 1:1 Access",
      color: "#C8A96E",
      totalRange: "$11,645 – $15,620 per Executive",
      summary:
        "Attend Beanstalk and efficiently connect with the exact executives you're looking for through our Hosted Meetings Program.",
      includes: [
        "1 Ticket ($3,695 by April 30, 2026)",
        "10 meetings at $795/meeting ($7,950) by April 30, 2026",
        "Or upgrade to 15 meetings ($11,925)",
      ],
      note: null,
    },
    {
      id: "dinner",
      name: "Dinner Partner",
      subtitle: "Meetings + Private Dinner",
      color: "#B8936A",
      totalRange: "$37,700 – $53,600",
      summary:
        "Everything in Entry Level, plus connect with executives who didn't opt into meetings — over a curated private dinner.",
      includes: [
        "1 Hosted Dinner for 20–25 Executives — Tuesday Sept 15 or Wednesday Sept 16 ($29,750)",
        "2 Tickets (included, ~$7,390 value)",
        "10 meetings ($7,950) — or 15 ($11,925), 20 ($15,900), or 30 ($23,850) by April 30, 2026",
      ],
      note: null,
    },
    {
      id: "reception",
      name: "Reception Partner",
      subtitle: "Meetings + Opening Reception",
      color: "#A07855",
      totalRange: "$37,950 – $65,775",
      summary:
        "Co-host one of the opening track receptions — introduced to every executive attending Beanstalk from the moment they arrive.",
      includes: [
        "Co-host your Track Reception (Legends, CEO, CMO or COO/CFO) — introduced to all attendees ($30,000)",
        "2 Tables of 8 at Opening Dinner (included, otherwise $9,900)",
        "3 Tickets (included, ~$11,085 value)",
        "10–45 meetings ($7,950–$35,775) by April 30, 2026",
      ],
      note: null,
    },
    {
      id: "lounge",
      name: "Lounge Partner",
      subtitle: "Meetings + Branded Lounge + Speaking",
      color: "#8A6340",
      totalRange: "$37,700 – $65,525",
      noteSuffix: "(+ ~$16,000 lounge build)",
      summary:
        "Host discussions in your own custom-designed Beanstalk Lounge across unique Industry City venues — the most visible presence at the event.",
      includes: [
        "2 Boardroom Discussions for 24–26 guests each (50+ total connections) ($29,750)",
        "Custom Lounge build — ~$16,000 base budget for furniture & AV",
        "Choose from 5 unique Industry City venues (Kura Distillery, Shadi's Grocery, and more)",
        "2 Power Lunches leading CEO/CMO discussions (included, otherwise $10,000)",
        "3 Tickets (included, ~$11,085 value)",
        "10–45 meetings ($7,950–$35,775) by April 30, 2026",
      ],
      note: "+ costs for Boardroom Build estimated at ~$16,000 + tax for base package",
    },
    {
      id: "named",
      name: "Official Named Partner",
      subtitle: "Full Conference Presence",
      color: "#6B4A2A",
      totalRange: "$138,550 – $148,550",
      noteSuffix: "(+ lounge build costs)",
      summary:
        'Positioned throughout Beanstalk as the preferred partner in your product category — "Official Measurement Partner," "Official Banking Partner," etc.',
      includes: [
        "\"Official Partner\" status — premiere branding on website and throughout the conference",
        "Title sponsor of one of 4 stages: Legends, CEO, CMO, or COO/CFO ($35,000)",
        "Lanyards for your track — logo on every attendee's badge ($15,000)",
        "3 complimentary tickets (~$11,085 value)",
        "2 Boardroom Discussions, 24–26 guests ($29,750 + ~$16,000 build)",
        "2 Power Lunches (included)",
        "Up to 45 Hosted Meetings — $795/meeting if signed by April 30, 2026 ($35,775 total)",
        "Track Reception co-host ($30,000)",
        "Tuesday Night Private Dinner with Legendary Guest of Honor ($29,750)",
        "Up to 2 Productive Playtime Events ($15,000–$25,000 each)",
      ],
      note: null,
    },
  ],

  // ── À La Carte Add-Ons ───────────────────────────────────
  addons: [
    {
      category: "Receptions & Dinners",
      items: [
        {
          name: "VIP Welcome Reception",
          price: "$30,000/co-host",
          description:
            "150 of the most senior guests. Includes 2 complimentary tickets and 2 tables at the Day 1 Welcome Dinner.",
        },
        {
          name: "Track Welcome Reception (CEO / CMO / COO/CFO)",
          price: "$30,000/co-host",
          description:
            "Same format as VIP but for your specific track. Welcome dinner at $4,950/table.",
        },
        {
          name: "Private Dinner — Legendary Guest of Honor",
          price: "$29,750 solo / $19,750 co-host",
          description:
            "20–24 brands in a private dining room with a curated guest of honor. Comes with 2 (solo) or 1 (co-host) complimentary ticket.",
        },
        {
          name: "Family Style Dinner",
          price: "$6,950/table",
          description:
            "8–10 guests including 4+ brands, up to 3 investors, zero other solution providers. Tuesday Sept 15.",
        },
        {
          name: "VIP Welcome Dinner Table",
          price: "$7,950/table",
          description: "Table of 8 at the VIP Welcome Dinner.",
        },
        {
          name: "Track Welcome Dinner Table (CEO / CMO / COO/CFO)",
          price: "$4,950/table",
          description:
            "Table of 8 at your track's welcome dinner.",
        },
      ],
    },
    {
      category: "Boardrooms & Lounges",
      items: [
        {
          name: "8–10 Person Boardroom",
          price: "$6,950/session",
          description:
            "Private discussion with up to 9 brand leaders. No build cost required.",
        },
        {
          name: "12–14 Person Boardroom",
          price: "$19,750",
          description:
            "Two sessions (Tues + Wed). Includes 2 tickets. Pre-built option ~$13,000 + tax.",
        },
        {
          name: "24–26 Person Boardroom",
          price: "$29,750",
          description:
            "Two sessions (Tues + Wed). Includes 3 tickets. Pre-built option ~$16,000 + tax.",
        },
        {
          name: "Power Lunch",
          price: "$4,950/each",
          description:
            "Lead a discussion with 7–9 executives on Tuesday, Sept 15. Free if bundled with a boardroom.",
        },
      ],
    },
    {
      category: "Branding",
      items: [
        {
          name: "Registration Sponsor",
          price: "$35,000",
          description:
            "Own the registration area — logo on all registration pages, emails, and on-site software.",
        },
        {
          name: "Stage + Track Branding",
          price: "$35,000/stage",
          description:
            "Name a stage, brand it with your logo, branded cups, napkins, poker chips, photo wall, and decals.",
        },
        {
          name: "Lanyards",
          price: "$15,000/track",
          description:
            "Your logo and chosen color on every lanyard in your track.",
        },
        {
          name: "Wi-Fi Sponsor",
          price: "$25,000",
          description:
            "Choose the Wi-Fi name and password for all of Beanstalk at Industry City.",
        },
        {
          name: "Mobile App Branding",
          price: "$19,000",
          description:
            "Exclusive sponsor of the Beanstalk app — shown every time any attendee opens it.",
        },
        {
          name: "Phone Charging Stations",
          price: "$32,000 exclusive / $9,000/track",
          description:
            "Your logo on digital screens and tower wraps across all four tracks.",
        },
        {
          name: "Restroom Sponsor",
          price: "$25,000",
          description:
            '"Sweet Relief" — branded restrooms and luxury restroom trucks. One of the most talked-about activations.',
        },
      ],
    },
    {
      category: "Productive Playtime",
      items: [
        {
          name: "Small Group Activity",
          price: "$15,000",
          description:
            "Lead 10–20 executives in a custom experience: store tours, CrossFit, yoga, archery, escape rooms, and more.",
        },
        {
          name: "Large Group Activity",
          price: "$25,000",
          description:
            "50–60 person activations — Barry's Bootcamp, SoulCycle, Costco / Whole Foods store tours, and more.",
        },
      ],
    },
  ],

  // ── Contact / CTA ────────────────────────────────────────
  cta: {
    headline: "Ready to Partner?",
    body: "Spots are limited and fill quickly. Reach out to learn which package is right for you.",
    email: "partnerships@beanstalkevents.com",
    buttonLabel: "Get in Touch",
  },
};
