const api = require('../../config/api.js');
const util = require('../../utils/util.js');
const { Field, Toast, extend } = require('../../zanui/index');

//获取应用实例
const app = getApp()
Page(extend({}, Toast, Field, {
    onShareAppMessage: function (res) {
        return {
            title: '意见反馈',
            path: '/pages/feedback/feedback'
        }
    },
    data: {
        showPopup: true,
    },

    handleZanFieldChange({ componentId, detail }) {
    /*
    * componentId 即为在模板中传入的 componentId
    * 用于在一个页面上使用多个 tab 时，进行区分
    * detail 即输入框中的内容
    */
    /*
    * 处理函数可以直接 return 一个字符串，将替换输入框的内容。
    */
       return detail
    },
    // 输入框聚焦时触发
    handleZanFieldFocus({ componentId, detail }) {},
    // 输入框失焦时触发
    handleZanFieldBlur({ componentId, detail }) {},
    submitFeedBack(){
        this.showZanToast({
            title: '提交成功'
        });
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
}))
