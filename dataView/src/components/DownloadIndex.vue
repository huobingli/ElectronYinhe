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
        <el-table-column label="下载进度" width="400" >
          <el-progress
            :percentage="percentage"
            :color="customColor"
          ></el-progress>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableHeader: [
        { name: "创建时间", prop: "task_time", width: "200" },
        { name: "任务名称", prop: "task_name", width: "140" },
        { name: "任务ID", prop: "task_type", width: "140" },
        { name: "任务状态", prop: "task_status", width: "140" },
      ],
      tableData: [
        {
          task_time: "123312",
          task_name: "上海",
          task_type: "日线",
          task_status: "进行中",
          task_percent: 60
        },
        {
          task_time: "123312",
          task_name: "上海",
          task_type: "日线",
          task_status: "已经完成",
        },
      ],
      tableAllData: [],
      pageSize: 100,
      currentPage: 1,
      percentage: 100,
      customColor: "#409eff",
      customColors: [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#5cb87a", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#6f7ad3", percentage: 100 },
      ],
    };
  },
  mounted() {},
  created() {},
  methods: {
    customColorMethod(percentage) {
      if (percentage < 30) {
        return "#909399";
      } else if (percentage < 70) {
        return "#e6a23c";
      } else {
        return "#67c23a";
      }
    },
    increase() {
      this.percentage += 10;
      if (this.percentage > 100) {
        this.percentage = 100;
      }
    },
    decrease() {
      this.percentage -= 10;
      if (this.percentage < 0) {
        this.percentage = 0;
      }
    },
  },
};
</script>
<style></style>
