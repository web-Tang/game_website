<template>
  <div class="info">
    <div class="i_title">
      <ul>
        <li
          v-for="(item, index) in titleData"
          :key="index"
          :class="{
              t_active: index === nowIndex
          }"
          @mouseenter="getIndex(index, item[1], $event)"
          :data-type="item[1]"
        >
          <a href="javascript:">{{item[0]}}</a>
          <span :style="{
            backgroundImage: img_sprite
          }"/>
        </li>
      </ul>
    </div>
    <my-info-list :imgUrl="img_sprite" :xw_list="xw_list" />
  </div>
</template>
<script>
import myInfoList from './infoList/infoList'
import xwlist from '@/data/xw/xw_zh.json'
export default {
  components: {
    myInfoList
  },
  data () {
    return {
      img_sprite: this.tool.getImgUrl('sprite.png'),
      titleData: [['综合', 'zh'], ['公告', 'gg'], ['活动', 'hd'], ['攻略', 'gl'], ['赛事', 'ss']],
      xw_list: xwlist,
      dataList: {
        zh: xwlist
      },
      nowIndex: 0
    }
  },
  created () {
    this.$store.state.type = 'zh'
    this.asyncData()
  },
  methods: {
    getIndex (i, type, self) {
      this.nowIndex = i
      this.getData(type)
      this.setType(self)
    },
    setType (self) {
      this.$store.state.type = self.target.dataset.type
    },
    async getData (type) {
      if (!this.dataList[type]) {
        const data = await this.tool.getAsyncData(`xw_${type}.json`)
        this.dataList[type] = data
      }
      this.xw_list = this.dataList[type]
    },
    async asyncData () {
      this.xw_list = await this.tool.getAsyncData('xw_zh.json')
    }
  }
}
</script>
<style lang="scss">
.info {
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-sizing: border-box;
  padding: 0 30px;
  .i_title {
    width: 100%;
    height: 65px;
    font-size: 17px;
    font-weight: bold;
    ul {
      display: flex;
      border-bottom: solid 1px #f0f0f0;
      li {
        padding: 25px 0 17px;
        width: 84px;
        text-align: center;
        position: relative;
        cursor: pointer;
        a {
          color: #555555;
        }
        span {
          display: none;
          position: absolute;
          bottom: -9px;
          left: 0;
          width: 100%;
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
