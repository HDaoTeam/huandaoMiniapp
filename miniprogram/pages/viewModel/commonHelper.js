
var helper = require('../../common/utils/util.js')
var staticKey = {
  waitUploadBooks: "wait-upload-book"
}
function getWaitUploadBooksCache() {
  var arr = wx.getStorageSync(staticKey.waitUploadBooks);
  if (helper.isEmptyArray(arr)) {
    arr = []
  }
  return arr
}

function addWaitUploadBooksCache(book) {
  // deleleWaitUploadBooksCache(book)
  var arr = wx.getStorageSync(staticKey.waitUploadBooks);
  if (helper.isEmptyArray(arr)) {
    arr = []
  }
  arr.push(book)
  wx.setStorageSync(staticKey.waitUploadBooks, arr)
  return true
}

function deleleWaitUploadBooksCache(book) {
  var arr = wx.getStorageSync(staticKey.waitUploadBooks);
  if (helper.isEmptyArray(arr) == true) {
    return true
  }
  var index = -1;
  for (var i in arr) {
    if (arr[i].isbn13 == book.isbn13) {
      index = i
      break
    }
  }
  if (index > -1) {
    arr.splice(index, 1)
  }

  wx.setStorageSync(staticKey.waitUploadBooks, arr)
  return index > -1;
}

module.exports = {
  getWaitUploadBooksCache,
  addWaitUploadBooksCache,
  deleleWaitUploadBooksCache
}