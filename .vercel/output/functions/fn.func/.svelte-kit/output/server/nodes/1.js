

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BL5tO3Nb.js","_app/immutable/chunks/scheduler.Bv6yFrMh.js","_app/immutable/chunks/index.BhqKW6sF.js","_app/immutable/chunks/entry.Cj94H41W.js"];
export const stylesheets = [];
export const fonts = [];
