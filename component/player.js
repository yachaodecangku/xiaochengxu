// component/player.js
import  Player from "../utils/player.js"
const player = new Player(getApp().globalData.backgroundAudioManager)
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    songid:{
      type:Number
      
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    state:"paused",
      id:"",                   url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1298966043,272293585&fm=26&gp=0.jpg",
  title:"不说再见",
  progress:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    play:function(){
      if (!this.data.id) return
      if (this.data.state === "play") {
        player.pause()
        this.setData({
          state: "paused"
        })
        return;
      }
      //根据id获取音乐地址
      player.playWithId(this.data.id)
      player.setInfo(this.data.id, (picurl, title) => {
        this.setData({
          url: picurl,
          title: title
        })
      })
      this.setData({
        state: "play"
      })
      },
      progressJump:function(e){
        //console.log(e.detail.value)
        const percent = (e.detail.value)/100
        player.setProgress(percent)
       
        
      } 
    
},
  lifetimes: {
    attached: function () {
      //console.log(getApp().globalData.backgroundAudioManager)
      player.handelProgress(()=>{
         this.setData({
           progress:player.getProgress()
         })
      })
    }
  },
  // 监听id发生改变做出相应调整: 切换歌曲, 播放
  observers: {
    "songid": function (id) {
      this.setData({
        id: id,
        state:"paused"
        
     })
     this.play()
     
  }
  }
})
