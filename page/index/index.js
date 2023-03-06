Page({
  data: {
    imgUrls: [
      'http://www.wtyz.vip/Nhimage/003.jpg',
      'http://www.wtyz.vip/Nhimage/004.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 800,
    modal_status1:false,
    modal_status2:false,
  },
  
 // index.js
onLoad:function(options){
  const app=getApp()
  var that = this
  // 判断首页的广告层是否显示 （modal_shop == 1 显示 , 7秒后隐藏广告弹窗；如果等于 2 隐藏广告弹窗）
  if(app.globalData.modal_shop== 1){
    //that.shop_timer() // 调用定时器方法
  }else{
    that.setData({
      modal_status1:true, //  广告弹窗隐藏
      modal_status2:true// 广告弹窗隐藏
    });
  }
},
close_btn:function closetc() {
  this.setData({
    modal_status1:true, //  新店开业图片隐藏
   modal_status2:true,
  })
},
/**
* 广告弹窗 7秒关闭(7s定时器)
*/
shop_timer: function () {
const app=getApp();
var that = this;
setTimeout(function () {
 that.setData({
   modal_status1:true, //  新店开业图片隐藏
   modal_status2:true,// 遮罩层隐藏
 });
}, app.globalData.tcDuration);
},

})