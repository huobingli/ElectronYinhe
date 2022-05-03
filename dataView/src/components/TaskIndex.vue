<template>
  <div class="task-el-container-custom">
    <el-container class="task-el-container">
      <el-header class="task-el-header">
          <TaskCreate> </TaskCreate>
      </el-header>
      <el-main class="task-el-main">
        <TaskTable></TaskTable>
      </el-main>
    </el-container>
    <div id="hidetext">{{ transdata }}</div>
  </div>
</template>
<script>
import TaskCreate from "./TaskCreate.vue";
import TaskTable from "./TaskTable.vue";
import { v4 as uuidv4 } from "uuid";

export default {
  components: {
    TaskCreate: TaskCreate,
    TaskTable: TaskTable,
  },
  data() {
    return {
      transdata: "",
    };
  },
  mounted() {
  },
  created() {},
  methods: {},
};
</script>

<style>
.task-el-header {
  height:60px !important;
}
</style>
