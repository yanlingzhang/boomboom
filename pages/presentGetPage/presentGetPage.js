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
        scrollTop: 0,
        showPresentShareOne:false,
        showPresentShareTwo:false,
        showForm:false,
        showIntro:false,
        city:undefined,
        payIng:false,
    },
    toggleKey: function (event) {
        var key = event.currentTarget.dataset.key;
        this.setData({
            [key] : !this.data[key]
        })
    },
    citySelect: function (e) {
        this.setData({
            city: e.detail.value
        })
    },
    goTop: function(e){
        this.setData({
            scrollTop: 0
        })
    },
    showMes: function (mes) {
        wx.showModal({
            title: '',
            content: mes,
            showCancel: false
        })
    },
    switchChange:function(){

    },
    finishForm: function () {
        this.setData({
            showForm : false,
            showIntro : true
        })
    },
    orderPay: function () {
        wx.requestPayment({
            'timeStamp': res.data.data.timeStamp,
            'nonceStr': res.data.data.nonceStr,
            'package': res.data.data.package,
            'signType': res.data.data.signType,
            'paySign': res.data.data.paySign,
            'success':function(res){
            },
            'fail':function(res){
            }
        })
    },
    contChange: function (e) {
        this.setData({
            [e.currentTarget.dataset.key]: e.detail.value
        })
    },
    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title:'我的礼包'
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
