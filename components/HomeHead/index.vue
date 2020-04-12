<template>
  <div class="ley-nav">
    <div class="navHeader container">
      <nuxt-link to="/" class="logo"></nuxt-link>
      <ul class="listLink">
        <li>
          <nuxt-link to="/">首页</nuxt-link>
        </li>
      </ul>
      <!-- <div class="headerRight">
        <nuxt-link to="/"></nuxt-link>
        <a-divider type="vertical" />
        <nuxt-link to="/"></nuxt-link>
      </div> -->
    </div>
  </div>
</template>

<script></script>

<style scoped>
.navHeader .headerRight {
  float: right;
  line-height: 68px;
}
.navHeader .headerRight a {
  color: #ffd12f;
  font-weight: bold;
}
.navHeader .headerRight a:hover {
  color: #fff;
}
.navHeader .headerRight button:hover {
  color: #fff;
  background: #f89174;
}
.navHeader .ant-divider {
  width: 2px;
  background: #ffd12f;
}
.navHeader .logo {
  float: left;
  width: 138px;
  height: 68px;
  background: url('../../assets/img/logo.png') no-repeat center;
  background-size: 140px 38px;
}
.navHeader .listLink {
  list-style: none;
}
.navHeader .listLink li a {
  float: left;
  font-weight: bold;
  font-size: 17px;
  line-height: 68px;
  margin-left: 30px;
  cursor: pointer;
  color: #ffd12f;
}
.navHeader .listLink li a:hover {
  color: #fff;
}
</style>
