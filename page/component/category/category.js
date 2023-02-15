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
          {id:'toushi',banner:'/Nhimage/头饰.jpg',cate:'头饰',detail:[{thumb:'/Nhimage/头饰.jpg',name:'头饰'},{thumb:'/Nhimage/头梳.jpg',name:'头梳'},{thumb:'/Nhimage/梳子.jpg',name:'梳子'},{thumb:'/Nhimage/簪子.jpg',name:'簪子'}]},
          {id:'ershi',banner:'/Nhimage/耳饰.jpg',cate:'耳饰',detail:[{thumb:'/Nhimage/耳饰.jpg',name:'耳饰'}]},
          {id:'shoushi',banner:'/Nhimage/包.jpg',cate:'手饰',detail:[{thumb:'/Nhimage/包.jpg',name:'包'}]},
          {id:'maozi',banner:'/Nhimage/咸草帽.jpg',cate:'手饰',detail:[{thumb:'/Nhimage/咸草帽.jpg',name:'咸草帽'}]},
          {id:'bao',banner:'/Nhimage/包.jpg',cate:'包',detail:[{thumb:'/Nhimage/包.jpg',name:'包'}]},
          {id:'other',banner:'/Nhimage/一套首饰.jpg',cate:'其他',detail:[{thumb:'/Nhimage/一套首饰.jpg',name:'一套首饰'},{thumb:'/Nhimage/剪纸.jpg',name:'剪纸'}]},
        
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