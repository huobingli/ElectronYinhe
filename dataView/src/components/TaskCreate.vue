<template>
  <el-row class="task-bar">
    <el-col class="task-create-button">
        <el-button @click="CreateTask">新建任务</el-button>
      </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      input: "",
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
    CreateTask() {
      console.log("button is clicked, input", this.input);
      this.$eventBus.$emit("CreateTask", this.input);
    },
  },
};
</script>

<style>
.task-bar {
  padding: 20px;
}

</style>
