// common/components/tab/tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs:{
      type:Array,
      value:[]
    },
    selected:{
      type:String,
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickTab(e) {
      this.setData({
        selected: e.currentTarget.dataset.item.title
      })
    },
  }
})
