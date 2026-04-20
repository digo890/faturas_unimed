# Unimed DSU — How to design with this kit

When asked to design a Unimed screen, portal page, or Super-App view, work
from these files — do not invent new tokens or components.

## Files you always need

- `colors_and_type.css` — import this FIRST in any new HTML file.
  `<link rel="stylesheet" href="colors_and_type.css">` pulls in every
  token (colors, type classes, spacing, radii, shadows, sizes).
- `ui_kit.html` — the component catalog. Copy markup directly; classes
  are self-contained within that file's `<style>` block and the tokens.
- `brand.html` — logo lockups and the Unimed symbol path data
  (three-flame SVG).
- `README.md` — voice/tone rules for all Portuguese copy.

## Decision shortcuts

| Question | Answer |
|---|---|
| Primary CTA color? | Corporate Blue `#002D74` (`--color-primary`) |
| Green for CTAs? | No — green is reserved for selected/positive/progress |
| Card radius? | 16 px (`--radius-lg`) |
| Default button height? | 64 px desktop, 48 px mobile/compact |
| Default input height? | 64 px |
| Section gap on home / portal? | 80 px (`--space-11`) |
| Side menu width? | 120 px fixed |
| Portal grid? | 12 col, 24 px gutter, 64 px outer margin, 1320 px content |
| Heading font? | Unimed Sans (fallback Nunito Sans) |
| UI label font? | Inter |

## Typical home / portal scaffold

```html
<link rel="stylesheet" href="colors_and_type.css">
<div style="display:flex">
  <aside class="sidemenu"><!-- from ui_kit.html --></aside>
  <main style="flex:1;padding:80px 64px;display:flex;flex-direction:column;gap:80px">
    <section class="hero">…</section>
    <section class="shortcuts">…</section>
    <footer>…</footer>
  </main>
</div>
```

## Content rules (short version)

- Portuguese pt-BR first, informal "você".
- No all-caps UI copy. Avoid "OK", "Enviar", "Confirmar" alone.
- Dates `DD/MM/AAAA`, phones `(11) 98328-2389`, money `R$ 1.234,56`.
- Error messages always say *what happened* + *what to do next*, never
  expose technology ("Erro 500" → "Não conseguimos carregar…").

## Before shipping a mock

- [ ] Every interactive element has a focus state
- [ ] No hex values in markup — only tokens via CSS variables
- [ ] Headings use Unimed Sans; buttons/inputs use Inter
- [ ] Copy reviewed for Unimed voice (warm, clear, calm)
- [ ] ANS footer present on Saúde/Odonto screens
