

# Enhanced Animations Plan

## Overview
Add micro-animations throughout the site and one major "big animation" — a full-screen animated transition overlay that plays when the user scrolls past the hero section, creating a dramatic reveal of the rest of the site.

## The Big Animation: Radial Wipe Transition
A radial light pulse that expands from the center as the user scrolls past the hero — like a shockwave that "unveils" the content below. Built with framer-motion's scroll-linked transforms.

- New component `ScrollWipe.tsx` placed between HeroSection and the first ScrollReveal in Index.tsx
- As scroll reaches it, a circle expands from center outward with a bright white/primary glow, then fades, revealing content beneath
- Uses `useScroll` + `useTransform` for scroll-linked sizing and opacity

## Micro-Animations Added Everywhere

### HeroSection
- Floating particle dots in the background (5-8 small circles with infinite drift animations)
- App Store badge gets a subtle shimmer/shine sweep effect on loop
- Heading text uses staggered letter-by-letter or word-by-word fade-in

### HowItWorks
- Section heading gets a gradient text color sweep animation
- Feature cards get a hover lift + glow intensify effect (`whileHover`)
- Add a connecting line/path animation between the 3 cards (animated SVG dashed line)

### LinkedInTestimonials
- Add floating LinkedIn reaction emojis (👍💡🔥) drifting up in the background
- Card hover effect with slight tilt (3D perspective transform)

### AppPreview
- Phone mockup gets a subtle floating animation (continuous up/down bob)
- Add a pulsing glow ring behind the phone
- Text content bullets animate in with staggered delays on view

### InteractiveDemo
- Chat bubbles get a typewriter effect for the answer text
- Add animated dots between Q&A transitions

### FinalCTA
- Pulsing concentric rings animation behind the logo (radar-like)
- App Store badge shimmer effect (same as hero)

### Footer
- Links animate in with staggered fade on scroll into view

## Files Modified
1. **`src/components/ScrollWipe.tsx`** — New: the big radial wipe transition component
2. **`src/pages/Index.tsx`** — Add ScrollWipe between hero and content
3. **`src/components/HeroSection.tsx`** — Floating particles, word-stagger heading, badge shimmer
4. **`src/components/HowItWorks.tsx`** — Card hover effects, connecting line SVG
5. **`src/components/LinkedInTestimonials.tsx`** — Floating reactions, card tilt
6. **`src/components/AppPreview.tsx`** — Phone float/bob, glow ring, staggered text
7. **`src/components/InteractiveDemo.tsx`** — Typing indicator dots between transitions
8. **`src/components/FinalCTA.tsx`** — Pulsing rings behind logo
9. **`src/components/Footer.tsx`** — Staggered link reveal
10. **`src/index.css`** — Shimmer keyframe, any new utility classes

