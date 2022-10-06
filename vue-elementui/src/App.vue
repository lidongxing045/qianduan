<template>
  <div id="app">
    <router-view/>
   
  </div>
</template>

<script>


export default {
  name: 'App'

}
</script>

<style lang="less" scoped>
//  @import url(./assets/css/reset.css);
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  height: 100%;
  position: absolute;
  top:0;
  left: 0;
  bottom: 0;
  right: 0;
  
}
</style>
