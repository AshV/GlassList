import { initTheme } from './theme.js';
import { initGlassEffects } from './glassEffects.js';
import { renderHero } from './hero.js';
import { renderPosts } from './posts.js';

// Initialize App
document.addEventListener('DOMContentLoaded', () => {

    // 1. Setup Theme & Environment
    initTheme();

    // 2. Render UI Components
    renderHero();
    renderPosts();

    // 3. Initialize Interactive Effects (needs DOM elements to exist)
    initGlassEffects();

    // 4. Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
