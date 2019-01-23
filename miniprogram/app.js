//app.js
var user = require("common/utils/user.js")
var helper = require("pages/viewModel/commonHelper.js")
App({
  onLaunch: function () {
    this.globalData = {}

    var userInfo = helper.getCachedUserInfo()
    console.log(userInfo)
    if(userInfo) {
      this.globalData.userInfo = userInfo;
    }
  },
  login(option) {
    this.updateLocalSession()
    if (!this.globalData.session) {
      this.requestLogin()
    } else {
      var that = this;
      wx.checkSession({
        success: res => {
          console.log('login success', res)
          that.updateLoginState(true)
        },
        fail: err => {
          that.clearLocalSession()
          that.requestLogin()
        }
      })
    }
  },

  clearLocalSession() {
    wx.removeStorageSync("session")
    this.globalData.session = undefined;
    this.globalData.userId = undefined;
  },

  updateLocalSession() {
    var data = wx.getStorageSync("session");
    if (data) {
      this.globalData.session = data.session_key;
      this.globalData.userId = data.openid;
    }
  },
  requestLogin() {
    var that = this;
    user.login().then(res => {
      console.log('login res', res);
      if (res.result) {
        wx.setStorageSync("session", res.result);
        that.updateLocalSession()
        that.updateLoginState(true)
      }
      wx.hideLoading();
    }).catch(err => {
      console.log(err)
      wx.hideLoading()
    })
  },

  updateLoginState(iflogin) {

    this.globalData.iflogin = iflogin;
    if (iflogin) {
      notification.$fire('login')
    } else {
      notification.$fire('out')
    }
  },

})
