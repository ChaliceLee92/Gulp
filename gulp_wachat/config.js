module.exports = {
	enabledQiniu: true, // 是否开启七牛云COS 上传功能
	// 七牛 上传功能配置表
	qiniu: {
		accessKey: '',
		secretKey: '',
		bucket: '',
		prefix: '',
		private: false,
		delete: false,
	},
	// 静态资源CDN 域名，配合CDN 功能实用，线上请确保在mp管理端已经注册域名
	assetsCDN: '',
};
