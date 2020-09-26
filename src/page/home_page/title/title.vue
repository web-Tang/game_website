<template>
  <div class="content">
    <ul>
      <li class="li_left">
        <a href="javascript:" :style="{
            backgroundImage: img_dnf_aqzx
          }"/>
      </li>
      <li class="li_right">
        <ul>
          <li>
            <a href="javascript:">游戏下载</a>
          </li>
          <li>
            <a href="javascript:">充值点券</a>
          </li>
          <li>
            <a href="javascript:">开通黑钻</a>
          </li>
          <li class="return_web">
            <a href="javascript:" @click="returnHomePage">返回官网首页</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      img_dnf_aqzx: this.tool.getImgUrl('dnf_aqzx.png')
    }
  },
  methods: {
    returnHomePage () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss">
@import "@/css/page/title.scss";
</style>
