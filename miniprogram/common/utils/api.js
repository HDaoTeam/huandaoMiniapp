var Promise = require('../plugins/es6-promise.js')
var DOMAIN = "https://app.www.gov.cn/govdata/gov/"
var ApiUrls = {
  ISBN: "https://api.douban.com/v2/book/isbn/"
 
}

function request(url, params, method = 'POST') {
  return new Promise((resolve, reject) => {
    console.log(url, params)
    wx.request({
      url: url,
      method: method,
      header: {
        "Content-Type": "application/json",
      },
      success: (res => {
        console.log(res.data)
        resolve(res.data)
      }),
      fail: reject
    })
  })
}
function loadBookFromDouBan(isbn) {
  return request(ApiUrls.ISBN + isbn)
}

module.exports = {
  loadBookFromDouBan,
}
