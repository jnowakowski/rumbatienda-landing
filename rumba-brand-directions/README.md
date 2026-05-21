# Rumba · Brand Directions — handoff README

> Context for whoever picks this up next. Read this before opening anything.

---

## What this is

A brand exploration for **Rumba** — a curated nightlife / dance-event product built by **Julian Villa** (Medellín-based salsa dancer) and **Janusz Higher** (Switzerland-based curator). Their current offer is a 6-day group trip to the **Feria de Cali** (Dec 25–30) for ~25 dancers, mostly from Switzerland/Europe. Existing assets:

- An **AI-generated logo** (palms, drums, dancing couple, cocktail, sun, banner-script "Rumba") — Julian likes that *Colombian* vibe but calls it "AI bad-taste" / cluttered cruise-brochure
- A **landing page** ("Rumba · Live salsa from Medellín") in their existing visual system — broadsheet / riso-poster aesthetic, indigo + scarlet + bone palette, Archivo Black + DM Serif Display
- A **trip page** ("Gaceta Cali ’26") in the same system

Julian's call on the existing site: **"strony są fajne ale dla naszego tematu… zbyt poważne i patetyczne"** (the sites are nice but, for our topic… too serious and pompous).

---

## What the user needs

A brand direction (and logo) that:

1. Is **alive, festive, warm** — captures actual salsa-club nightlife energy, not Lonely Planet
2. Sits naturally **next to** the official **Feria de Cali ’68** brand (cream / tropical green / hot pink / aubergine, Montserrat 900) — same family, but original work, not a copy
3. Reads as **Colombian / Latin** without being a tourist cliché
4. Works for European clients (Swiss, French, German) without feeling sterile / agency

---

## What's in this package

### Two viewing modes

| File | What it is | When to use |
|---|---|---|
| `index.html` | Pan/zoom design canvas — all boards laid out infinite-canvas style | Open in a browser; drag to pan, scroll to zoom |
| `share.html` | Plain scroll-down stack of every board | Open in a browser if you just want to scroll through |
| `Rumba Brand Directions.html` | Single-file standalone bundle of `share.html` | Send to someone offline, attach to email |

### Source

- `boards/` — one JSX file per board (13 boards total, ~250 lines each)
- `design-canvas.jsx` — starter component for the pan/zoom canvas
- `main.jsx` — wires the boards into the canvas
- `share.jsx` — wires the boards into the scroll view
- `uploads/` — the **original assets** Julian provided: the AI logo, the existing site HTML, and two captures of the official Feria de Cali site (computed styles, palette, fonts)

### Boards

**Logo Lab** (pick a wordmark)

- `Logo Lab v2` — 16 wordmark variants in the Feria-aligned palette. Top picks marked ★: #01 (heavy lowercase + pink dot), #03 (pink swoosh underline), #14 (sticker shadow — good for IG)
- `Logo Lab v1` — earlier 9-variant exploration, kept for context

**Ten design directions**

| # | Direction | Vibe in one line |
|---|---|---|
| 01 ★ | **Feria-aligned** | Same family as the official Feria de Cali ’68. Cream / verde / pink / aubergine, Rubik 900 lowercase. **Recommended baseline.** |
| 02 | Editorial Suave | Warm bilingual magazine. Apartamento meets Caribe. Italic DM Serif Display, terracotta + sage. |
| 03 | Crayon Caribe | Hand-painted folk art. Mercado warmth, tomato + mint + cobalt + saffron. Imperfect on purpose. |
| 04 | Cumbia Stamp | Ornate fruit-crate label, 1960s Cali. Oval cartouche, heavy serif, saffron/emerald/crimson/indigo. |
| 05 | Type Solo | Pure typographic minimalism. One huge wordmark, three colors total. The most confident option. |
| 06 | Cartelera Callejera | Torn paste-up street poster, riso misregister, hand-painted. Loud, local. |
| 07 | Flyer ’99 | Y2K tropical maximalism. Chrome bevel, photocopy energy. |
| 08 | Salsa Brava | 1970s Fania reissue. Heavy serif, the dignity of an LP back-cover. |
| 09 | Sticker Culture | WhatsApp group-chat vernacular. The chat is the brand: stickers, voice notes. |
| 10 | Sudor · Neon | Flash-on-camera nightlife photography, brutalist sans, one acid accent. |

Each board carries: primary logo lockup, alt marks, color palette, type system, and one in-context mock (trip card, event flyer, magazine spread etc.).

---

## OPEN QUESTION (most important section)

After seeing the 10 directions, Julian gave critical feedback:

> "In Colombian visual aesthetic there's something unique. Alive. The Feria de Cali page captures it. My original logo captures it but dressed in AI bad-taste. There's a dancing person, there's a sun, there are colors, there are drums — there's dynamics — flattened but visible. Your directions completely lose this."

