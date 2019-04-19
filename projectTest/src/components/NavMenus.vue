<!-- NavMenus.vue -->
<template>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="menuOpen"
      @close="menuClose"
      background-color="#000"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-submenu index="mini">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>内容管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="miniList">视频管理</el-menu-item>
          <el-menu-item index="1-2">美文管理</el-menu-item>
          <el-menu-item index="1-3">公众号链接</el-menu-item>
          <el-menu-item index="1-4">背景管理</el-menu-item>
          <el-menu-item index="1-5">分类管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="mini">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>占卜运势</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">星座运势</el-menu-item>
          <el-menu-item index="2-2">订单管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="mini">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>系统管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">网站配置</el-menu-item>
          <el-menu-item index="3-2">人员管理</el-menu-item>
          <el-menu-item index="cartlist">资源管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
</template>

<script>
export default {
  name: "nav-view",
  data() {
    return {};
  },
  components: {},
  computed: {},
  methods: {
      menuOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      menuClose(key, keyPath) {
        console.log(key, keyPath);
      }
  },
  mounted() {}
};
</script>
<style lang='scss' scoped>
.el-menu{
    height: 100%;
}
</style>