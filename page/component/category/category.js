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
          {id:'toushi',banner:'/Nhimage/头饰.jpg',cate:'头饰',detail:[{thumb:'/Nhimage/头饰.jpg',name:'头饰'},{thumb:'/Nhimage/头饰.jpg',name:'头饰'},{thumb:'/Nhimage/头饰.jpg',name:'头饰'},{thumb:'/Nhimage/头饰.jpg',name:'头饰'}]},
          {id:'ershi',banner:'/Nhimage/头饰.jpg',cate:'头饰',detail:[{thumb:'/Nhimage/头饰.jpg',name:'头饰'},{thumb:'/Nhimage/头饰.jpg',name:'头饰'},{thumb:'/Nhimage/头饰.jpg',name:'头饰'},{thumb:'/Nhimage/头饰.jpg',name:'头饰'}]}
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