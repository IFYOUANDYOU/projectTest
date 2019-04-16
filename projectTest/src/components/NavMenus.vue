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
          <span>小程序</span>
        </template>
        <el-menu-item-group>
          <template slot="title">生活</template>
          <el-menu-item index="miniList">生活1</el-menu-item>
          <el-menu-item index="1-2">生活2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="便民">
          <el-menu-item index="1-3">便民1</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">其他</template>
          <el-menu-item index="1-4-1">其他1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">其他</span>
      </el-menu-item>
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