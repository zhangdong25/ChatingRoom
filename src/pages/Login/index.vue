<template>
  <div>
    <el-card class="loginCard">
      <div slot="header" class="clearfix radioGroup">
        <el-radio-group v-model="radioValue" class="radioGroup" text-color="#FFD600" fill="#000" radioValue>
          <el-radio-button label="登录"></el-radio-button>
          <el-radio-button label="注册"></el-radio-button>
        </el-radio-group>
      </div>
      <div class="loginForm" v-if="loginShow">
        <el-input placeholder="请输入用户名" prefix-icon="el-icon-user" style="margin-bottom:30px;" v-model="username"></el-input>
        <el-input placeholder=" 请输入密码" prefix-icon="el-icon-lock" style="margin-bottom:30px;" v-model="password" show-password></el-input>
        <el-button type="success">登录</el-button>
      </div>
      <div class="registerForm" v-else>
        <el-input placeholder="请输入用户名" prefix-icon="el-icon-user" style="margin-bottom:30px;" v-model="username"></el-input>
        <el-input placeholder="请输入密码" prefix-icon="el-icon-lock" style="margin-bottom:30px;" v-model="password" show-password></el-input>
        <el-input placeholder="请确认密码" prefix-icon="el-icon-lock" style="margin-bottom:30px;" v-model="passwordRight" show-password></el-input>
        <el-button type="info">注册</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import "./index.css"
export default {
  data() {
    return {
      radioValue: '登录',
      password: '',
      username: '',
      passwordRight: '',
      // 用于显示登录和注册
      loginShow: true
    }
  },
  watch: {
    radioValue(newValue, oldValue) {
      console.log(`radioValue的变化: 旧值是 ${oldValue}, 新值是 ${newValue}`);
      if (newValue === '注册') {
        this.loginShow = false;
      } else {
        this.loginShow = true;
      }
    }
  }
}
</script>

<style scoped>
/* 你的自定义样式 */
.el-radio__label {
  color: red;
  /* 举例：将文本颜色改为红色 */
}

.el-radio__inner {
  border-color: blue;
  /* 举例：将边框颜色改为蓝色 */
}

.el-radio__icon {
  font-size: 20px;
  /* 举例：增加图标大小 */
}
</style>