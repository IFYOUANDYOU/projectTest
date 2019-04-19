<!-- iMessage -->
<template>
  <transition name="fade">
    <div class="message" :class="type" v-show="show">
      <i class="icon"></i>
      <span class="text">{{text}}</span>
    </div>
  </transition>
</template>

<script>
export default {
  name: "iMessage",
  props: {
      type: {
        type: String,
        default: 'info',
        validator: val => ['info', 'success', 'warning', 'error'].includes(val)
      },
      text: {
        type: String,
        default: ''
      },
      show: {
        type: Boolean,
        default: false
      }
  },
  data() {
    return {};
  },
  components: {},
  computed: {},
  methods: {},
  mounted() {}
};
</script>
<style lang='scss' scoped>

.fade-enter-active,.fade-leave-active{
    transition: opacity .3s
}
.fade-enter,.fade-leave-to{
    opacity: 0
}
.message{
    position: fixed;
    top: 40px;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    min-width: 400px;
    padding: 10px 20px;
    color: #fff;
    background: #909399;
    font-size: 14px;
    line-height: 1.4;
    border-radius: 4px;
    z-index: 1000;
    box-shadow: 0 0 10px rgba(0, 0, 0, .3);
    &.info{
        background: #409EFF;
    }
    &.success{
        background: #67C23A;
    }
    &.error{
        background: #F56C6C;
    }
    &.warning{
        background: #E6A23C;
    }
}    
</style>