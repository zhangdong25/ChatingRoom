<template>
  <div class="containerMyNav" ref="box1" :style="{ height: this.$props.height + 'px', width: this.$props.width * 0.2 + 'px', padding: 0 }">
    <el-menu default-active="1" ref="box2" background-color="#000" :style="{ height: this.$props.height + 'px', padding: 0, borderRadius: '20px 0 0 20px' }" :collapse=collapse>
      <el-menu-item index="1" style="border-radius: 20px 0 0 20px;">
        <i class="el-icon-location"></i>
        <!-- <span slot="title">导航1</span> -->
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <!-- <span slot="title">导航二</span> -->
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <!-- <span slot="title">导航三</span> -->
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <!-- <span slot="title">导航四</span> -->
      </el-menu-item>
    </el-menu>
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
      collapse: true,
      navHeight: 0,
      navWidth: 0,
      hasProps: false
    }
  },
  mounted() {
    console.log(this.$refs.box1);
    console.log('@w' + this.$refs.box1.offsetWidth);
    console.log(this.$refs.box2.$el);
  }
}
</script>

<style scoped src="./index.css"></style>