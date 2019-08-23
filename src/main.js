import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import VueI18n from 'vue-i18n'
import axios from 'axios'
import VueAxios from 'vue-axios'
import History from './tool/History'

//使用ant组件
Vue.use(Antd)

//使用自定义国际化
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'zh',// 语言标识
  messages: {
    'zh': require('./common/lang/zh'),
    'en': require('./common/lang/en')
  }
});

//使用axios和后台交互，跨域
Vue.use(VueAxios, axios)
//统一错误处理
Vue.prototype.$axios = axios
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {

    if (error.response.data.message) {
      Vue.prototype.$message.info(error.response.data.message);
    }
    return;
  });



//注册自定义历史组件
Vue.component('my-history', History);

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
  i18n
}).$mount('#app')
