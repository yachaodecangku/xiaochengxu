// component/songList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    url: String,
    songListArray:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    songlist: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    choose: function (e) {
      const id = (e.currentTarget.dataset.songid)
      this.triggerEvent("changemusic", { songid: id }, { bubbles: true, composed: true })
     // console.log(e)
    }
  },
  lifetimes: {
    attached: function () {
      if (this.data.url){
        wx.request({
          url: this.data.url,
          success: res => {
            this.setData({
              songlist: res.data.result
            })
            // console.log(this.data.songlist)
          }
        })
      }else{
        this.setData(this.data.songListArray)
      }
     
    }
  },
  observers:{
    "songListArray":function(res){
      //console.log(res)
      this.setData({
        songlist:res
      })
      
    }
  }

})
