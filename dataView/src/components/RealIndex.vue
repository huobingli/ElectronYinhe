<template>
  <div class="real-el-container-custom">
    <RealHeader></RealHeader>
    <el-container >
      <el-aside class="real-navi" min-width="180px" width="180px" >
        <RealNavi></RealNavi>
      </el-aside>
      <el-main>
        <RealTable> </RealTable>
      </el-main>
      
    </el-container>
    <div id="real-hidetext">{{transdata}}</div>
  </div>
</template>
<script>
import RealHeader from "./RealHeader.vue";
import RealNavi from "./RealNavi.vue";
import RealTable from "./RealTable.vue";
import { v4 as uuidv4 } from 'uuid'

export default {
  components: {
    RealNavi: RealNavi,
    RealHeader: RealHeader,
    RealTable: RealTable
  },
  data() {
    return {
      transdata:"",
    };
  },
  mounted() {},
  created() {},
  methods: {},
};
</script>

<style>
#real-hidetext{
  visibility:hidden;
  height:0px;
}

.real-navi {
  width: 100%;
  overflow-x: hidden !important;
}

.el-container,
.el-aside,
/* .el-main , */
.el-table__body,
.el-table__body-wrapper,
.real-el-container-custom{
  height: 100% !important;
}

.el-main{
  height: calc(100%)-30px !important;
  padding-bottom: 60px !important;
}

</style>