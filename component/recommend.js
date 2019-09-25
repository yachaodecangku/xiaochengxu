// component/recommend.js
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
    bannerList: [],
    recommendList: [],
    showRecommendList: []
  },
  /**
  * 组件的方法列表
  */
  methods: {
    playlist:function(e){
       //console.log(e)
    
      wx.navigateTo({
        url: `/pages/detail/detail?id=${e.currentTarget.dataset.songid}`
      })

    }

  },
  lifetimes:{
    attached:function(){
      wx.request({
        url: 'https://api.wulv5.com/music/banner',
        success: res=> {
          //console.log(res.data.banners)
          this.setData({
            bannerList: res.data.banners
          })
         }
       })
        //获取歌单
        // http://39.96.56.164:3000/personalized
      if (this.data.recommendList.length === 0) {
        wx.request({
          url: 'https://api.wulv5.com/music/personalized',
          success: res => {
            //console.log(res.data.result)
            this.data.recommendList = res.data.result
            this.setData({
              showRecommendList: this.data.recommendList.splice(0, 12)
            })
            //console.log(this.data.showRecommendList)
           
          }
        })
      }

    }
  }
})