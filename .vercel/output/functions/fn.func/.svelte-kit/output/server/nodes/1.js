

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.CT8k9giX.js","_app/immutable/chunks/scheduler.Bv6yFrMh.js","_app/immutable/chunks/index.BHjnYSLr.js","_app/immutable/chunks/entry.CPo0TT2I.js"];
export const stylesheets = [];
export const fonts = [];
