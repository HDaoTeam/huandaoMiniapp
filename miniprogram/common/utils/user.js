var api  = require("api.js")
function login() {
  return new Promise((resolve, reject) => {
    wx.login({
      success: res => {
        console.log("login code:",res);
        wx.cloud.callFunction({
          name: "user",
          data: {
            "method": "login",
            "params": {
              "code": res.code
            }
          },
          success: res => {
            getUserInfo();
            resolve(res)
          },
          fail: err => {
            reject(err)
          }
        })
      },
      fail: err => {
        reject(err)
      }
    })
  })
}
function getUserInfo() {
  console.log("get profile")
  return new Promise((resolve, reject) => {
    wx.getSetting({
      success(res) {
        console.log("profilr right", res)
        if (res.authSetting['scope.userInfo']) {

          // 已经授权，可以直接调用 getUserInfo 获取头像昵
          wx.getUserInfo({
            success: function (res) {
              resolve(res.userInfo)
              updateUserInfo(res.userInfo)
            },
            fail: err => {
              reject(err)
            }
          })
        }
      },
      fail: err => {
        console.log("profile reject!")
        reject(err)
      }
    });
  })
}

function updateUserInfo(params) {
  console.log('user profile:',params)
  return api.fetchApi('user',"upsert",params)
}

module.exports = {
  login,
  getUserInfo,
  updateUserInfo
}