<template>
  <div class="commodity_table">
    <div class="table_title">
      <span>活动名称</span>
      <span>主要奖励</span>
      <span>结束时间</span>
    </div>
    <msg-list :arr="arr" />
  </div>
</template>
<script>
import msgList from './msg_list/msg_list'
export default {
  props: ['arr'],
  components: {
    msgList
  }
}
</script>
<style lang="scss">
.table_title {
  height: 42px;
  width: 686px;
  background-color: #fff;
  margin: 13px auto;
  span {
    display: inline-block;
    width: 25%;
    height: 42px;
    line-height: 42px;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    color: #555;
  }
}
</style>
