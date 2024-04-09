// 配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用插件
Vue.use(VueRouter)

// 引入路由组件
import Home from '../pages/Home/index';
import Login from '../pages/Login/index';
import UserList from '../components/UserList/index';

// 先把VueRouter原型对象的push方法保存一份
let originPush = VueRouter.prototype.push;

// 重写push|repalce方法
// 第一个参数：告诉原来的push方法，跳转目标
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    // call||apply
    // 相同点：都可以调用函数一次，并且修改函数上下文一次
    // 不同点：call和apply传递参数用逗号隔开，apply方法执行，传递数组
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, () => { }, () => { })
  }
}


// 配置路由
export default new VueRouter({
  // 所有路由
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/userlist',
      name: 'UserList',
      component: UserList
    },
    {
      path: '/',
      redirect: '/login'
    }
  ]
})