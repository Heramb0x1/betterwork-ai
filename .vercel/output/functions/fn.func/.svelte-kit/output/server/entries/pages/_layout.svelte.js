import { c as create_ssr_component, b as null_to_empty, v as validate_component } from "../../chunks/ssr.js";
import { e as escape } from "../../chunks/client.js";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="w-full mt-auto py-4" data-svelte-h="svelte-cg4s7b"><div class="container mx-auto px-4"><div class="flex items-center justify-between"><div class="text-white">© 2025 betterwork.ai</div> <div class="flex items-center gap-6"><a href="/contact" class="text-slate-600">Contact Us</a> <a href="https://twitter.com/intent/follow?screen_name=betterwork_hq" target="_blank" class="text-slate-200"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path></svg></a> <a href="https://www.linkedin.com/company/betterwork-ai/" target="_blank" class="text-slate-200"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-6 w-6 flex-shrink-0" fill="currentColor"><path d="M100.28 448H7.4V149.02h92.88zm-46.44-333C24.09 115 0 90.83 0 63.62a55.52 55.52 0 11110.84 0c.03 27.21-24.06 51.38-55 51.38zM447.9 448h-92.68V302.4c0-34.71-.7-79.39-48.36-79.39-48.43 0-55.83 37.83-55.83 76.92V448h-92.78V149.02h89.08v40.81h1.28c12.4-23.45 42.64-48.36 87.72-48.36 93.82 0 111.08 61.76 111.08 142.11V448z"></path></svg></a></div></div></div></footer>`;
});
const css = {
  code: ".blueShadow.svelte-3dm5bt{box-shadow:0 0 15px rgba(56, 189, 248, 0.3)}",
  map: `{"version":3,"file":"Header.svelte","sources":["Header.svelte"],"sourcesContent":["<script>\\r\\n    export let y;\\r\\n    let isMenuOpen = false;\\r\\n    const toggleMenu = () => (isMenuOpen = !isMenuOpen);\\r\\n    let isDark = false;\\r\\n\\r\\n    const closeMenu = () => {\\r\\n        isMenuOpen = false;\\r\\n    };\\r\\n<\/script>\\r\\n<header\\r\\n    class={\\"sticky z-[10] top-0 duration-200 px-2 flex flex-shrink-0 items-center justify-around\\" +\\r\\n        (y > 0 ? \\" py-4\\" : \\" py-6\\")}\\r\\n    style=\\"background-color: rgba(0, 0, 0, 0.1); backdrop-filter: blur(5px); border-bottom: 2px dashed #323232;\\"\\r\\n    >\\r\\n    <div id=\\"trademark\\" style=\\"padding-right: 12px;\\">\\r\\n        <a href=\\"/\\">\\r\\n        <h1 class=\\"font-medium flex items-center\\">\\r\\n            <img src=\\"/image.png\\" alt=\\"betterwork.ai\\" class=\\"object-contain w-12 h-12 pr-2\\" />\\r\\n            <b class=\\"font-bold manrope text-2xl tracking-tighter font-sans\\" style=\\"padding-top: 4px; font-style: normal; font-optical-sizing: auto;\\">\\r\\n                betterwork.ai\\r\\n            </b>\\r\\n        </h1>\\r\\n        </a>\\r\\n    </div>\\r\\n\\r\\n    <div class=\\"sm:flex items-center justify-center gap-4 hidden md:flex\\">\\r\\n        <a href=\\"/about\\" class=\\"px-4 text-slate-100 hover:text-gray-500 flex items-center justify-center\\">\\r\\n            About\\r\\n        </a>\\r\\n\\r\\n        <a href=\\"/blogs\\" class=\\"px-4 text-slate-100 hover:text-gray-500 flex items-center justify-center\\">\\r\\n            Blogs\\r\\n        </a>\\r\\n        <a href=\\"/contact\\" class=\\"px-4 text-slate-100 hover:text-gray-500 flex items-center justify-center\\">\\r\\n            Contact Us\\r\\n        </a>\\r\\n    </div>\\r\\n\\r\\n\\r\\n    <div class=\\"flex gap-4\\">\\r\\n        <div>\\r\\n            <a class=\\"inline-flex justify-center whitespace-nowrap rounded-full px-7 py-2.5 after:content-['_↗'] text-sm font-medium text-slate-200 dark:text-slate-800 bg-gradient-to-r from-slate-800 to-slate-700 dark:from-slate-200 dark:to-slate-100 dark:hover:bg-slate-100 shadow focus:outline-none focus:ring focus:ring-slate-500/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-500/50 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)] dark:before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms]\\" \\r\\n            href=\\"https://tally.so/r/mZPY4y\\">Join Waitlist</a>\\r\\n        </div>\\r\\n    </div>\\r\\n\\r\\n    <!-- Mobile Hamburger Menu-->\\r\\n    <button class=\\"md:hidden text-white\\" on:click={toggleMenu}>\\r\\n        <svg class=\\"w-6 h-6\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\">\\r\\n            {#if !isMenuOpen}\\r\\n            <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M4 6h16M4 12h16M4 18h16\\"/>\\r\\n            {:else}\\r\\n            <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M6 18L18 6M6 6l12 12\\"/>\\r\\n            {/if}\\r\\n        </svg>\\r\\n    </button>\\r\\n    {#if isMenuOpen}\\r\\n    <div class=\\"md:hidden fixed top-[72px] left-0 right-0 bg-slate-950 border-b border-violet-950 z-50\\">\\r\\n        <nav class=\\"flex flex-col p-4 gap-4 max-h-[calc(100vh-72px)] overflow-y-auto\\">\\r\\n            <a href=\\"/about\\" on:click={closeMenu} class=\\"px-4 pb-2 text-xl text-slate-300 hover:text-gray-100\\">About</a>\\r\\n            <a href=\\"/blogs\\" on:click={closeMenu} class=\\"px-4 pb-2 text-xl text-slate-300 hover:text-gray-100\\">Blogs</a>\\r\\n            <a href=\\"/contact\\" on:click={closeMenu} class=\\"px-4 pb-2 text-xl text-slate-300 hover:text-gray-100\\">Contact Us</a>\\r\\n        </nav>\\r\\n    </div>\\r\\n{/if}\\r\\n</header>\\r\\n\\r\\n<!-- Mobile Menu -->\\r\\n{#if isMenuOpen}\\r\\n    <div class=\\"md:hidden fixed top-[72px] left-0 right-0 bg-slate-950 border-b border-violet-950 z-50\\">\\r\\n        <nav class=\\"flex flex-col p-4 gap-4 max-h-[calc(100vh-72px)] overflow-y-auto\\">\\r\\n            <a href=\\"/about\\" class=\\"px-4 pb-2 text-xl text-slate-300 hover:text-gray-100\\">About</a>\\r\\n            <a href=\\"/blogs\\" class=\\"px-4 pb-2 text-xl text-slate-300 hover:text-gray-100\\">Blogs</a>\\r\\n            <a href=\\"/contact\\" class=\\"px-4 pb-2 text-xl text-slate-300 hover:text-gray-100\\">Contact Us</a>\\r\\n        </nav>\\r\\n    </div>\\r\\n{/if}\\r\\n<style>\\r\\n    .blueShadow {\\r\\n        box-shadow: 0 0 15px rgba(56, 189, 248, 0.3);\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA+EI,yBAAY,CACR,UAAU,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,KAAK,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC/C"}`
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { y } = $$props;
  if ($$props.y === void 0 && $$bindings.y && y !== void 0) $$bindings.y(y);
  $$result.css.add(css);
  return `<header class="${escape(null_to_empty("sticky z-[10] top-0 duration-200 px-2 flex flex-shrink-0 items-center justify-around" + (y > 0 ? " py-4" : " py-6")), true) + " svelte-3dm5bt"}" style="background-color: rgba(0, 0, 0, 0.1); backdrop-filter: blur(5px); border-bottom: 2px dashed #323232;"><div id="trademark" style="padding-right: 12px;" data-svelte-h="svelte-1yob6dj"><a href="/"><h1 class="font-medium flex items-center"><img src="/image.png" alt="betterwork.ai" class="object-contain w-12 h-12 pr-2"> <b class="font-bold manrope text-2xl tracking-tighter font-sans" style="padding-top: 4px; font-style: normal; font-optical-sizing: auto;">betterwork.ai</b></h1></a></div> <div class="sm:flex items-center justify-center gap-4 hidden md:flex" data-svelte-h="svelte-14jjg8s"><a href="/about" class="px-4 text-slate-100 hover:text-gray-500 flex items-center justify-center">About</a> <a href="/blogs" class="px-4 text-slate-100 hover:text-gray-500 flex items-center justify-center">Blogs</a> <a href="/contact" class="px-4 text-slate-100 hover:text-gray-500 flex items-center justify-center">Contact Us</a></div> <div class="flex gap-4" data-svelte-h="svelte-1qqv262"><div><a class="inline-flex justify-center whitespace-nowrap rounded-full px-7 py-2.5 after:content-['_↗'] text-sm font-medium text-slate-200 dark:text-slate-800 bg-gradient-to-r from-slate-800 to-slate-700 dark:from-slate-200 dark:to-slate-100 dark:hover:bg-slate-100 shadow focus:outline-none focus:ring focus:ring-slate-500/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-500/50 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)] dark:before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms]" href="https://tally.so/r/mZPY4y">Join Waitlist</a></div></div>  <button class="md:hidden text-white"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">${`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>`}</svg></button> ${``}</header>  ${``}`;
});
var name = "@vercel/analytics";
var version = "1.4.1";
var initQueue = () => {
  if (window.va)
    return;
  window.va = function a(...params) {
    (window.vaq = window.vaq || []).push(params);
  };
};
function isBrowser() {
  return typeof window !== "undefined";
}
function detectEnvironment() {
  try {
    const env = process.env.NODE_ENV;
    if (env === "development" || env === "test") {
      return "development";
    }
  } catch (e) {
  }
  return "production";
}
function setMode(mode = "auto") {
  if (mode === "auto") {
    window.vam = detectEnvironment();
    return;
  }
  window.vam = mode;
}
function getMode() {
  const mode = isBrowser() ? window.vam : detectEnvironment();
  return mode || "production";
}
function isDevelopment() {
  return getMode() === "development";
}
var DEV_SCRIPT_URL = "https://va.vercel-scripts.com/v1/script.debug.js";
var PROD_SCRIPT_URL = "/_vercel/insights/script.js";
function inject(props = {
  debug: true
}) {
  var _a;
  if (!isBrowser())
    return;
  setMode(props.mode);
  initQueue();
  if (props.beforeSend) {
    (_a = window.va) == null ? void 0 : _a.call(window, "beforeSend", props.beforeSend);
  }
  const src = props.scriptSrc || (isDevelopment() ? DEV_SCRIPT_URL : PROD_SCRIPT_URL);
  if (document.head.querySelector(`script[src*="${src}"]`))
    return;
  const script = document.createElement("script");
  script.src = src;
  script.defer = true;
  script.dataset.sdkn = name + (props.framework ? `/${props.framework}` : "");
  script.dataset.sdkv = version;
  if (props.disableAutoTrack) {
    script.dataset.disableAutoTrack = "1";
  }
  if (props.endpoint) {
    script.dataset.endpoint = props.endpoint;
  }
  if (props.dsn) {
    script.dataset.dsn = props.dsn;
  }
  script.onerror = () => {
    const errorMessage = isDevelopment() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
    console.log(
      `[Vercel Web Analytics] Failed to load script from ${src}. ${errorMessage}`
    );
  };
  if (isDevelopment() && props.debug === false) {
    script.dataset.debug = "false";
  }
  document.head.appendChild(script);
}
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let y;
  inject();
  return `<div class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen">${validate_component(Header, "Header").$$render($$result, { y }, {}, {})} <main class="flex-grow">${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div> `;
});
export {
  Layout as default
};
