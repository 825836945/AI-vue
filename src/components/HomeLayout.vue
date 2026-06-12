
<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <Sidebar />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
 <script setup>
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'
</script>
<style lang="scss" scoped>
.common-layout {
  height: 100vh;
}
.el-container {
  height: 100%;
}

.el-header {
  background-color: #fff;
  color: #333;
  line-height: 67px;
  height: 67px;
  box-shadow: 0px 0px 1px 1px rgba(3, 3, 3, 0.1);
  border-bottom: 1px solid transparent;
}

.el-main {
  color: #333;
}
.el-aside {
  color: rgb(0, 0, 0);
}
</style>
