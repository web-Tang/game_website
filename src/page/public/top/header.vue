<template>
  <header class="top_wrap">
    <div class="container">
      <div class="left">
        <a href="#" class="repair logo" :style="{
          backgroundImage: img_logo
        }"/>
        <div class="game font-position">
          <a href="#" class="repair">
            <img src="@/assets/image/jq_1.jpg" />
            <div class="bigImg tx_jq">
              <img src="@/assets/image/jq_2.jpg" alt />
            </div>
          </a>
        </div>
      </div>
      <div class="right">
        <div class="advertising">
          <a href="#" class="repair">
            <span
              class="icon"
              :style="{
              backgroundImage: img_title_sprite,
              backgroundPosition: '-35px -4px',
              backgroundRepeat: 'no-repeat',
              marginRight: '5px'
          }"
            />
            <span class="czsh_platform fontStyle">成长守护平台</span>
          </a>
        </div>
        <div class="ranking" @mouseenter="show" @mouseleave="hide">
          <a href="#" class="repair">
            <span class="tx_ranking">腾讯游戏排行榜</span>
            <span
              class="icon"
              :style="{
              backgroundImage: img_title_sprite,
              backgroundPosition: '-4px -4px',
              transform: 'rotate(90deg)'
          }"
            />
          </a>
          <my-ranking
            style="opacity:0;visibility:hidden"
            :class="{
            el_show: state
          }"
          />
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  components: {
    myRanking: () => import('./ranking/ranking')
  },
  data () {
    return {
      state: null,
      img_title_sprite: this.tool.getImgUrl('title_sprite.png'),
      img_logo: this.tool.getImgUrl('logo.png')
    }
  },
  methods: {
    show () {
      this.state = true
    },
    hide () {
      this.state = false
    }
  }
}
</script>
<style lang='scss'>
  @import '@/css/header/header.scss';
</style>
