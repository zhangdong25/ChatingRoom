<template>
  <div>
    <el-card class="loginCard">
      <div slot="header" class="clearfix radioGroup">
        <el-radio-group v-model="radioValue" class="radioGroup" text-color="#fed71a" fill="#000" radioValue>
          <el-radio-button label="登录"></el-radio-button>
          <el-radio-button label="注册"></el-radio-button>
        </el-radio-group>
      </div>
      <div class="loginForm" v-if="loginShow">
        <el-input placeholder="请输入用户名" prefix-icon="el-icon-user" style="margin-bottom:30px;" v-model="username"></el-input>
        <el-input placeholder=" 请输入密码" prefix-icon="el-icon-lock" style="margin-bottom:30px;" v-model="password" show-password></el-input>
        <el-button round style="width: 200px; background-color: #000; color: #fed71a; text-align: center;" @click="login">登录</el-button>
      </div>
      <div class="registerForm" v-else>
        <el-input placeholder="请输入用户名" prefix-icon="el-icon-user" style="margin-bottom:30px;" v-model="username"></el-input>
        <el-input placeholder="请输入密码" prefix-icon="el-icon-lock" style="margin-bottom:30px;" v-model="password" show-password></el-input>
        <el-input placeholder="请确认密码" prefix-icon="el-icon-lock" style="margin-bottom:30px;" v-model="passwordRight" show-password></el-input>
        <el-button type="info" round style="width: 200px; text-align: center;" @click="register('ruleForm')">注册</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import "./index.css"
import axios from 'axios';
export default {
  data() {
    return {
      userID: '',
      password: '',
      username: '',
      passwordRight: '',
      radioValue: '登录',
      // 用于显示登录和注册
      loginShow: true,
    }
  },
  methods: {
    register() {
      console.log("@@@");
      // 注册逻辑
      if (this.username === '') {
        this.$message.error('用户名不能为空！');
      } else if (this.password === '') {
        this.$message.error('请输入密码！');
      } else if (this.passwordRight === '') {
        this.$message.error('请确认密码！');
      } else if (this.password !== this.passwordRight) {
        this.$message.error('两次输入的密码不一致！');
      } else {
        // 注册成功逻辑
        axios.post('http://127.0.0.1/api/register', { username: this.username, password: this.password }, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(response => {
          console.log(response.data);
          this.userID = response.data.id;
          // 将本地存储中的userID设置为响应中的id
          localStorage.setItem('userID', this.userID);
          this.$message({
            message: '恭喜你，成功创建，自动登录中',
            type: 'success'
          });
          // 注册成功后自动登录
          // this.login();
        }).catch(error => {
          console.error(error);
        })
      }
    },
    login() {
      // 登录逻辑
      if (this.username === '') {
        this.$message.error('用户名不能为空！');
      } else if (this.password === '') {
        this.$message.error('请输入密码！');
      } else {
        // 信息不为空
        axios.post('http://127.0.0.1/api/login', { username: this.username, password: this.password }, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(response => {
          console.log(response.data);
          if (!response.data.data.exist) {
            this.$message.error('用户名或密码错误！');
          } else {
            this.userID = response.data.data.userID;
            // 将本地存储中的userID设置为响应中的id
            localStorage.setItem('userID', this.userID);
            this.$message({
              message: '登录成功',
              type: 'success'
            })
          }
        }).catch(error => {
          console.error(error);
        })
      }
    },
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

<style scoped></style>