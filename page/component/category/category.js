Page({
  data: {

    category: [
      { name: '饰品', id: 'ornament' },
      { name: '针织', id: 'kniting' },
      { name: '竹艺', id: 'bambooArt' },
      { name: '草帽', id: 'strawHat' },
      { name: '剪纸', id: 'paperCut' },
      { name: '其他', id: 'other' }
    ],
    detail: [
      {
        id: 'ornament', banner: 'http://www.wtyz.vip/Nhimage/toushi.jpg', cate: '饰品', detail: [{ thumb: 'http://www.wtyz.vip/Nhimage/toushi.jpg', name: '头饰' },
        { thumb: 'http://www.wtyz.vip/Nhimage/toushu.jpg', name: '头梳', id: 12 }, { thumb: 'http://www.wtyz.vip/Nhimage/zanzi.jpg', name: '簪子', id: 9 }, { thumb: 'http://www.wtyz.vip/Nhimage/ershi.jpg', name: '耳饰', id: 2 }]
      },

      { id: 'kniting', banner: 'http://www.wtyz.vip/Nhimage/bag.jpg', cate: '针织', detail: [{ thumb: 'http://www.wtyz.vip/Nhimage/bag.jpg', name: '包', id: 1 }, { thumb: 'http://www.wtyz.vip/Nhimage/weijin.jpg', name: '围巾', id: 7 }, { thumb: 'http://www.wtyz.vip/Nhimage/xiangbao.jpg', name: '香包', id: 6 }] },

      { id: 'bambooArt', banner: 'http://www.wtyz.vip/Nhimage/kuaizi.jpg', cate: '竹艺', detail: [{ thumb: 'http://www.wtyz.vip/Nhimage/kuaizi.jpg', name: '筷子', id: 4 }] },

      { id: 'strawHat', banner: 'http://www.wtyz.vip/Nhimage/maozi.jpg', cate: '草帽', detail: [{ thumb: 'http://www.wtyz.vip/Nhimage/maozi.jpg', name: '咸草帽', id: 13 }] },

      { id: 'paperCut', banner: 'http://www.wtyz.vip/Nhimage/rabbit.jpg', cate: '剪纸', detail: [{ thumb: 'http://www.wtyz.vip/Nhimage/rabbit.jpg', name: '剪纸', id: 3 }] },

      { id: 'other', banner: 'http://www.wtyz.vip/Nhimage/shoushi.jpg', cate: '其他', detail: [{ thumb: 'http://www.wtyz.vip/Nhimage/shoushi.jpg', name: '一套首饰', id: 5 }, { thumb: 'http://www.wtyz.vip/Nhimage/shuzi.jpg', name: '梳子', id: 14 }] },

    ],
    curIndex: 0,
    isScroll: false,
  },
  switchTab(e) {
    const self = this;
    this.setData({
      isScroll: true
    })
    setTimeout(function () {
      self.setData({
        toView: e.target.dataset.id,
        curIndex: e.target.dataset.index
      })
    }, 0)
    setTimeout(function () {
      self.setData({
        isScroll: false
      })
    }, 1)

  }


})