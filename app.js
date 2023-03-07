App({
  onLaunch: function () {
    console.log('App Launch')
    this.SetGoodsData(this.globalData.SelectedGoodsTopIndex,this.globalData.SelectedGoodsTop)
    this.SetGoodsData(this.globalData.SelectedGoodBottomIndex,this.globalData.SelectedGoodBottom)
    this.SetGoodsData(this.globalData.NewGoodsIndex,this.globalData.NewGoods)
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  SetGoodsData: function (index,list) {
    index.forEach(element => {
      list.push(this.globalData.Goods[element])
    });
  },
  SetCurrentGoods:function (id) {
    this.globalData.Goods.forEach(element => {
      if(element.id==id)
        {
          this.globalData.currentData=element;
          return;
        }
    });
  },


  globalData: {
    hasLogin: false,
    tcDuration:3000,
    modal_shop:1,
    ServerName: "http://www.wtyz.vip/",
    


    Goods: [{ id: 1, name: "手提包",typeId:1, imgUrls: "http://www.wtyz.vip/Nhimage/bao.jpg", Descrition: "容得下，才是最好的选择。", price: 60, parameter: " ", service: " " },
      { id: 2, name: "耳饰", typeId:0,imgUrls: "http://www.wtyz.vip/Nhimage/ershi.jpg", Descrition: "戴上属于你的美丽。", price: 20, parameter: " ", service: " " }, 
      { id: 3, name: "兔子", typeId:4,imgUrls: "http://www.wtyz.vip/Nhimage/rabbit.jpg", Descrition: "剪下你的所思所想。兔子剪纸，采用传统红色宣纸，草书福字，蕴意吉祥，几朵绽放娇艳的花做点缀，体现了祖国的繁荣昌盛，兔子整体呈流体型，线条流畅，寓意平顺。", price: 20, parameter: " ", service: " " },
      { id: 4, name: "筷子", typeId:2,imgUrls: "http://www.wtyz.vip/Nhimage/kuaizi.jpg", Descrition: "夹起万物，继承万情。", price: 3, parameter: " ", service: " " },
      { id: 5, name: "一套首饰", typeId:5,imgUrls: "http://www.wtyz.vip/Nhimage/shoushi.jpg", Descrition: "项链：所“项”皆如意，所“链”皆所得。\n耳环：莞“耳”一笑，甚美。\n手链：圈住我们满满的幸福。", price: 108, parameter: " ", service: " " },
      { id: 6, name: "香包", typeId:0,imgUrls: "http://www.wtyz.vip/Nhimage/xiangbao.jpg", Descrition: "七彩千丝缠，福禄留香中。", price: 30, parameter: " ", service: " " },
      { id: 7, name: "围巾", typeId:1,imgUrls: "http://www.wtyz.vip/Nhimage/weijin.jpg", Descrition: "源于巧手，暖在心扉。", price: 40, parameter: " ", service: " " },
      { id: 8, name: "头饰", typeId:0,imgUrls: "http://www.wtyz.vip/Nhimage/toushi.jpg", Descrition: "灼华胜桃夭，点缀万青丝。", price: 15, parameter: " ", service: " " },
      { id: 9, name: "簪子", typeId:0,imgUrls: "http://www.wtyz.vip/Nhimage/zanzi.jpg", Descrition: "容一簪，一鹤一红，万品万人永相传。", price: 25, parameter: " ", service: " " },
      { id: 10, name: "扇子", typeId:0,imgUrls: "http://www.wtyz.vip/Nhimage/shanzi.jpg", Descrition: "清风拂花香，执扇半遮面。", price: 35, parameter: " ", service: " " },
      { id: 11, name: "发簪", typeId:0,imgUrls: "http://www.wtyz.vip/Nhimage/bao.jpg", Descrition: "寒玉簪秋水，轻纱卷碧烟。", price: 35, parameter: " ", service: " " },
      { id: 12, name: "头梳", typeId:0,imgUrls: "http://www.wtyz.vip/Nhimage/toushu.jpg", Descrition: "银花梳百丽，阿乃留千情。", price: 15, parameter: " ", service: " " },
      { id: 13, name: "草帽", typeId:3,imgUrls: "http://www.wtyz.vip/Nhimage/maozi.jpg", Descrition: "遮住了烈阳，挡住了忧绪。", price: 35, parameter: " ", service: " " },
      { id: 14, name: "梳子", typeId:0,imgUrls: "http://www.wtyz.vip/Nhimage/shuzi.jpg", Descrition: "一柄木梳綄着青丝万缕。", price: 15, parameter: " ", service: " " }

    ],


    SelectedGoodsTopIndex:[1,6],
    SelectedGoodsTop:[],
    SelectedGoodBottomIndex: [2],
    SelectedGoodBottom:[],
    
    currentData:{},
    
    NewGoods:[],
    NewGoodsIndex:[1,2,3,4,5,6
    ]
  },
  
})
