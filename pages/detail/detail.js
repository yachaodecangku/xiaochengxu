// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    List: [],
    SongList:[]
    
  },

    play: function (e) {
      const id = (e.currentTarget.dataset.songid)
      this.triggerEvent("changemusic", { songid: id }, { bubbles: true, composed: true })
      //console.log(e.currentTarget.dataset.songid)
      console.log(e)
    },
 
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e){
    wx.request({
      url: `https://api.wulv5.com/music/playlist/detail?id=${e.id}`,
      success: (res) => {
        this.setData({
          List : res.data.playlist
        })
        console.log(res.data.playlist)
      }
    }),
      wx.request({
      url: `https://api.wulv5.com/music/playlist/detail?id=${e.id}`,
        success:res =>{
          this.setData({
            SongList: res.data.playlist.tracks
          })
          console.log(this.data.SongList)
        }
      })
  },
  // 监听歌曲的改变
  handlechange: function (e) {
    this.setData({
      id: e.detail.songid
    })
    console.log(e)
  },
  // 监听id发生改变做出相应调整: 切换歌曲, 播放
  observers: {
    "songid": function (id) {
      this.setData({
        id: id,
        state: "paused"

      })
      this.play()

    }
  }
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  
})