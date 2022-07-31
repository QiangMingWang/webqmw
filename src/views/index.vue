<!--
 * @Founder: Mr.Qiang
 * @Date: 2022-07-31 07:54:35
 * @LastEditTime: 2022-07-31 14:39:25
 * @Description: No description yet
-->
<script setup>
// import { ArrowDown } from '@element-plus/icons-vue'
// console.log(ArrowDown)
</script>

<template>
  <el-container direction="vertical" class="container">
    <Header></Header>
    <el-container class="main">
      <!-- <el-container> -->
      <el-main>Main</el-main>
      <!-- </el-container> -->
    </el-container>
    <Footer></Footer>
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
