<template>
  <div class="container">
    <div class="containerBox">
      <el-container style="height: 100%;">
        <el-aside width="300px" ref="container" style="overflow: visible;">
          <MyNav :height=height :width=width></MyNav>
          <UserList :height=height :width=width></UserList>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
import MyNav from '@/components/MyNav'
import UserList from '@/components/UserList'
export default {
  components: {
    MyNav,
    UserList
  },
  data() {
    return {
      height: 0,
      width: 0
    }
  },
  mounted() {
    console.log(this.$refs.container.$el.offsetHeight);
    console.log(this.$refs.container.$el.offsetWidth);
    this.height = this.$refs.container.$el.offsetHeight;
    this.width = this.$refs.container.$el.offsetWidth;
    console.log(this.height);
    console.log(this.width);
  }

}
</script>

<style scoped src="./index.css"></style>