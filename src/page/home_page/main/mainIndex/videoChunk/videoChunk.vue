<template>
  <div class="videoChunk_wrap">
    <div class="video_wrap">
      <my-bg-content/>
      <my-history-msg/>
    </div>
  </div>
</template>
<script>
import myBgContent from './v_content/v_content'
import myHistoryMsg from './mode/mode'
export default {
  components: {
    myBgContent,
    myHistoryMsg
  }
}
</script>
<style lang="scss">
.videoChunk_wrap {
  margin-top: 22px;
  width: 100%;
  .video_wrap{
    width: 1440px;
    height: 1300px;
    margin: 0 auto 60px;
  }
}
</style>
