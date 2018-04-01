var api = require('../config/api.js');
var util = {
    formatTime: date => {
        var year = date.getFullYear()
        var month = date.getMonth() + 1
        var day = date.getDate()

        var hour = date.getHours()
        var minute = date.getMinutes()
        var second = date.getSeconds()
        return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
    },
    formatNumber: n => {
        n = n.toString()
        return n[1] ? n : '0' + n
    },
    request: function (url, data = {}, callback = function () {
    }, method = 'POST') {
        wx.request({
            url: url,
            method: method,
            data: data,
            header: {
                'content-type': 'application/json'
            },
            success: callback
        })
    },
    sendUserData: function () {
        var openid = wx.getStorageSync('openid')
        var scene =  wx.getStorageSync('scene')
        var userInfo = wx.getStorageSync('userInfo')
        this.request(api.SendUserData, {
            openId: openid,
            nickName: userInfo.nickName || '',
            avatarUrl: userInfo.avatarUrl || '',
            scene: scene
        })
    },
    login: function (fn) {
        var that = this
        wx.login({
            success: res => {
                that.request(api.AuthLoginByWeixin, {jscode: res.code}, function (res) {
                    if (res.data.code == 1) {
                        wx.setStorageSync('openid', res.data.data.openid)
                        typeof fn == 'function' && fn()
                        that.getUserInfo()
                    }
                    else {
                        console.log(res.data.msg)
                    }
                })
            }
        })
    },
    getUserInfo: function(){
        var that = this
        wx.getUserInfo({
            success: res => {
                wx.setStorageSync('userInfo', res.userInfo)
                that.sendUserData()
            },
            fail: res => {
                wx.showModal({
                    title: '提示',
                    showCancel: false,
                    content: '您点击了拒绝授权，将无法正常使用小程序的功能，请进入设置打开授权按钮。',
                    success: function (res) {
                        if (res.confirm) {
                            wx.openSetting({
                                success: (res) => {
                                    wx.getUserInfo({
                                        success: res => {
                                            wx.setStorageSync('userInfo', res.userInfo)
                                            that.sendUserData()
                                        },
                                        fail: res => {
                                            that.sendUserData()
                                        }
                                    })
                                }
                            })
                        }
                    }
                })
            }
        })
    },
    removeFromArray:function (array,index) {
        array.splice(index, 1);
    },
    requestBeforeLogin: function (fn) {
        var that = this;
        var openid = wx.getStorageSync('openid');
        if (!openid) {
            that.login(fn)
        }
        else {
            typeof fn == 'function' && fn()
        }
    },
    requestBeforeLocation: function (fn) {
        var locationInfo = wx.getStorageSync('locationInfo');
        if (!locationInfo) {
            wx.getLocation({
                success: function (result) {
                    var location = {}
                    location.lat = result.latitude, location.lng = result.longitude
                    wx.setStorageSync('locationInfo', location);
                    typeof fn == 'function' && fn()
                },
                fail: function () {}
            });
        }
        else {
            typeof fn == 'function' && fn()
        }
    },
    toggleFromArray : (val, array) => {
        if (!array.includes(val)) {
            array.push(val)
        }
        else {
            let chosenIndex = array.findIndex(function (value) {
                return value == val
            })
            array.splice(chosenIndex, 1)
        }
    }
}

module.exports = util