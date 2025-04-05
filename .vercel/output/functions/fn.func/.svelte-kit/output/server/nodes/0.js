import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.5EN1d4FS.js","_app/immutable/chunks/scheduler.DuLnc7_I.js","_app/immutable/chunks/index.BXGASEWR.js","_app/immutable/chunks/entry.BwbexDeF.js"];
export const stylesheets = ["_app/immutable/assets/0.CiyvcER-.css"];
export const fonts = [];
