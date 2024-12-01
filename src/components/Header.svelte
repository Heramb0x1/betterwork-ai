<script>
    import { slide } from 'svelte/transition';
    export let y;
    let isMenuOpen = false;
    const toggleMenu = () => isMenuOpen = !isMenuOpen;

    export let tabs = [
        { name: "Home", link: "#Home" },
    ];

    function smoothScroll(node) {
        node.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = node.getAttribute('href').slice(1);

            if (targetId === "top") {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            } else {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth',
                    });
                }
            }
        });
    }
</script>

<header
    class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid " +
        (y > 0
            ? " py-4 bg-slate-950 border-violet-950"
            : " py-6 bg-transparent border-transparent")}>
    <h1 class="font-medium">
        <b class="font-bold poppins" style="font-size: 22px;">betterwork.ai</b>
    </h1>
    <div class="sm:flex items-center gap-4 hidden md:flex">
        {#each tabs as tab, index}
        <a
            href={tab.link}
            class="duration-200 hover:text-violet-400"
            use:smoothScroll
        >
            <p>{tab.name}</p>
        </a>
        {/each}
        <button href="https://x.com/betterworkAI" style="margin-left:15px;" target="_blank" class="blueShadow relative overflow-hidden px-5 py-2 group rounded-2xl bg-violet-950 text-white">
        <div class="absolute top-0 right-full w-full h-full bg-violet-700 opacity-25 group-hover:translate-x-full z-0 duration-200"/>
            <a target="_blank" href="https://x.com/betterworkAI" class="relative z-9"><img class="" src="./X-twitter-logo.png" alt="𝕏" height="20px" width="20px"/></a>
        </button>
        
        
        <button href="https://www.linkedin.com/company/betterwork-ai/" style="margin-left:15px;" target="_blank" class="blueShadow relative overflow-hidden px-5 py-2 group rounded-2xl bg-violet-950 text-white">
        <div class="absolute top-0 right-full w-full h-full bg-violet-700 opacity-25 group-hover:translate-x-full z-0 duration-200"/>
            <a target="_blank" href="https://www.linkedin.com/company/betterwork-ai/" class="relative z-9">
                <img class="" src="./linkedin-logo.png" alt="in" height="20px" width="20px"/>
            </a>
        </button>
        <button>
            <a href="https://www.producthunt.com/posts/open-in-sci-hub?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-open&#0045;in&#0045;sci&#0045;hub" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=662402&theme=light" alt="Open&#0045;in&#0045;Sci&#0045;Hub - Access&#0032;Research&#0032;Papers&#0032;Instantly&#0032;with&#0032;a&#0032;Hotkey&#0033; | Product Hunt" style="width: 150px; height: 40px; padding-left:12px;" width="250" height="54" /></a>
        </button>
    </div>

    <!-- Mobile Menu Button -->
    <button class="md:hidden text-white" on:click={toggleMenu}>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {#if !isMenuOpen}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            {:else}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            {/if}
        </svg>
    </button>
</header>

<!-- Mobile Menu -->
{#if isMenuOpen}
<div class="md:hidden fixed top-[72px] left-0 right-0 bg-slate-950 border-b border-violet-950 z-50"
    transition:slide={{duration: 200}}>
    <nav class="flex flex-col p-4 gap-4 max-h-[calc(100vh-72px)] overflow-y-auto">
        {#each tabs as tab}
        <a href={tab.link} 
           class="text-white hover:text-violet-400 duration-200" 
           use:smoothScroll
           on:click={() => isMenuOpen = false}>
            {tab.name}
        </a>
        {/each}
        
        <div class="flex flex-col gap-4 pt-4">
            <div class="flex gap-4">
                <a href="https://x.com/betterworkAI" target="_blank" 
                   class="blueShadow px-4 py-2 rounded-2xl bg-violet-950">
                    <img src="./X-twitter-logo.png" alt="𝕏" class="h-5 w-5"/>
                </a>
                
                <a href="https://www.linkedin.com/company/betterwork-ai/" target="_blank"
                   class="blueShadow px-4 py-2 rounded-2xl bg-violet-950">
                    <img src="./linkedin-logo.png" alt="in" class="h-5 w-5"/>
                </a>
            </div>

            <a href="https://www.producthunt.com/posts/open-in-sci-hub" 
               target="_blank"
               class="w-full flex justify-center">
                <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=662402&theme=light" 
                     alt="Open-in-Sci-Hub" 
                     class="h-10 w-auto" />
            </a>
        </div>
    </nav>
</div>
{/if}

<style>
    .blueShadow {
        box-shadow: 0 0 15px rgba(56, 189, 248, 0.3);
    }
</style>
