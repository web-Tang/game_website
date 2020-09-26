<template>
  <li class="four_r">
    <div v-for="(item, index) in iconArr" :key="index">
      <h5>{{item.title}}</h5>
      <p>
        <a href="javascript:" v-for="(newItem, newIndex) in item.list" :key="newIndex">{{newItem}}</a>
      </p>
    </div>
  </li>
</template>
<script>
export default {
  props: ['iconArr']
}
</script>
