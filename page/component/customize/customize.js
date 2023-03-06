// page/component/customize/customize.js
Page({
  data:{
    imgUrls: [
      'http://www.wtyz.vip/Nhimage/003.jpg',
      'http://www.wtyz.vip/Nhimage/004.jpg'
    ],
    goods: {
      id: 1,
      image: 'http://www.wtyz.vip/Nhimage/shanzi.jpg',
      title: '扇子',
      price: 99.9,
      stock: '有现货',
      detail: '这里是私人定制详情。。。。。，这里是私人定制详情。。。。，这里是私人定制详情。。。。，这里是私人定制详情。。。。',
      parameter: '125g',
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