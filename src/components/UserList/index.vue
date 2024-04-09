<template>
  <div class="containerUserList" :style="{ width: this.$props.width * 0.8 + 'px', }">
    <div :style="{ height: this.$props.height * 0.08 + 'px', lineHeight: this.$props.height * 0.07 + 'px' }" id="title">
      消息列表
    </div>
    <el-card shadow="hover" class="userListItem" :style="{ height: this.$props.height * 0.1 + 'px', padding: 0 }">
      <div class="avatar">
        <el-avatar shape="square" size="large" :src="squareUrl" class="avatarImg"></el-avatar>
      </div>
      <div class="msg">
        <div class="msgTitle">
          <span>消息标题</span>
        </div>
        <div class="msgContent">
          <span>消息内容</span>
        </div>
      </div>
    </el-card>
    <el-card shadow="hover" class="userListItem" :style="{ height: this.$props.height * 0.1 + 'px', padding: 0 }">
      <div class="avatar">
        <el-avatar shape="square" size="large" :src="squareUrl" class="avatarImg"></el-avatar>
      </div>
      <div class="msg">
        <div class="msgTitle">
          <span>消息标题</span>
        </div>
        <div class="msgContent">
          <span>消息内容</span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    height: Number,
    width: Number
  },
  data() {
    return {
      squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      sizeList: ["large", "medium", "small"]
    }
  }
}
</script>

<style scoped src="./index.css"></style>