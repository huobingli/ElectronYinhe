<template>
<el-row class="tac">
  <el-col :span="24">
    <el-menu default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect">
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
        // todo 后续menu从client来就行了
        menus:[{title: '沪深A股',index: '1',child: [{title: '基础信息',index: '1-1'}]}]
        //menus: [{title: '沪深A股',index: '1',child: [{title: '基础信息',index: '1-1'}]},{title: '债券',index: '2',child: [{title: '基础信息',index: '2-1'}]},{title: '基金',index: '3',child: [{title: '基础信息',index: '3-1'}]},{title: '指数',index: '4',child: [{title: '基础信息',index: '4-1'}]},{title: '期权',index: '5',child: [{title: '基础信息',index: '5-1'}]},{title: '港股通',index: '6',child: [{title: '基础信息',index: '6-1'}]}]
      }
    },
    mounted() {
      // todo get menus
      // menus = 
    },
    created() {
      // 注册更新事件
      this.$eventBus.$on("UpdateNavigate", (data) => {
        console.log("Navigation Get Data From eventbus，and run UpdateNavigate function")
        this.handleNavigateList(data)
      })

      // 注册情况表格事件
      this.$eventBus.$on("ClearNavigate", () => {
        console.log("Navigation Get Data From eventbus，and run ClearNavigate function")
        this.handleClearNavigateList()
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
        console.log(key, keyPath)
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
.el-top-title {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}

.el-submenu__title{
  padding-left: 0px !important;
  padding-right: 0px !important;
}
/* .el-top-title {
  padding-left:10px !important;
} */

.navi-sub-item{
  /* font-size:10px; */
  padding-left:10px !important;
  padding-right: 10px;
}
</style>