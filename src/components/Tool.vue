<template>
  <el-row class="search_bar">
    <el-col :span="2" class="search-text"> 测试工具 </el-col>
    <el-col :span="2">
      <el-button class="search-button" size="small" @click="AddTableData">增加表格数据</el-button>
    </el-col>
    <el-col :span="2">
      <el-button class="search-button" size="small" @click="ClearTableData">清空表格数据</el-button>
    </el-col>

    <el-col :span="2">
      <el-button class="search-button" size="small" @click="AddNavigateData">增加导航数据</el-button>
    </el-col>
    <el-col :span="2">
      <el-button class="search-button" size="small" @click="ClearNavigateData">清空导航数据</el-button>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      msg: "123312",
    };
  },
  props: {
    smsg: {
      type: String,
      default: "",
    },
  },
  mounted() {},
  watch: {
    $route: {
      handler() {
        console.log(this.$route.query);
      },
      deep: true,
    },
  },
  methods: {
    AddTableData(data) {
      data = [{"id":12103,"code":"600000","mcode":"600000","name":"浦发银行","market":"SH","industry":"银行"},{"id":12104,"code":"600004","mcode":"600004","name":"白云机场","market":"SH","industry":"机场航运"},{"id":12105,"code":"600006","mcode":"600006","name":"东风汽车","market":"SH","industry":"汽车整车"},{"id":12106,"code":"600007","mcode":"600007","name":"中国国贸","market":"SH","industry":"房地产开发"},{"id":12107,"code":"600008","mcode":"600008","name":"首创股份","market":"SH","industry":"环保工程"},{"id":12108,"code":"600009","mcode":"600009","name":"上海机场","market":"SH","industry":"机场航运"},{"id":12109,"code":"600010","mcode":"600010","name":"包钢股份","market":"SH","industry":"钢铁"},{"id":12110,"code":"600011","mcode":"600011","name":"华能国际","market":"SH","industry":"电力"},{"id":12111,"code":"600012","mcode":"600012","name":"皖通高速","market":"SH","industry":"公路铁路运输"},{"id":12112,"code":"600015","mcode":"600015","name":"华夏银行","market":"SH","industry":"银行"},{"id":12113,"code":"600016","mcode":"600016","name":"民生银行","market":"SH","industry":"银行"},{"id":12114,"code":"600017","mcode":"600017","name":"日照港","market":"SH","industry":"港口航运"},{"id":12115,"code":"600018","mcode":"600018","name":"上港集团","market":"SH","industry":"港口航运"},{"id":12116,"code":"600019","mcode":"600019","name":"宝钢股份","market":"SH","industry":"钢铁"},{"id":12117,"code":"600020","mcode":"600020","name":"中原高速","market":"SH","industry":"公路铁路运输"},{"id":12118,"code":"600021","mcode":"600021","name":"上海电力","market":"SH","industry":"电力"}],
      this.$eventBus.$emit("UpdateTable", data);
    },
    ClearTableData(data) {
        data = [],
        this.$eventBus.$emit("UpdateTable", data);
    },
    AddNavigateData(data) {
        data = [{title: '沪深A股',index: '1',child: [{title: '基础信息',index: '1-1'}]},{title: '债券',index: '2',child: [{title: '基础信息',index: '2-1'}]},{title: '基金',index: '3',child: [{title: '基础信息',index: '3-1'}]},{title: '指数',index: '4',child: [{title: '基础信息',index: '4-1'}]},{title: '期权',index: '5',child: [{title: '基础信息',index: '5-1'}]},{title: '港股通',index: '6',child: [{title: '基础信息',index: '6-1'}]}]
        this.$eventBus.$emit("UpdateNavigate", data);
    },
    ClearNavigateData(data) {
        data = []
        this.$eventBus.$emit("ClearNavigate", data);
    }
  },
};
</script>

<style>
.search_bar {
  height: 40px;
}

.search-text {
  font-size: 20px;
  text-align: center;
  margin: 0 auto;
}

.search-button {
  margin: 0 auto;
}
</style>