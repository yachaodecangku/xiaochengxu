export default class Player {
  constructor(bgctx) {
    this.bgctx = bgctx
    // 设置src
    this.src = ""
  }
  setInfo(id,cb) {
    const url = "https://api.wulv5.com/music/song/detail?ids="+id
    wx.request({
      url: url,
       success:res=>{
         //console.log(res.data.songs[0])
         const data = res.data.songs[0]
         cb(data.al.picUrl,data.name)
         
       }
    })
  }


  playWithId(id){
    const requrl = "https://api.wulv5.com/music/song/url?id=" + id
    wx.request({
      url: requrl,
      success: res => {
        // 播放
        this.setInfo(id, (url, title) => {
          this.bgctx.src = res.data.data[0].url
          this.bgctx.title = title
          this.bgctx.play()
       })
      }
    })
  }

  //...
  // 音频播放. 必须要有音频的地址.
  play() {
    // 将音频地址放到播放器中
    // 手动播放
    this.bgctx.play()
  }
  pause() {
    this.bgctx.pause()
  }

  handelProgress(cb){
    this.bgctx.onTimeUpdate(cb)
  }
  getProgress(){
    return this.bgctx.currentTime / this.bgctx.duration * 100
  }
  setProgress(percent){
    this.bgctx.seek(percent*this.bgctx.duration)
  }
}