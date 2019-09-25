// component/hotList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    url: String,
  },

  /**
   * 组件的初始数据
   */
  data: {
    hotlist: [],
    /*showlist:[]*/
  },

  /**
   * 组件的方法列表
   */
  methods: {
    choose: function (e) {
      const id = (e.currentTarget.dataset.songid)
      this.triggerEvent("changemusic", { songid: id }, { bubbles: true, composed: true })
      //console.log(e)
    }
  
},
  lifetimes: {
    attached: function () {
      wx.request({
        url: this.data.url,
        success: res => {
          //this.data.hotlist = res.data.playlist.tracks
          this.setData({
            hotlist: res.data.playlist.tracks
           
            //  showlist: this.data.hotlist.splice(0, 20)
           

          })
          //console.log(res.data.playlist.tracks)
        }
      })
    }
  }

})

