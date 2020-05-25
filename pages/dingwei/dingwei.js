var app = getApp()
Page({
  data: {
    lon: '',  // 经度
    lat: '',  // 纬度
  },
  onLoad: function (e) {  // 获取参数
    var that = this;
    wx.getLocation(
      {
        success: function (res) {
          that.setData({
            hasLocation: true,
            lon: res.longitude, 
            lat:res.latitude//这里是获取经纬度
          })
        }
      })
    
  }
})