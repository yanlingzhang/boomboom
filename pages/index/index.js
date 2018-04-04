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
        bannerData: [
            {url: 'https://www.weiyoutong.cn/wyttest/Public/Home/images/boom/banner_01.jpg'},
            {url: 'https://www.weiyoutong.cn/wyttest/Public/Home/images/boom/banner_01.jpg'},
            {url: 'https://www.weiyoutong.cn/wyttest/Public/Home/images/boom/banner_01.jpg'},
            {url: 'https://www.weiyoutong.cn/wyttest/Public/Home/images/boom/banner_01.jpg'},
            {url: 'https://www.weiyoutong.cn/wyttest/Public/Home/images/boom/banner_01.jpg'}],
        scrollShopData: [
            {url: 'https://www.weiyoutong.cn/wyttest/Public/Home/images/boom/brand_01.jpg'},
            {url: 'https://www.weiyoutong.cn/wyttest/Public/Home/images/boom/brand_02.jpg'},
            {url: 'https://www.weiyoutong.cn/wyttest/Public/Home/images/boom/brand_01.jpg'},
            {url: 'https://www.weiyoutong.cn/wyttest/Public/Home/images/boom/brand_02.jpg'}
        ],
        brandData: [
            {url: 'https://www.weiyoutong.cn/wyttest/Public/Home/images/boom/icon_food.png', name: '零食'},
            {url: 'https://www.weiyoutong.cn/wyttest/Public/Home/images/boom/icon_wine.png', name: '酒类'},
            {url: 'https://www.weiyoutong.cn/wyttest/Public/Home/images/boom/icon_milk.png', name: '牛奶'},
            {url: 'https://www.weiyoutong.cn/wyttest/Public/Home/images/boom/icon_fruit.png', name: '水果'},
            {url: 'https://www.weiyoutong.cn/wyttest/Public/Home/images/boom/icon_more.png', name: '其他'}
        ]
    },
    toggleKey: function (event) {
        var key = event.currentTarget.dataset.key;
        this.setData({
            [key]: !this.data[key]
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
