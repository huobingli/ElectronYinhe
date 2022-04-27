<template>
  <el-row class="search_bar">
    <el-col :span="2" class="search-text"> 文件行情 </el-col>
    <el-col :span="2" class="search-text"> 流式行情 </el-col>
    <el-col :span="2" class="search-text"> 站点行情 </el-col>
    <el-col :span="2" class="search-text"> 时间 </el-col>
  </el-row>
</template>
<script>

export default {
  data() {
    return {
      input:''
    };
  },
  props: {
    smsg: {
      type: String,
      default: ''
    }
  },
  mounted() {},
  watch: {
    '$route': {
      handler() {
        console.log(this.$route.query);
      },
      deep: true
    }
  },
  methods: {
    SearchCode() {
      console.log("button is clicked, input", this.input);
      this.$eventBus.$emit("SearchCode", this.input);
    },
  },
};
</script>

<style>
.search-text {
  font-size: 13px;
  text-align: center;
  margin: 0 auto;
}

</style>