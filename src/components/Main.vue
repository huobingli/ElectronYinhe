<template>
  <el-container>
    <el-header>
      <Header> </Header>
    </el-header>
    <el-main class="el-main-custom">
      <el-container>
        <el-aside class="Navi" min-width="180px" width="180px" >
              <Navigation></Navigation>
        </el-aside>
        <el-main class="el-main-custom">
          <Tool> </Tool>
          <Search :smsg="msg"></Search>
          <el-container style="min-height:800px;">
            <el-aside class="Navi" min-width="180px" width="180px" >
              <Navigation></Navigation>
            </el-aside>
            <el-main class="el-main-custom">
              <TableUI></TableUI>
            </el-main>
          </el-container>
        </el-main>
      </el-container>
    </el-main>
    <el-footer>
      <p>footer</p>
      <Status> </Status>
    </el-footer>
  </el-container>
</template>
<script>
import Search from "./Search.vue";
import Navigation from "./Navigation.vue";
import TableUI from "./TableUI.vue";
import Tool from "./Tool.vue";
import Status from "./Status.vue";
import Header from "./Header.vue";

export default {
  components: {
    Navigation: Navigation,
    Search: Search,
    TableUI: TableUI,
    Tool: Tool,
    Status: Status,
    Header: Header,
  },
  data() {
    return {
      msg: "hello vue",
    };
  },
  mounted() {
    // 打包需要打开，本地调试不需要
    // window.open("http://20.205.119.14/#/index")
  },
  created() {},
  methods: {},
};
</script>

<style>
.el-header{
  position: relative;
  width: 100%;
  height: 30px !important;
  background-color: grey;
  -webkit-app-region: drag;
  margin: 0 !important;
}

/* .el-aside{
  display: block;
  position: absolute;
} */

.el-main-custom {
  margin: 0 !important;
  padding: 0 !important;
}
</style>