<template>
<el-container>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="handleSelect">
        <el-submenu v-for="item of menus" :key="item.id" :index="item.id">
          <template slot="title">
            <span class="el-top-title">{{item.name}}</span>
          </template>
          <el-menu-item-group v-for="child of item.items" :key="child.id" :span="24">
            <el-menu-item class="navi-sub-item" :index="child.id">{{child.name}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
  <div id="hidetext">{{transdata}}</div>
</el-container>
</template>

<script>
  // 引入uuid
  import { v4 as uuidv4 } from 'uuid'
  export default {
    data() {
      return {
        transdata:"",
        menus:""
      }
    },
    mounted() {
      window.open("mdapi://yinhe_navigate?call_info=hidetext")

      var data = {
        "js_id": uuidv4(),
        "cpp_method": "GetNavigateItems",                             
        "js_callback": "UpdateNavigateItems",
        "data" : {}
      }
      
      this.transdata=JSON.stringify(data)
    },
    created() {
      // 注册更新事件
      this.$eventBus.$on("UpdateNavigateItems", (data) => {
        console.log("Navigation Get Data From eventbus，and run UpdateNavigateItems function")
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
        window.open("mdapi://yinhe_navigate?call_info=hidetext")

        var data = {
          "js_id": uuidv4(),
          "cpp_method": "SelectNavigateItem",
          "js_callback": "",
          "data" : {
            "id" : key
          }
        }

        this.transdata=JSON.stringify(data)
      },
      handleNavigateList : function (data) {
        data = JSON.parse(data)
        this.menus = data["data"]["items"];
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
  overflow: hidden;
}

.el-top-title{
  padding-left:20px !important;
  padding-right: 0px;
}

.navi-sub-item{
  padding-left:30px !important;
  padding-right: 0px;
}

#hidetext{
  visibility:hidden;
  height:0px;
}

.el-menu{
  border-right: 0px !important; 
}
/* 
.el-container,
.tac{
  width: 100% !important;
} */
</style>