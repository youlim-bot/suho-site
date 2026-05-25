# Design System Strategy: High-End Editorial IT

## 1. Overview & Creative North Star
The objective for this design system is to move beyond the "commodity" look of typical IT service providers. We are not just building a website; we are curating a digital headquarters for SUHO Co., Ltd. 

**Creative North Star: "The Architectural Cloud"**
This system treats digital space as physical architecture. Just as a modern Tokyo skyscraper uses glass, light, and structural rhythm to convey strength and transparency, this design system utilizes intentional asymmetry and tonal depth to represent Cloud and Infrastructure. We break the rigid, boxed-in "template" feel by overlapping elements and using a high-contrast typography scale that feels like a premium technology journal.

## 2. Colors & Surface Philosophy
The palette is rooted in a deep, authoritative blue (`primary: #002fae`), balanced by a breathable, high-end neutral base (`surface: #fbf9f8`).

### The "No-Line" Rule
To achieve a signature, premium feel, **1px solid borders are strictly prohibited for sectioning.** Traditional lines create visual clutter and "trap" the content. Instead, define boundaries through:
*   **Background Color Shifts:** Use the `surface-container` tiers. For instance, a section with content might sit on `surface-container-low` to distinguish itself from the main `surface` background.
*   **Subtle Tonal Transitions:** Shift from `surface` to `surface-container-lowest` to create a natural, "carved-out" look for feature sections.

### Surface Hierarchy & Nesting
Treat the UI as a series of layered materials—stacked sheets of fine paper or frosted glass. 
*   **Primary Layer:** `surface` (The foundation).
*   **Secondary Layer:** `surface-container-low` (Subtle grouping of content).
*   **Tertiary Layer:** `surface-container-highest` (Used for high-contrast callouts or navigation bars).

### The "Glass & Gradient" Rule
To signify "Modern IT Solutions," floating elements (like cards or navigation) should utilize a **Glassmorphism** effect. 
*   **Effect:** Semi-transparent `surface` colors (e.g., 80% opacity) combined with a `backdrop-blur` of 20px-40px. 
*   **Signature Textures:** For Hero sections and primary CTAs, use a linear gradient from `primary` (#002fae) to `primary_container` (#2047d3) at a 135-degree angle. This adds a "digital soul" and depth that flat hex codes cannot replicate.

## 3. Typography
We use a high-contrast scale to create an editorial rhythm. Large, bold headlines convey authority, while generous leading (line-height) in body text ensures readability and a premium "open" feel.

*   **Display Scale (`display-lg`: 3.5rem):** Reserved for hero titles. Use tight letter-spacing (-0.02em) to create a sophisticated, "locked-in" look.
*   **Headline Scale (`headline-md`: 1.75rem):** Used for service categories like "Infrastructure" or "Software Development."
*   **Body Scale (`body-lg`: 1rem):** The workhorse. Always ensure high contrast using `on_surface` (#1b1c1c).
*   **Label Scale (`label-md`: 0.75rem):** Used for metadata, breadcrumbs, and small utility text. 

**The Hierarchy Strategy:** Use `display` and `headline` scales to "anchor" the user's eye. Pair a large `display-lg` headline with a `body-md` sub-header to create a dramatic sense of scale.

## 4. Elevation & Depth
In this design system, depth is achieved through **Tonal Layering** rather than structural shadows.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section. This creates a soft, natural "lift" that feels integrated into the architecture.
*   **Ambient Shadows:** If an element must float (like a dropdown or modal), use a shadow with a blur radius of 40px-60px at 6% opacity. The shadow color should be a tinted version of `on_surface` rather than pure black, mimicking natural light.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline_variant` token at **20% opacity**. This creates a "ghost border" that guides the eye without cluttering the layout.

## 5. Components

### Buttons
*   **Primary:** Fill with the signature gradient (`primary` to `primary_container`). Use `rounded-md` (0.375rem) corners. The text should be `on_primary` (#ffffff) in `title-sm`.
*   **Secondary:** No fill. Use a "Ghost Border" of `primary` at 40% opacity. 
*   **Tertiary:** Text-only in `primary`, with a subtle underline appearing only on hover.

### Cards & Lists
*   **Architecture:** Cards must never have a 1px border. Use `surface-container-lowest` for the card background.
*   **Spacing:** Use `spacing-6` (2rem) for internal padding to ensure the content "breathes."
*   **Lists:** Forbid divider lines. Separate items using `spacing-4` (1.4rem) of vertical whitespace or alternating `surface` and `surface-container-low` backgrounds.

### Input Fields
*   **State:** Default inputs use `surface-container-highest` background with a subtle `outline-variant` at the bottom only.
*   **Focus:** Transition the bottom border to `primary` (#002fae) and increase the background brightness to `surface-container-lowest`.

### Sophisticated Iconography
*   Icons should be "Duotone" or "Lightweight Outline" (stroke weight: 1.5px). 
*   Use `secondary` (#00677d) for icon accents to signify modern IT solutions.

### Infrastructure Nodes (Contextual Component)
For Cloud and Infrastructure pages, use an "Infrastructure Node" component: a semi-transparent card containing a technical icon and a `label-sm` tag, connected by ultra-thin (10% opacity) "Ghost Lines" to represent connectivity.

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical layouts. For example, a hero image might bleed off the right edge of the screen while the text is aligned to a structured grid on the left.
*   **Do** use `spacing-20` (7rem) or `spacing-24` (8.5rem) between major sections to emphasize a premium, gallery-like experience.
*   **Do** ensure all Japanese and Korean text uses the `Noto Sans JP` weightings correctly (avoid faux-bolding).

### Don't:
*   **Don't** use "Drop Shadows" on every card. Rely on background color shifts first.
*   **Don't** use high-contrast dividers. If you feel you need a line, use a background color change instead.
*   **Don't** crowd the screen. If a section feels "busy," increase the whitespace using the `spacing-16` (5.5rem) token.
*   **Don't** use generic stock photography of "people smiling at laptops." Use abstract, high-quality architectural or tech-texture imagery (e.g., macro shots of server cooling or data patterns).