<template>
  <ul>
    <li v-for="(item, index) in arr" :key="index">
      <my-icon
        :ui="newui"
        :name="item.title"
        :coord="{x: item.x, y: item.y}"
        :width="item.width"
        :height="item.height"
        :mTop="item.mTop"
      />
    </li>
  </ul>
</template>
<script>
import myIcon from '@/page/public/icon/icon'
export default {
  props: ['newui', 'arr'],
  components: {
    myIcon
  }
}
</script>
