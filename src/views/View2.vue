<template>
    <div>
      22222
      <router-link  :to='/parent/+item.id' class="must" v-for="(item,index) in obj" :key="index">{{item.name}}</router-link>
    </div>
</template>
           
<script>
export default{
  data(){
    return{
      obj:[
        {id:1,name:"zs"},
        {id:2,name:"ls"},
        {id:3,name:"ws"},
        {id:4,name:"zmz"}
      ]
    }
  }
             
}
</script>
<style scoped>
       .must{
         margin-left: 12px;
         cursor: pointer;
       }     
</style>