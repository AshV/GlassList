import { initTheme } from './theme.js';
import { initGlassEffects } from './glassEffects.js';
import { posts } from './data.js';

document.addEventListener('DOMContentLoaded', () => {

    // 1. Setup Theme 
    initTheme();

    // 2. Extract Logic and Render
    renderPostPage();

    // 3. Initialize Interactive Effects
    initGlassEffects();

    // 4. Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

function renderPostPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const postIdStr = urlParams.get('id');
    const postId = postIdStr ? parseInt(postIdStr, 10) : 1; // Default to 1 if not set

    const postInfo = posts.find(p => p.id === postId) || posts[0];

    // Set Document Title
    document.title = `${postInfo.title} - Personal Homepage`;

    // Set Open Graph Meta Tags
    const ogTitle = document.getElementById('og-title');
    const ogDesc = document.getElementById('og-desc');
    const ogImage = document.getElementById('og-image');
    const ogUrl = document.querySelector('meta[property="og:url"]');

    if (ogTitle) ogTitle.setAttribute('content', postInfo.title);
    if (ogDesc) ogDesc.setAttribute('content', postInfo.excerpt || `${postInfo.title} - Read more on my personal homepage.`);
    if (ogImage) ogImage.setAttribute('content', postInfo.imageUrl);
    if (ogUrl) ogUrl.setAttribute('content', window.location.href);

    // Render Post Content
    const container = document.getElementById('post-content-container');
    if (container) {
        container.innerHTML = `
            <!-- Cover Image -->
            <div class="w-full h-64 md:h-96 lg:h-[500px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl relative">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none"></div>
                <img src="${postInfo.imageUrl}" alt="${postInfo.title}" class="w-full h-full object-cover z-0">
                <div class="absolute bottom-6 left-6 z-20 flex gap-2">
                    ${postInfo.tags.map(tag => `<span class="tag px-3 py-1 text-xs font-medium rounded-full bg-[var(--glass-bg)] backdrop-blur-md border border-[var(--glass-border)] text-[var(--text-main)] shadow-glass">${tag}</span>`).join('')}
                </div>
            </div>

            <!-- Title and Meta -->
            <div class="flex flex-col gap-3 mt-4">
                <h1 class="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-main)] leading-tight">
                    ${postInfo.title}
                </h1>
                <div class="flex items-center gap-4 text-sm text-[var(--text-muted)] font-medium">
                    <span>${postInfo.date}</span>
                    <span class="w-1 h-1 rounded-full bg-white/20"></span>
                    <span>${postInfo.readTime}</span>
                </div>
            </div>

            <!-- Content -->
            <div class="prose prose-lg max-w-none mt-8 
                        text-[var(--text-main)] 
                        prose-headings:text-[var(--text-main)] 
                        prose-p:text-[var(--text-main)] 
                        prose-a:text-blue-500 hover:prose-a:text-blue-400 
                        prose-strong:text-[var(--text-main)] 
                        prose-ul:text-[var(--text-main)] 
                        prose-ol:text-[var(--text-main)] 
                        prose-li:text-[var(--text-main)] 
                        prose-blockquote:text-[var(--text-main)] prose-blockquote:border-[var(--glass-border)]
                        prose-code:text-[var(--text-main)] prose-code:bg-[var(--glass-bg)] prose-code:rounded prose-code:px-1
                        prose-headings:font-semibold transition-colors duration-1000">
                ${postInfo.content}
            </div>
        `;
    }

    // Prepare Share Button logic
    document.getElementById('share-section').classList.remove('hidden');
    const copyLinkBtn = document.querySelector('.copy-link-btn');
    if (copyLinkBtn) {
        copyLinkBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(window.location.href);
            alert("Link copied to clipboard!");
        });
    }

    // Render Suggested Posts
    renderSuggestedPosts(postInfo.id);
}

function renderSuggestedPosts(currentPostId) {
    const suggestedContainer = document.getElementById('suggested-posts-container');
    const suggestedSection = document.getElementById('suggested-posts-section');
    if (!suggestedContainer || !suggestedSection) return;

    // Filter out current post and pick random 3
    const otherPosts = posts.filter(p => p.id !== currentPostId);

    // Shuffle array
    for (let i = otherPosts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [otherPosts[i], otherPosts[j]] = [otherPosts[j], otherPosts[i]];
    }

    const suggested = otherPosts.slice(0, 3);

    if (suggested.length > 0) {
        suggestedSection.classList.remove('hidden');
        suggestedContainer.style.height = 'auto';

        suggestedContainer.innerHTML = suggested.map((post, index) => `
            <a href="post.html?id=${post.id}" class="glass-panel glass-spotlight tilt-card rounded-3xl overflow-hidden group cursor-pointer flex flex-col h-full !transform-none transition-all hover:scale-[1.02]" style="animation: slideUp 0.6s ease forwards ${index * 0.1}s; opacity: 0; translate: 0 20px;">
                
                <div class="h-40 overflow-hidden relative border-b border-white/5">
                    <div class="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                    <img src="${post.imageUrl}" alt="${post.title}" 
                        class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110">
                </div>
                
                <div class="p-4 flex-1 flex flex-col tilt-content relative z-20 bg-black/10 backdrop-blur-sm">
                    <h4 class="text-lg font-semibold mb-2 leading-snug text-[var(--text-main)] transition-all">
                        ${post.title}
                    </h4>
                    
                    <div class="mt-auto flex items-center text-xs font-medium text-[var(--text-muted)] group-hover:text-current transition-colors">
                        Read Story <i data-lucide="arrow-right" class="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform"></i>
                    </div>
                </div>
            </a>
        `).join('');

        // Re-inject the slide up animation style if needed
        if (!document.querySelector('#slide-up-style')) {
            const style = document.createElement('style');
            style.id = 'slide-up-style';
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
    }
}
