

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.C9R-oRy-.js","_app/immutable/chunks/scheduler.Bv6yFrMh.js","_app/immutable/chunks/index.BHjnYSLr.js","_app/immutable/chunks/entry.CyyAuu_h.js"];
export const stylesheets = [];
export const fonts = [];
