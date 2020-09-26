<template>
  <div
    class="c_left"
    :style="{
      backgroundImage: img_bg_sider_top,
      backgroundRepeat: 'no-repeat'
  }"
  >
    <div class="option_btn">
      <ul>
        <li>
          <a href="javascript:" class="downGame" title="下载游戏"></a>
        </li>
        <li>
          <a href="javascript:" class="QRcode" title="扫码下载"></a>
        </li>
        <li>
          <a href="javascript:" title="注册"></a>
          <a href="javascript:" title="充值"></a>
        </li>
        <li>
          <a href="javascript:" class="gift" title="新手礼包"></a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      img_bg_sider_top: this.tool.getImgUrl('bg-sider-top.png')
    }
  }
}
</script>
<style lang="scss">
.c_left {
  position: absolute;
  left: -14px;
  top: -8px;
  height: 439px;
  width: 254px;
  .option_btn {
    height: 100%;
    width: 240px;
    float: right;
    a {
      display: block;
      width: 100%;
      &.downGame {
        height: 155px;
      }
      &.QRcode {
        height: 133px;
      }
      &.gift {
        height: 95px;
      }
    }
    ul li:nth-of-type(3) {
      height: 56px;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
