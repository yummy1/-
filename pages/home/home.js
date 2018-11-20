// pages/home/home.js
// var des3 = require('../../utils/DES3.js');
// var CryptoJS = require('../../utils/CryptoJS/tripledes.js')

const crypto = requirePlugin("Crypto");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://149.28.161.39:8080/libary/2018/09/10/201809100639371tp61nNh.jpg',
      'http://149.28.161.39:8080/libary/2018/09/10/20180910063900xsQJt5eD.jpg',
      'http://149.28.161.39:8080/libary/2018/09/10/201809100639233930LgVI.jpg'
    ],
    defaultImage: '../../images/home_9.png',
    items: [{ "icon": "../../images/home_message.png", "tittle": "Message" }, 
            { "icon": "../../images/home_Service.png", "tittle": "Service" }, 
            { "icon": "../../images/home_Strata.png", "tittle": "Strata" },],
    news: [{},{},{}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.requestData();
    console.log('hahha');
    var shuju = {
      requestCommand: 'homeDetails',
      uid: '37'
    };
    console.log('数据'+JSON.stringify(shuju));
    var jiami = new crypto.DES().encrypt(JSON.stringify(shuju), 'fTZqeicURs4AFZUIAmGCsCfI', {
      mode: crypto.Mode['ECB'],
      padding: crypto.Padding['Pkcs7']
    });
    // var jiami = des3.encrypt(requestHomeDetail)
    console.log("加密后：" + jiami.toString());

    var str = jiami.toString();
    const v = new crypto.DES().decrypt(str, "fTZqeicURs4AFZUIAmGCsCfI", {
      mode: crypto.Mode['ECB'],
      padding: crypto.Padding['Pkcs7']
    });
    console.log('解密后：', v.toString(crypto.Utf8));
  },

  requestData:function(){
    wx.request({
      url: 'https://www.xiuyuewang.com/carousels.action',
      // url: 'http://149.28.161.39:8080/smart.do?apiFistPage', 
      // data: {
      //   data: crypto.DES().encrypt(requestHomeDetail, 'fTZqeicURs4AFZUIAmGCsCfI', {
      //       mode: crypto.ECB,
      //       padding: crypto.Pkcs7
      //     })},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log('结果' + res.data)
      }
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