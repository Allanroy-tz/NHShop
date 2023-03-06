Page({
  data: {
    imgUrls: [
      'http://www.wtyz.vip/Nhimage/003.jpg',
      'http://www.wtyz.vip/Nhimage/004.jpg'
    ],
    SelectedGoodsTop:[
      {id:1,imgUrls:"http://www.wtyz.vip/Nhimage/toushi.jpg"},
       {id:2,imgUrls:"http://www.wtyz.vip/Nhimage/zanzi.jpg"}
    ],
    SelectedGoodBottom:{id:1,imgUrls:"http://www.wtyz.vip/Nhimage/xiangbao.jpg"},
    NewGoods:[
      {id:1,imgUrls:"http://www.wtyz.vip/Nhimage/shanzi.jpg",name:"扇子",price:99.9}, {id:2,imgUrls:"http://www.wtyz.vip/Nhimage/bag.jpg",name:"包包",price:99.9},
      {id:3,imgUrls:"http://www.wtyz.vip/Nhimage/ershi.jpg",name:"耳饰",price:99.9}, {id:4,imgUrls:"http://www.wtyz.vip/Nhimage/shuzi.jpg",name:"梳子",price:99.9},
      {id:5,imgUrls:"http://www.wtyz.vip/Nhimage/toushu.jpg",name:"头梳",price:99.9}, {id:6,imgUrls:"http://www.wtyz.vip/Nhimage/xiangbao.jpg",name:"香包",price:99.9}
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