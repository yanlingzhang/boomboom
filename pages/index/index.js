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
        showPresent: false,
        bannerData:[{url:'https://www.weiyoutong.cn/weiyoutong/Public/Home/images/nail/close_btn.png'}],
        scrollShopData:[
            {url:'https://www.weiyoutong.cn/weiyoutong/Public/Home/images/nail/close_btn.png'},
            {url:'https://www.weiyoutong.cn/weiyoutong/Public/Home/images/nail/close_btn.png'},
            {url:'https://www.weiyoutong.cn/weiyoutong/Public/Home/images/nail/close_btn.png'},
            {url:'https://www.weiyoutong.cn/weiyoutong/Public/Home/images/nail/close_btn.png'}
        ],
        brandData:[
            {url:'https://www.weiyoutong.cn/weiyoutong/Public/Home/images/nail/close_btn.png',name:'零食'},
            {url:'https://www.weiyoutong.cn/weiyoutong/Public/Home/images/nail/close_btn.png',name:'零食'},
            {url:'https://www.weiyoutong.cn/weiyoutong/Public/Home/images/nail/close_btn.png',name:'零食'},
            {url:'https://www.weiyoutong.cn/weiyoutong/Public/Home/images/nail/close_btn.png',name:'零食'}
        ],
    },
    toggleKey: function (event) {
        var key = event.currentTarget.dataset.key;
        this.setData({
            [key] : !this.data[key]
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
