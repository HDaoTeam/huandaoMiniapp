// miniprogram/pages/category/category.js
var helper = require('../viewModel/commonHelper.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [{
        "title": "计算机"
      },
      {
        "title": "经管"
      },
      {
        "title": "土木"
      },
      {
        "title": "电气"
      },
      {
        "title": "文学"
      },
      {
        "title": "语言"
      },
      {
        "title": "历史"
      },
      {
        "title": "水电"
      },
      {
        "title": "啦啦"
      },
      {
        "title": "牛逼带我去"
      },
      {
        "title": "可以的"
      },
    ],
    tab: {
      "title": "计算机",
      "onSale": "总共123在售",
      "image": ""
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '换到',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    var books = helper.getWaitUploadBooksCache()
    var tab = this.data.tab;
    tab.books = books
    console.log(tab)
    this.setData({
      tab: tab
    })
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