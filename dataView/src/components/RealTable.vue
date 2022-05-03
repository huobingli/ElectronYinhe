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
      tableHeader: [{"name":"序号","prop":"id","width":"200"},{"name":"代码","prop":"code","width":"140"},{"name":"名称","prop":"name","width":"140"},{"name":"类型","prop":"type","width":"140"},{"name":"RSI","prop":"high","width":"140"},{"name":"MACD","prop":"macd","width":"140"},{"name":"KDJ","prop":"kdj","width":"140"},{"name":"周期","prop":"period","width":"140"},{"name":"时间","prop":"time","width":"140"}],
      tableData: [],
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