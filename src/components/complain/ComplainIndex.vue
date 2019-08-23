<template>
  <div>
    <div
      style="position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 9999;
  background:rgba(255, 72, 74, 1);
  height:13rem;
  "
    >
      <a-row
        type="flex"
        justify="space-around"
        align="middle"
        style="height:4rem;color: white;background:rgba(255, 72, 74, 1);"
      >
        <a-col :span="4" style="text-align: left;">
          <my-history></my-history>
        </a-col>
        <a-col :span="16">
          <span style="font-size:2rem;">{{$t("index.complain")}}</span>
        </a-col>
        <a-col :span="4"></a-col>
      </a-row>
      <a-input
        type="search"
        placeholder=" 搜索"
        style="color:white;background:rgba(255, 109, 110, 1);margin: 1rem 2rem;border: 0;width: 80%;"
        @search="onSearch"
      />

      <a-menu
        theme="light"
        mode="horizontal"
        :defaultSelectedKeys="['1']"
        :style="{ lineHeight: '4rem',background:'rgba(255, 72, 74, 1)',color:'rgba(255, 195, 196, 1)'}"
      >
        <a-menu-item key="1">
          公司板块
          <router-link :to="{name:'c-Gongsi'}"></router-link>
        </a-menu-item>
        <a-menu-item key="2">个金板块</a-menu-item>
        <a-menu-item key="3">渠道运营</a-menu-item>
        <a-menu-item key="4">贷款板块</a-menu-item>
        <a-menu-item key="5">大客户板块</a-menu-item>
        <a-menu-item key="6">小客户板块</a-menu-item>
      </a-menu>
    </div>

    <div style="marginTop:13rem;">
      <router-view name="c" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ComplainIndex",
  data() {
    return {};
  },
  methods: {
    onSearch(value) {
      alert(value.target.value);
    }
  },
  created: function() {
    //初始板块
    this.$router.push({ name: "c-Gongsi", params: {} });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ant-menu-horizontal {
  border-bottom: 0;
}
.ant-menu-horizontal > .ant-menu-item:hover,
.ant-menu-horizontal > .ant-menu-submenu:hover,
.ant-menu-horizontal > .ant-menu-item-active,
.ant-menu-horizontal > .ant-menu-submenu-active,
.ant-menu-horizontal > .ant-menu-item-open,
.ant-menu-horizontal > .ant-menu-submenu-open,
.ant-menu-horizontal > .ant-menu-item-selected,
.ant-menu-horizontal > .ant-menu-submenu-selected {
  border-bottom: 2px solid white;
  color: white;
}

input::-webkit-input-placeholder {
  color: white;
  text-align: center;
}
input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: white;
  text-align: center;
}
input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: white;
  text-align: center;
}
input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: white;
  text-align: center;
}
</style>
