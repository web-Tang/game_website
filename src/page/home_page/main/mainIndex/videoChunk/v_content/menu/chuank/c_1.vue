<template>
  <div class="ul_one" :class="{
    active: i === 0
  }">
    <my-ui :arr="list" :newui="img" />
  </div>
</template>

<script>
import myUi from '../ui/ui'
export default {
  props: ['list', 'img', 'i'],
  components: {
    myUi
  }
}
</script>
