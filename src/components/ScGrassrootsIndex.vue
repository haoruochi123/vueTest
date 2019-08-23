<template>
  <div>
    <a-row type="flex" justify="space-around" align="middle" class="table">
      <a-col :span="4" style="text-align: left;">
        <my-history></my-history>
      </a-col>
      <a-col :span="16">
        <img src="../assets/index/logo.png" width="50%" />
      </a-col>
      <a-col :span="4"></a-col>
    </a-row>

    <!-- 首页轮播 -->
    <a-carousel autoplay effect="fade">
      <div v-for="img in imgs">
        <img :src="img" width="100%" />
      </div>
    </a-carousel>

    <!-- <a-row type="flex" justify="space-around" align="middle" class="table">
      <a-col :span="12" style="height: 6rem;font-size: 2rem;" v-on:click="skipWorkHelp">
        <div class="button">
          <a-icon type="sound" theme="filled" />
          {{$t("index.workHlep")}}
        </div>
      </a-col>
      <a-col :span="12" style="height: 6rem;font-size: 2rem;" v-on:click="skipComplain">
        <div class="button">
          <a-icon type="dislike" theme="filled" />
          {{$t("index.complain")}}
        </div>
      </a-col>
    </a-row>-->

    <!-- <div style="text-align: left;">
      <div style="background-color:red;width:2rem;height:2rem;display: inline-block;"></div>
      <span style="font-size:1.5rem;margin-left:1rem;">{{$t("index.business")}}</span>
    </div>-->

    <br />
    <a-row type="flex" justify="start" align="middle">
      <a-col :span="2" style="text-align: left;background-color:rgba(255, 72, 74, 1); width:0.5rem;height:2rem;"></a-col>
      <a-col :span="22" style="text-align: left;">
        <span style="font-size:1.5rem;margin-left:1.5rem;">{{$t("index.business")}}</span>
      </a-col>
    </a-row>

    <a-row type="flex" justify="space-around" align="middle" class="table">
      <a-col :span="12">
        <div class="option" style="margin: 0rem 1rem 0rem 2rem;" v-on:click="skipWorkHelp">
          <img src="../assets/index/workHelp.png" width="30%" />
          <span>{{$t("index.workHlep")}}</span>
        </div>
      </a-col>
      <a-col :span="12">
        <div class="option" style="margin: 0rem 2rem 0rem 1rem;" v-on:click="skipComplain">
          <img src="../assets/index/complain.png" width="30%" />
          <span>{{$t("index.complain")}}</span>
        </div>
      </a-col>
    </a-row>

    <div class="footer">
      <a-icon type="user" style="fontSize:4rem; width:25%;" />
      <a-icon type="message" theme="filled" style="fontSize:4rem; width:25%;" />
      <a-icon type="like" theme="filled" style="fontSize:4rem; width:25%;" />
      <a-icon type="setting" theme="filled" style="fontSize:4rem; width:25%;" />
    </div>
  </div>
</template>

<script>
import api from "../api";
import client from "../client";
export default {
  name: "ScGrassrootsIndex",
  data() {
    return {
      imgs: [
        client.carousel_url + "1.jpg",
        client.carousel_url + "2.jpg",
        client.carousel_url + "3.jpg",
        client.carousel_url + "4.jpg"
      ]
    };
  },
  methods: {
    skipWorkHelp: function() {
      this.$router.push({ name: "WorkHelpIndex", params: {} });
    },
    skipComplain: function() {
      this.$router.push({ name: "ComplainIndex", params: {} });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 轮播 */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 16rem;
  line-height: 16rem;
  background: #364d79;
  overflow: hidden;
}
.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}

/* 固定页脚 */
.footer {
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 5rem;
  background-color: #eee;
  z-index: 9999;
  display: flex;
  /*实现垂直居中*/
  align-items: center;
  /*实现水平居中*/
  justify-content: center;
}

/* 首页选项 */
.table {
  background-color: white;
  height: 6rem;
}

/* 选项框样式 */
.option {
  border-style: solid;
  border-radius: 0.5rem;
  border-color: #f1e2e2;
}
.button {
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  /*实现垂直居中*/
  align-items: center;
  /*实现水平居中*/
  justify-content: center;
}
</style>
