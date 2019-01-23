<template>
  <div class="mode-box" @touchmove.prevent="() => {}">
    <div class="box">
      <div class="top">
        <div class="title">{{title}}</div>
        <div v-if="info" class="cont-info">{{info}}</div>
        <div class="input-info" v-if="numberInput"><input type="number" v-model="number"></div>
        <div class="input-info" v-if="input"><input type="text" v-model="inputText"></div>
      </div>
      <div class="btn-box">
        <div class="cancel" @click.prevent="handlecancle">{{cancel}}</div>
        <div class="query" @click.prevent="handleQuery">{{query}}</div>
      </div>
    </div>
    <div class="no-look" v-if="showNoLook" @click="nolook">
      <div class="icon"><img :src="selectIcon"></div>
      <div class="name">不再提示</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mode',
  props:{
    title:String,
    info:String,
    cancel:String,
    query:String,
    showNoLook:Boolean,
    numberInput:{
      default: false
    },
    input:{
      default: false
    },
  },
  data() {
    return {
      number:null,
      selectIcon:require('@/assets/look.png'),
      isselectIcon:require('@/assets/nolook.png')
    }
  },
  computed: {},
  watch: {},
  methods: {
    //不在提示
    nolook(){
      if(this.selectIcon == require('@/assets/look.png')){
        this.selectIcon = this.isselectIcon;
      }else{
        this.selectIcon = require('@/assets/look.png')
      }
      this.$emit('nolook')
    },
    //取消
    handlecancle(){
      this.$emit('handleCancle')
    },
    //确定
    handleQuery(){
      this.$emit('handleQuery',this.number)
    }
  },
  mounted() {

  },
}
</script>

<style lang="stylus" scoped>
.mode-box
  width 100%
  height 100%
  position fixed
  left 0
  top 0
  background rgba(10, 10, 10, 0.6)
  display flex
  justify-content center
  flex-direction column
  align-items center
  text-align center
  color #000
  z-index 9999
.box
  width calc(100% - 60px)
  max-width 300px
  background #fff
  border-radius 5px
.top
  width 100%
  display flex
  flex-direction column
  justify-content center
  align-items center
  padding 12px 0
.title
  width 100%
  padding 0px 15px
  font-size 15px
  line-height 40px
  font-weight 700
.cont-info
  font-size 13px
  line-height 1.5
  padding 0px 15px
  text-align left
  color #888
.btn-box
  width 100%
  height 45px
  border-top 1px solid #e9e9e9
  font-size 14px
  display flex
  line-height 45px
.cancel
  width 50%
  height 100%
  border-right 1px solid #e9e9e9
  font-weight 500
.query
  width 50%
  height 100%
  color #FF434C
  font-weight 500
.no-look
  margin-top 15px
  display flex
  justify-content center
  align-items center
  color #dfdfdf
  font-size 14px
.icon
  width 15px
  height 15px
  margin-right 10px
img
  width 100%
  height 100%
  object-fit contain
  object-position center
.input-info
  width 80%
  height 40px
  line-height 35px
  border-radius 5px
  padding 0 10px
  border 1px solid #999
  outline none
input
  width 100%
  height 33px
  padding 0 10px
  line-height 33px
  border none
  outline none
  font-size 14px

</style>