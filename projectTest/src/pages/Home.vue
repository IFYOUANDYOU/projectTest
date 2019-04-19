<!-- home.vue -->
<template>
  <div class="home" id="home" v-home>
    <h1 @click="bindTitle">{{homeTitle}}</h1>
    <add-form></add-form>
    <test-edit></test-edit>
    <test-view></test-view>
  </div>
</template>

<script>
import Vue from 'vue'
import AddForm from "@/pages/AddForm";

import TestEdit from "@/components/TestEdit"
import TestView from "@/components/TestView"

var bus = new Vue();

export default {
  name: "home",
  data() {
    return {
      homeTitle: "HOME TITLE"
    };
  },
  components: {
    AddForm,
    TestEdit,
    TestView
  },
  computed: {},
  methods: {
    bindTitle(){
      this.homeTitle = "NEW HOME TITLE !"
      console.log(this.$data)
      console.log(this.$options)
      //this.$children获取子组件的集合   同理可以通过this.$parent获取父组件
      for(let i in this.$children){
        console.log(this.$children[i]._data)//遍历子组件    通过_data获取子组件的data
      }
      Vue.nextTick().then(() => {
        console.log(this.homeTitle)
      })
    }
  },
  directives: {
    'home': {
      bind: function (e) {
        console.log('bind组件绑定')
      },
      inserted: function (e) {
        console.log('inserted组件插入')
      },
      update: function (e) {
        console.log('update组件更新')
      },
      componentUpdated: function (e) {
        console.log('componentUpdated组件更新')
      },
      unbind: function (e) {
        console.log('unbind组件销毁')
      }
    }
  },
  beforeCreate() {console.log('beforeCreate')},//实例初始化之后  data获取不到
  created() {console.log('created')},//实例创建完成   能获取data   还未挂载    获取不到$el
  beforeMount() {console.log('beforeMount')},//挂载之前调用
  mounted() {//挂载到实例    子组件未被挂载
    // this.$iMessage.info('普通消息');
    // this.$totast('哈哈哈哈');
    console.log('mounted')
    this.$nextTick().then(() => {//所有视图都渲染完成之后调用
      console.log("所有视图都渲染完成之后执行")
    })
  },
  beforeUpdate() {console.log('beforeUpdate')},
  update() {console.log('update')},
  beforeDestroy() {console.log('beforeDestroy')},
  destroyed() {console.log('destroyed')}
};
</script>
<style lang='scss' scoped>
</style>