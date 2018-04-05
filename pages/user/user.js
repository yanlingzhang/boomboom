const api = require('../../config/api.js');
const util = require('../../utils/util.js');

//获取应用实例
const app = getApp()
Page({
    onShareAppMessage: function (res) {
      return {
        title: '纹饰美容',
        path: '/pages/index/index'
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
    togglePopup() {
      this.setData({
        showPopup: !this.data.showPopup
      })
    },
    toggleKey: function (event) {
        var key = event.currentTarget.dataset.key;
        this.setData({
            [key] : !this.data[key]
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
