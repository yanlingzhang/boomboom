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
        productList:[1],
        edit:false,
    },
    gotoDetail: function (event) {
        var url = event.currentTarget.dataset.url;
        wx.navigateTo({
          url: url
        })
    },
    cutNum: function (event) {

    },
    addNum: function (event) {

    },
    chosenProduct:function(e){

    },
    toggleKey: function (event) {
        var key = event.currentTarget.dataset.key;
        this.setData({
            [key] : !this.data[key]
        })
    },
    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title:'购物车'
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
