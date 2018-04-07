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
        searchCont:undefined
    },
    toggleKey: function (event) {
        var key = event.currentTarget.dataset.key;
        this.setData({
            [key] : !this.data[key]
        })
    },
    searchCont: function () {
        if(this.data.searchCont == '' || !this.data.searchCont){
            wx.showToast({
                title: '请输入搜索内容',
                icon: 'none',
                duration: 2000
            })
            return;
        }
    },
    contChange: function (e) {
        this.setData({
            [e.currentTarget.dataset.key]: e.detail.value
        })
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
})
