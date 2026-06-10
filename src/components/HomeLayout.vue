
 <template>
  <div class="common-layout">
    <el-container>
        <el-aside>
            <Sidebar />
        </el-aside>
      <el-container>
        <el-header>
            <Header />
        </el-header>
        <el-main>Main</el-main>
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
  line-height: 50px;
  height: 50px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid transparent;
}



.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-aside {
  background-color: #232425;
  color: white;
  line-height: 200px;
}
</style>
