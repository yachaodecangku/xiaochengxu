//index.js
//获取应用实例


Page({
  data: {
    list:[
      {
        name:"recommend",
        title:"推荐音乐"
      },
      {
        name: "hot",
        title: "热搜榜"
      },
      {
        name: "search",
        title: "搜索"
      }
    ],
    current: "recommend",
   //当前播放音乐的id
    id:  ""
   

  },
  onLoad: function () {
    setTimeout(() => {
      this.setData({
        id: 33894312
      })
      //console.log("id is changing!")405998841
    }, 3000)
  },
  handel: function (e){
    this.setData({
      current: e.detail.current
    })
    // console.log(this.data.current)
  },
  // 监听歌曲的改变
  handlechange: function (e) {
    this.setData({
      id: e.detail.songid
    })
  }
})
