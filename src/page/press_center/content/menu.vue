<template>
  <div class="menu_top">
    <h4>{{list.title}}</h4>
    <ul>
      <li v-for="item in list.data" :key="item.x">
        <span
          :style="{
            backgroundImage:UI,
            backgroundPosition:`${item.x}px ${item.y}px`
          }"
        />
        <em>{{item.title}}</em>
        <span class="wire"></span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['list', 'UI']
}
</script>
<style lang="scss">
.menu_top {
  h4 {
    font-size: 14px;
    color: #3e5566;
    text-align: center;
    height: 36px;
    line-height: 36px;
    border-bottom: solid 1px #f0f0f0;
    margin: 0 10px;
  }
  ul {
    padding: 10px 0;
    overflow: hidden;
    li {
      width: 33%;
      float: left;
      color: #8b9298;
      font-size: 12px;
      margin: 10px 0;
      cursor: pointer;
      text-align: center;
      em {
        font-style: normal;
      }
      span:first-of-type {
        display: block;
        width: 31px;
        height: 30px;
        margin: 0 auto 5px;
        transition: transform 0.3s;
      }
      span:last-of-type {
        display: block;
        margin: 0 5px;
        height: 4px;
        background-color: #ec4828;
        transition: all 0.3s;
        transform: scaleX(0);
      }
      &:hover {
        color: #ec4828 !important;
        font-weight: bold;
        span:last-of-type {
          transform: scaleX(1);
        }
        span:first-of-type {
          background-position-y: -212px !important;
          transform: translateY(-5px);
        }
      }
    }
  }
}
</style>
