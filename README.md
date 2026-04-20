# Unimed DSU — Design System Unimed

The Unimed DSU is the unified visual and interaction language for Unimed's
Super App and web portal ecosystem — covering **Unimed Saúde**,
**Unimed Odonto**, **Seguros Unimed**, and affiliated corporate channels.
Its purpose is to deliver a warm, trustworthy, care-centered experience
that still feels modern, efficient, and unmistakably Brazilian.

The system is opinionated: layout uses generous whitespace, color is used
with restraint (corporate blue and Unimed green do the heavy lifting), and
iconography is linear and calm. Everything is built on a 4 px baseline grid
and a set of named semantic tokens — never raw hex values in product code.

## Files in this system

- `colors_and_type.css` — the foundation. Every token (colors, type,
  spacing, radii, sizing, z-index) lives here as CSS custom properties
  on `:root`. Import this file first; every other stylesheet depends on
  its variables.
- `ui_kit.html` — the component library: buttons, inputs, tags, shortcut
  cards, product cards, side menu, footer, toggles, modals, toast. Each
  component is shown in its primary states.
- `brand.html` — logo suite (Unimed symbol, Unimed Saúde & Odonto, Seguros
  Unimed, ANS seal) and brand-asset usage rules.
- `preview_colors.html`, `preview_type.html`, `preview_spacing.html` — at-a-glance
  visual specimens for the foundations.
- `skill.md` — quick instructions for using DSU components when designing
  new screens.
- `assets/` — brand marks and iconography used across the system.

---

## CONTENT FUNDAMENTALS

### Voice & tone

Unimed writes like a competent friend who genuinely wants you to take care
of yourself. Warm, direct, calm under pressure. Portuguese (pt-BR) is the
primary language; all copy must be written in Portuguese first and only
localized after.

- **Clear over clever.** "Marcar consulta" beats "Agendamento simplificado".
- **Humanize care.** Use people's names, not roles. "Juditte Silveira"
  over "Usuário #3821".
- **No alarmism.** Even in error states, avoid words like "falha",
  "proibido", "erro grave". Prefer "não conseguimos...", "tente novamente".
- **Active voice, short sentences.** Aim for 12–16 words per sentence.
- **Second-person informal (você)**, never "tu" or "o(a) senhor(a)".

### Product names & capitalization

Always write these in their canonical form — they are brand marks, not
descriptors:

- **Unimed** — never "UNIMED" in running text
- **Unimed Saúde**, **Unimed Odonto**, **Seguros Unimed**
- **Super App** — two words, both capitalized
- **Cartão virtual** — lowercase
- ANS, CRO/SP, SUSEP — acronyms stay uppercase

### Numbers, money, dates (pt-BR)

- Currency: `R$ 1.234,56` — space after `R$`, period thousands, comma decimals
- Dates: `DD/MM/AAAA` (`21/04/2026`) or `21 de abril de 2026` in long form
- Phone: `(11) 98328-2389`, `0800 001 2565` (no dot in 0800)
- CPF/CNPJ: masked with the canonical dots and dashes
- Times: 24-hour — `14:30`, never `2:30 PM`

### Error & empty-state patterns

Every empty state needs three ingredients: **what happened**, **why it
matters**, **what to do next**. Example:

> **Você ainda não tem consultas agendadas.**
> Assim que marcar, elas aparecem aqui.
> **Agendar consulta →**

For network errors: name the action that failed, not the underlying
technology. "Não conseguimos carregar seus benefícios" — not
"Erro 500 no servidor".

### Button copy

Verbs in the infinitive, no period. Prefer the exact action ("Salvar",
"Marcar consulta", "Baixar 2ª via"). Avoid "OK", "Enviar", "Confirmar"
as standalone labels.

---

## VISUAL FOUNDATIONS

### Brand DNA

Unimed's visual identity is built on three pillars:

1. **Trust** — stable, grounded typography; institutional navy (`#002D74`)
   as the dominant brand color; content aligned to a strict grid.
2. **Care** — Unimed green (`#00995D`) used for affirming states, progress,
   and selection. Reserve for moments that feel positive.
3. **Warmth** — soft neutrals (`#F8F9FC`, `#E6EAF2`), generous radii on
   cards (16 px), tactile but never glossy surfaces.

Avoid: heavy drop shadows, gradients, skeuomorphism, dark mode as default,
purely decorative illustration. The system is light-first.

### Color

See `preview_colors.html` for the full palette. Usage rules:

- **Corporate Blue** (`--color-primary: #002D74`) — primary actions,
  links, active nav, headings on light surfaces.
- **Unimed Green** (`--color-green: #00995D`) — positive feedback,
  toggles-on, progress fills, hero art accents. **Never** for primary CTA
  buttons in portal screens (use blue). Green CTAs are for consumer-app
  health contexts only.
- **Neutrals** — text hierarchy runs 900 → 600 → 500. `--color-neutral-500`
  is the floor for placeholder/inactive text on white.
- **Feedback colors** (`info`, `positive`, `warning`, `negative`,
  `promote`) — always paired with their `-surface` variant for the
  background fill. Never use saturated feedback colors as large area fills.
