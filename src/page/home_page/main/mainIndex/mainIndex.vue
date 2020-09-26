<template>
  <div id="main">
      <my-activity-chunk/>
      <my-video-chunk/>
  </div>
</template>
<script>
import myActivityChunk from './activityChunk/index'
import myVideoChunk from './videoChunk/videoChunk'
export default {
  components: {
    myActivityChunk,
    myVideoChunk
  }
}
</script>
<style lang="scss">
  #main{
    margin-top: 40px;
  }
</style>
