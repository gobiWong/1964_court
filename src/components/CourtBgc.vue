<template>
  <div class="courtbgc">
    <!-- <h1>一级</h1>
    <h2>二级</h2>
    <h3>三级</h3>
    <newFrom></newFrom> -->
    <router-view></router-view>
  </div>
</template>

<script>
import newFrom from "./new.vue";
export default {
  components:{
    newFrom
  },
  name:'CourtBgc',
  data(){
    return{
      msg:'最终幻想'
    }
  }

}
</script>
<style lang="less" scoped>

  //   .courtbgc{
  //   width: 300px;
  //   height: 300px;
  //   background-color: skyblue;
  //   margin: auto;
  //   h1{
  //     background-color: #ccc;
  //     text-align: center;
  //   }
  //   h2{
  //     background-color: #eee;
  //     text-align: center;
  //     font-size: 30px;
  //   }
  //   h3{
  //     background-color: #bbb;
  //     text-align: center;
  //     font-size: 20px;
  //   }
  // }
 
</style>
