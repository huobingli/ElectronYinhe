<template>
  <el-row class="L1-Filter-bar">
    <el-row class="L1-filter-bar-top">
      <el-col :span="2" class="L1-search-text"> 市场类型 </el-col>
      <el-col :span="3" class="search-input">
        <el-dropdown>
          <span class="L1-el-dropdown-link"
            >下拉菜单<i class="el-icon-arrow-down el-icon--right"></i
          ></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>上海A股</el-dropdown-item>
            <el-dropdown-item>深圳A股</el-dropdown-item>
            <el-dropdown-item>沪深指数</el-dropdown-item>
            <el-dropdown-item>沪深债券</el-dropdown-item>
            <el-dropdown-item>港股痛</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col :span="2" class="L1-search-text"> 数据类型 </el-col>
      <el-col :span="3" class="search-input">
        <el-dropdown>
          <span class="L1-el-dropdown-link"
            >下拉菜单<i class="el-icon-arrow-down el-icon--right"></i
          ></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>现货快照</el-dropdown-item>
            <el-dropdown-item>分钟K线</el-dropdown-item>
            <el-dropdown-item>全面数据</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col :span="2" class="L1-search-text"> 证券代码 </el-col>
      <el-col :span="3" class="search-input">
        <el-dropdown>
          <span class="L1-el-dropdown-link"
            >下拉菜单<i class="el-icon-arrow-down el-icon--right"></i
          ></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col :span="2" class="L1-order-button">
        <el-button size="small" @click="SearchCode">订阅</el-button>
      </el-col>
      <el-col :span="2" class="L1-cancel-button">
        <el-button size="small" @click="SearchCode">退订</el-button>
      </el-col>
    </el-row>
    <el-row class="L1-filter-file">
      <el-col :span="2" class="L1-file-text"> 行情落地文件 </el-col>
      <el-col :span="8" class="L1-file-input-el">
        <el-input class="L1-file-input" v-model="input" placeholder="请输入内容" ></el-input>
      </el-col>
      <el-col :span="2" class="L1-set-file-button">
        <el-button size="small" @click="SearchCode">设置</el-button>
      </el-col>
    </el-row>
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
    SearchCode() {
      console.log("button is clicked, input", this.input);
      this.$eventBus.$emit("SearchCode", this.input);
    },
  },
};
</script>

<style>
.L1-Filter-bar {
  padding: 10px;
}

.L1-file-input{
  width: 800px ;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}

.el-icon-arrow-down {
  font-size: 12px;
}

.L1-filter-bar-top,
.L1-file-text,
.L1-file-input-el,
.L1-set-file-button {
  line-height: 40px;
}

.L1-file-input-el {
  margin-right:20px
}

</style>
