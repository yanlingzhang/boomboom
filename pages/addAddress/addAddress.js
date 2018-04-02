const api = require('../../config/api.js');
const util = require('../../utils/util.js');
const { Field, Switch, extend } = require('../../zanui/index');

//获取应用实例
const app = getApp()
Page(extend({}, Field, Switch, {
  onShareAppMessage: function (res) {
    return {
        title: '新增收货地址',
        path: '/pages/addAddress/addAddress'
    }
  },
  data: {
    area: ['省份', '北京市', '天津市', '河北省', '山西省', '内蒙古自治区', '辽宁省', '吉林省', '黑龙江省', '上海市', '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省', '河南省', '湖北省', '湖南省', '广东省', '广西壮族自治区', '海南省', '重庆市', '四川省', '贵州省', '云南省', '西藏自治区', '陕西省', '甘肃省', '青海省', '宁夏回族自治区', '新疆维吾尔自治区', '台湾省', '香港特别行政区', '澳门特别行政区'],
    areaIndex: 0,
    sync: {
        checked: false
    }
  },
  onAreaChange(e) {
    this.setData({
      areaIndex: e.detail.value
    });
  },
  handleZanSwitchChange(e) {
    var componentId = e.componentId;
    var checked = e.checked;

    if (componentId == 'sync') {
      // 同步开关
      this.setData({
        [`${componentId}.checked`]: checked
      });
    }
  },
  /* piker-view 示例相关函数 */
  handleDateFieldClick() {
    this.setData({
      'pickerViewConfig.show': true
    });
  },
  handlePopupDateChange(e) {
    this.setData({
      'pickerViewConfig.value': e.detail.value
    });
  },
  hideDatePopup() {
    this.setData({
      'pickerViewConfig.show': false
    });
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