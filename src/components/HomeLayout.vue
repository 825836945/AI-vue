
<template>
  <div class="common-layout">
    <el-container class="main-container">   
        <Sidebar />  
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
  .main-container {
    height: 100%;
  }
}


</style>
