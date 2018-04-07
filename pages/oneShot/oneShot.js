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
        showImageSelect:true,
        showWordZone:false,
        showCardSelect:false,
        presentNum:1,
        presentWord:undefined
    },
    toggleKey: function (event) {
        var key = event.currentTarget.dataset.key;
        this.setData({
            [key] : !this.data[key]
        })
    },
    cutPresentNum: function () {
        this.setData({
            presentNum : this.data.presentNum > 1 ? --this.data.presentNum : 1
        })
    },
    addPresentNum: function () {
        this.setData({
            presentNum : ++this.data.presentNum
        })
    },
    showMes: function (mes) {
        wx.showToast({
            title: mes,
            icon: 'none',
            duration: 2000
        })
    },
    submitPresentMake:function(){

    },
    contChange: function (e) {
        this.setData({
            [e.currentTarget.dataset.key]: e.detail.value
        })
    },
    selectNext:function(){
        this.setData({
            showCardSelect : true,
            showImageSelect: false
        })
    },
    makePresent:function(){
        this.setData({
            showWordZone : true
        })
    },
    closeMask:function(event){
        if(event.target.dataset.action == 'close'){
            this.setData({
                showCartZone : false
            })
        }
    },
    goTop: function(e){
        this.setData({
            scrollTop: 0
        })
    },
    switchChange:function(){

    },
    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title:'来一发'
        })
        wx.setNavigationBarTitle({
            title:'选择礼品卡'
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
