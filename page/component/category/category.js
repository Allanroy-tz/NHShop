Page({
    data: {
        category: [
            {name:'饰品',id:'ornament'},
            {name:'针织',id:'kniting'},
            {name:'竹艺',id:'bambooArt'},
            {name:'草帽',id:'strawHat'},
            {name:'剪纸',id:'paperCut'},        
            {name:'其他',id:'other'}
        ],
        detail:[
          {id:'ornament',banner:'http://www.wtyz.vip/Nhimage/toushi.jpg',cate:'饰品',detail:[{thumb:'http://www.wtyz.vip/Nhimage/toushi.jpg',name:'头饰'},
          {thumb:'http://www.wtyz.vip/Nhimage/toushu.jpg',name:'头梳'},{thumb:'http://www.wtyz.vip/Nhimage/shuzi.jpg',name:'梳子'},{thumb:'http://www.wtyz.vip/Nhimage/zanzi.jpg',name:'簪子'},{thumb:'http://www.wtyz.vip/Nhimage/ershi.jpg',name:'耳饰'},]},

          {id:'kniting',banner:'http://www.wtyz.vip/Nhimage/bag.jpg',cate:'针织',detail:[{thumb:'http://www.wtyz.vip/Nhimage/bag.jpg',name:'包'}]},

          {id:'bambooArt',banner:'http://www.wtyz.vip/Nhimage/kuaizi.jpg',cate:'竹艺',detail:[{thumb:'http://www.wtyz.vip/Nhimage/kuaizi.jpg',name:'筷子'}]},

          {id:'strawHat',banner:'http://www.wtyz.vip/Nhimage/maozi.jpg',cate:'草帽',detail:[{thumb:'http://www.wtyz.vip/Nhimage/maozi.jpg',name:'咸草帽'}]},

          {id:'paperCut',banner:'http://www.wtyz.vip/Nhimage/rabbit.jpg',cate:'剪纸',detail:[{thumb:'http://www.wtyz.vip/Nhimage/rabbit.jpg',name:'剪纸'}]},

          {id:'other',banner:'http://www.wtyz.vip/Nhimage/shoushi.jpg',cate:'其他',detail:[{thumb:'http://www.wtyz.vip/Nhimage/shoushi.jpg',name:'一套首饰'}]},
        
        ],
        curIndex: 0,
        isScroll: false,
        toView: 'guowei'
    },
    switchTab(e){
      const self = this;
      this.setData({
        isScroll: true
      })
      setTimeout(function(){
        self.setData({
          toView: e.target.dataset.id,
          curIndex: e.target.dataset.index
        })
      },0)
      setTimeout(function () {
        self.setData({
          isScroll: false
        })
      },1)
        
    }
    
})