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
          {id:'toushi',banner:'/Nhimage/toushi.jpg',cate:'头饰',detail:[{thumb:'/Nhimage/toushi.jpg',name:'头饰'},{thumb:'/Nhimage/toushu.jpg',name:'头梳'},{thumb:'/Nhimage/shuzi.jpg',name:'梳子'},{thumb:'/Nhimage/zanzi.jpg',name:'簪子'}]},
          {id:'ershi',banner:'/Nhimage/ershi.jpg',cate:'耳饰',detail:[{thumb:'/Nhimage/ershi.jpg',name:'耳饰'}]},
          {id:'shoushi',banner:'/Nhimage/bag.jpg',cate:'手饰',detail:[{thumb:'/Nhimage/bag.jpg',name:'包'}]},
          {id:'maozi',banner:'/Nhimage/maozi.jpg',cate:'手饰',detail:[{thumb:'/Nhimage/maozi.jpg',name:'咸草帽'}]},
          {id:'bao',banner:'/Nhimage/bag.jpg',cate:'包',detail:[{thumb:'/Nhimage/bag.jpg',name:'包'}]},
          {id:'other',banner:'/Nhimage/shoushi.jpg',cate:'其他',detail:[{thumb:'/Nhimage/shoushi.jpg',name:'一套首饰'},{thumb:'/Nhimage/jianzhi.jpg',name:'剪纸'}]},
        
        ],
        curIndex: 0,
        isScroll: false,
        toView: 'guowei'
    },
    onReady(){
        var self = this;
        wx.request({
            url:'http://www.gdfengshuo.com/api/wx/cate-detail.txt',
            success(res){
                self.setData({
                    detail : res.data
                })
            }
        });
        
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