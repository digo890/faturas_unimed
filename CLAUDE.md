# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static HTML/CSS/JS portal for **Seguros Unimed** billing management. No build step, no framework, no package manager — open the HTML files directly in a browser.

Pages:
- `index.html` — home with quick-access shortcuts
- `Faturas.html` — main invoices dashboard (~2600 lines, all-in-one)

## Architecture

### Design tokens
All visual primitives live in `colors_and_type.css` as CSS custom properties on `:root`. **Every new HTML file must import this first.** Never use raw hex values or hard-coded sizes in markup — always reference a token.

### Styling convention
Each page is self-contained: component styles are written inline in a `<style>` block inside the HTML file, consuming tokens from `colors_and_type.css`. There is no shared component CSS — the design system provides tokens and documentation, not shared classes.

### JavaScript
Vanilla JS, no libraries. State is managed with:
- Class toggles (`.open`, `.selected`, `.active`) on DOM elements
- Module-scope `const`/`let` variables for transient session state
- `data-*` attributes for associating data to DOM nodes (e.g. `data-tab`, `data-key`)

Pattern for rendering: functions like `renderInvoices()` and `renderInsight()` regenerate HTML and inject it into a container — no virtual DOM or diffing.

### Design system reference files (read-only)
`design_system_claude/` contains documentation and specimens — don't edit these when building product screens:
- `README.md` — voice/tone, color rules, spacing, iconography
- `skill.md` — quick decision table for common design questions
- `ui_kit.html` — component catalog; copy markup from here when building new components
- `brand.html` — logo lockups and SVG symbol data

## DSU rules (mandatory)

**Icons:** Phosphor Icons only, two weights: `ph` (default) and `ph-fill` (active states). Load via:
```html
<script src="https://unpkg.com/@phosphor-icons/web@2.1.2"></script>
```
Sizes: 16px (inline), 24px (default), 32px (cards/hero). Never mix weights on the same surface.

**Color:**
- Primary CTAs → `--color-primary` (#002D74, corporate blue)
- Green (`--color-green`) → toggles-on, positive feedback, progress fills. **Never** for CTA buttons
- Feedback colors always paired with their `-surface` variant for backgrounds

**Typography:** Inter everywhere (loaded via `colors_and_type.css`). Use semantic type classes (`.heading-xs`, `.label-md-2`, `.description`, etc.) rather than raw `font-size`/`font-weight`.

**Spacing:** 4px baseline grid. Use `--space-*` tokens. Card internal padding: 24px. Section gaps: 80px.

**Radii:** tags 4px, chips/small buttons 8px, cards/modals/primary buttons 16px, avatars/icon-buttons 9999px.

## Content rules (pt-BR)

- All copy in Portuguese, informal "você"
- Currency: `R$ 1.234,56` — space after `R$`, period thousands, comma decimals
- Dates: `DD/MM/AAAA` or `21 de abril de 2026`
- Error messages: name what failed, not the technology. "Não conseguimos carregar…" not "Erro 500"
- Button labels: verb in infinitive, no period. Avoid standalone "OK", "Enviar", "Confirmar"
- Canonical product names: **Unimed**, **Seguros Unimed**, **Super App** (never UNIMED in running text)

## Layout scaffold

```html
<link rel="stylesheet" href="colors_and_type.css">
<script src="https://unpkg.com/@phosphor-icons/web@2.1.2"></script>
<div style="display:flex">
  <aside class="sidemenu"><!-- 80px wide, sticky, from ui_kit.html --></aside>
  <main style="flex:1">
    <div class="topbar"><!-- 80px tall --></div>
    <div style="padding:40px 64px"><!-- content --></div>
  </main>
</div>
```

## Checklist before finishing a screen

- [ ] No raw hex values or hard-coded sizes — only tokens
- [ ] Every interactive element has hover, focus, and disabled states
- [ ] All copy reviewed for Unimed voice (warm, direct, calm)
- [ ] Phosphor Icons only; no mixed weights on the same surface
- [ ] Touch targets ≥ 48px
