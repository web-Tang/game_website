<template>
  <header class="header_wrap">
    <div class="header_nav" :style="{
      backgroundImage: img_dnf_bg,
      backgroundRepeat: 'no-repeat'
    }">
      <div class="shadow shadow_active"
       :style="{
        backgroundImage: img_bg_nav,
        backgroundRepeat: 'no-repeat'
      }">
        <my-nav
        :topLogo="img_sprite"
        :bg_shadow="img_bg_nav_hover"
        :bg_line='img_line'
        />
      </div>
      <slot />
    </div>
  </header>
</template>
<script>
import myNav from './top_nav/nav'
export default {
  components: {
    myNav
  },
  data () {
    return {
      img_dnf_bg: this.tool.getImgUrl('dnf_bg.jpeg'),
      img_bg_nav: this.tool.getImgUrl('bg_nav.png'),
      img_sprite: this.tool.getImgUrl('sprite.png'),
      img_bg_nav_hover: this.tool.getImgUrl('bg_nav_hover.png'),
      img_line: this.tool.getImgUrl('line.png')
    }
  }
}
</script>
<style lang="scss">
  @import '@/css/page/main.scss';
</style>
