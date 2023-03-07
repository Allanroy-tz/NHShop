// page/component/customize/customize.js
Page({
  data:{
    imgUrls: [
      'http://www.wtyz.vip/Nhimage/customize.jpg',
      'http://www.wtyz.vip/Nhimage/006.jpg',
    ],
    goods: {
      id: 1,
      image: 'http://www.wtyz.vip/Nhimage/shanzi.jpg',
      title: '扇子',
      stock: '有现货',
      detail: "&nbsp;&nbsp;&nbsp;&nbsp;欢迎来到女红私人订制服务。我们有两种模式：你提供稿子，我们生产。你提出想法，我们设计。让顾客在本店享受满意的私人订制服务。",
      price: 'http://www.wtyz.vip/Nhimage/customizePrice.jpg',
      service: '不支持退货'
    },
    QRStatus:true,
    num: 1,
    totalNum: 0,
    hasCarts: false,
    curIndex: 0,
    show: false,
    scaleCart: false,
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 800
  },
  close_btn()
  {
    this.setData({QRStatus:true})
  },
  showQR()
  {
    this.setData({QRStatus:false})
  },
  addCount() {
    let num = this.data.num;
    num++;
    this.setData({
      num : num
    })
  },

  addToCart() {
    const self = this;
    const num = this.data.num;
    let total = this.data.totalNum;

    self.setData({
      show: true
    })
    setTimeout( function() {
      self.setData({
        show: false,
        scaleCart : true
      })
      setTimeout( function() {
        self.setData({
          scaleCart: false,
          hasCarts : true,
          totalNum: num + total
        })
      }, 200)
    }, 300)

  },

  bindTap(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      curIndex: index
    })
  }
 
})