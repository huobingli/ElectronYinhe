<template>
  <el-row class="real-search_bar">
    <el-col :span="2" class="real-search-text"> 代码查找 </el-col>
    <el-col :span="3" class="real-search-input">
      <el-input  v-model="input" placeholder="请输入内容" ></el-input>
    </el-col>
    <el-col :span="2" class="real-search-button">
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
.real-search_bar {
  line-height: 40px;
}

.real-search-text {
  padding-left: 40px;
}

.real-search-input {
  padding-right: 20px;
}
</style>