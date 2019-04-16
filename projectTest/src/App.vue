<template>
  <div id="app">
    <el-header>
      <page-header></page-header>
    </el-header>
    <el-aside width="200px">
      <NavMenus></NavMenus>
    </el-aside>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer height="40px">Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import NavMenus from "@/components/NavMenus";
import PageHeader from "@/components/PageHeader";
export default {
  name: "App",
  components: {
    NavMenus,
    PageHeader
  }
};
</script>

<style lang="scss">
.el-header,.el-aside{
  position: fixed;
  left: 0;
  z-index: 2;
}
.el-header{
  background: #000;
  right: 0;
  top: 0;
}
.el-aside {
  top: 60px;
  bottom: 0;
}
.el-container {
  margin: 60px 0 40px 200px;
  min-height: calc(100% - 100px);
}
.el-footer{
  position: absolute;
  left: 200px;
  right: 0;
  bottom: 0;
  line-height: 40px;
  text-align: center;
  border-top: 1px solid #ccc;
}
</style>
