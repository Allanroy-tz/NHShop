// page/component/list/list.js
Page({
  data:{
    SelectedGoodsTop:[],
    SelectedGoodBottom:[]
  },
  tapgoods(e) {
    const app=getApp()
    app.SetCurrentGoods(e.currentTarget.dataset.id)
    console.log(app.globalData.currentData)
  },
  onLoad:function(options){
    const app=getApp()
    this.setData({
      SelectedGoodsTop:app.globalData.SelectedGoodsTop,
      SelectedGoodBottom:app.globalData.SelectedGoodBottom
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})