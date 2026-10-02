<div align="center">

# 🏠 HomeLog

### Your entire home, in your pocket.

**One local-first app for maintenance, finishes, plans, and everything else that comes with owning a home — with AI that actually helps you stay ahead of it.**

[![PWA](https://img.shields.io/badge/PWA-installable-d4a949?style=flat-square)](#)
[![Local First](https://img.shields.io/badge/data-100%25%20local-3fd0c9?style=flat-square)](#)
[![No Backend](https://img.shields.io/badge/backend-none-121e35?style=flat-square)](#)
[![Groq Powered](https://img.shields.io/badge/AI-Groq-d4a949?style=flat-square)](#)

</div>

---

Every home comes with a paper trail — the builder's paint codes, the water heater's serial number, warranty PDFs buried in an inbox somewhere, the tax collector's phone number you can never remember. HomeLog puts all of it in one place, in your pocket, and adds an AI layer smart enough to fill in the gaps when your memory doesn't.

No login. No cloud database. No subscription. Just a single web app that installs like a native one and remembers everything so you don't have to.

---

## What's inside

### 🏡 A real dashboard, not a spreadsheet
Open the app and you're looking at *your* house — a swipeable photo gallery, an embedded interactive 3D model, time-lapse construction videos, and the vitals that actually matter (square footage, lot size, build specs) pulled straight from the source documents. At a glance: how many things need attention right now.

### 🔧 Maintenance that remembers so you don't have to
Track every system in the house — HVAC, plumbing, electrical, appliances, structural — organized however makes sense to you: by room, or by type. Set a service interval once and HomeLog quietly tracks what's on schedule, what's due soon, and what's overdue, with color-coded status the moment you open the app.

**Don't know how often something should be serviced? Ask.** One tap sends the asset to AI and gets back a real recommendation — no more guessing whether the water heater needs annual attention or the AC filter is overdue.

### 📸 Point your camera at a nameplate
Skip the typing. Snap a photo of an appliance's nameplate or equipment label and AI reads the model number, serial number, manufacture date, and specs straight off it — auto-filling a new asset in seconds.

### 🩺 A troubleshooter that actually searches the web
Something acting up? Ask HomeLog. It doesn't just guess from memory — it searches live for manuals, error code meanings, and known issues specific to your exact model, then gives you a straight answer.

### 🧠 An inventory that flags what's missing
HomeLog looks at what you've tracked and tells you what's probably missing — a dryer for that washer, a thermostat for that AC unit — before you find out the hard way.

### 🎨 Every paint color and finish, forever
Pulled straight from the builder's original selection sheets: every paint color, tile pattern, cabinet finish, and fixture spec, organized by room and fully searchable. Touching up a wall five years from now takes one search, not a guessing game.

### 📁 A real filing cabinet for the paperwork
Blueprints, permits, warranties, insurance policies, contracts — upload once, stored locally, available offline forever. No more digging through email for a PDF you saved three moves ago.

### 📇 Every number you'll ever need
Property appraiser, tax collector, insurance, mortgage, the original builder and architect — all one tap away, with call and website links built in.

### 🔍 Search that actually searches everything
One search bar, every corner of the app — assets, finishes, documents, contacts — all at once. Can't find it with plain text? AI search kicks in automatically.

---

## Why it's built this way

**Everything stays on your device.** Assets, photos, documents, finishes — all stored locally in the browser. Nothing syncs to a server because there is no server. AI requests send only the minimum text needed to answer your question, and only when you ask.

**It installs like a real app** — home screen icon, offline-capable, no app store required. It's a single HTML file that runs anywhere a browser does.

**No subscription, no login, no lock-in.** Bring your own free Groq API key for the AI features, or skip them entirely — the core app works either way.

---

## Under the hood

| | |
|---|---|
| **Interface** | Single-file HTML/CSS/JS — no build step, no framework |
| **Storage** | IndexedDB via Dexie.js — fully local, fully offline |
| **AI** | Groq (vision, reasoning, and live web search) |
| **Installability** | Web App Manifest + Service Worker |
| **Hosting** | Static — GitHub Pages or any web host |

---

## Getting started

1. Open the app in a browser (Chrome or Safari recommended for full camera/PWA support)
2. Tap **Install** / **Add to Home Screen** when prompted
3. Head to **Settings** and drop in a free [Groq API key](https://console.groq.com/keys) to unlock the AI features
4. Start logging — or just let the built-in reference data show you around

That's it. No account to create, no data to migrate, nothing to configure.

---

<div align="center">

*Built for homeowners who'd rather ask their house a question than dig through a filing cabinet.*

</div>
