<template>
  <div class="main_wrap" :style="{
      backgroundImage: img_sy_bg
  }">
    <div class="main_content">
      <div class="main_skip">
        <a href="javascript:" title="查看详情"></a>
      </div>
      <div class="main_video">
        <my-video />
        <div class="main_web_btn" :style="{
            backgroundImage: img_base
        }">
          <ul>
            <li
              :class="{
              special:item === 1
            }"
              v-for="item in 4"
              :key="item"
            >
              <router-link :to="{ name:'homePage' }" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import myVideo from './video/video'
export default {
  components: {
    myVideo
  },
  data () {
    return {
      img_sy_bg: this.tool.getImgUrl('sy_bg.jpeg'),
      img_base: this.tool.getImgUrl('base.png'),
      change: false
    }
  },
  methods: {
    show () {
      this.change = true
    },
    hide () {
      this.change = false
    }
  }
}
</script>
<style lang="scss">
  @import '@/css/main/main.scss';
</style>
