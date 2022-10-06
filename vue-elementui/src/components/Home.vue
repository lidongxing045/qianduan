<template>
  <div class="home">
    <Header />
    <el-container class="content">
      <Menu />

      <el-container>
        <el-main>
          <div>
            <Bread/>
          </div>
          <router-view></router-view>
        </el-main>
        <el-footer>
          <Footer />
        </el-footer>
      </el-container>
    </el-container>

  </div>
</template>

<script>
import Header from './common/Header.vue'
import Footer from './common/Footer.vue'
import Menu from './common/Menu.vue'
import Bread from './common/breadcrumb.vue'
export default {
  components: {
    Header,
    Footer,
    Menu,
    Bread
  },
  data() {
    return {
      name: ""
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less"  scoped >
.home {
  background-color: aqua;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left:0px;
  bottom: 0;

  .content {
    position: absolute;
    width: 100%;
    top: 60px;
    bottom: 0;
    left:0;
    right:0;
  }


}
</style>
