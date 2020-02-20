// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: "../img/bg.png"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  getUserInfo: function(e) {
    console.log(e)
    if (e.detail.errMsg ==="getUserInfo:ok"){
      wx.setStorage({
        key: 'auth',
        data: 'yes',
      })
      wx.navigateBack({
        delta: 1,
      });
      wx.setStorage({
        key: 'userInfo',
        data: e.detail.userInfo,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
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