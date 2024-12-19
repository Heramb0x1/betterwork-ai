import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.BMWBFB2L.js","_app/immutable/chunks/scheduler.Bv6yFrMh.js","_app/immutable/chunks/index.BHjnYSLr.js","_app/immutable/chunks/entry.CPo0TT2I.js"];
export const stylesheets = ["_app/immutable/assets/0.b9LbncEQ.css"];
export const fonts = [];
