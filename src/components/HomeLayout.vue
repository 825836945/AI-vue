
<template>
  <div class="common-layout">
    <el-container class="main-container">   
        <Sidebar />  
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main class="main-content">
          <router-view class="content-container"></router-view>
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
  .el-header {
    height: 64px !important;
  }
  .main-container {
    height: 100%;
    .content-container {
      min-height: calc(100% - 64px);
      padding: 20px;
      background-color: #fff;
    }
  }
}


</style>
