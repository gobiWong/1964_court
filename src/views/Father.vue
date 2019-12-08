<template>
    <div>
      父组件内容
      <router-view></router-view>
    </div>
</template>
           
<script>
export default{
  data(){
    return {
      arr1:[4,5,6],
      obj1:{id:2,name:'gg'}
    }
  },
   mounted(){
     console.log(this.$route.params.id)
   }          
}
</script>
<style scoped>
            
</style>