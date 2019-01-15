// miniprogram/pages/book/book.js
var helper = require('../viewModel/commonHelper.js')
var bookHelper = require('bookModel.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    book:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var books = helper.getWaitUploadBooksCache()
    var book = books[0]
    if (book) {
      this.setData({
        book: book
      })
      console.log(book,'jjajaj')
    }
    var infoItems = bookHelper.getBookInfoItems(book)
    this.setData({
      infoItems: infoItems,
      relateds:books
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