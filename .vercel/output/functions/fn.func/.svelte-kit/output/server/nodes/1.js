

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.CQPisQRJ.js","_app/immutable/chunks/scheduler.DuLnc7_I.js","_app/immutable/chunks/index.BXGASEWR.js","_app/immutable/chunks/entry.Bba1vrJo.js"];
export const stylesheets = [];
export const fonts = [];
