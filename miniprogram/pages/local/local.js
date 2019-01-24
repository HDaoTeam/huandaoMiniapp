// miniprogram/pages/local/local.js
var api = require('../../common/utils/api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.province) {
      this.setData({
        province: options.province
      })
      wx.setNavigationBarTitle({
        title: '选择省份'
      })
    }else {
      wx.setNavigationBarTitle({
        title: '选择学校'
      })
    }
    this.loadData()
  },

  loadData() {
    if (this.data.province) {
      api.loadUniversity(this.data.province).then(res => {
        console.log(res)
      }).catch(err =>{

      });
    }else {
      api.loadProcince(this.data.province).then(res => {
        console.log(res)
      }).catch(err => {

      });
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})