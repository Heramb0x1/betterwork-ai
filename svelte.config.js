import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const config = {
    kit: {
        adapter: adapter({
            pages: "build",
            assets: "build",
            fallback: null,
        }),
        paths: {
            // base: process.env.NODE_ENV === "production" ? "/betterwork-ai" : "",
            base: "/betterwork-ai",
            // base: process.argv.includes("dev") ? "" : process.env.BASE_PATH,
        },
    },
    preprocess: vitePreprocess(),
};

export default config;
