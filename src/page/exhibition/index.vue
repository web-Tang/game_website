<template>
  <div>
    <my-header />
    <my-main />
    <my-footer />
  </div>
</template>
<script>
import myHeader from './header/header'
import myMain from './main/main'
import myFooter from './footer/footer'
export default {
  components: {
    myHeader,
    myMain,
    myFooter
  }
}
</script>
