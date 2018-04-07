const api = require('../../config/api.js');
const util = require('../../utils/util.js');
const { Tab, extend } = require('../../zanui/index');

//获取应用实例
const app = getApp()
Page(extend({}, Tab, {
    onShareAppMessage: function (res) {
        return {
            title: '礼品卡',
            path: '/pages/giftCard/giftCard'
        }
    },
    data: {
        showPopup: true,
        showPopups: false,
        tab: {
        list: [{
          id: 'all',
          title: '我的礼品卡'
        }, {
          id: 'topay',
          title: '发送礼包记录'
        }],
        selectedId: 'all'
      }
    },
    handleZanTabChange(e) {
      var componentId = e.componentId;
      var selectedId = e.selectedId;

      this.setData({
        [`${componentId}.selectedId`]: selectedId,
        showPopup: !this.data.showPopup,
        showPopups: !this.data.showPopups,
      });
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
