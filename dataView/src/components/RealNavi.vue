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
        menus: [{title: '基本面指标',index: '1',child: [{title: 'MACD',index: '1-1'},{title: 'KDJ',index: '1-2'}]},{title: '复杂衍生指标',index: '2',child: [{title: '1分钟',index: '2-1'},{title: '15分钟',index: '2-2'},{title: '60分钟',index: '2-3'},{title: '日线',index: '2-4'},{title: '月线',index: '2-5'}]},{title: '指标排行数据',index: '3',child: [{title: '价值类',index: '3-1'},{title: '波动类',index: '3-2'},{title: '其他',index: '3-3'}]},{title: '财务数据',index: '4',child: [{title: '基础信息',index: '4-1'}]},{title: '全部行情',index: '5',child: [{title: '涨跌分析数据',index: '5-1'},{title: '成交分析数据',index: '5-2'},{title: '资金流向分析数据',index: '5-3'}]}]
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