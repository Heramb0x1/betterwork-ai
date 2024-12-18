<script>
    export let y;
    let isMenuOpen = false;
    const toggleMenu = () => (isMenuOpen = !isMenuOpen);
    let isDark = false;

    const closeMenu = () => {
        isMenuOpen = false;
    };
    
    function switchTheme() {
        isDark = !isDark;
        document.documentElement.classList.toggle('dark');
    }
    
    function handleThemeToggle() {
        if (!document.startViewTransition) {
            switchTheme();
            return;
        }
        document.startViewTransition(() => switchTheme());
    }
</script>
<header
    class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-around" +
        (y > 0 ? " py-4" : " py-6")}
    style="background-color: rgba(0, 0, 0, 0); border-bottom: 2px dashed #323232;"
    >
    <div id="trademark" style="padding-right: 12px;">
        <a href="/">
        <h1 class="font-medium flex items-center">
            <img src="/image.png" alt="betterwork.ai" class="object-contain w-12 h-12 pr-2" />
            <b class="font-bold manrope text-2xl tracking-tighter font-sans" style="padding-top: 4px; font-style: normal; font-optical-sizing: auto;">
                betterwork.ai
            </b>
        </h1>
        </a>
    </div>

    <div class="sm:flex items-center justify-center gap-4 hidden md:flex">
        <a href="/about" class="px-4 text-slate-500 hover:text-gray-300 flex items-center justify-center">
            About
        </a>

        <a href="/blogs" class="px-4 text-slate-500 hover:text-gray-300 flex items-center justify-center">
            Blogs
        </a>
        <a href="/contact" class="px-4 text-slate-500 hover:text-gray-300 flex items-center justify-center">
            Contact Us
        </a>
    </div>


    <div class="flex gap-4">
        <div>
            <a class="inline-flex justify-center whitespace-nowrap rounded-full px-7 py-2.5 after:content-['_↗'] text-sm font-medium text-slate-200 dark:text-slate-800 bg-gradient-to-r from-slate-800 to-slate-700 dark:from-slate-200 dark:to-slate-100 dark:hover:bg-slate-100 shadow focus:outline-none focus:ring focus:ring-slate-500/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-500/50 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)] dark:before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms]" 
            href="https://tally.so/r/mZPY4y">Join Waitlist</a>
        </div>
    </div>

    <!-- Mobile Hamburger Menu-->
    <button class="md:hidden text-white" on:click={toggleMenu}>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {#if !isMenuOpen}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            {:else}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            {/if}
        </svg>
    </button>
    {#if isMenuOpen}
    <div class="md:hidden fixed top-[72px] left-0 right-0 bg-slate-950 border-b border-violet-950 z-50">
        <nav class="flex flex-col p-4 gap-4 max-h-[calc(100vh-72px)] overflow-y-auto">
            <a href="/about" on:click={closeMenu} class="px-4 pb-2 text-xl text-slate-300 hover:text-gray-100">About</a>
            <a href="/blogs" on:click={closeMenu} class="px-4 pb-2 text-xl text-slate-300 hover:text-gray-100">Blogs</a>
            <a href="/contact" on:click={closeMenu} class="px-4 pb-2 text-xl text-slate-300 hover:text-gray-100">Contact Us</a>
        </nav>
    </div>
{/if}
</header>

<!-- Mobile Menu -->
{#if isMenuOpen}
    <div class="md:hidden fixed top-[72px] left-0 right-0 bg-slate-950 border-b border-violet-950 z-50">
        <nav class="flex flex-col p-4 gap-4 max-h-[calc(100vh-72px)] overflow-y-auto">
            <a href="/about" class="px-4 pb-2 text-xl text-slate-300 hover:text-gray-100">About</a>
            <a href="/blogs" class="px-4 pb-2 text-xl text-slate-300 hover:text-gray-100">Blogs</a>
            <a href="/contact" class="px-4 pb-2 text-xl text-slate-300 hover:text-gray-100">Contact Us</a>
        </nav>
    </div>
{/if}
<style>
    .blueShadow {
        box-shadow: 0 0 15px rgba(56, 189, 248, 0.3);
    }
</style>
