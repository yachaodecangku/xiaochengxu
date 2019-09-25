// component/search.js
import Player from "../utils/player.js"
const player = new Player(getApp().globalData.backgroundAudioManager)
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    value:"",
    hotList:[]
    
  },
  

  /**
   * 组件的方法列表
   */
  methods: {
    
    search:function(e){
    // console.log(e.detail.value)
    this.setData(e.detail)
    wx.navigateTo({
      url: '/pages/page/page?value='+this.data.value,
    })
   },
    kk:function(e){
      console.log(e)
     wx.request({
       url: `https://api.wulv5.com/music/search?keywords="e.currentTarget.dataset.first"`,
       success: (res) => {
        // this.searchList = res.data.result.songs
         console.log(res)
       }
     })
     
      wx.navigateTo({
        url: '/pages/page/page?value='+e.currentTarget.dataset.first,
      })
     // console.log(e.detail)
    
    }
   
    
  },
  lifetimes: {
    attached: function(){
      wx.request({
        url: 'https://api.wulv5.com/music/search/hot',
        success: res => {
         // console.log(res.data.result.hots)
          this.setData({
            hotList: res.data.result.hots
            
          })
        }
      })
    }
  }
 

})
