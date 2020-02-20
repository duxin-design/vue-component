//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getPhoneNumber'),
    imgurl: "../img/bg.png",
    isLogin: false,
    sessionKey: "",
    code: "",
    openid: ""
  },

  onLoad: function() {
    console.log(1)
    const that = this;
    console.log(wx.getStorageSync('auth'))
    if (wx.getStorageSync('auth') !== "yes" || !wx.getStorageSync('auth')) {
      wx.navigateTo({
        url: '/pages/login/login'
      })
    }
    wx.login({
      success: res => {
        console.log(res.code)
        wx.request({
          url: 'https://2020-antiviral.fe-cred.com/api/v1/booking/login',
          data: {
            code: res.code,
          },
          method: "POST",
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          success: (res) => {
            console.log(res);
            if (res.data.code === 2000) {
              that.setData({
                openid: res.data.payload.openid,
                sessionKey: res.data.payload.session_key
              })
              wx.setStorage({
                key: 'openid',
                data: res.data.payload.openid,
              })
              wx.showLoading({
                title: '登录中...',
                mask: true,
                success: function(res) {},
                fail: function(res) {},
                complete: function(res) {},
              })
              // 判定是否已经绑定信息
              wx.request({
                url: 'https://2020-antiviral.fe-cred.com/api/v1/booking/check',
                data: {
                  openid: res.data.payload.openid,
                },
                method: "GET",
                header: {
                  "Content-Type": "application/json"
                },
                success: (res) => {
                  console.log(res);
                  wx.hideLoading();
                  if (res.data.code === 61002) {
                    that.setData({
                      isLogin: true
                    })
                    console.log(that.data.isLogin)
                    wx.setStorage({
                      key: 'binduser',
                      data: 'yes',
                    })
                  }
                },
                fail: function(res) {
                  console.log(res);
                }
              });
            }
          },
          fail: function(res) {
            console.log(res);
          }
        });
      }
    })
  },
  getPhoneNumber: function(e) {
    var that = this;
    console.log(this.data.code)
    wx.checkSession({
      success: function() {
        console.log(wx.getStorageSync("userInfo"))
        var avatar = wx.getStorageSync("userInfo").avatarUrl;
        var province = wx.getStorageSync("userInfo").province;
        const code = that.data.code;
        const sessionKey = that.data.sessionKey;
        const iv = e.detail.iv;
        const en = e.detail.encryptedData;
        const sex = wx.getStorageSync("userInfo").gender;
        const openId = that.data.openid;
        const nickName = wx.getStorageSync("userInfo").nickName
        if (e.detail.errMsg === 'getPhoneNumber:ok') { //同意授权
          wx.request({
            url: 'https://2020-antiviral.fe-cred.com/api/v1/booking/updateuserinfo',
            data: {
              avatar: avatar,
              province: province,
              sex: sex,
              encryptedData: en,
              iv: iv,
              openid: wx.getStorageSync("openid"),
              sessionKey: sessionKey,
              nickname: nickName
            },
            method: "POST",
            header: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            success: (res) => {
              console.log(res);
              if (wx.getStorageSync('binduser') === "yes") {
                console.log(1111)
                wx.navigateTo({
                  url: '/pages/tips/tips',
                })
              } else {
                wx.navigateTo({
                  url: '/pages/first/first',
                })
              }
            },
            fail: function(res) {
              console.log(res);
            }
          });
        }
      },
      fail: function() {
        console.log("session_key 已经失效，需要重新执行登录流程");
        that.wxlogin(); //重新登录
      }
    });
  },
  isBinduser: function() {
    wx.navigateTo({
      url: '/pages/tips/tips',
    })
  }
})