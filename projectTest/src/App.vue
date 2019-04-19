<template>
  <div id="app">
    <transition-group name="slide-fade" mode="out-in">
      <el-header key="elheader">
        <keep-alive>
          <page-header></page-header>
        </keep-alive>
      </el-header>

      <el-aside key="elaside" width="200px">
        <keep-alive>
          <nav-menus></nav-menus>
        </keep-alive>
      </el-aside>
      <el-container key="elcontainer">
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer height="40px">Footer</el-footer>
      </el-container>
    </transition-group>
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
.slide-fade-enter-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
.el-header,
.el-aside {
  position: fixed;
  left: 0;
  z-index: 2;
}
.el-header {
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
.el-footer {
  position: absolute;
  left: 200px;
  right: 0;
  bottom: 0;
  line-height: 40px;
  text-align: center;
  border-top: 1px solid #ccc;
}
</style>
