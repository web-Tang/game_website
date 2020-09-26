<template>
  <div class="bg_content">
    <div class="activity_options">
      <my-options-ui :UI="img_sprite" :list="optionArr[0]" />
      <my-options-ui :UI="img_sprite" :list="optionArr[1]" />
    </div>
    <div class="particulars">
      <my-activity-msg :sprite="img_sprite" />
    </div>
  </div>
</template>
<script>
import { arr } from '@/assets/data/uiData.json'
export default {
  data () {
    return {
      img_sprite: this.tool.getImgUrl('sprite.png'),
      optionArr: arr
    }
  },
  components: {
    myOptionsUi: () => import('./optionsUi/optionsUi'),
    myActivityMsg: () => import('./activity_msg/activity_msg')
  }
}
</script>
<style lang="scss">
.bg_content {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  .activity_options {
    float: left;
    transform: translateY(-20px);
    width: 228px;
    height: 475px;
    border: solid 6px #bbb;
    background-color: #fff;
  }
  .particulars {
    float: right;
  }
  &::after {
    content: "";
    display: block;
    clear: both; /*清除浮动*/
  }
}
</style>
