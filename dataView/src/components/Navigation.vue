<template>
<el-row class="tac">
  <el-col :span="24">
    <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="handleSelect">
      <el-submenu v-for="item of menus" :key="item.index" :index="item.index">
        <template slot="title">
          <span class="el-top-title">{{item.title}}</span>
        </template>
        <el-menu-item-group v-for="child of item.child" :key="child.index" :span="24">
          <el-menu-item class="navi-sub-item" :index="child.index">{{child.title}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
</el-row>
</template>

<script>
  export default {
    data() {
      return {
        menus: [{title: '沪深A股',index: '1',child: [{title: '上海A股',index: '1-1'},{title: '深圳A股',index: '1-2'}]},{title: '债券',index: '2',child: [{title: '基础信息',index: '2-1'}]},{title: '基金',index: '3',child: [{title: '基础信息',index: '3-1'}]},{title: '指数',index: '4',child: [{title: '基础信息',index: '4-1'}]},{title: '期权',index: '5',child: [{title: '基础信息',index: '5-1'}]},{title: '港股通',index: '6',child: [{title: '基础信息',index: '6-1'}]}]
      }
    },
    mounted() {
    },
    created() {
      // 注册更新事件
      this.$eventBus.$on("UpdateNavigate", (data) => {
        console.log("Navigation Get Data From eventbus，and run UpdateNavigate function")
        this.handleNavigateList(data)
      })
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      },
      handleSelect(key, keyPath) {
        let data=[]
        console.log(key, keyPath)
        switch(keyPath[1])
        {
          case "1-1" :{
            data=[{"amount":"545","bid_1":"65650000","close":"70850000","code":"600000","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"600000","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"600000","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"600000","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"600000","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"600000","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"600000","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"600000","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"600000","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"600000","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"600000","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"600000","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"600000","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"600000","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"600000","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"600000","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"600000","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"}]

            break;
          }
          case "1-2" :{

            data=[{"amount":"545","bid_1":"65650000","close":"70850000","code":"300750","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300750","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300750","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300750","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300750","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300750","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300750","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300750","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300750","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300750","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300750","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300750","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300750","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300750","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300750","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300750","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300750","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"}]
            break;
          }

          case "2-1" :{
            data=[{"amount":"545","bid_1":"65650000","close":"70850000","code":"000001","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"000001","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"000001","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"000001","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"000001","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"000001","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"000001","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"000001","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"000001","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"000001","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"000001","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"000001","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"000001","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"000001","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"000001","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"000001","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"000001","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"}]

            break;
          }

          case "3-1" :{
            data=[{"amount":"545","bid_1":"65650000","close":"70850000","code":"399005","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"399005","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"399005","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"399005","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"399005","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"399005","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"399005","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"399005","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"399005","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"399005","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"399005","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"399005","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"399005","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"399005","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"399005","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"399005","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"399005","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"}]

            break;
          }

          case "4-1" :{
            break;
          }

          case "5-1" :{
            break;
          }

          case "6-1" :{
            break;
          }
        }

        UpdateTable(data)
      },
      handleNavigateList : function (data) {
        //data = [{title: '沪深A股',index: '1',child: [{title: '基础信息',index: '1-1'}]},{title: '债券',index: '2',child: [{title: '基础信息',index: '2-1'}]},{title: '基金',index: '3',child: [{title: '基础信息',index: '3-1'}]},{title: '指数',index: '4',child: [{title: '基础信息',index: '4-1'}]},{title: '期权',index: '5',child: [{title: '基础信息',index: '5-1'}]},{title: '港股通',index: '6',child: [{title: '基础信息',index: '6-1'}]}]
        this.menus = data;
      },
      handleClearNavigateList : function (data) {
        this.menus = data;
      }
    }
  }
</script>

<style>
.el-submenu__title{
  padding-left: 0px !important;
  padding-right: 0px !important;
}

.el-top-title{
  padding-left:20px !important;
  padding-right: 0px;
}

.navi-sub-item{
  padding-left:30px !important;
  padding-right: 0px;
}

.el-menu{
  border-right: 0px !important; 
}
</style>