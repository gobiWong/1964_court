<template>
    <div>
      111111111
      <one></one>
    </div>
</template>
           
<script>
import one from "./Father";


export default{
  data(){
    return{
      arr:[1,2,3],
      obj:{id:1,name:'zs'}
    }
  },
  components:{
    two:one
  }
             
}
</script>
<style scoped>
            
</style>