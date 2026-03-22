// Mock Post Data
export const posts = [
    {
        id: 1,
        title: "The Future of Spatial Interfaces",
        excerpt: "Exploring how liquid glass and depth map to human intuition in digital spaces.",
        date: "Oct 24, 2026",
        tags: ["Design", "XR", "UI/UX"],
        imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
        content: `The transition from flat-screen interfaces to spatial computing requires a fundamental rethinking of how we interact with digital content.

## The Glassmorphism Evolution
Glassmorphism has been a popular design trend for a few years, but its true potential is unlocked in 3D environments. By utilizing depth-mapping, translucency, and light refraction, designers can create interfaces that feel physically present in the user's environment.

### Key Principles
- **Materiality:** Objects should look and behave somewhat like physical glass.
- **Depth:** Layering content helps establish a clear visual hierarchy.
- **Context:** The interface should subtly adapt to its surroundings behind it.

As we move forward, the most successful spatial apps will not simply project 2D apps into 3D space, but completely rethink the metaphors we rely on.`
    },
    {
        id: 2,
        title: "Building Fluid Micro-Interactions",
        excerpt: "A deep dive into Framer Motion, Vanilla CSS, and physics-based animations for the modern web.",
        date: "Sep 12, 2026",
        redirectUrl: "https://www.framer.com/motion/",
        tags: ["Engineering", "Animation", "CSS"],
        imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop",
        content: `Smooth, physics-based micro-interactions define the difference between an application that feels "done" and one that feels "premium."

## Bypassing the Main Thread
When orchestrating complex animations, especially fluid transitions, relying entirely on JavaScript often causes frame drops. Modern CSS capabilities like \`scale3d\`, \`translate3d\`, and custom properties allow us to offload much of this work to the GPU.

> "Performance is the most crucial aesthetic metric."

By blending Framer Motion for logic orchestration with plain CSS transitions for the actual rendering, we hit the sweet spot between maintainability and buttery-smooth 60fps interaction.`
    },
    {
        id: 3,
        title: "Apple's Design Philosophy Decoded",
        excerpt: "Why clarity, deference, and depth matter more than ever in 2026, and how to apply them to your products.",
        date: "Aug 05, 2026",
        tags: ["Case Study", "Product", "Apple"],
        imageUrl: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2000&auto=format&fit=crop",
        content: `Apple's latest software iterations continue to emphasize three core tenants: Deference, Clarity, and Depth.

These principles are not just guidelines; they represent a fundamental shift in how interactive products are manufactured for broad consumer appeal.

## Clarity Over Cleverness
Far too many modern websites prioritize clever scroll-jacking and complex animations over legibility. Apple’s approach strips away the chrome, focusing entirely on typography, distinct grouping, and contrasting hierarchy.

If the user has to think about how to navigate your interface, the design has failed conceptually.`
    },
    {
        id: 4,
        title: "Optimizing WebGL for Mobile Experiences",
        excerpt: "Strategies to maintain 60fps when rendering complex shader effects on low-power devices.",
        date: "Jul 18, 2026",
        tags: ["WebGL", "Performance", "Mobile"],
        imageUrl: "https://images.unsplash.com/photo-1633633280199-35a0ce8f338d?q=80&w=2000&auto=format&fit=crop",
        content: `Rendering rich 3D graphics on mobile browsers is notorious for battery drain and thermal throttling.

Optimizing these shader effects requires a multi-pronged strategy.

## Resolution Scaling
One of the most effective techniques is dynamic resolution scaling. We don't necessarily need to render the WebGL canvas at the native device pixel ratio (like 3x on modern iPhones). Stepping down the resolution slightly before applying a cheap post-processing anti-aliasing pass often yields identical visual results at a fraction of the cost.

Furthermore, gracefully degrading shader complexity based on the device's framerate history ensures a stable experience for everyone.`
    },
    {
        id: 5,
        title: "The Anatomy of a Design System",
        excerpt: "Building scalable and consistent UI components across web and native platforms.",
        date: "Jun 22, 2026",
        tags: ["Design System", "Architecture"],
        imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
        content: `A design system is far more than an expanded UI kit in Figma or a GitHub repository filled with React components.

It's the very language your product team uses to communicate.

## Design Tokens
The foundation of any robust system is design tokens. These abstract values for colors, typography, spacing, and animations allow for centralized control over the brand's aesthetic.

When engineering and design agree on naming conventions (e.g., \`--color-brand-primary\` instead of 'blue'), the friction of translating design to code drops significantly, minimizing technical and aesthetic debt.`
    },
    {
        id: 6,
        title: "Mastering CSS Grid Architectures",
        excerpt: "How to use CSS Grid for complex, fluid, and completely responsive canvas layouts.",
        date: "May 14, 2026",
        tags: ["CSS", "Layout", "Frontend"],
        imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2000&auto=format&fit=crop",
        content: `CSS Grid is undoubtedly the single most powerful layout engine native to the browser, significantly expanding what is possible without JavaScript or complex absolute positioning.

## Asymmetrical Layouts
Grid truly shines when creating complex, magazine-style layouts that look organic rather than strictly regimented.

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-auto-rows: 200px;
}
\`\`\`

By defining flexible templates, we can create systems where items naturally flow and resize into beautiful mosaics on varying screens.`
    },
    {
        id: 7,
        title: "Beyond the Screen: Haptic Feedback",
        excerpt: "Designing for touch and creating interfaces that physically respond to user intent.",
        date: "Apr 03, 2026",
        tags: ["UX", "Haptics", "Mobile"],
        imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
        content: `The screens in our pockets are sheets of identical, frictionless glass. Haptic feedback is the crucial element that re-introduces physical texture to digital interaction.

## Emotional Context via Touch
Think about the slight 'click' when spinning a digital dial or the heavy 'thud' of an error notification. These granular feedback loops provide non-visual confirmation, making the system feel reliable and real.

We are finally moving away from binary buzzing into an era of high-definition, localized tactile pulses that perfectly sync with on-screen visual physics.`
    },
    {
        id: 8,
        title: "Typography in the Spatial Era",
        excerpt: "Readability and visual hierarchy when text floats in 3D space.",
        date: "Mar 11, 2026",
        tags: ["Typography", "XR", "Design"],
        imageUrl: "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?q=80&w=2000&auto=format&fit=crop",
        content: `Setting type for traditional screens is a solved problem. Setting it for an environment where the 'canvas' is the user's living room is heavily uncharted territory.

## Contrast and Legibility
Because the background in spatial UI is completely variable—it could be a white wall or a dark forest floor—typography needs inherent protection.

We rely on vibrant materials (like glass effects) and dynamic shadowing not just for aesthetics, but to guarantee text legibility. Heavy weights, generous line-heights, and specifically tuned tracking are imperative when your text is floating three meters away from the viewer.`
    }
];
