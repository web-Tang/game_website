<template>
  <div class="mode">
    <div class="site">
      <ul>
        <li :style="{
            backgroundImage:img_bg_pp1
        }">
          <h3>世界观设定站</h3>
          <p>探访赫尔德的密室</p>
        </li>
        <li :style="{
            backgroundImage:img_bg_pp2
        }">
          <h3>国创·新篇</h3>
          <p>平行阿拉德</p>
        </li>
        <li :style="{
            backgroundImage:img_bg_pp3
        }">
          <h3>官方动画第二季</h3>
          <p>开播中</p>
        </li>
      </ul>
    </div>
    <div class="former">
      <ul>
        <li v-for="item in 3" :key="item" :style="{
            backgroundImage:item==typeIndex ? bg_btn_hover: img_bg_btn
        }"
        @mouseenter="toggle(item)"
        @mouseleave="toggle"
        />
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      img_bg_btn: this.tool.getImgUrl('bg-btn.png'),
      bg_btn_hover: this.tool.getImgUrl('bg-btn-hover.png'),
      img_bg_pp1: this.tool.getImgUrl('bg_pp1.png'),
      img_bg_pp2: this.tool.getImgUrl('bg_pp2.png'),
      img_bg_pp3: this.tool.getImgUrl('bg_pp3.png'),
      typeIndex: null
    }
  },
  methods: {
    toggle (val) {
      this.typeIndex = val
    }
  }
}
</script>
<style lang="scss">
.mode {
  margin-top: 10px;
  width: 100%;
  &::after {
    content: "";
    display: block;
    clear: both;
  }
  .site {
    width: 920px;
    float: left;
        margin-top: 40px;
    ul {
      display: flex;
      justify-content: space-around;
      li {
        width: 286px;
        height: 268px;
        color: #45697a;
        cursor: pointer;
        h3 {
          padding-top: calc(50% - 40px);
          text-align: center;
          font-size: 24px;
        }
        p {
          padding-top: 10px;
          text-align: center;
          font-size: 14px;
        }
      }
    }
  }
  .former {
    float: right;
    ul li {
      width: 420px;
      height: 121px;
      z-index: 1;
      cursor: pointer;
      &:nth-of-type(2) {
        height: 104px;
        background-position: 0px -122px;
        z-index: 2;
        margin-top: -15px;
      }
      &:nth-of-type(3) {
        height: 94px;
        background-position: 0 -228px;
        z-index: 3;
        margin-top: -5px;
      }
    }
  }
}
</style>
