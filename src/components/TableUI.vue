<template>
  <el-container>
    <!-- <el-header style="text-align: right; font-size: 12px">
    </el-header> -->
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="code" label="代码" width="180"> </el-table-column>
      <el-table-column prop="name" label="名称" width="180"> </el-table-column>
      <el-table-column prop="market" label="市场" width="180">
      </el-table-column>
      <el-table-column prop="industry" label="行业"> </el-table-column>
    </el-table>
  </el-container>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      tableData: null,//[{"id":12103,"code":"600000","mcode":"600000","name":"浦发银行","market":"SH","industry":"银行"},{"id":12104,"code":"600004","mcode":"600004","name":"白云机场","market":"SH","industry":"机场航运"},{"id":12105,"code":"600006","mcode":"600006","name":"东风汽车","market":"SH","industry":"汽车整车"},{"id":12106,"code":"600007","mcode":"600007","name":"中国国贸","market":"SH","industry":"房地产开发"},{"id":12107,"code":"600008","mcode":"600008","name":"首创股份","market":"SH","industry":"环保工程"},{"id":12108,"code":"600009","mcode":"600009","name":"上海机场","market":"SH","industry":"机场航运"},{"id":12109,"code":"600010","mcode":"600010","name":"包钢股份","market":"SH","industry":"钢铁"},{"id":12110,"code":"600011","mcode":"600011","name":"华能国际","market":"SH","industry":"电力"},{"id":12111,"code":"600012","mcode":"600012","name":"皖通高速","market":"SH","industry":"公路铁路运输"},{"id":12112,"code":"600015","mcode":"600015","name":"华夏银行","market":"SH","industry":"银行"},{"id":12113,"code":"600016","mcode":"600016","name":"民生银行","market":"SH","industry":"银行"},{"id":12114,"code":"600017","mcode":"600017","name":"日照港","market":"SH","industry":"港口航运"},{"id":12115,"code":"600018","mcode":"600018","name":"上港集团","market":"SH","industry":"港口航运"},{"id":12116,"code":"600019","mcode":"600019","name":"宝钢股份","market":"SH","industry":"钢铁"},{"id":12117,"code":"600020","mcode":"600020","name":"中原高速","market":"SH","industry":"公路铁路运输"},{"id":12118,"code":"600021","mcode":"600021","name":"上海电力","market":"SH","industry":"电力"}],
      tableAllData: null
    };
  },
  mounted() {
    // todo 初始化默认数据
    this.handleUserList();
  },
  created() {
    // 注册更新表格事件
    this.$eventBus.$on("UpdateTable", (data) => {
      console.log("TableUI Get Data From eventbus，and run UpdateTable function")
      // alert(data)
      this.handleTableList(data)
    })

    // 注册情况表格事件
    this.$eventBus.$on("ClearTable", () => {
      console.log("TableUI Get Data From eventbus，and run ClearTable function")
      this.handleClearTableList()
    })

    // 注册查找表格中代码事件
    this.$eventBus.$on("SearchCode", (data) => {
      console.log("TableUI Get Data From eventbus，and run SearchCode function", data)
      this.handleSearchCode(data)
    });
  },
  methods: {
    handleSizeChange: function (size) {
      this.pagesize = size;
      console.log(this.pagesize);
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage;
      this.handleUserList(currentPage);
    },
    handleUserList(page = 1) {
      console.log(page);

      // todo 从client获取数据
      // Axios.get("http://localhost:8080/TestSelectStockBaseData", {
      //   params: {
      //     limit: 20,
      //     offset: (page - 1) * 20,
      //   },
      // }).then((res) => {
      //   console.log(res.data.data);
      //   this.tableData = res.data.data;
      //   console.log(this.tableData);
      // });
    },
    handleTableList: function (data){
      this.tableData = data;
      this.tableAllData = data;
      // console.log(this.tableData)
    },
    handleClearTableList: function() {
      this.tableData = null;
    },
    handleSearchCode: function (data) {
      let showdata = []
      let item
      for (item of this.tableAllData) {
        if (data === item.code || item.code.search(data) != -1) {
          showdata.push(item)
        }
      }
      this.tableData = showdata
    },
  },
};
</script>