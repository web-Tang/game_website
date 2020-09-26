<template>
  <div id="ad_wrap">
    <div
      class="hot_activity"
      :style="{
            backgroundImage:img_ract_bg,
            backgroundPosition:'0 -136px'
        }"
      @click="toggle = true"
    />
    <div
      class="hot_activity_img"
      :style="{
        backgroundImage:img_right_bottom,
    }"
      :class="{
        toggle: toggle
    }"
    >
      <span
        :style="{
            backgroundImage:img_ract_bg,
            backgroundPosition:'-159px -159px',
        }"
        @click="toggle = false"
      />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      img_ract_bg: this.tool.getImgUrl('ract_bg.png'),
      img_right_bottom: this.tool.getImgUrl('right_bottom.jpg'),
      toggle: false
    }
  }
}
</script>
<style lang="scss">
#ad_wrap {
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 999999;
  .hot_activity {
    width: 105px;
    height: 53px;
    position: absolute;
    right: 2px;
    bottom: 0;
    z-index: 50;
  }
  .hot_activity_img {
    width: 400px;
    height: 240px;
    position: relative;
    right: 2px;
    bottom: 0;
    z-index: 100;
    display: none;
    cursor: pointer;
    span {
      display: block;
      position: absolute;
      top: 2px;
      right: 2px;
      width: 30px;
      height: 30px;
      border: solid 1px;
      cursor: auto;
    }
    &.toggle {
      display: block;
    }
  }
}
</style>
