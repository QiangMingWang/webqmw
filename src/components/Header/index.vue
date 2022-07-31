<!--
 * @Founder: Mr.Qiang
 * @Date: 2022-07-31 14:05:54
 * @LastEditTime: 2022-07-31 14:38:13
 * @Description: No description yet
-->
<template>
  <el-header class="header">
    <div class="flex flex-wrap items-center myheader-btn">
      <el-dropdown trigger="click">
        <el-button type="primary">
          CSS<el-icon class="el-icon--right"><ArrowDown /></el-icon>
        </el-button>
        <!-- <HEader></HEader> -->
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
          JS<el-icon class="el-icon--right"><ArrowDown /></el-icon>
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
</template>

<script>

export default {
  name: 'Header'
}
</script>

<script></script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
