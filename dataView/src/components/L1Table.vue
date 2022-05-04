<template>
  <div class="DivDataView">
    <el-container>
      <el-table class="DataView" :data="tableData.slice((currentPage-1)*pageSize, currentPage*pageSize)" border>
        <el-table-column v-for="header of tableHeader" :label="header.name" :prop="header.prop" :width="header.width"> </el-table-column>
      </el-table>
    </el-container>
    <div class="pagination">
    <el-pagination
        @size-change="handleSizeChange" 
        @current-change="handleCurrentChange" 
        :current-page="currentPage" 
        :page-size="pageSize"
        :total="tableData.length" 
        prev-text="上一页" 
        next-text="下一页" >
    </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableHeader: [{"name":"序号","prop":"id","width":"200"},{"name":"市场类型","prop":"market_type","width":"140"},{"name":"数据类型","prop":"data_type","width":"140"},{"name":"证券代码","prop":"code","width":"140"},{"name":"订阅状态","prop":"order_type","width":"140"},{"name":"落地文件","prop":"file","width":"350"}],
      tableData: [{"id":"1","market_type":"上海","data_type":"日线","code":"600000","order_type":"已经订阅","file":"测试文件"},{"id":"2","market_type":"上海","data_type":"分钟K线","code":"600000","order_type":"订阅","file":"测试文件"},{"id":"3","market_type":"深圳","data_type":"现货数据","code":"300750","order_type":"已经订阅","file":"测试文件"},{"id":"4","market_type":"上海","data_type":"日线","code":"600000","order_type":"已经过期","file":"测试文件"}],
      tableAllData: [],
      pageSize:100,
      currentPage:1      
    };
  },
  mounted() {
  },
  created() {
  },
  methods: {
    handleSizeChange: function (size) {
      this.pagesize = size;
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage;
    },
    handleUserList(page = 1) {
      console.log("handleUserList")
    },
    handleTableList: function (data){      
      data = JSON.parse(data)
      this.tableData = data["data"]["items"];

      this.tableAllData = this.tableData
    },
    handleClearTableList: function() {
      this.tableData = null;
    }
  },
};
</script>
<style>
</style>