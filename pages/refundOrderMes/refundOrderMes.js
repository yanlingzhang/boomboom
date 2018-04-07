const api = require('../../config/api.js');
const util = require('../../utils/util.js');
const { Field, extend } = require('../../zanui/index');

//获取应用实例
const app = getApp()
Page(extend({}, Field, {
    onShareAppMessage: function (res) {
      return {
        title: '完善退货信息',
        path: '/pages/refundDetailMes/refundDetailMes'
      }
    },
    onAreaChange(e) {
      this.setData({
        areaIndex: e.detail.value
      });
    },
    data: {
      area: ['自动识别（智能查询）', '圆通快递', '中通快递', '顺丰快递','中通快递'],
      areaIndex: '0',
    },

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
}))
