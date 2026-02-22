// Hero Rendering

export function renderHero() {
    const heroSection = document.getElementById('hero-section');
    if (!heroSection) return;

    heroSection.innerHTML = `
        <div class="glass-panel glass-spotlight tilt-card tile-anim p-6 md:p-8 rounded-3xl relative overflow-hidden group w-full h-full flex flex-col justify-center">
            <div class="tilt-content relative z-10 flex flex-col items-start gap-4">
                <!-- Profile Image -->
                <div class="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white/20 shadow-xl shrink-0">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" alt="Profile" class="w-full h-full object-cover">
                </div>
                
                <!-- Intro -->
                <div class="space-y-3">
                    <h1 class="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight text-[var(--text-main)]">
                        Crafting fluid <br>digital <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">experiences.</span>
                    </h1>
                    <p class="text-[var(--text-muted)] text-sm max-w-sm font-light">
                        I build thoughtful, high-quality, and modern technology.
                    </p>
                </div>
                
                <!-- Social Links -->
                <div class="flex gap-4 pt-4">
                    <a href="#" class="p-3 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:bg-[var(--glass-highlight)] transition-colors backdrop-blur-md">
                        <i data-lucide="github" class="w-5 h-5 text-[var(--text-main)]"></i>
                    </a>
                    <a href="#" class="p-3 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:bg-[var(--glass-highlight)] transition-colors backdrop-blur-md">
                        <i data-lucide="twitter" class="w-5 h-5 text-[var(--text-main)]"></i>
                    </a>
                    <a href="#" class="p-3 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:bg-[var(--glass-highlight)] transition-colors backdrop-blur-md">
                        <i data-lucide="mail" class="w-5 h-5 text-[var(--text-main)]"></i>
                    </a>
                </div>
            </div>
            
            <!-- Shimmer effect -->
            <div class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[var(--glass-highlight)] to-transparent group-hover:animate-[shimmer_2s_infinite]"></div>
        </div>
    `;

    // Add shimmer animation to tailwind config dynamically if possible, or just use css
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes shimmer {
            100% { transform: translateX(100%); }
        }
        .tile-anim {
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        .tile-anim:hover {
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
            z-index: 10;
        }
    `;
    document.head.appendChild(style);
}
