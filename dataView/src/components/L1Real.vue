<template>
  <div class="L1-el-container-custom">
    <el-container class="L1-el-container">
      <el-header class="L1-el-header">
          <L1Filter> </L1Filter>
      </el-header>
      <el-main class="L1-el-main">
        <L1Table></L1Table>
      </el-main>
    </el-container>
    <div id="hidetext">{{ transdata }}</div>
  </div>
</template>
<script>
import L1Filter from "./L1Filter.vue";
import L1Table from "./L1Table.vue";
import { v4 as uuidv4 } from "uuid";

export default {
  components: {
    L1Table: L1Table,
    L1Filter: L1Filter,
  },
  data() {
    return {
      transdata: "",
    };
  },
  mounted() {
    // window.open("mdapi://yinhe_realtimel1?call_info=hidetext")
    var data = {
      js_id: uuidv4(),
      cpp_method: "GetTableItems",
      js_callback: "UpdateTableItems",
      data: {},
    };

    this.transdata = JSON.stringify(data);
  },
  created() {},
  methods: {},
};
</script>

<style>
.L1-el-header {
  height:100px !important;
}
</style>
