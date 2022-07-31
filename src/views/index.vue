<!--
 * @Founder: Mr.Qiang
 * @Date: 2022-07-31 07:54:35
 * @LastEditTime: 2022-07-31 11:35:32
 * @Description: No description yet
-->
<script setup>
import { ArrowDown } from '@element-plus/icons-vue'
</script>

<template>
  <el-container direction="vertical" class="container">
    <el-header class="header">
      <div class="flex flex-wrap items-center myheader-btn">
        <el-dropdown trigger="click">
          <el-button type="primary">
            CSS<el-icon class="el-icon--right"><arrow-down /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
              <el-dropdown-item>Action 4</el-dropdown-item>
              <el-dropdown-item>Action 5</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      QiangMingWang
      <div class="flex flex-wrap items-center myheader-btn">
        <el-dropdown trigger="click">
          <el-button type="primary">
            JS<el-icon class="el-icon--right"><arrow-down /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
              <el-dropdown-item>Action 4</el-dropdown-item>
              <el-dropdown-item>Action 5</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </el-header>
    <el-container class="main">
      <!-- <el-container> -->
      <el-main>Main</el-main>
      <!-- </el-container> -->
    </el-container>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<style scoped>
.container {
  height: 1080px;
}
.main {
  flex: 2;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  min-height: 100%;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

.el-footer {
  width: 100%;
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.example-showcase .el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
