<template>
  <div
  class="area_lunbo"
    @mouseleave="begin"
    @mouseenter="stop"
    >
    <ul
      class="main_area"
      >
      <li
        v-for="(item, index) in gg_list"
        :key="index"
        :class="{
        img_active: index === nowIndex,
        img_left: indexArr.indexOf(index) !== -1,
      }"
        :style="{
        zIndex: zindex (index)
      }"
      >
        <a href="javascript:">
          <img :src="require(`@/assets/image/${item}`)" alt />
        </a>
      </li>
    </ul>
    <div class="main_active">
      <span
        v-for="(item, index) in gg_list"
        :key="index"
        :class="{
        sActive:  index === nowIndex
      }"
        @mouseenter="cut(index)"
      />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      gg_list: null,
      nowIndex: 0,
      timer: null,
      indexArr: []
    }
  },
  mounted () {
    // 开启轮播
    this.executeFun()
  },
  created () {
    this.asyncData()
  },
  methods: {
    cut (i) {
      // 选中显示图片
      this.stop()
      this.nowIndex = i
      const arr = this.indexArr

      arr.indexOf(i) !== -1 && arr.splice(i)
      if (i !== 0) {
        let index = 0
        while (index < i) {
          if (arr.indexOf(index) === -1) {
            arr[index] = index
          }
          index++
        }
      }
    },
    stop () {
      // 停止轮播
      clearTimeout(this.timer)
      this.timer = null
    },
    begin () {
      // 开始轮播
      this.executeFun()
    },
    executeFun () {
      // 自动轮播
      this.timer = setTimeout(() => {
        this.indexArr.push(this.nowIndex)
        ++this.nowIndex
        if (this.nowIndex === this.gg_list.length) {
          this.nowIndex = 0
          this.indexArr = []
        }
        this.executeFun()
      }, 3000)
    },
    zindex (index) {
      const length = this.gg_list.length
      if (index === 0 || index === length - 1) {
        return length
      }
      return length - index
    },
    async asyncData () {
      this.gg_list = await this.tool.getAsyncData('lb_bg.json')
    }
  }
}
</script>
<style lang="scss">
.area_lunbo {
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  .main_area {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    li {
      position: absolute;
      left: 100%;
      top: 0;
      transition: left 0.2s;
      &.img_active {
        left: 0 !important;
      }
      &.img_left {
        left: -100% !important;
      }
      a,
      img {
        display: block;
      }
    }
  }
  .main_active {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 40px;
    z-index: 999;
    text-align: center;
    span {
      display: inline-block;
      width: 20px;
      height: 4px;
      border-radius: 2px;
      background-color: #ec4828;
      margin: 0 2px;
      cursor: pointer;
      &.sActive {
        background-color: #fff;
      }
    }
  }
}
</style>
