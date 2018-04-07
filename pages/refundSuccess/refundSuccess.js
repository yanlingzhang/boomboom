const api = require('../../config/api.js');
const util = require('../../utils/util.js');

//获取应用实例
const app = getApp()
Page({
  onShareAppMessage: function (res) {
    return {
      title: '退款成功',
      path: '/pages/refundSuccess/refundSuccess'
    }
  },
  onAreaChange(e) {
    this.setData({
      areaIndex: e.detail.value
    });
  },
  data: {},

  onLoad: function (options) {

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
