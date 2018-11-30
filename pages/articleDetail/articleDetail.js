let datas = require("../../datas/data.js");
let appData = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas:{},
    index: 0,
    isCollected: false,
    isMusicPlay: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("options"+options);
    this.setData({
      datas:datas.list_data[options.id],
      index:options.id,
    });
    let obj = wx.getStorageSync('isCollected');
    if(obj){
      let isC = obj[this.data.index];
      this.setData({
        isCollected: isC?true:false
      })
    }else{
      wx.setStorage({
        key: 'isCollected',
        data: {},
      })
    }
    //音乐
    if (appData.globalData.isMusicPlay && appData.globalData.playPageIndex === this.data.index){
      this.setData({
        isMusicPlay:true
      });
    }
    console.log("开始监听");
    //监听音乐播放
    const backgroundAudioManager = wx.getBackgroundAudioManager();
    backgroundAudioManager.onPlay(() => {
      console.log("监听音乐播放");
      this.setData({
        isMusicPlay: true
      })
      appData.globalData.isMusicPlay = true;
      appData.globalData.playPageIndex = this.data.index;
    })
    //监听音乐暂停
    backgroundAudioManager.onPause(() => {
      console.log("监听音乐暂停");
      this.setData({
        isMusicPlay: false
      })
      appData.globalData.isMusicPlay = false;
      appData.globalData.playPageIndex = this.data.index;
    });
    //监听音乐停止
    backgroundAudioManager.onStop(() => {
      console.log("监听音乐停止");
      this.setData({
        isMusicPlay: false
      })
      appData.globalData.isMusicPlay = false;
      appData.globalData.playPageIndex = this.data.index;
    })
  },
  shareAction:function(){
    console.log("分享");
    wx.showActionSheet({
      itemList: ["分享到微信好友","分享到朋友圈","分享到qq空间"],
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },
  collectAction:function(){
    console.log("收藏");
    let isC = !this.isCollected;
    let obj = wx.getStorageSync('isCollected');
    obj[this.data.index] = isC;
    let title = isC?'收藏成功':'收藏失败';
    wx.showToast({
      title: title,
      icon:'success'
    })
    wx.setStorage({
      key: 'isCollected',
      data: obj,
    })
    this.setData({
      isCollected:isC
    })
  },
  musicPlay:function(){
    let isplay = !this.data.isMusicPlay;
    let { dataUrl, title, coverImgUrl} = this.data.datas.music;
    if(isplay){
      console.log("音乐播放");
      //音乐播放
      const backgroundAudioManager = wx.getBackgroundAudioManager();
      backgroundAudioManager.title = title;
      backgroundAudioManager.src = dataUrl;
      backgroundAudioManager.coverImgUrl = coverImgUrl;
      backgroundAudioManager.play(() => {
        console.log("音乐播放");
        this.setData({
          isMusicPlay: true
        })
        appData.globalData.isMusicPlay = true;
        appData.globalData.playPageIndex = this.data.index;
      })
    }else{
      console.log("音乐暂停");
      //音乐暂停
      const backgroundAudioManager = wx.getBackgroundAudioManager();
      backgroundAudioManager.pause(() => {
        console.log("音乐暂停");
        this.setData({
          isMusicPlay: false
        })
      });
    }
    this.setData({
      isMusicPlay: isplay
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