import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 导入路由的实例对象
import router from './router/index'

Vue.config.productionTip = false

Vue.use(ElementUI);
new Vue({
  render: h => h(App),
  // 注册路由信息
  router,
}).$mount('#app')
