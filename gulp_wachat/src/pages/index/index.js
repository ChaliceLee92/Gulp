import { getGraphql } from '../../api/app';

const app = getApp();

Page({
	/**
	 * 页面的初始数据
	 */
	data: {},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {
		this.getSectionConfig();
		// this.getHomeConfig();
		// this.getChallenger();
		// this.getActivity();
		// this.getEveryDayOfHotRecord();
		// this.getDayRecordInfo();
		// this.getDayRecordRank();
		// this.getEvaluationAvgScore();
		// this.getUserDayRecord();
		// this.getColumnList();
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady() {},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow() {},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide() {},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload() {},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh() {},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom() {},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage() {},

	// 金刚区配置
	getSectionConfig() {
		getGraphql({
			query: `query{getConfig(appid:"${app.globalData.APPID}",type:10){isNormal}}`,
		}).then(({ data }) => {
			console.log(
				'%c 🍊 data: ',
				'font-size:20px;background-color: #33A5FF;color:#fff;',
				data,
			);
		});
	},

	// 主页配置
	getHomeConfig() {
		getGraphql({
			query: `query{getHomeConfig{
        type
        path
        cover
        title
        sub_title
        appid
        icon
      }
    }`,
		}).then(({ data }) => {
			console.log(
				'%c 🍆 data: ',
				'font-size:20px;background-color: #7F2B82;color:#fff;',
				data,
			);
		});
	},

	// 获取参赛人
	getChallenger() {
		getGraphql({
			query: `{
        getChallenger (skip:0,limit:200) {
          challenge_id
          score
          user {
            nickname
            sex
            user_id
            headimgurl
            class
            phone
            location
            origin_name
          }
        }
        }`,
		}).then(({ data }) => {
			console.log(
				'%c 🥫 data: ',
				'font-size:20px;background-color: #FFDD4D;color:#fff;',
				data,
			);
		});
	},

	// 获取轮播图
	getActivity() {
		getGraphql({
			query: 'query{getBanner {banner_id cover path name}}',
		}).then(({ data }) => {
			console.log(
				'%c 🌶 data: ',
				'font-size:20px;background-color: #42b983;color:#fff;',
				data,
			);
		});
	},

	// 获取每日作品
	getEveryDayOfHotRecord() {
		getGraphql({
			query: `query{getEveryDayOfHotRecord{recordId record{poemId poem{poemId name}likeCount commentCount user{nickname user_id headimgurl}}}}
      `,
		}).then(({ data }) => {
			console.log(
				'%c 🥕 data: ',
				'font-size:20px;background-color: #E41A6A;color:#fff;',
				data,
			);
		});
	},

	// 获取读诗打卡信息
	getDayRecordInfo() {
		getGraphql({
			query: `query{getDailyRecord{
        cover
        poem{
          name
          poemId
          author
          content
        }
        name
        share_poster
        date
        share_title
        share_sub_title
      }
    }`,
		}).then(({ data }) => {
			console.log(
				'%c 🍠 data: ',
				'font-size:20px;background-color: #6EC1C2;color:#fff;',
				data,
			);
		});
	},

	// 获取每日之星
	getDayRecordRank() {
		getGraphql({
			query: `query{
        getDailyRecordRank(dateType:TODAY,limit:1){
          user{
            headimgurl,
            nickname,
            class,
            location
          }
          like_count
          create_time
          continued_day
        }
      }`,
		}).then(({ data }) => {
			console.log(
				'%c 🍛 data: ',
				'font-size:20px;background-color: #33A5FF;color:#fff;',
				data,
			);
		});
	},

	// 获取用户测评
	getEvaluationAvgScore() {
		getGraphql({
			query: `query{
        getEvaluationAvgScore(user_id: "${
					getApp().globalData.userInfo.user_id
				}"){
          avg_score
          evaluation_poem_count
          defeated
          today_update_count
          compare_update_yesterday
          }}
        `,
		}).then(({ data }) => {
			console.log(
				'%c 🌽 data: ',
				'font-size:20px;background-color: #7F2B82;color:#fff;',
				data,
			);
		});
	},
	// 每日打卡
	getUserDayRecord() {
		getGraphql({
			query: `query{
        today:getUserDailyRecord(user_id:"${
					getApp().globalData.userInfo.user_id
				}"){
          like_count
          user{
            headimgurl
          },
          rank,
         continued_day
         record_id
        }
        yesterday:getUserDailyRecord(user_id:"${
					getApp().globalData.userInfo.user_id
				}",dateType:YESTERDAY){
          like_count
          user{
            headimgurl
          },
          rank,
         continued_day
         record_id
        }
      }`,
		}).then(({ data }) => {
			console.log(
				'%c 🍦 data: ',
				'font-size:20px;background-color: #2EAFB0;color:#fff;',
				data,
			);
		});
	},

	// 获取名家专栏
	getColumnList() {
		getGraphql({
			query: `{getColumnList {
        column_id
        column_name
        column_cover
        column_banner
        column_presentation
        column_abstract
        is_subscribe
        subscribe_num
        column_lecturer
        column_presentation
        column_abstract
        last_course {
          course_id
          course_name
          course_content_url
          course_content_duration
        }
      }}`,
		}).then(({ data }) => {
			console.log(
				'%c 🥠 data: ',
				'font-size:20px;background-color: #E41A6A;color:#fff;',
				data,
			);
		});
	},
});
