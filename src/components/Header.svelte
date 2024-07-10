<script>
    export let y;

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
    <div class="sm:flex items-center gap-4 hidden">
        {#each tabs as tab, index}
        <a
            href="http://bit.ly/3xNNm16"
            class="duration-200 hover:text-violet-400"
            use:smoothScroll
        >
            <p>Home</p>
        </a>
        {/each}
        <button href="https://x.com/betterworkAI" style="margin-left:15px;" target="_blank" class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950">
        <div class="absolute top-0 right-full w-full h-full bg-violet-600 opacity-25 group-hover:translate-x-full z-0 duration-200"/>
            <a target="_blank" href="https://x.com/betterworkAI" class="relative z-9">𝕏</a>
        </button>
        
        <button href="https://www.linkedin.com/company/betterwork-ai/" style="margin-left:15px;" target="_blank" class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950">
        <div class="absolute top-0 right-full w-full h-full bg-violet-600 opacity-25 group-hover:translate-x-full z-0 duration-200"/>
            <a target="_blank" href="https://www.linkedin.com/company/betterwork-ai/" class="relative z-9">
                <b>
                    in
                </b>
            </a>
        </button>
    </div>
</header>

