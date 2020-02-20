// pages/tips/tips.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
     
  },
  radioChange: function(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    this.setData({
      select: e.detail.value
    })
  },
  buy: function() {
    console.log(app.globalData.openid)
    if (this.data.select === "yes") {
      wx.request({
        url: 'https://2020-antiviral.fe-cred.com/api/v1/booking/apply',
        data: {
          "openid": wx.getStorageSync("openid")
        },
        method: "POST",
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        success: (res) => {
          console.log(res);
          if (res.data.code === 61002 || res.data.code === 2000 ){
            wx.showModal({
              title: '温馨提示',
              content: res.data.message,
              confirmText: '确定',
              confirmColor: '#4EB7C2',
              showCancel:false,
              success: function (res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                  wx.redirectTo({
                    url: '/pages/record/record',
                  })
                } 
              },
              fail: function (res) { },
              complete: function (res) { },
            })
          }else{
            wx.showModal({
              title: '温馨提示',
              content: res.data.message,
              confirmText: '确定',
              confirmColor: '#4EB7C2',
              showCancel: false,
              success: function (res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                  wx.redirectTo({
                    url: '/pages/index/index',
                  })
                }
              },
              fail: function (res) { },
              complete: function (res) { },
            })
          }
        },
        fail: function (res) {
          console.log(res);
        }
      });
    } else {
      wx.showModal({
        content: '请阅读口罩购买须知',
        success(res) {
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})