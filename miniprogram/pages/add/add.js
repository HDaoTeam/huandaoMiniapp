// miniprogram/pages/add/add.js
var api = require('../../common/utils/api.js')
var helper = require('../viewModel/commonHelper.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ISBN:'',
    books:[],
    result:'{"rating":{"max":10,"numRaters":16662,"average":"9.0","min":0},"subtitle":"增订纪念本","author":["[美] 黄仁宇"],"pubdate":"2006-8","tags":[{"count":6017,"name":"历史","title":"历史"},{"count":4133,"name":"黄仁宇","title":"黄仁宇"},{"count":2761,"name":"万历十五年","title":"万历十五年"},{"count":2524,"name":"明朝","title":"明朝"},{"count":1940,"name":"明史","title":"明史"},{"count":1883,"name":"中国历史","title":"中国历史"},{"count":1164,"name":"大历史","title":"大历史"},{"count":1001,"name":"中国","title":"中国"}],"origin_title":"1587, A Year of No Significance","image":"https://img1.doubanio.com/view/subject/m/public/s1790028.jpg","binding":"平装16开","translator":[],"catalog":"","pages":"264","images":{"small":"https://img1.doubanio.com/view/subject/s/public/s1790028.jpg","large":"https://img1.doubanio.com/view/subject/l/public/s1790028.jpg","medium":"https://img1.doubanio.com/view/subject/m/public/s1790028.jpg"},"alt":"https://book.douban.com/subject/1858410/","id":"1858410","publisher":"中华书局","isbn10":"7101052037","isbn13":"9787101052039","title":"万历十五年","url":"https://api.douban.com/v2/book/1858410","alt_title":"1587, A Year of No Significance","author_intro":"黄仁宇（1918-2000），湖南长沙人，美籍历史学家。早年辗转于求学、从军之途，曾梦想成为中国的拿破仑，然而时代却不允许他有这样的机缘。其后赴美研习历史，于一番逼仄煎熬之中提出大历史观，主张要“从技术人上的角度看历史”，而不能简单地以道德评价笼罩一切。\n代表作有《十六世纪时代中国之财政与税收》、《万历十五年》、《中国大历史》等。他传奇性的一生以及大历史观的由来见于自传《黄河青山——黄仁宇回忆录》。","summary":"万历十五年，亦即公元1587年，在西欧历史上为西班牙舰队全部出动征英的前一年；而在中国，这平平淡淡的一年中，发生了若干为历史学家所易于忽视的事件。这些事件，表面看来虽似末端小节，但实质上却是以前发生大事的症结，也是将在以后掀起波澜的机缘。在历史学家黄仁宇的眼中，其间的关系因果，恰为历史的重点，而我们的大历史之旅，也自此开始……\n《万历十五年》是黄仁宇的成名之作，也是他的代表作之一。这本书融会了他数十年人生经历与治学体会，首次以“大历史观”分析明代社会之症结，观察现代中国之来路，给人启发良多。英文原本推出后，被美国多所大学采用为教科书，并两次获得美国书卷奖历史类好书的提名。\n中华书局的增订版，重新核校全部文字，增收黄仁宇《1619年的辽东战役》等数篇文字，精选彩色历史图片10余幅。","price":"36.00元"}'

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
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
  didInput(e) {
    this.data.ISBN = console.log(e.detail.value);
  },
  endInput(e) {
    this.dismissInput()
    this.loadBookInfo()
  },

  clickDelete(e) {
    var book = e.currentTarget.dataset.item;
    console.log(book)
    helper.deleleWaitUploadBooksCache(book)
    var books = helper.getWaitUploadBooksCache();
    var app = getApp()
    app.globalData.booksWaitUpload = books;
    this.setData({
      books: books
    })
  },
  dismissInput(e) {
    this.setData({
      showInput: false
    })    
  },

  scanISBN(e) {
    // console.log('click scan')
    // var that = this;
    // wx.scanCode({
    //   success(res) {
    //     console.log(res)
    //     var isbn = res.result;
    //     that.setData({
    //       ISBN:isbn
    //     })
    //     that.loadBookInfo()
    //   } 
    // })
    this.setData({
      ISBN: "9787101052039",
      showInput:true
    })

    this.loadBookInfo()  
  },

  loadBookInfo() {
    wx.showLoading({
      title: '正在加载..',
      icon:"none"
    })
    var that = this;
    api.loadBookFromDouBan(this.data.ISBN).then(res => {
      res = JSON.parse(that.data.result)
      that.loadBookInfoSuccess(res)
    }).catch(err => {
      // that.loadBookInfoFailed(err)

      var jsonString = that.data.result
      jsonString = jsonString.replace(/[\r\n]/g, "");
      var res = JSON.parse(jsonString)
      that.loadBookInfoSuccess(res)
    })
  },
  loadBookInfoSuccess(res ){
    wx.hideLoading()
    var arr = this.data.books;
    arr.push(res);
    var app = getApp()
    app.globalData.booksWaitUpload = arr;
    helper.addWaitUploadBooksCache(res)
    this.setData({
      books: helper.getWaitUploadBooksCache()
    })
  },
  
  loadBookInfoFailed(err){
    wx.hideLoading()
    wx.showToast({
      title: '加载错误',
    })
  },


  editISBN(e) {
    console.log("edit ISBN")
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