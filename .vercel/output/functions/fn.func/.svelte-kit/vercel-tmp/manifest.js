export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png","image-1.png","image.png","images/betterwork-{dark}.jpg","images/betterwork-{light}.png","images/deltacollab.jpg","images/opencv.png","images/profile-photo.png","images/time-bot.png","linkedin-logo.png","linkedin-logo.svg","open-in-scihub-demo-recreated.mp4","open-in-scihub-mobile.png","retro.mp4","retro.webm","team/heramb.png","team/pankaj.png","title-highlight-2.png","X-twitter-logo.png","X-twitter-logo.svg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml",".mp4":"video/mp4",".webm":"video/webm"},
	_: {
		client: {"start":"_app/immutable/entry/start.DucULt-S.js","app":"_app/immutable/entry/app.y_vM8_8E.js","imports":["_app/immutable/entry/start.DucULt-S.js","_app/immutable/chunks/entry.DBqXVTw9.js","_app/immutable/chunks/scheduler.DuLnc7_I.js","_app/immutable/entry/app.y_vM8_8E.js","_app/immutable/chunks/scheduler.DuLnc7_I.js","_app/immutable/chunks/index.BXGASEWR.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
