<!--
 * @Founder: Mr.Qiang
 * @Date: 2022-07-31 14:26:50
 * @LastEditTime: 2022-07-31 15:22:35
 * @Description: No description yet
-->
<template>
  <el-footer>
    <ul class="footer-container-ul">
      <li class="footer-container-ul-li">
        <img
          class="footer-container-ul-li-img"
          src="../../../public/ba.png"
          alt=""
        />
        <a href="http://beian.miit.gov.cn/" target="_blank"
          >豫公网安备41071102000558号</a
        >
      </li>
      <li class="footer-container-ul-li">
        <a href="http://beian.miit.gov.cn/" target="_blank"
          >豫ICP备2022005431号</a
        >
      </li>
    </ul>
  </el-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>

.el-footer {
  width: 100%;
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.footer-container a {
  color: #387edb;
}
.footer-container-ul-li {
  height: 30px;
  line-height: 30px;
  text-align: center;
}

.footer-container-ul-li-img {
  vertical-align: middle;
}
</style>
