const api = require('../../config/api.js');
const util = require('../../utils/util.js');
const { Tab, extend } = require('../../zanui/index');

//获取应用实例
const app = getApp()
Page(extend({}, Tab, {
    onShareAppMessage: function (res) {
      return {
        title: '填写退款',
        path: '/pages/refundDetail/refundDetail'
      }
    },
    data: {
      showBottomPopup__refund__pro: false,
      showBottomPopup__refund__bes: false,
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
      orders: [],
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
    toggleBottomPopupPro() {
      this.setData({
        showBottomPopup__refund__pro: !this.data.showBottomPopup__refund__pro
      });
    },
    toggleBottomPopupBes() {
      this.setData({
        showBottomPopup__refund__bes: !this.data.showBottomPopup__refund__bes
      });
    },
    radioChangeShopStatus: function (e) {
      console.log('radio发生change事件，携带value值为：', e.detail.value)
    },
    radioChangeRefundPro: function (e) {
      console.log('radio发生change事件，携带value值为：', e.detail.value)
    },
    handleZanTabChange(e) {
      var componentId = e.componentId;
      var selectedId = e.selectedId;
      console.log(e.selectedId)
      this.setData({
        [`${componentId}.selectedId`]: selectedId
      });

      if (e.selectedId == 'all') {
        this.setData({
          [`${componentId}.selectedId`]: selectedId
        });
        console.log(this.data.order)
        this.setData({
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
        })
      }

      if (e.selectedId == 'topay'){
        this.setData({
          [`${componentId}.selectedId`]: selectedId
        });
        this.setData({
          order: []
        })
      }
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
