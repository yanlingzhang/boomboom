const api = require('../../config/api.js');
const util = require('../../utils/util.js');
const { Tab, extend } = require('../../zanui/index');

//获取应用实例
const app = getApp()
Page(extend({}, Tab, {
    onShareAppMessage: function (res) {
      return {
        title: '我的订单',
        path: '/pages/myorder/myorder'
      }
    },
    data: {
      tab: {
        list: [{
          id: 'all',
          title: '全部'
        }, {
          id: 'topay',
          title: '待付款'
        }, {
          id: 'tosend',
          title: '待发货'
        }, {
          id: 'send',
          title: '待收货'
        }, {
          id: 'sign',
          title: '已完成'
        }],
        selectedId: 'all'
      }
    },
    handleZanTabChange(e) {
      var componentId = e.componentId;
      var selectedId = e.selectedId;

      this.setData({
        [`${componentId}.selectedId`]: selectedId
      });
    },
    toggleKey: function (event) {
        var key = event.currentTarget.dataset.key;
        this.setData({
            [key] : !this.data[key]
        })
    },
    onLoad: function (options) {
        // wx.setNavigationBarTitle({
        //     title: '我的喜炮'
        // })
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
