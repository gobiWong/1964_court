<template>


  
  <div>
     <!-- <div class="must" @click="change(item.id)"  v-for="(item,index) in obj" :key="index">
        <div  style="height:100px;width:100px;" v-show="item.status===1?false:true">
        <div >
          <div style="height:30px;width:30px;">{{item.age}}</div>
        </div>
      </div>
     </div> -->


      <!-- <div class="must" @click="change(item.id)"  v-for="(item,index) in obj" :key="index">
        {{item.name}}
        <div class="must_1" v-show="item.status===1?false:true">{{item.age}}</div>
      </div> -->
    <!-- <button @click="handleBack()">点击</button>
    <router-link to="/child">跳转？</router-link> -->
    <!-- <router-view>sm</router-view> -->
    <!-- <router-view name="a"></router-view>
    <router-view name="b"></router-view> -->
      
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: [
        { url: "#", img: "../static/images/l1.png" },
        { url: "#", img: "../static/images/l2.png" },
        { url: "#", img: "../static/images/l3.png" }
      ],
       obj : [
  {id:1,name:"武汉",age:1,status:1},
  {id:3,name:"仙桃",age:5,status:1},
  {id:2,name:"北京",age:3,status:1},
  {id:7,name:"深圳",age:7,status:1},
  {id:5,name:"广州",age:4,status:1},
  {id:6,name:"成都",age:2,status:1},
  {id:4,name:"四川",age:6,status:1},
]
    };
   
  },
  methods: {
    change(id){
     this.obj=this.obj.map(item=>{
       if(item.id===id){
          if(item.status===1){
            return {...item,status:2}
          }else{
            return {...item,status:1}
          }
       }
         return {...item,status:1}
     })

    },
    handleBack(){

    }

  },
  mounted() {}
};
</script>

<style lang="less" scoped>
// .app-container {
//   width: 100%;
//   max-height: 1920px;
//   background: url(../static/images/bg.png) no-repeat 50%;
//   background-size: 100%;
//   box-sizing: border-box;
//   padding: 20px 25px;
//   .mint-swipe {
//     height: 460px;
//     .mint-swipe-item {
//       // background-color: pink;
//       img {
//         width: 100%;
//         height: 100%;
//       }
//     }
//   }
//   nav {
//     width: 100%;
//     height: 50px;
//     background-color: #ccc;
//     text-align: center;
//   }
// }
// .must{
//   font-size: 30px;
//   cursor: pointer;
//   margin-top: 20px;
 
// }
// .must_1{
//   width: 180px;
//   height:90px;
//   background-color:skyblue;
//   margin-top: 2px;
// }
</style>

