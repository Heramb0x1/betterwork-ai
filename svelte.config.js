import vercel from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const config = {
    kit: {
        adapter: vercel(),  // Use adapter-vercel instead of adapter-static
        paths: {
            // You can configure base paths if needed for specific deployment scenarios
        },
    },
    preprocess: vitePreprocess(),
};

export default config;
