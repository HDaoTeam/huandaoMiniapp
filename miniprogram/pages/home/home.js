// miniprogram/pages/home/home.js
var helper = require('../viewModel/commonHelper.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[
     "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548237218634&di=384cdf17b9c8239d10397ac29dc17584&imgtype=0&src=http%3A%2F%2Fimg.ph.126.net%2FGc86VahiXxJhoCyCJjQEYQ%3D%3D%2F3207970309571692066.jpg",
     "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548237218634&di=cc4815867e73d898bed8f4fa15930213&imgtype=0&src=http%3A%2F%2Fimg17.3lian.com%2Fd%2Ffile%2F201702%2F14%2Fbf13787b4f6a5c346c07b8f10466a682.jpg",
     "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548237218634&di=bebe16ebaeb193d473e4ecc5a4ae9086&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-01-04%2F5a4d9c1e51390.jpg"
      ,"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548237218633&di=2fbb9aa77f09626168783f0c3f7a91cb&imgtype=0&src=http%3A%2F%2Fpic38.photophoto.cn%2F20160109%2F0008020236591866_b.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548237218633&di=e326a47536cd574748c1252a068597bf&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F8%2F5811b0c6d0ce6.jpg"
    ],
    major:[
      {
        "title":"计算机"
      },
      {
        "title": "计算机"
      },
      {
        "title": "计算机"
      },
      {
        "title": "计算机"
      },
      {
        "title": "计算机"
      },
      {
        "title": "计算机"
      },
      {
        "title": "计算机"
      },
      {
        "title": "计算机"
      },
      {
        "title": "计算机"
      }
    ],
    books:[]
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
    wx.setNavigationBarTitle({
      title: '换到Pro',
    })
    var books = helper.getWaitUploadBooksCache()
    var newBooks = [];
    var rowBooks = [];
    books.forEach((item,index) =>{
      console.log(item, index)
      rowBooks.push(item)
      if ((index + 1)%3 == 0 ) {
        newBooks.push(rowBooks)
        rowBooks = []
      }
    });
    if (rowBooks.length > 0 && rowBooks.length < 3) {
      newBooks.push(rowBooks)
    }
    console.log(newBooks)
    this.setData({
      books: newBooks
    })
  },
  clickMajor(e) {
    wx.navigateTo({
      url: '../category/category',
    })
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