<template>
  <div class="home-box">
    <my-title title="首页" bacColor="red"></my-title>
    <div class="mode" @click="clicka">模态框</div>
    <div class="mode" @click="clickb">确认框</div>

     <my-mode title="温馨提示" info="您的拍币不足" v-if="showMode" @handleCancle="()=>{this.showMode = false}"
      cancel="取消" query="充值" :showNoLook="false"  @touchmove.prevent="() => {}"
       @handleQuery="goQuery">
     </my-mode>

     <my-confirm v-if="showConfirm" title="警告！" info="你的内力不足！" @query="queryConfirm"></my-confirm>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      showMode:false,
      showConfirm:false
    }
  },
  computed: {},
  watch: {},
  methods: {
     clicka(){
       this.showMode = true;
    },
     clickb(){
       this.showConfirm = true;
    },
    queryConfirm(){
      this.showConfirm = false;
    },
    goQuery(){}
  },
  mounted() {
    this.$Message
  },
}
</script>

<style lang="stylus" scoped>
.home-box
  overflow hidden
.mode
  width 100px
  margin 20px
  padding 10px 15px
  background blue
  color #fff
</style>