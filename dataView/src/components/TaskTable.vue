<template>
  <div class="DivDataView">
    <el-container>
      <el-table
        class="DataView"
        :data="
          tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
        "
        border
      >
        <el-table-column
          v-for="header of tableHeader"
          :label="header.name"
          :prop="header.prop"
          :width="header.width"
        >
        </el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >查看</el-button
            >
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
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
        next-text="下一页"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableHeader: [
        { name: "任务ID", prop: "id", width: "200" },
        { name: "任务名称", prop: "name", width: "140" },
        { name: "下载数据", prop: "down_data", width: "140" },
        { name: "数据时间", prop: "down_time", width: "140" },
        { name: "下载方式", prop: "down_way", width: "140" },
        { name: "数据类型", prop: "data_type", width: "140" },
        { name: "存储位置", prop: "down_save", width: "140" },
        { name: "创建时间", prop: "save_time", width: "140" }
      ],
      tableData: [
        {
          id: "1",
          name: "下载数据",
          down_data: "测试数据",
          down_time: "测试数据时间",
          down_way: "测试方式",
          data_type: "日线",
          down_save: "测试位置",
          save_time: "测试创建时间",
        },
      ],
      tableAllData: [],
      pageSize: 100,
      currentPage: 1,
    };
  },
  mounted() {},
  created() {},
  methods: {
    handleSizeChange: function (size) {
      this.pagesize = size;
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage;
    },
    handleUserList(page = 1) {
      console.log("handleUserList");
    },
    handleTableList: function (data) {
      data = JSON.parse(data);
      this.tableData = data["data"]["items"];

      this.tableAllData = this.tableData;
    },
    handleClearTableList: function () {
      this.tableData = null;
    },
    handleClick: function(data) {
      console.log(data)
    }
  },
};
</script>
<style></style>
