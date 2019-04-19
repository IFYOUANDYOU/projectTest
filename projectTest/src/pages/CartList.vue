<!-- cartlist -->
<template>
  <div class="cart-list">
    <el-table
      ref="cartTable"
      :data="cartlist"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="selectChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="缩略图">
          <template slot-scope="scope"><img :src="scope.row.thumb" :alt="scope.row.title" srcset=""></template>
      </el-table-column>
      <el-table-column prop="title" label="名称"></el-table-column>
      <el-table-column label="单价">
        <template slot-scope="scope">￥{{scope.row.price}}</template>
      </el-table-column>
      <el-table-column label="数量" width="140">
          <template slot-scope="scope">
              <el-input-number v-model="scope.row.num" @change="numBindGoods(scope.row)" :min="1" label="" focus></el-input-number>
        </template>
      </el-table-column>
      <el-table-column label="总价">
        <template slot-scope="scope">￥{{scope.row.price * scope.row.num}}</template>
      </el-table-column>
      <el-table-column prop="stock" label="库存"></el-table-column>
      <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="deleteGoods(scope.$index, scope.row.id)">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
    <el-button>总价：￥{{selectPrice ? selectPrice : 0}}</el-button>
    <el-button type="danger" @click="setCurrent()">结算</el-button>
  </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex' //将mapState引入组件，并通过mapState接收vuex的数据
export default {
  name: "cart-list",
  data() {
    return {};
  },
  components: {},
  computed: {
    //在计算属性中接收vuex里面的挂载数据
    ...mapState(['cartlist','selectPrice']),
    ...mapGetters(['totalPrice']),
    ...mapActions(['INIT_CART','ADD_GOODS','REDUCE_GOODS','REMOVE_GOODS','NUMBER_CHANGE_GOODS','GET_SELECT_PRICE']),

  },
  methods: {
    getData() {
      this.$axios
        .get(this.$api + "cartlist", {})
        .then(res => {
          res = res.data;
          if (res.code == 200) {
            this.$store.dispatch('INIT_CART',res.data.list)
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    numBindGoods(item) {
      if(item.num >= item.stock){
        this.$message({
          showClose: true,
          message: '商品库存不足',
          type: 'error'
        });
        return false;
      }
      this.$store.dispatch('NUMBER_CHANGE_GOODS',item);
    },
    selectChange(items){
      this.$store.dispatch('GET_SELECT_PRICE',items);
    },
    deleteGoods(idx,id){
      this.$store.dispatch('REMOVE_GOODS',id);
    },
  },
  mounted() {
    this.getData();
  }
};
</script>
<style lang='scss' scoped>
.el-input-number{
    width: 120px;
}
</style>