<template>
    <div style="height:100%" >
      <my-title />
      <my-main />
      <my-footer />
      <my-versions />
      <my-advertising />
    </div>
</template>
<script>
import myTitle from './title/title'
import myMain from './main/main'
export default {
  components: {
    myTitle,
    myMain,
    myFooter: () => import('./footer/footer'),
    myVersions: () => import('./versions/versions'),
    myAdvertising: () => import('./advertising/advertising')
  }
}
</script>
