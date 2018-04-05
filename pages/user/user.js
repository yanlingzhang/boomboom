const api = require('../../config/api.js');
const util = require('../../utils/util.js');

//获取应用实例
const app = getApp()
Page({
    onShareAppMessage: function (res) {
      return {
        title: '我的喜炮',
        path: '/pages/user/user'
      }
    },
    data: {
      userInfo: {}
    },
    onLoad: function () {
      wx.getUserInfo({
        success: res => {
          console.log(res,'res')
          this.setData({
            userInfo: res.userInfo
          })
        }
      })
    },
    onReady: function () {
        // 页面渲染完成
    },
    onShow: function () {

    },
    onHide: function () {
        // 页面隐藏
    },
    onUnload: function () {
        // 页面关闭
    },
})
