<template>
  <el-row class="static-data-search-bar">
    <el-col :span="2" class="static-data-search-text"> 代码查找 </el-col>
    <el-col :span="3" class="static-data-search-input">
      <el-input  v-model="input" placeholder="请输入内容" ></el-input>
    </el-col>
    <el-col :span="2" class="static-data-search-button">
      <el-button size="small" @click="SearchCode">查找</el-button>
    </el-col>
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
.static-data-search-bar {
  line-height: 40px;
}

.static-data-search-text {
  padding-left: 40px;
}

.static-data-search-input {
  padding-right: 20px;
}

</style>