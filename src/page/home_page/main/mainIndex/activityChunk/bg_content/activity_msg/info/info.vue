<template>
  <div class="act_info">
    <div class="i_title">
      <ul>
        <li
          v-for="(item, index) in titleData"
          :key="index"
          :class="{
              t_active: index === nowIndex
          }"
          @click="getIndex(index)"
          :data-type="item[1]"
        >
          <a href="javascript:">{{item}}</a>
          <span :style="{
              backgroundImage: img_sprite
          }"/>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      img_sprite: this.tool.getImgUrl('sprite.png'),
      titleData: ['热门推荐', '新手升级', '周常地下城', '商城特惠', '合作活动'],
      nowIndex: 0
    }
  },
  methods: {
    getIndex (i) {
      this.nowIndex = i
      this.$emit('indexVal', i)
    }
  }
}
</script>
<style lang="scss">
.act_info {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .i_title {
    width: 100%;
    height: 65px;
    font-size: 17px;
    font-weight: bold;
    ul {
      display: flex;
      border-top: solid 1px #e3e3e3;
      li {
        width: 20%;
        padding: 25px 0 17px;
        text-align: center;
        position: relative;
        cursor: pointer;
        a {
          color: #555555;
        }
        span {
          display: none;
          position: absolute;
          top: -4px;
          left: calc(50% - 83px / 2);
          width: 83px;
          height: 11px;
          background-position: -298px 0;
        }
        &.t_active {
          a {
            color: #ef4828;
          }
          span {
            display: block;
          }
        }
      }
    }
  }
}
</style>
