// pages/first/first.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    provincesarray: ['贵州', '云南', '四川', '重庆'],
    provincesindex: 0,
    plotarray: ["观山湖区", "白云区"],
    plotindex: 0,
    plotcodearray: ["1", "2"],
    plotcodeindex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.request({
      url: 'https://2020-antiviral.fe-cred.com/api/v1/booking/plot/list/1/10',
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      data: {
        page: 1,
        size: 10
      },
      success: (res) => {
        console.log(res);

        this.setData({
          plotarray: [...res.data.payload.list],
          plotcodearray: [...res.data.payload.list]
        })
      },
      fail: function(res) {
        console.log(res);
      }
    });
  },
  formSubmit: function(e) {
    const identity = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    console.log(e.detail.value.plot)
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    if (!identity.test(e.detail.value.identity)){
      wx.showModal({
        content: '请输入正确的身份证号码',
        showCancel: false,
        confirmText: '确定',
        confirmColor: '#4EB7C2',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    }else if (e.detail.value.address === "" ||e.detail.value.identity === "" || e.detail.value.plot === "" || e.detail.value.name === "" || app.globalData.openid === "") {
      wx.showToast({
        title: '请输入完整信息',
        icon: '',
        image: '',
        duration: 1000,
        mask: true,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    } else {
      wx.request({
        url: 'https://2020-antiviral.fe-cred.com/api/v1/booking/bind',
        data: {
          "address": e.detail.value.address,
          "detailAddress": e.detail.value.detailAddress,
          "identity": e.detail.value.identity,
          "plot": e.detail.value.plot,
          "username": e.detail.value.name,
          "openId": wx.getStorageSync("openid"),
          "plotCode": e.detail.value.plotcode
        },
        method: "POST",
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        success: (res) => {
          console.log(res);
          if (res.data.code === 2000) {
            wx.navigateTo({
              url: '/pages/tips/tips'
            })
          } else {
            wx.showModal({
              content: res.data.message,
              showCancel: false,
              confirmText: '确定',
              success: function(res) {},
              fail: function(res) {},
              complete: function(res) {},
            })
          }
        },
        fail: function(res) {
          console.log(res);
        }
      });
    }

  },
  bindPickerChangeprovinces: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      provincesindex: e.detail.value
    })
  },
  bindPickerChangeplot: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      plotindex: e.detail.value
    })
  },
  bindPickerChangeplotcode: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      plotcodeindex: e.detail.value
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