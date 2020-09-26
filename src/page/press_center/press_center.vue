<template>
  <div class="press_center">
    <my-title />
    <my-main >
      <my-main-content />
    </my-main>
    <my-footer />
  </div>
</template>
<script>
import myTitle from '@/page/public/top/header'
import myFooter from '@/page/public/bottom/index'
import myMain from './main'
import myMainContent from './content/press_list'
export default {
  components: {
    myTitle,
    myFooter,
    myMain,
    myMainContent
  }
}
</script>
