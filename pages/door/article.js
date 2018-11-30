let datas = require("../../datas/data.js")
Page({
  data:{
    ads: ["/images/detail/carousel/01.jpg", "/images/detail/carousel/02.jpg", "/images/detail/carousel/03.jpg", "/images/detail/carousel/04.jpg"],
    articles:[]
  },
  onLoad: function (options) {
    this.setData({
      articles: datas.list_data
    })
  },
  gotoDetail:function(e){
    console.log(e);
    let id = e.currentTarget.dataset.id;
    console.log(id);
    wx.navigateTo({
      url: '../articleDetail/articleDetail?id='+id,
    })
  },
  carouselToDetail:function(e){
    let id = e.target.dataset.detailid;
    console.log(id);
    wx.navigateTo({
      url: '../articleDetail/articleDetail?id=' + id,
    })
  }

})
 

