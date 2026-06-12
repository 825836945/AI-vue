<template>
    <el-aside>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >      
        <div class="brand">
          <img :src="iconUrl" alt="logo" class="logo" />
          <div class="info-card">
            <h1>心理健康AI助手</h1>
            <p>管理后台</p>
          </div>
        </div>
        <el-menu-item v-for="item in router.options.routes[0].children" :key="item.path" :index="item.path">
          <el-icon><component :is="item.meta.icon" /></el-icon>
          <span>{{item.meta.title}}</span>
        </el-menu-item>

      </el-menu>
    </el-aside>
    
</template>
<script setup>
import { useRouter } from 'vue-router'
import iconUrl from '@/assets/images/robot.png'

const router = useRouter()

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}

</script>
<style scoped>
.brand {
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
  border-bottom: 1px solid #e4e7ed;
}

.logo {
  width: 36px;
  height: 36px;
  border-radius: 8px;
}

.info-card {
  display: flex;
  flex-direction: column;
}

.info-card h1 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

.info-card p {
  margin: 4px 0 0;
  font-size: 12px;
  color: #999;
}
</style>