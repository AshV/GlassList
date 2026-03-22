// Hero Rendering

export function renderHero() {
    const heroSection = document.getElementById('hero-section');
    if (!heroSection) return;

    heroSection.innerHTML = `
        <div class="glass-panel glass-spotlight relative overflow-hidden group w-full flex items-center justify-between px-4 min-[400px]:px-6 py-3 md:px-8 md:py-4 rounded-[2rem] md:rounded-[3rem] mt-2 mb-4 transition-all">
            <div class="relative z-10 flex items-center gap-3 min-[400px]:gap-4 md:gap-6">
                <!-- Large Profile Image safely inside container -->
                <div class="w-20 h-20 min-[400px]:w-24 min-[400px]:h-24 md:w-[104px] md:h-[104px] rounded-full overflow-hidden border-[3px] border-white/20 shadow-lg shrink-0 group-hover:shadow-[0_10px_30px_rgba(31,38,135,0.4)] transition-shadow duration-500">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" alt="Profile" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                </div>
                
                <!-- Intro -->
                <div class="flex flex-col justify-center">
                    <h1 class="text-base min-[400px]:text-lg md:text-2xl font-bold tracking-tight text-[var(--text-main)] leading-none mb-1 md:mb-1.5 focus:outline-none">
                         <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Ashish</span>
                    </h1>
                    <p class="text-[var(--text-muted)] text-[10px] min-[400px]:text-xs md:text-sm font-medium leading-none">
                        Digital Experiences Maker
                    </p>
                </div>
            </div>
            
            <!-- Social Links -->
            <div class="flex gap-1.5 md:gap-3 relative z-10">
                <a href="#" class="p-2 md:p-3 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:bg-[var(--glass-highlight)] transition-colors backdrop-blur-md">
                    <i data-lucide="github" class="w-4 h-4 md:w-5 md:h-5 text-[var(--text-main)]"></i>
                </a>
                <a href="#" class="p-2 md:p-3 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:bg-[var(--glass-highlight)] transition-colors backdrop-blur-md">
                    <i data-lucide="twitter" class="w-4 h-4 md:w-5 md:h-5 text-[var(--text-main)]"></i>
                </a>
                <a href="#" class="p-2 md:p-3 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:bg-[var(--glass-highlight)] transition-colors backdrop-blur-md">
                    <i data-lucide="mail" class="w-4 h-4 md:w-5 md:h-5 text-[var(--text-main)]"></i>
                </a>
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
