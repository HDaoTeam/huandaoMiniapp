var Promise = require('../plugins/es6-promise.js')
var DOMAIN = "https://app.www.gov.cn/govdata/gov/"
var ApiUrls = {
  ISBN: "https://api.douban.com/v2/book/isbn/",
  PROVINCE:'http://119.29.166.254:9090/api/provinces',
  UNIVERSITY:'http://119.29.166.254:9090/api/university/getUniversityByProvinceId?id='
 
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
function loadProcince(){
  return request(ApiUrls.PROVINCE)
}
function loadUniversity(province) {
  return request(ApiUrls.UNIVERSITY+province)
}

module.exports = {
  loadBookFromDouBan,
  loadProcince,
  loadUniversity,
}
