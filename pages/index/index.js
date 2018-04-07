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
        showForm:false,
        showIntro:false,
        city:undefined,
        payIng:false,
        showPresent: false,
        showPresentResult:false,
        name:'',
        tel:'',
        address:'',
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
    citySelect: function (e) {
        this.setData({
            city: e.detail.value
        })
    },
    getRed: function(){
      this.setData({
          showPresent : true
      })
    },
    usePresent:function(){
        this.setData({
            showPresentResult:false,
            showForm : true
        })
    },
    showMes: function (mes) {
        wx.showToast({
            title: mes,
            icon: 'none',
            duration: 2000
        })
    },
    finishForm: function () {

        if(this.data.name == '' || !this.data.name){
            this.showMes('请输入收件人姓名')
            return;
        }
        if(this.data.tel == '' || !this.data.tel){
            this.showMes('请输入电话')
            return;
        }
        if(!/^1\d{10}$/g.test(this.data.tel)){
            this.showMes('请输入正确的电话号码')
            return;
        }
        if(this.data.city == '' || !this.data.city){
            this.showMes('请选择省市区')
            return;
        }
        if(this.data.address == '' || !this.data.address){
            this.showMes('请输入地址')
            return;
        }
        this.setData({
            showForm : false,
            showIntro : true
        })
    },
    openPresent:function () {
        this.setData({
            showPresentResult: true,
            showPresent:false
        })
    },
    orderPay: function () {
        this.setData({
            showIntro : false
        })
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
        this.getRed();
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
