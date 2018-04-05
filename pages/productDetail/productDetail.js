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
        comment:[],
        showCartZone:false,
        selectNum:1,
        bannerData:[
            {url:'https://www.weiyoutong.cn/wyttest/Public/Home/images/boom/productDetail_01.jpg'},
            {url:'https://www.weiyoutong.cn/wyttest/Public/Home/images/boom/productDetail_01.jpg'}
        ],
    },
    closeMask:function(event){
        if(event.target.dataset.action == 'close'){
            this.setData({
                showCartZone : false
            })
        }
    },
    addNum:function(){
        this.setData({
            selectNum : ++this.data.selectNum
        })
    },
    cutNum: function () {
        this.setData({
            selectNum : this.data.selectNum > 1 ? --this.data.selectNum : 1
        })
    },
    toggleKey: function (event) {
        var key = event.currentTarget.dataset.key;
        this.setData({
            [key] : !this.data[key]
        })
    },
    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title:'商品详情'
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
