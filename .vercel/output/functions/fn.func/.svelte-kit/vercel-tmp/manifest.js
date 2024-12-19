export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png","image-1.png","image.png","images/betterwork-{dark}.jpg","images/betterwork-{light}.png","images/deltacollab.jpg","images/opencv.png","images/profile-photo.png","images/time-bot.png","linkedin-logo.png","open-in-scihub-demo-recreated.mp4","retro.mp4","retro.webm","team/heramb.png","team/pankaj.png","X-twitter-logo.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".mp4":"video/mp4",".webm":"video/webm"},
	_: {
		client: {"start":"_app/immutable/entry/start.CcTDTv1-.js","app":"_app/immutable/entry/app.y_2yMHfF.js","imports":["_app/immutable/entry/start.CcTDTv1-.js","_app/immutable/chunks/entry.DoNGpSjL.js","_app/immutable/chunks/scheduler.Bv6yFrMh.js","_app/immutable/entry/app.y_2yMHfF.js","_app/immutable/chunks/scheduler.Bv6yFrMh.js","_app/immutable/chunks/index.BHjnYSLr.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
