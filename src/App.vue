<template>
  <div id="app" class="app-container">
    <nav>头部区域</nav>
    <main>
      <aside>左边</aside>
      <aside>右边</aside>
    </main>
    <footer>底部区域</footer>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scoped>
.app-container{
  width: 300px;
  height: 300px;
  margin: auto;
  background-color:darkslateblue;
  nav{
    width: 100%;
    height: 50px;
    background-color: #ccc;
    text-align: center;
  }
}
</style>

