

<template>
    <div class="navbar">
        <div class="flex-box">
            <el-button>
                <el-icon><Expand /></el-icon>
            </el-button>
            <p class="page-title">导航栏</p>
        </div>
         <div class="flex-box">
            <el-dropdown @command="handleCommand">
                <span class="user-info">
                    <div class="flex-box">
                           <el-avatar src="https://cube.elemcdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                        <span class="username">管理员</span>
                    </div>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup>
import { Expand ,User} from '@element-plus/icons-vue'
const handleCommand = (command) => {
    if (command === 'logout') {
        // 退出登录逻辑
    }
}
</script>  
<style scoped>

.navbar {
    height:64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    background-color: #fff;
    box-shadow: 0px 1px 4px rgba(0, 21, 41, 0.08);
    border-bottom: 1px solid transparent;
    .flex-box {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .page-title {
        margin-left: 20px;
        font-size: 26px;
        font-weight: bold;
        color: #1f2937;
     }
}
</style>
    

 
