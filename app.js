App({
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  
  globalData: {
    hasLogin: false,
    tcDuration:3000,
    modal_shop:1,
    ServerName:"http://www.wtyz.vip/",
    // Goods:[{id: ,name:"",imgUrls:"",Descrition:" ",price: ,parameter:"",service:" "}]
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
  },
  
})