- **Accessibility** — all text/background pairings in this system target
  WCAG AA 4.5:1. Blue on white: 11.8:1 ✓. Green on white: 4.6:1 ✓ (body
  minimum). Avoid green as text smaller than 16 px.

### Typography

- **Inter** (Google Fonts) is used **everywhere** — headings, body,
  UI labels, buttons, inputs. Unimed Sans is proprietary and not
  available publicly; Inter is the sanctioned substitute and is loaded
  via Google Fonts in `colors_and_type.css`. The token
  `--font-family-brand` and `--font-family-system` both resolve to Inter.
- **Ratio:** major third (1.25×) — 12 → 14 → 16 → 20 → 24 → 32 → 40 → 48 → 64 px.
- **Line-heights:** `1.24` for headings, `1.32` for dense UI labels,
  `1.6` for body paragraphs. Single-line labels: `1`.
- **Weights used:** 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold — sparingly).
- **Letter-spacing:** 0 everywhere. Uppercase is not used for UI copy.

See `preview_type.html` for the full type scale.

### Spacing & grid

Everything snaps to a **4 px baseline**. The token set exposes:
`4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80` px. Macro-layout: 12-column
grid, 24 px gutters, 64 px outer margin on desktop (`1440` frame width,
`1320` content column after a `120 px` side menu).

- Section blocks (home hero, shortcuts, footer) are separated by **80 px**.
- Cards have **24 px** internal padding, **24 px** gap between cards.
- Form fields stack with **16 px** vertical gap; label-to-input gap is
  **8 px**.

### Radii

- `4 px` — tags, inline inputs
- `8 px` — small buttons, chips
- `16 px` — all cards, modals, primary buttons (pill when height = 64 px),
  shortcut tiles
- `9999 px` — avatars, toggle thumbs, icon buttons

### Elevation

DSU is mostly flat. Three levels only:

- `--shadow-card` — default card, barely visible
- `--shadow-floating` — dropdowns, non-modal floating panels
- `--shadow-dialog` — modals, critical toasts

---

## ICONOGRAPHY

The DSU uses the **[Phosphor Icons](https://phosphoricons.com/)** library
— a flexible, consistent, open-source set with six weight variants. We
use two weights only:

- `ph` (Regular) — **default**. Linear, 1.5 px stroke equivalent.
- `ph-fill` — for active nav states and filled accents only.

Load via CDN in every HTML file:

```html
<script src="https://unpkg.com/@phosphor-icons/web@2.1.2"></script>
```

Then use inline:

```html
<i class="ph ph-heartbeat" style="font-size:24px"></i>
<i class="ph-fill ph-house" style="font-size:24px"></i>
```

### Rules

- **Sizes:** 16 (inline with small text), 24 (default, nav, inputs),
  32 (shortcut cards / hero ornaments).
- Icons inherit `currentColor` — a blue link and a neutral nav item use
  the same glyph.
- **Pairing with text:** 8 px gap between icon and label at 16 px text;
  12 px at 20 px text.
- **Do not:** mix weights in the same surface, apply drop shadows, or
  introduce duotone variants. Never fill a Regular icon by adding a
  background — swap to the `ph-fill` class instead.
- Only use the **Bold**, **Duotone**, or **Thin** variants with explicit
  approval — they break the system's rhythm.

### Canonical mapping

| Context | Icon |
|---|---|
| Home / nav | `ph-house` / `ph-fill ph-house` |
| Saúde | `ph-heartbeat` |
| Odonto | `ph-tooth` |
| Financeiro | `ph-piggy-bank` |
| Atendimento | `ph-headset` |
| Help | `ph-question` |
| Chat | `ph-whatsapp-logo` |
| Notifications | `ph-bell` |
| Search | `ph-magnifying-glass` |
| Chevron nav | `ph-caret-left` / `ph-caret-right` |
| Download | `ph-download-simple` |
| Close | `ph-x` |

The Unimed "three-flame" symbol (`assets/unimed-symbol.svg`) is **not**
a Phosphor icon — it's the brand mark, used only in approved placements
(nav header, avatars, app splash, footer).

---

## COMPONENT PRINCIPLES

1. **Touch target ≥ 48 px.** Every interactive element. Icons can be
   smaller, but their tappable frame cannot.
2. **One primary action per screen.** The filled blue button.
   Secondary actions are text links or outlined buttons.
3. **State always visible.** Hover, focus, pressed, loading, disabled,
   and error are all designed — never skip any.
4. **Empty → one → many.** Every list must have an empty state, a
   single-item state (no skeleton shimmer needed), and a full state.
5. **Prefer disclosure over removal.** If content must go, collapse it
   behind a clear label — don't hide it unless the user chose to.

---

## WHEN IN DOUBT

- Reach for a token, not a value. If a needed value doesn't exist as a
  token, you probably don't need that value.
- When mocking a new screen, start from `ui_kit.html` — copy the
  relevant component, never re-draw it.
- Match the Home-page reference (`brand.html` captures its anatomy) for
  layout rhythm on portal screens.
- For consumer-app (mobile) screens, the shortcut-tile and green-hero
  patterns from the Home page are the anchor.
