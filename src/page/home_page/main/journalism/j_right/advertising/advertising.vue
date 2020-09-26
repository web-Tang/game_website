<template>
  <a href="javascript:" class="gg">
    <img src="@/assets/image/girl_jd.jpeg" />
    <div class="mask_layer">
      <div class="tent">
        <h3>云上长安战未央</h3>
        <h4>单人可玩！全新属性飞升副本，多重机制，全新挑战！</h4>
        <p>
          查看
          <span
            :style="{
                backgroundImage: img_sprite
            }"
          />
        </p>
      </div>
    </div>
  </a>
</template>
<script>
export default {
  data () {
    return {
      img_sprite: this.tool.getImgUrl('sprite.png')
    }
  }
}
</script>
<style lang="scss">
.gg {
  display: block;
  height: 431px;
  position: relative;
  color: #fff;
  text-align: center;
  &:hover p {
    background-color: #af3b26;
    color: #fff !important;
    span {
      background-position: -399px -126px !important;
    }
  }
  .mask_layer {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
    .tent {
      position: absolute;
      left: 0;
      top: 50%;
      margin-top: -15px;
      width: 100%;
      h3 {
        font-size: 22px;
      }
      h4 {
        margin: 8px 0 44px;
        font-weight: normal;
      }
      p {
        color: #ec4828;
        font-size: 12px;
        width: 146px;
        height: 36px;
        margin: 0 auto;
        line-height: 36px;
        span {
          display: inline-block;
          width: 24px;
          height: 24px;
          vertical-align: middle;
          background-repeat: no-repeat;
          background-position: -372px -126px;
        }
      }
    }
  }
}
</style>
