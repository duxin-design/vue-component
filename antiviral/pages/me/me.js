// pages/me/me.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rightImg: "../img/right.png"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const openId = app.globalData.openid;
    // 判定是否已经绑定信息
    wx.request({
      url: 'https://2020-antiviral.fe-cred.com/api/v1/booking/check',
      data: {
        openid: wx.getStorageSync("openid"),
      },
      method: "GET",
      header: {
        "Content-Type": "application/json"
      },
      success: (res) => {
        if (res.data.code === 61002) {
          wx.hideLoading();
          wx.setStorage({
            key: 'binduser',
            data: 'yes',
          })
        } else {
          wx.navigateTo({
            url: '/pages/first/first'
          })
        }
      },
      fail: function(res) {
        console.log(res);
      }
    });
  },
  record: function() {
    wx.navigateTo({
      url: '/pages/record/record'
    })
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