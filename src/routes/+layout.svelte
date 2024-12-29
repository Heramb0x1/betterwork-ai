<script>
    import "../app.css";
    import Footer from "../components/Footer.svelte";
    import Header from "../components/Header.svelte";
    import { page } from '$app/stores';
    import { inject } from "@vercel/analytics";
    let y;
    let innerHeight = 0;
    let innerWidth = 0;
    inject();
</script>

<div class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen">
    <Header {y} />
    <main class="flex-grow">
        <slot />
    </main>
    <Footer />
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />