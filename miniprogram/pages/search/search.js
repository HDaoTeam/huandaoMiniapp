// miniprogram/pages/search/search.js
var helper = require('../viewModel/commonHelper.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hot:[
      "东野圭吾",
      "人类简史",
      "哈利波特",
      "三题",
      "平凡的世界",
      "百年孤独",
      "yiyi",
      "杨显惠",
      "金庸",
      "围城"
    ],
    history:[],
    books:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  addCart(e) {

  },

  clickHot(e) {
    console.log(e)
    this.setData({
      inputString: e.currentTarget.dataset.title
    })
    this.clickSearch()
  },

  clickSearch(e) {
    var books = helper.getWaitUploadBooksCache()
    this.setData({
      books:books
    })
  },
  didInput(e) {
    this.setData({
      inputString:e.detail.value
    })
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