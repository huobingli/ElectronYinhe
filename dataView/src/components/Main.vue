<template>
  <div class="el-container-custom">
    <!-- <Tool> </Tool> -->
    <!-- <Search></Search> -->
    <el-container >
      <el-aside class="Navi" min-width="180px" width="180px" >
        <Navigation></Navigation>
      </el-aside>
      <el-main>
        <TableUI></TableUI>
      </el-main>
      
    </el-container>
    <div id="hidetext">{{transdata}}</div>
  </div>
</template>
<script>
import Search from "./Search.vue";
import Navigation from "./Navigation.vue";
import TableUI from "./TableUI.vue";
import Tool from "./Tool.vue";
import { v4 as uuidv4 } from 'uuid'

export default {
  components: {
    Navigation: Navigation,
    Search: Search,
    TableUI: TableUI,
    Tool: Tool,
  },
  data() {
    return {
      transdata:"",
    };
  },
  mounted() {
    // window.open("mdapi://yinhe_realtimel1?call_info=hidetext")
    var data = {
      "js_id": uuidv4(),
      "cpp_method": "GetTableItems",                             
      "js_callback": "UpdateTableItems",
      "data" : {}
    }

    this.transdata=JSON.stringify(data)
  },
  created() {},
  methods: {},
};
</script>

<style>
#hidetext{
  visibility:hidden;
}

.Navi {
  width: 100%;
  overflow-x: hidden !important;
}

.el-container-custom {
  /* height: 600px !important;
  min-height: 600px !important; */
}

.el-container,
.el-aside,
.el-main ,
.el-table__body,
/* .el-table__body-wrapper, */
.el-container-custom{
  height: 100% !important;
}


</style>