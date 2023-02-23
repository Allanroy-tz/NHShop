Page({
  data: {
    imgUrls: [
      '/Nhimage/002.jpg',
      '/Nhimage/003.jpg',
      '/Nhimage/004.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 800,
  },
 // index.js
onLoad:function(options){
  var that = this
  // 判断首页的广告层是否显示 （modal_shop == 1 显示 , 7秒后隐藏广告弹窗；如果等于 2 隐藏广告弹窗）
  if(app.globalData.modal_shop== 1){
    that.shop_timer() // 调用定时器方法
  }else{
    that.setData({
      modal_status:true, //  广告弹窗隐藏
      modal_status2:true,// 广告弹窗隐藏
    });
  }
},
/**
* 广告弹窗 7秒关闭(7s定时器)
*/
shop_timer: function () {
var that = this;
setTimeout(function () {
 that.setData({
   modal_status:true, //  新店开业图片隐藏
   modal_status2:true,// 遮罩层隐藏
 });
}, 7000);
},

})