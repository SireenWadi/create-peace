# Create Peace — Forests to Streets

Subotica, Serbia · 18—26 August 2026

A cinematic, editorial one-page site for the training. Built with Next.js
14 (App Router), TypeScript, Tailwind CSS and Framer Motion.

---

## 1. Run it

```bash
npm install
npm run dev
# open http://localhost:3000
```

Production build:

```bash
npm run build
npm run start
```

The project builds and runs with **zero real media assets** — every video
and image slot renders a clearly labeled placeholder ("Add hero-forest.mp4
to public/media/") instead of breaking, so you can hand this off or deploy
it today and drop media in later.

---

## 2. Project structure

```
app/
  layout.tsx          Root layout, metadata, font variables
  page.tsx             Assembles every section in order
  globals.css          Tailwind entry + design tokens + reduced-motion rules

components/
  Nav.tsx               Fixed nav + scroll progress bar
  Hero.tsx               01 — full-screen video hero
  Intro.tsx               02 — full-screen video intro
  Topics.tsx                03 — sticky horizontal-scroll topic track
  TopicCard.tsx               editorial card w/ parallax cloud layers
  ForestSection.tsx          04 — pinned scroll, sequential text reveal
  Artivism.tsx                05 — dark green gallery section
  FieldResults.tsx             06 — animated "official" progress bars
  Community.tsx                  07 — STRANGERS → COMMUNITY + photo grid
  Memories.tsx                    08 — full-bleed photo collage + words
  ThankYou.tsx                     09 — trainers/facilitators
  FinalEnding.tsx                   10 — minimal closing screen
  Footer.tsx
  ui/
    RevealText.tsx        staggered word-reveal text component
    SectionLabel.tsx       small uppercase "01 / label" tag
    MediaBackground.tsx    full-bleed video w/ overlay + missing-asset state
    ImageFrame.tsx          image w/ missing-asset placeholder state
    Battery.tsx              animated progress bar used in Field Results

lib/
  data.ts               all editable copy: topics, trainers, stats, words

public/
  media/                 <-- put every real asset here (see list below)
```

Everything you'll want to edit lives in `lib/data.ts` (topic copy, trainer
names, the field-results numbers, the takeaway words) or directly in the
matching component if it's structural copy (headlines, section text).

---

## 3. Typography

The project ships with a safe system-font fallback stack (see
`app/globals.css` → `--font-display` / `--font-body`) so it builds without
any network access. To get the intended Space Grotesk / Inter look, pick
one:

**Option A — Google Fonts via next/font (recommended, needs network at
build time):**

```tsx
// app/layout.tsx
import { Space_Grotesk, Inter } from "next/font/google";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

// then: <html className={`${display.variable} ${body.variable}`}>
```

**Option B — self-hosted files:** drop `.woff2` files in `public/fonts/`
and add `@font-face` rules to `globals.css` pointing `--font-display` /
`--font-body` at them. Works with Satoshi if you have a license for it.

---

## 4. Adding your trainers

Edit `lib/data.ts`:

```ts
export const trainers: Trainer[] = [
  { name: "Real Name", role: "Trainer" },
  { name: "Real Name", role: "Facilitator" },
];
```

---

## 5. Complete asset list

Drop every file into `public/media/` using **exactly** these filenames —
the code already points at these paths, so nothing else needs to change.
Until a file exists, that slot shows a placeholder instead of breaking.

### Videos

**hero-forest.mp4**
Used in: Hero (section 01), full-screen background
Content: cinematic forest, trees moving in wind, dappled sunlight, slow drift
Recommended aspect: 16:9 (crops to fill on mobile)
Minimum resolution: 1920×1080, ideally 2560×1440
Type: video (autoplay/muted/loop, keep under ~15s looped and under ~15MB if possible)

**intro-community.mp4**
Used in: Intro (section 02), full-screen background
Content: people / hands / workshop movement / city street — should read as
a bridge from "forest" into "people & streets"
Recommended aspect: 16:9
Minimum resolution: 1920×1080
Type: video

**forest-border.mp4** (optional — falls back to forest-border.jpg)
Used in: The Forest (section 04), pinned full-screen background
Content: atmospheric forest near the Serbia–Hungary border, slow pan
Recommended aspect: 16:9
Minimum resolution: 1920×1080
Type: video

**final-group.mp4** (optional — falls back to final-group.jpg)
Used in: Thank You (section 09), full-screen background
Content: short clip of the full group, warm and celebratory
Recommended aspect: 16:9
Minimum resolution: 1920×1080
Type: video

### Images — fallback / static

**forest-border.jpg**
Used in: The Forest section, if no video is supplied
Content: atmospheric forest / border-area landscape
Recommended aspect: 16:9
Minimum resolution: 2400×1350
Type: image

**final-group.jpg**
Used in: Thank You section, if no video is supplied
Content: full group photo, warm light
Recommended aspect: 16:9
Minimum resolution: 2400×1350
Type: image

### Images — topic cards (section 03)

**topic-climate-justice.jpg**
Used in: Topic card 01 — CLIMATE JUSTICE
Content: something evoking inequality/resources/people affected by climate
Recommended aspect: 4:5 (portrait)
Minimum resolution: 1600×2000
Type: image

**topic-eco-anxiety.jpg**
Used in: Topic card 02 — ECO ANXIETY
Content: mood/emotion-led image — could be abstract, a face, weather, water
Recommended aspect: 4:5
Minimum resolution: 1600×2000
Type: image

**topic-artivism.jpg**
Used in: Topic card 03 — ARTIVISM
Content: zine or artwork detail from the training
Recommended aspect: 4:5
Minimum resolution: 1600×2000
Type: image

**topic-storytelling.jpg**
Used in: Topic card 04 — STORYTELLING
Content: hands writing, a circle of people talking, an open notebook
Recommended aspect: 4:5
Minimum resolution: 1600×2000
Type: image

**topic-peace.jpg**
Used in: Topic card 05 — PEACE
Content: connection / dialogue — two people talking, hands together, a group
Recommended aspect: 4:5
Minimum resolution: 1600×2000
Type: image

### Images — Artivism gallery (section 05)

**artivism-01.jpg** through **artivism-05.jpg**
Used in: Artivism gallery
Content: real zines, memes, drawings, artwork or workshop creative outputs
from the training. Do not invent these — use real scans/photos.
Recommended aspect: 3:4 (portrait)
Minimum resolution: 1200×1600 each
Type: image

### Images — Community (section 07)

**group-01.jpg** through **group-05.jpg**
Used in: Community photo grid
Content: participant portraits / group moments (group-01 is shown larger —
pick your strongest image for that slot)
Recommended aspect: 1:1 (square)
Minimum resolution: 1200×1200 each
Type: image

### Images — Memories (section 08)

**memory-01.jpg**, **memory-02.jpg**, **memory-03.jpg**
Used in: "What we take with us" full-bleed collage
Content: three strong, high-contrast photos from across the whole training
Recommended aspect: 3:4 or 4:5 (they fill full-height columns on desktop)
Minimum resolution: 1600×2000 each
Type: image

---

## 6. Notes

- All backgrounds use `prefers-reduced-motion` handling in `globals.css` —
  users who've asked their OS for reduced motion get near-instant
  transitions everywhere.
- The horizontal topic-card scroll (section 03) is the *only* place the
  page scrolls sideways; every other section is a normal vertical page —
  there is no unintended horizontal overflow.
- Images use plain `<img>` (not `next/image`) on purpose, so the
  missing-asset placeholder can render cleanly without Next's build-time
  image checks failing on files that don't exist yet.
