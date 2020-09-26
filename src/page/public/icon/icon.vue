<template>
  <div class="n_icon">
    <span
      :style="{
        width: width + 'px' || '31px',
        height: height + 'px' || '30px',
        marginTop: mTop + 'px' || '0px',
        backgroundImage: ui,
        backgroundPosition:`${coord.x}px ${coord.y}px`
      }"
    />
    <em>{{name}}</em>
    <i v-if="type"/>
  </div>
</template>
<script>
export default {
  props: ['ui', 'name', 'coord', 'type', 'width', 'height', 'mTop']
}
</script>
<style lang="scss">
.n_icon {
  color: #333;
  font-size: 12px;
  width: 104px;
  text-align: center;
  cursor: pointer;
  em {
    font-style: normal;
  }
  span {
    display: block;
    width: 31px;
    height: 30px;
    margin: 0 auto 5px;
    transition: transform 0.3s;
  }
  i {
    display: block;
    margin: 0 auto;
    height: 4px;
    width: calc(100% / 2);
    background-color: #ec4828;
    transition: all 0.3s;
    transform: scaleX(0);
  }
  &:hover {
    color: #ec4828 !important;
    font-weight: bold;
    span {
      background-position-y: -33px !important;
      transform: translateY(-5px);
    }
    i {
      transform: scaleX(1);
    }
  }
}
</style>
