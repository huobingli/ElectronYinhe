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
      tableHeader: [{"name":"代码","prop":"code","width":"80"},{"name":"名称","prop":"name","width":"100"},{"name":"昨收","prop":"pre","width":"100"},{"name":"开盘","prop":"open","width":"100"},{"name":"最高","prop":"high","width":"100"},{"name":"最低","prop":"low","width":"100"},{"name":"最新","prop":"new","width":"100"},{"name":"收盘","prop":"close","width":"100"},{"name":"买价","prop":"bid_1","width":"100"},{"name":"卖价","prop":"offer_1","width":"100"},{"name":"总量","prop":"amount","width":"100"},{"name":"总量","prop":"volume","width":"100"},{"name":"金额","prop":"money","width":"100"},{"name":"IOPV","prop":"iopv","width":"100"},{"name":"涨停","prop":"upper","width":"100"},{"name":"跌停","prop":"lower","width":"100"}],
      tableData: [],
      tableAllData: [],
      pageSize:100,
      currentPage:1      
    };
  },
  mounted() {
  },
  created() {
    // 注册更新表格事件
    this.$eventBus.$on("UpdateTableItems", (data) => {
      console.log("TableUI Get Data From eventbus，and run UpdateTable function")
      this.handleTableList(data)
    })

    // 注册查找表格中代码事件
    this.$eventBus.$on("SearchCode", (data) => {
      console.log("TableUI Get Data From eventbus，and run SearchCode function", data)
      this.handleSearchCode(data)
    });

	// for test
	this.$eventBus.$on("UpdateTable", (data)=> {
      console.log("TableUI Get Data From eventbus，and run UpdateTable function", data)
      this.handleUpdateTable(data)
    });
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

      // this.tableData = [{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300033","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"123123123123","close":"70850000","code":"300750","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300750","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"},{"amount":"545","bid_1":"65650000","close":"70850000","code":"300750","high":"69550000","iopv":"0","low":"66950000","lower":"58500000","money":"1300808275000000","new":"66300000","offer_1":"59800000","open":"64350000","pre":"70200000","upper":"71500000","volume":"20012435"}]
      this.tableAllData = this.tableData
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

    handleUpdateTable: function(data) {
      this.tableData = data
    }
  },
};
</script>
<style>
.DivDataView
.DataView {
  height:100% !important;
}

.el-container{
  height:100% !important;
}

.pagination {
  height: 30px;
}
</style>