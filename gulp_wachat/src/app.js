import { wxlogin } from './api/app';
import { APP_ID } from './config/index';

// app.js
App({
	onLaunch() {
		// wx.login({
		// 	timeout: 10000,
		// 	success: (result) => {
		// 		console.log('%c 🍋 result: ', 'font-size:20px;background-color: #FFDD4D;color:#fff;', result);
		// 		wxlogin({
		// 			code: result.code,
		// 			source_user_id: null,
		// 			app_id: APP_ID,
		// 		}).then(({ data }) => {
		// 			console.log('%c 🥞 data: ', 'font-size:20px;background-color: #EA7E5C;color:#fff;', data);

		// 			// wx.setStorageSync('jwt', data.token);
		// 		});
		// 	},
		// 	fail: () => {},
		// 	complete: () => {},
		// });
	},
	globalData: {
		userInfo: null,
	},
});
