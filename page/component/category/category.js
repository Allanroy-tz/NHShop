Page({
    data: {
        category: [
            {name:'头饰',id:'toushi'},
            {name:'耳饰',id:'ershi'},
            {name:'手饰',id:'shoushi'},
            {name:'帽子',id:'maozi'},
            {name:'包',id:'bao'},
            {name:'其他',id:'other'}
        ],
        detail:[
          {id:'toushi',banner:'http://www.wtyz.vip/Nhimage/toushi.jpg',cate:'头饰',detail:[{thumb:'http://www.wtyz.vip/Nhimage/toushi.jpg',name:'头饰'},{thumb:'http://www.wtyz.vip/Nhimage/toushu.jpg',name:'头梳'},{thumb:'http://www.wtyz.vip/Nhimage/shuzi.jpg',name:'梳子'},{thumb:'http://www.wtyz.vip/Nhimage/zanzi.jpg',name:'簪子'}]},
          {id:'ershi',banner:'http://www.wtyz.vip/Nhimage/ershi.jpg',cate:'耳饰',detail:[{thumb:'http://www.wtyz.vip/Nhimage/ershi.jpg',name:'耳饰'}]},
          {id:'shoushi',banner:'http://www.wtyz.vip/Nhimage/bag.jpg',cate:'手饰',detail:[{thumb:'http://www.wtyz.vip/Nhimage/bag.jpg',name:'包'}]},
          {id:'maozi',banner:'http://www.wtyz.vip/Nhimage/maozi.jpg',cate:'手饰',detail:[{thumb:'http://www.wtyz.vip/Nhimage/maozi.jpg',name:'咸草帽'}]},
          {id:'bao',banner:'http://www.wtyz.vip/Nhimage/bag.jpg',cate:'包',detail:[{thumb:'http://www.wtyz.vip/Nhimage/bag.jpg',name:'包'}]},
          {id:'other',banner:'http://www.wtyz.vip/Nhimage/shoushi.jpg',cate:'其他',detail:[{thumb:'http://www.wtyz.vip/Nhimage/shoushi.jpg',name:'一套首饰'},{thumb:'http://www.wtyz.vip/Nhimage/jianzhi.jpg',name:'剪纸'}]},
        
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