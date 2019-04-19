<!-- totast -->
<template>
    <transition name="fade">
    <div class="totast" v-show="show">
      <i class="icon"></i>
      <span class="text">{{text}}</span>
    </div>
  </transition>
</template>

<script>
export default {
  name: '',
  data () {
      return {
      };
  },
  components: {},
  computed: {},
  methods: {},
  mounted(){}
}
</script>
<style lang='scss' scoped>
.fade-enter-active,.fade-leave-active{
    transition: opacity .3s
}
.fade-enter,.fade-leave-to{
    opacity: 0
}
.totast{
    position: fixed;
    top: 50%;
    text-align: center;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    padding: 10px 20px;
    color: #fff;
    background-color: rgba(0,0,0,0.8);
    font-size: 14px;
    border-radius: 10px;
    z-index: 1000;
}    
</style>