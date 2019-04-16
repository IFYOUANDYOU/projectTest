<!-- MiniList -->
<template>
  <div class="mini-list">
    <el-table
      ref="multipleTable"
      :data="projects"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="projectSelectChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="success" @click="projectLogin(scope.$index, scope.row)">登录</el-button>
          <el-button size="mini" type="primary" @click="projectEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="projectDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "mini-list",
  data() {
    return {
      projects: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  components: {},
  computed: {},
  methods: {
    projectSelectChange() {},
    projectLogin(idx,row){

    },
    projectEdit(idx,row) {
        console.log(idx,row)
    },
    projectDelete(idx,row) {}
  },
  mounted() {}
};
</script>
<style lang='scss' scoped>
</style>