<template>
  <div>
    <el-row class="task-bar">
      <el-col class="task-create-button">
        <el-button type="small" @click="dialogFormVisible = true"
          >新建任务</el-button
        >
      </el-col>
    </el-row>
    <el-dialog title="新增下载任务" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="任务名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="下载频率" :label-width="formLabelWidth">
                <el-radio v-model="form.downloadfre" label="1">单次下载</el-radio>
                <el-radio v-model="form.downloadfre" label="2">每天下载</el-radio>
            </el-form-item>
            <el-form-item label="下载时间" :label-width="formLabelWidth">
                 <el-input v-model="form.downloadtime" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="数据时间" :label-width="formLabelWidth">
                <!-- <el-input v-model="form.datatime" autocomplete="off"></el-input> -->
                <el-date-picker
                    v-model="form.datatime"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                    </el-date-picker>
            </el-form-item>
            <el-form-item label="下载方式" :label-width="formLabelWidth">
                <el-radio v-model="form.downloadtype" label="1">单次下载</el-radio>
                <el-radio v-model="form.downloadtype" label="2">每天下载</el-radio>
            </el-form-item>
            <el-form-item label="证券代码" :label-width="formLabelWidth">
                <el-button>批量上传</el-button>
            </el-form-item>
            <el-form-item label="市场类型" :label-width="formLabelWidth">
                <el-select v-model="form.markettype" placeholder="请选择市场">
                    <el-option label="上海" value="shanghai"></el-option>
                    <el-option label="深圳" value="shenzhen"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="证券类型" :label-width="formLabelWidth">
                <el-select v-model="form.stocktype" placeholder="请选择市场">
                    <el-option label="上海" value="shanghai"></el-option>
                    <el-option label="深圳" value="shenzhen"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="数据类型" :label-width="formLabelWidth">
                <el-select v-model="form.datatype" placeholder="请选择市场">
                    <el-option label="分时" value="fenshi"></el-option>
                    <el-option label="K线" value="kline"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      dialogFormVisible: false,
      form: {
          name: '',
          downloadfre: '',
          downloadtime: '',
          datatime: '',
          markettype: '',
          stocktype: '',
          datatype: ''
        },
        formLabelWidth: '80px'
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
  line-height: 40px;
}
</style>
