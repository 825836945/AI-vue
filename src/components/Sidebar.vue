<template>
    <el-aside :width="isCollapse ? '64px' : '200px'" >
      <el-menu
      :collapse="isCollapse"
      :collapse-transition="false"
        default-active="2"
        class="menu-style"
      >      
        <div class="brand">
          <img :src="iconUrl" alt="logo" class="logo" />
          <div v-if="!isCollapse" class="info-card">
            <h1>心理健康AI助手</h1>
            <p>管理后台</p>
          </div>
        </div>
        <el-menu-item @click="selectMenu" v-for="item in router.options.routes[0].children" :key="item.path" :index="item.path">
          <el-icon><component :is="item.meta.icon" /></el-icon>
          <span>{{item.meta.title}}</span>
        </el-menu-item>

      </el-menu>
    </el-aside>
    
</template>
<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import iconUrl from '@/assets/images/robot.png'
import { useAdminStore } from '@/stores/admin'

const router = useRouter()
const adminStore = useAdminStore()
const isCollapse = computed(() => adminStore.isCollapse)
const selectMenu = (key) => {
  router.push(key.index)
}

</script>
<style scoped>
.menu-style {
  height: 100%;

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
}

</style>