**What I (the previous designer) think this means:**

The 10 directions above are mostly **typographic + chromatic**. They lack the **illustrative iconography** that real Latin/Colombian design has:

- 💃 dancing figures / silhouettes (geometric, not realistic)
- ☀️ a radiating sun as a primary motif
- 🌴 palm leaves (flat, abstracted)
- 🥁 drums / music notation
- 🌀 movement / dynamism via diagonal composition, swirls, flow lines

**The taste to chase, in reference language:**

- ICAIC Cuban poster art (Eduardo Muñoz Bachs, Antonio Reboiro)
- 1970s–80s Festival de Cali posters
- Modern Latin folk-illustrators (Catalina Estrada, Camilo Huinca)
- Memphis design **as filtered through Latin America**
- The official Feria de Cali ’68 hero illustration itself

NOT:
- Realistic illustration with shading
- AI-generated tropical clip-art
- Gradients, lens flare, drop shadow — typical AI symptoms
- Generic "tropical" stock vectors

**Open questions for the next agent to resolve with Julian:**

1. Which references are the right ones (ICAIC vs Estrada vs Comuna 13 mural art vs something else)?
2. Which icons are mandatory (dancer, sun, palm, drum, drink, star, mountains)?
3. Is the dancing figure **part of the logo** (always present in the mark), or does it **live next to** the wordmark as a separate system element?
4. Stay in the Feria-aligned palette (cream/verde/pink/aubergine), or push into more saturated Latin territory (hotter reds, turquoise)?

The user explicitly told me to **guess, then ask for confirmation**, rather than dump a list of questions. A good next move is to build **one test board** in the best-guess illustrative direction and use it to anchor the conversation.

---

## File map

```
/
├── README.md                          # this file
├── index.html                         # pan/zoom canvas — main interactive view
├── share.html                         # scroll-stack version of the same boards
├── Rumba Brand Directions.html        # offline standalone bundle of share.html
├── main.jsx                           # wires boards into the canvas
├── share.jsx                          # wires boards into the scroll view
├── design-canvas.jsx                  # pan/zoom canvas starter component
├── boards/
│   ├── board-shared.jsx               # shared bits (BoardHeader, Palette, TypeRow, BOARD_W/H)
│   ├── board-01-cartelera.jsx         # 06 Cartelera Callejera
│   ├── board-02-flyer90.jsx           # 07 Flyer '99
│   ├── board-03-fania.jsx             # 08 Salsa Brava
│   ├── board-04-sticker.jsx           # 09 Sticker Culture
│   ├── board-05-sudor.jsx             # 10 Sudor · Neon
│   ├── board-06-feria.jsx             # 01 ★ Feria-aligned (recommended)
│   ├── board-07-logo-lab.jsx          # Logo Lab v1 (9 variants)
│   ├── board-08-editorial.jsx         # 02 Editorial Suave
│   ├── board-09-crayon.jsx            # 03 Crayon Caribe
│   ├── board-10-cumbia.jsx            # 04 Cumbia Stamp
│   ├── board-11-type.jsx              # 05 Type Solo
│   ├── board-12-logo-lab-v2.jsx       # Logo Lab v2 (16 variants)
│   └── board-13-iconic-test.jsx       # Illustrative test board, dancer + sun + palms + drums
└── uploads/
    ├── Logo-2b5da7f0.png              # the AI-generated current Rumba logo
    ├── Rumba ·Live salsa…html         # current Rumba landing page
    ├── Feria de Cali 2026 …html       # current trip page (Gaceta)
    └── web-capture-*.json             # captured DOM of the official Feria site (palette/fonts ref)
```

---

## Recommended next steps

1. **Decide** with Julian whether the typographic-foundation direction (board 01 Feria-aligned) is the right baseline, or whether one of the more textured directions (03 Crayon, 04 Cumbia) is closer.
2. **Pick a wordmark** from Logo Lab v2 (or hybridize two).
3. **Review the new illustrative test board** and decide whether the dancer, sun, palm, and drum are the right core icons or need swapping.
4. Once a direction is locked, **redraw the chosen wordmark as a clean SVG**, do a 3-state animation (idle / hover / loading), and roll out the rest of the system (buttons, ticket / flyer templates, IG sticker pack, landing redesign).

---

## How to run locally

Everything is plain HTML + Babel-in-browser JSX. No build step.

```
# any of these in any modern browser:
open index.html                       # canvas view
open share.html                       # scroll view
open "Rumba Brand Directions.html"    # offline standalone
```

Or send `Rumba Brand Directions.html` to anyone — it's a single self-contained file (~3MB), no internet required.
