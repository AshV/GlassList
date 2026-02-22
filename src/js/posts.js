import { posts } from './data.js';

export function renderPosts() {
    renderFilterBar();
    renderGrid(posts);
}

function renderFilterBar() {
    const filterBar = document.getElementById('filter-bar');
    if (!filterBar) return;

    filterBar.innerHTML = `
        <div class="glass-panel rounded-2xl p-4 flex flex-col sm:flex-row justify-between items-center gap-4 backdrop-blur-xl">
            <div class="flex items-center gap-3 w-full sm:w-auto">
                <button class="px-4 py-2 rounded-xl bg-[var(--text-main)] text-[var(--bg-color-main)] font-medium transition-colors">All</button>
                <button class="px-4 py-2 rounded-xl text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors">Design</button>
                <button class="px-4 py-2 rounded-xl text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors">Engineering</button>
            </div>
            
            <div class="relative w-full sm:w-64 group">
                <i data-lucide="search" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)] group-focus-within:text-[var(--text-main)] transition-colors"></i>
                <input type="text" placeholder="Search insights..." 
                    class="w-full bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl py-2 pl-10 pr-4 text-[var(--text-main)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--glass-highlight)] transition-all">
            </div>
        </div>
    `;
}

function renderGrid(postData) {
    const container = document.getElementById('posts-container');
    if (!container) return;

    container.innerHTML = postData.map((post, index) => `
        <a href="post.html?id=${post.id}" class="glass-panel glass-spotlight tilt-card rounded-3xl overflow-hidden group cursor-pointer flex flex-col h-full" style="display: flex; text-decoration: none; animation: slideUp 0.6s ease forwards ${index * 0.1}s; opacity: 0; translate: 0 20px;">
            
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
            <div class="p-4 md:p-6 flex-1 flex flex-col tilt-content">
                <h3 class="text-xl md:text-2xl font-semibold mb-3 leading-snug text-[var(--text-main)] transition-all">
                    ${post.title}
                </h3>
                
                <div class="mt-auto flex items-center text-sm font-medium text-[var(--text-muted)] group-hover:text-current transition-colors">
                    Read Story <i data-lucide="arrow-right" class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"></i>
                </div>
            </div>
        </a>
    `).join('');

    // Add Slide up animation
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes slideUp {
            to {
                opacity: 1;
                translate: 0 0;
            }
        }
    `;
    document.head.appendChild(style);
}
