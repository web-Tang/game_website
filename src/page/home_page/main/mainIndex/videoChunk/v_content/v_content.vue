<template>
  <div class="v_content">
      <my-options-ui />
      <my-activity-msg :sprite="img_sprite"/>
  </div>
</template>
<script>
import myOptionsUi from './menu/menu'
import myActivityMsg from './particulars/particulars'
export default {
  data () {
    return {
      img_sprite: this.tool.getImgUrl('sprite.png')
    }
  },
  components: {
    myOptionsUi,
    myActivityMsg
  }
}
</script>
<style lang="scss">
.v_content {
  width: 100%;
  z-index: 1;
  .activity_options {
    float: left;
  }
  .particulars {
    float: right;
  }
  &::after {
    content: "";
    display: block;
    clear: both;
  }
}
</style>
