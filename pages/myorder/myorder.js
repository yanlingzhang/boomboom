const api = require('../../config/api.js');
const util = require('../../utils/util.js');
const { Tab, extend } = require('../../zanui/index');

//获取应用实例
const app = getApp()
Page(extend({}, Tab, {
    onShareAppMessage: function (res) {
      return {
        title: '我的订单',
        path: '/pages/myorder/myorder'
      }
    },
    data: {
      tab: {
        list: [{
          id: 'all',
          title: '全部'
        }, {
          id: 'topay',
          title: '待付款'
        }, {
          id: 'tosend',
          title: '待发货'
        }, {
          id: 'send',
          title: '待收货'
        }, {
          id: 'sign',
          title: '已完成'
        }],
        selectedId: 'all'
      },
      order: [
        {
          'number': '123',
          'status': '1',
          'shop': [
            {
              'name': '1红烧牛肉【虚拟商品】【有库存】【有sku】',
              'img': '2',
              'price': '$989.00',
              'desc': '4',
            },
            {
              'name': '2红烧牛肉【虚拟商品】【有库存】【有sku】',
              'img': '2',
              'price': '$987.00',
              'desc': '4',
            }
          ]
        },
        {
          'number': '123',
          'status': '1',
          'shop': [
            {
              'name': '2红烧牛肉【虚拟商品】【有库存】【有sku】',
              'img': '2',
              'price': '$999.00',
              'desc': '4',
            }
          ]
        }
      ]
    },
    handleZanTabChange(e) {
      var componentId = e.componentId;
      var selectedId = e.selectedId;

      this.setData({
        [`${componentId}.selectedId`]: selectedId
      });
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
}))
