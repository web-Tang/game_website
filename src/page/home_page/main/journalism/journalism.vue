<template>
  <div class="journalism">
    <div class="content">
      <j-left />
      <j-right />
    </div>
  </div>
</template>
<script>
import jLeft from './j_left/j_left'
import jRight from './j_right/j_right'
export default {
  components: {
    jLeft,
    jRight
  }
}
</script>
<style lang="scss">
.journalism {
  width: 100%;
  height: 431px;
  .content {
    height: 100%;
    width: 1440px;
    margin: 0 auto;
    position: relative;
  }
}
</style>
