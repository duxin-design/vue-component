// pages/record/record.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ordersList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const that  = this;
    wx.request({
      method: 'GET',
      url: "https://2020-antiviral.fe-cred.com/api/v1/booking/orders",
      header: {
        'content-type': 'application/json'
      },
      data: {
        openid: wx.getStorageSync("openid")
      },
      success: function(res) {
        console.log(res)
        if (res.data.code === 2000) {
          console.log(res)
          const arr = [];
          if (res.data.payload.length===0){
            wx.showModal({
              title: '温馨提示',
              content: '您还没有预约的记录哦！',
              showCancel: false,
              cancelText: '',
              cancelColor: '',
              confirmText: '',
              confirmColor: '',
              success: function(res) {},
              fail: function(res) {},
              complete: function(res) {},
            })
          }else{
            arr.push(...res.data.payload)
            console.log(arr)
            that.setData({
              ordersList: arr
            })
          }
        }
      }
    })
    console.log(that.data.ordersList)
  },
  qrcode: function(e) {
    console.log(e)
    wx.navigateTo({
      url: '/pages/qr/qrcode?id='+ e.currentTarget.dataset.orderid+'&qrpath=' + e.currentTarget.dataset.qr
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