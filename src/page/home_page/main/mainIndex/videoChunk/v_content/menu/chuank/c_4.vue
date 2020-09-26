<template>
  <div class="ul_four" :class="{
            active: i === 3
          }">
    <ul>
      <li class="four_l">
        <my-ui :arr="list.iconArr" :newui="img" />
      </li>
      <my-msg :iconArr="list.iconMsg" />
    </ul>
  </div>
</template>
<script>
import myUi from '../ui/ui'
import myMsg from '../msg/msg'
export default {
  props: ['list', 'img', 'i'],
  components: {
    myUi,
    myMsg
  }
}
</script>
