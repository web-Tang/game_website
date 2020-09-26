<template>
  <div
    class="area"
    :style="{
      backgroundImage: getNewUrl(imgUrl),
      backgroundRepeat: 'no-repeat',
      backgroundSize:'100% 100%'
  }"
  >
    <span :class="{
      top_three_active:imgId <= 3
    }">{{ imgId }}</span>
    <div class="option">
      <a href="#">进入官网</a>
      <a href="#">下载游戏</a>
    </div>
  </div>
</template>
<script>
export default {
  props: ['imgId', 'imgUrl'],
  data () {
    return {
      img_fifa: this.tool.getImgUrl('fifa.jpg')
    }
  },
  methods: {
    getNewUrl (url) {
      return this.tool.getImgUrl(url)
    }
  }
}
</script>
<style lang="scss">
@import "@/css/header/game.scss";
</style>
