import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.iQHPfsPC.js","_app/immutable/chunks/scheduler.DuLnc7_I.js","_app/immutable/chunks/index.BXGASEWR.js","_app/immutable/chunks/entry.DBqXVTw9.js"];
export const stylesheets = ["_app/immutable/assets/0.9qqVzIO5.css"];
export const fonts = [];
