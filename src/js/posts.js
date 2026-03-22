import { posts } from './data.js';

export function renderPosts() {
    renderGrid(posts);
}


function renderGrid(postData) {
    const container = document.getElementById('posts-container');
    if (!container) return;

    container.innerHTML = postData.map((post, index) => {
        const targetUrl = post.redirectUrl ? post.redirectUrl : `post.html?id=${post.id}`;
        const targetAttr = post.redirectUrl ? `target="_blank" rel="noopener noreferrer"` : ``;

        // Highly randomized animation duration and delay for true "random tilt" feel
        const randomDuration = 6 + Math.random() * 5; // between 6s and 11s
        const randomDelay = Math.random() * -10; // Spread out start times wildly

        return `
        <a href="${targetUrl}" ${targetAttr} class="glass-panel glass-spotlight tilt-card reveal-on-scroll rounded-3xl overflow-hidden group cursor-pointer flex flex-col h-full animation-random-tilt" style="display: flex; text-decoration: none; animation-duration: ${randomDuration}s; animation-delay: ${randomDelay}s;">
            
            <!-- Image Container with Parallax Zoom on Hover -->
            <div class="h-48 md:h-56 overflow-hidden relative border-b border-white/5">
                <div class="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img src="${post.imageUrl}" alt="${post.title}" 
                    class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110">
                
                <div class="absolute top-4 right-4 z-20 flex gap-2">
                    ${post.tags.map(tag => `<span class="tag px-3 py-1 text-xs font-medium rounded-full">${tag}</span>`).join('')}
                </div>
            </div>
            
            <!-- Content -->
            <div class="p-4 md:p-6 flex-1 flex flex-col justify-center tilt-content">
                <h3 class="text-xl md:text-2xl font-semibold leading-snug text-[var(--text-main)] transition-all">
                    ${post.title}
                </h3>
            </div>
        </a>
        `;
    }).join('');
}
