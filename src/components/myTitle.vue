<template>
  <div class="title-box" :style="{background:bacColor,color:textColor}">
    <div v-if="canBack" class="back" @click="back"><img :src="backImg"></div>
    <div class="title">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: 'title1',
  props:{
    title:'',
    canBack:{
      default:true
    },
    bacColor:{
      default:'#fff'
    },
    textColor:{
       default:'#000'
    }
  },
  data() {
    return {
      backImg: require("@/assets/back.png")
    }
  },
  computed: {},
  watch: {},
  methods: {
    back(){
      this.$router.go(-1)
    }
  },
  mounted() {
    if(this.bacColor !== '#fff' || !this.bacColor !== '#ffffff'){
      this.backImg = require("@/assets/back2.png")
    }
  },
}
</script>

<style lang="stylus" scoped>
.title-box
  width 100%
  height 50px
  background #fff
  padding 0 20px
  display flex
  justify-content flex-start
  align-items center
.back
  width 100px
  height 50px
  text-align center
  display flex
  align-items center
  position absolute
  left 20px
  z-index 99
.back img
  width 21px
  height 21px
.title
  width 100%
  height 100%
  text-align center
  font-size 16px
  line-height 50px
  font-weight 700
</style>