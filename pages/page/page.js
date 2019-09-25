// pages/page/page.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
     value:"",
     songListArray:[]
  },
  
    play: function (e) {
      const id = (e.currentTarget.dataset.songid)
      this.triggerEvent("changemusic", { songid: id }, { bubbles: true, composed: true })
       console.log(e)
 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   //console.log(options)
   this.setData(options)
   wx.request({
     url:'https://api.wulv5.com/music/search?keywords='+   this.data.value,
     success: res =>{
       //console.log(res.data.result.songs)
      this.setData({
        songListArray:res.data.result.songs
      })
     }
   })
},
  // 监听歌曲的改变
  handlechange: function (e) {
    this.setData({
      id: e.detail.songid
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