<template>
  <div class="c_right">
    <div class="slideshow">
      <div class="img_l">
        <my-advertising />
      </div>
      <div class="img_r">
        <my-ppt />
      </div>
    </div>
    <div class="article">
      <my-info />
    </div>
  </div>
</template>
<script>
import myAdvertising from './advertising/advertising'
import myPpt from './ppt/ppt'
import myInfo from './info/info'
export default {
  components: {
    myAdvertising,
    myPpt,
    myInfo
  }
}
</script>
<style lang="scss">
.c_right {
  height: 100%;
  width: 1166px;
  position: absolute;
  right: 0;
  top: 0;
  .slideshow {
    float: left;
    width: 686px;
    height: 100%;
    .img_l, .img_r {
    float: left;
      width: 343px;
      height: 100%;
    }
    .img_r{
        background-color: #0e97dc;
    }
  }
  .article {
    float: left;
    width: 480px;
    height: 100%;
    background-color: #fff;
  }
}
</style>
