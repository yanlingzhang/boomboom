const api = require('../../config/api.js');
const util = require('../../utils/util.js');

//获取应用实例
const app = getApp()
Page({
    onShareAppMessage: function (res) {
        return {
            title: '管理收货地址',
            path: '/pages/manageAddress/manageAddress'
        }
    },
    data: {
        showPopup: true,
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
})
