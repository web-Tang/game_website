<template>
  <div class="activity_wrap">
    <div class="bg">
      <my-bg-content/>
      <img class="bg_img" src="@/assets/image/p.png" alt="">
    </div>
  </div>
</template>
<script>
import myBgContent from './bg_content/bg_content'
export default {
  components: {
    myBgContent
  }
}
</script>
<style lang="scss">
.activity_wrap {
  background-color: #f0f0f0;
  width: 100%;
  .bg {
    width: 1440px;
    height: 445px;
    margin: 0 auto;
    position: relative;
    .bg_img{
      position: absolute;
      right: -340px;
      top: -90px;
      z-index:0;
    }
  }
}
</style>
