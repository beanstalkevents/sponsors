# Beanstalk 2026 — Partnership Site

A config-driven Next.js site for the Beanstalk 2026 partnership overview.
Deploy to Vercel in minutes. Clone and customize per client in under 5 minutes.

---

## 🚀 Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Vercel auto-detects Next.js — click **Deploy**
4. Done. Your site is live.

---

## ✏️ Customizing the Site

**All content lives in one file: `data/config.js`**

You never need to touch any component to update:
- Event details, dates, location
- Pricing & deadlines
- Package names, descriptions, pricing, includes
- Add-on categories and items
- CTA copy and contact email
- Client personalization (name, note)

---

## 🎯 Creating a Custom Client Proposal

To deploy a personalized version for a specific client (e.g. Acme Corp):

### Option A — Vercel Environment Variables (fastest, no code changes)

> Coming in v2: env-var driven config for true zero-fork deployments.

### Option B — Fork & Customize (recommended now)

1. **Duplicate the repo** or create a new Vercel project from the same repo
2. Open `data/config.js`
3. Fill in the client fields at the top:

```js
clientName: "Acme Corp",
clientNote: "Prepared exclusively for the Acme Corp team — April 2026",
```

4. Optionally trim the `packages` array to only show relevant tiers
5. Push to a new branch → deploy as a separate Vercel project
6. Share the Vercel URL with your client (it's `noindex` so won't appear in search)

### Tip: Highlight specific packages

To show only certain packages for a client (e.g. they're only considering Dinner or Reception):

```js
// In data/config.js, comment out packages you don't want shown:
packages: [
  // { id: 'entry', ... },   ← hidden for this client
  { id: 'dinner', ... },
  { id: 'reception', ... },
  // { id: 'lounge', ... },
  // { id: 'named', ... },
],
```

---

## 📸 Adding Media (Photos & Videos)

Media slots are ready and waiting in the components. To add:

### Hero background video/image
In `components/Hero.js`, find the background section and add:
```jsx
// Video:
<video autoPlay muted loop playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15 }}>
  <source src="/media/hero.mp4" type="video/mp4" />
</video>

// Image:
<img src="/media/hero.jpg" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.12 }} alt="" />
```
Place files in the `/public/media/` folder.

### Package images
Add an `image` field to any package in `data/config.js`:
```js
{ id: 'dinner', image: '/media/dinner.jpg', ... }
```
The `Packages.js` component will render it automatically once the image field exists.

### Gallery / social proof section
A `Gallery` component can be added between any two sections in `pages/index.js`.
Drop photos into `/public/media/gallery/` and reference them in `data/config.js`.

---

## 🗂 Project Structure

```
beanstalk-site/
├── data/
│   └── config.js          ← All content lives here
├── components/
│   ├── Nav.js
│   ├── Hero.js
│   ├── About.js
│   ├── Packages.js
│   ├── PricingTimeline.js
│   ├── Addons.js
│   └── Contact.js
├── pages/
│   ├── _app.js
│   ├── _document.js
│   └── index.js
├── styles/
│   └── globals.css
└── public/
    └── media/             ← Drop photos/videos here
```

---

## 🛠 Local Development

```bash
npm install
npm run dev
# → http://localhost:3000
```

---

## 📋 Updating Pricing or Deadlines

All pricing is centralized in `data/config.js` under the `pricing` key:

```js
pricing: {
  meetingRate: 795,
  meetingDeadline: "May 30, 2026",
  ticketRate: 3695,
  ticketDeadline: "April 30, 2026",
  ticketTiers: [ ... ],
  meetingTiers: [ ... ],
},
```

Change these values and redeploy — pricing updates everywhere automatically.
