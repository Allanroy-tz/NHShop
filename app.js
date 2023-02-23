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
  },
  
})
