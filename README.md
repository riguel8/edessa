# MyEdessa — GLP-1 Weight Loss Website

A modern, premium, conversion-focused telehealth website for MyEdessa — physician-guided GLP-1 weight loss treatment. Design inspired by Amble, Trimi, and Cora with MyEdessa's warm, natural branding.

## Project Background

This project was originally started as client work for MyEdessa. After delivery, the client went unresponsive and communication was never resumed, so the project was never officially handed off, launched, or fully completed. What's shared here is **not the full original build** — it's my own personal redesign / modified version, including some additional pages based on the client's original requests, put together to showcase front-end development and conversion-focused UX/UI work. All code, structure, and design decisions here are my own.

## Pages

### Homepage (`index.html`)
Hero (dual CTA), Trust Section (5 badges), How It Works (3 steps), Featured Treatments (3 cards), Benefits/Why Choose (6 cards), Science section, Stats, Testimonials, FAQ (6 items), Contact (3 cards), Final CTA

### About Page (`about.html`)
Hero, Our Story (two-col), Mission (primary banner), Our Values (Trust/Accessibility/Innovation/Patient-first), Why Patients Choose Us (4 differentiators), Team (3 profiles), Our Process (4 steps), Medical Standards, Testimonials, CTA

### Product Details (`product.html`)
Product Hero (image + pricing table), Overview (two-col), Key Benefits (6 cards), Treatment Process (3 steps), Eligibility (qualify/not-qualify split), Safety Information (warnings + side effects), Pricing (dual tables: Semaglutide + Tirzepatide), Results Stats, FAQ (6 items), CTA

### Additional Pages (not fully developed yet)
> Note: these were requested as part of the original client scope but were never completed before the client became unreachable. They are **not fully developed** — listed here as a placeholder/in-progress list, to be built out further.
- e.g. `treatments.html` — full treatments listing/comparison page
- e.g. `how-it-works.html` — dedicated step-by-step process page
- e.g. `contact.html` — standalone contact/support page

## Navigation Structure

Home · About Us · Treatments · How It Works · FAQs · Contact · **Get Started** (CTA)

## Tech Stack

- HTML5 (semantic, ARIA labels, SEO-friendly)
- CSS3 (custom properties, Flexbox, Grid, mobile-first responsive)
- Vanilla JavaScript (IntersectionObserver animations, FAQ accordion, smooth scroll)
- Google Fonts (DM Serif Display + Inter)
- Zero external dependencies

## Project Structure

```
eddesa/
├── css/
│   └── style.css        # Complete design system (~1600 lines)
├── js/
│   └── main.js          # Nav, FAQ, scroll animations, smooth scroll
├── index.html           # Homepage
├── about.html           # About page
├── product.html         # Product details page
└── README.md
```

## Brand System

| Token | Value |
|-------|-------|
| Primary | `#5c6d4e` (Olive/Sage Green) |
| Secondary | `#8b7355` (Warm Brown) |
| Accent | `#6b8f5e` (Natural Green) |
| Background | `#f5f0e8` (Warm Cream) |
| Headings | DM Serif Display (serif) |
| Body | Inter (sans-serif) |

## Running Locally

```bash
npx http-server -p 8080
# Open http://localhost:8080
```

## Component Library

- **Ticker bar** — scrolling trust indicators
- **Sticky nav** — desktop links + mobile hamburger menu
- **Trust bar** — badge cards with icons
- **Treatment cards** — image placeholder, price, title, CTA
- **Value/benefit cards** — icon + title + description
- **Team cards** — avatar initials, name, role, bio
- **Process cards** — numbered step cards (4-col grid)
- **Differentiator rows** — circular icon + text pairs
- **Pricing tables** — plan/price rows with CTA
- **Safety section** — warning box with bullet lists
- **Contact cards** — icon + info (email/chat/phone)
- **Testimonial cards** — stars, quote, author
- **FAQ accordion** — expand/collapse with + icon
- **CTA banner** — primary-bg rounded block
- **Stats row** — number + label (4-col grid)
- **Two-column layout** — text + visual split
- **Footer** — 4-col grid with social icons
- **Fade-in animations** — IntersectionObserver triggered
- **Zero inline styles** — all CSS in single shared stylesheet