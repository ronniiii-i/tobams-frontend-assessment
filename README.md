# Tobams Group - Frontend Intern Assessment

A production-ready, pixel-perfect, and fully responsive static page implementation built using **Next.js (App Router)** and **Tailwind CSS (v4)** based on the provided Figma design guidelines.

## Live Links & Resources

* **Live Deployment URL:** [https://tobams-frontend-assessment-ashen.vercel.app/](https://tobams-frontend-assessment-ashen.vercel.app/)
* **GitHub Repository:** [https://github.com/ronniiii-i/tobams-frontend-assessment](https://github.com/ronniiii-i/tobams-frontend-assessment)
* **Figma Design:** [Figma Link](https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1)

---

## Tech Stack & Features

* **Framework:** Next.js 15+ (App Router) for optimized server-side rendering, layout management, and static delivery.
* **Styling:** Tailwind CSS v4 utilizing modern `@theme` inline mapping for Figma variables.
* **Language:** TypeScript for robust, type-safe development.
* **Typography:** Optimized loading via `next/font/google` (`Nunito` & `Nunito Sans`).
* **Images:** High-performance, lazy-loaded, and responsive image management using `next/image`.
* **Accessibility (a11y):** Semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), custom ARIA attributes, keyboard-navigable elements, and descriptive image `alt` texts.

---

## Getting Started

To run this project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/ronniiii-i/tobams-frontend-assessment.git
cd tobams-frontend-assessment
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

### 4. Open the App

Navigate to [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Project Structure

The project strictly adheres to modular and clean architecture principles. Monolithic page files have been broken down into logical, reusable presentation and structural components:

```txt
src/
├── app/
│   ├── globals.css         # Theme overrides and global font assignments
│   ├── layout.tsx          # Font optimization setup and base layout structure
│   └── page.tsx            # Seamless assembly of modular sections
└── components/
    ├── CTA.tsx             # Call to Action block
    ├── Footer.tsx          # Complex multi-column responsive footer
    ├── Hero.tsx            # Impactful landing section with optimized background
    ├── LMS.tsx             # Learning Management System section
    ├── MDP.tsx             # Management Development Program details
    ├── Navbar.tsx          # Client-side header with interactive mobile slide-out
    ├── Testimonial.tsx     # Dynamic, responsive testimonial carousel with touch resize observers
    ├── TrainingConsultant.tsx
    ├── TransformationHub.tsx
    ├── WorkTogether.tsx
    └── UI/                 # Reusable vector icons (SVG)
        ├── ArrowUpIcon.tsx
        └── ListIcon.tsx
```

---

## Design Decisions & Technical Assumptions

### 1. Dry Typography Architecture

A thorough review of the Figma typography revealed a specific pattern: headers (`h1` through `h6`) exclusively use **Nunito**, while body copy and general layout items utilize **Nunito Sans**.

Rather than repeating Tailwind font utility classes (`font-nunito` / `font-nunito-sans`) on every header and element, a clean global CSS structure was established in `src/app/globals.css`:

```css
body {
  font-family: var(--font-nunito-sans);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-nunito);
}
```

This minimizes repetitive Tailwind code, keeps component files cleaner, and centralizes typographic design system logic.

### 2. Figma Expansion & Enhancements

While maintaining precise fidelity to the static layouts, several high-value interaction additions were implemented to elevate the project to production-ready standard:

* **Sticky Header Navigation (Usability Assumption):** The Figma layout did not explicitly specify navigation bar behavior during vertical scrolling. To ensure professional usability, a persistent, hardware-accelerated sticky header (`sticky top-0 z-50`) was implemented. This allows visitors to navigate the site seamlessly from any section without needing to scroll back to the top of the viewport.
* **Functional Mobile Menu (UX Enhancement):** The Figma design only presents a hamburger icon, with no active state or mobile navigation menu guidelines. To maintain brand consistency, the official Tobams Group site structure was analyzed, and an elegant, responsive mobile navigation overlay was built. As a best practice tweak, the burger icon transitions seamlessly into a functional **"X" Close** icon when the drawer is active, making mobile navigation highly intuitive.
* **Micro-interactions & Visual Polish:** Smooth hover states (`transition-colors`, `hover:text-pink`) were added to the complex footer links, header navigation items, and action buttons. This provides visual polish and tactile interactivity, which significantly improves the end-user experience (UX).

### 3. Responsive Breakpoint Optimization

Responsive scaling targeting **425px (Mobile)**, **768px (Tablet)**, and **1280px+ (Desktop)** was built natively. No custom media query overrides were written. Instead, Tailwind CSS's native responsive utility prefixes (`sm:`, `md:`, `lg:`, `xl:`) were utilized for a fluid and robust screen scaling experience.

---

## AI Assistance Disclosure

In alignment with the assessment instructions requesting honest documentation of AI tool usage:

* **Responsiveness Styling:** AI was utilized to help refine media query sizing strategies (`sm:`, `md:`, `lg:`, `xl:`) to ensure seamless breakpoint transitions as viewport widths change.
* **Layout Scaffolding:** AI helped generate initial structural containers for some components.
* **Verification Policy:** At no stage of the project was code copy-pasted blindly. Every line of code generated was thoroughly reviewed, customized to match the design variables, optimized for rendering, and integrated manually to ensure consistent styling, cleanliness, and maximum execution quality.
* **Documentation:** AI was also utilized to assist in formatting, editing, and structuring this documentation (README.md) to ensure all evaluation rubrics were clearly addressed.

---

## Known Issues

* **None:** The application is fully optimized, completely free of console errors, has no dead imports, and functions correctly across all specified viewpoints (Mobile, Tablet, Desktop) without bugs.
