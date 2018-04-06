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
        showOtherGet:false,
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
    closeMask:function(event){
        if(event.target.dataset.action == 'close'){
            this.setData({
                showOtherGet : false
            })
        }
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
    toggleMusic: function () {
        let innerAudioContext = this.data.innerAudioContext;
        innerAudioContext.paused ?  innerAudioContext.play() :  innerAudioContext.pause();
    },
    onLoad: function (options) {
        const innerAudioContext = wx.createInnerAudioContext();
        this.setData({
            innerAudioContext:innerAudioContext
        })
        innerAudioContext.autoplay = true;
        innerAudioContext.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46';
        wx.setNavigationBarTitle({
            title:'领礼包'
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
