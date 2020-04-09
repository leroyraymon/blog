<template>
  <a-config-provider :locale="locale">
    <a-layout>
      <a-layout-header>
        <home-head></home-head>
      </a-layout-header>
      <a-layout class="content">
        <a-layout-content>
          <nuxt></nuxt>
          <a-back-top />
        </a-layout-content>
      </a-layout>
      <a-layout-footer>
        <home-footer></home-footer>
      </a-layout-footer>
    </a-layout>
  </a-config-provider>
</template>

<script>
import HomeHead from "@/components/HomeHead/index";
import HomeFooter from "@/components/HomeFooter/index";
import zhCN from 'ant-design-vue/es/locale/zh_CN';
export default {
  transition: "page",
  components: { HomeHead, HomeFooter },
  data() {
    return {
      locale: zhCN,
    };
  }
};
</script>

<style scoped>
.content {
  background: #a8c2a4 url('../assets/img/pagebg.jpg') no-repeat center;
}
.ant-layout-header {
  position: fixed;
  z-index: 1009;
  padding: 0;
  width: 100%;
}
.ant-layout-content {
  width: 1180px;
  margin: 0 auto;
  padding: 90px 0 0 0;
  min-height: 90em;
}
.ant-back-top {
  bottom: 120px;
}
::v-deep .ant-back-top-content {
  height: 40px;
  width: 40px;
  line-height: 40px;
  border-radius: 4px;
}
.ant-layout-footer {
  background-color: #455a64;
}
</style>
