<template>
  <header class="header_wrap">
    <div class="header_nav" :style="{
      backgroundImage: img_dnf_bg,
      backgroundRepeat: 'no-repeat'
    }">
      <div class="shadow"
      :class="{
        shadow_active: changeState
      }"
       :style="{
        backgroundImage: img_bg_nav,
        backgroundRepeat: 'no-repeat'
      }">
        <my-nav
        @shadowState="showHide"
        :topLogo="img_sprite"
        :bg_shadow="img_bg_nav_hover"
        :bg_line='img_line'
        />
          <my-journalism />
        <my-main />
      </div>
    </div>
  </header>
</template>
<script>
import myNav from './nav/nav'
import myJournalism from './journalism/journalism'
import myMain from './mainIndex/mainIndex'
export default {
  created () {
    window.onscroll = () => {
      // if (!this.type) {
      //   this.type = (document.body.scrollTop || document.documentElement.scrollTop) >= 300
      // }
    }
  },
  components: {
    myNav,
    myJournalism,
    myMain
  },
  data () {
    return {
      img_dnf_bg: this.tool.getImgUrl('dnf_bg.jpeg'),
      img_bg_nav: this.tool.getImgUrl('bg_nav.png'),
      img_sprite: this.tool.getImgUrl('sprite.png'),
      img_bg_nav_hover: this.tool.getImgUrl('bg_nav_hover.png'),
      img_line: this.tool.getImgUrl('line.png'),
      changeState: false
    }
  },
  methods: {
    showHide (data) {
      this.changeState = data
    }
  }
}
</script>
<style lang="scss">
  @import '@/css/page/main.scss';
  .fade-enter-active, // 过渡进入执行时样式
  .fade-leave-active  // 过渡离开执行时样式
  {
    transition: opacity .5s;
  }
  .fade-enter,   // 过渡进入前样式
  .fade-leave-to // 过渡离开完成样式
  {
    opacity: 0;
  }
</style>
