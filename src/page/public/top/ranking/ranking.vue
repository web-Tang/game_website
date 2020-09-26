<template>
  <div>
    <div class="pm_wrap">
      <div v-for="(value, vIndex) in titleList" :key="vIndex" class="pm_wrap_1">
        <a href="#">
          <p>
            {{ value.titleName }}
            <span>&gt;</span>
          </p>
        </a>
        <ul>
          <li
            v-for="(item, iIndex) in value.dataList"
            :key="iIndex"
            :class="{
              active: value.domId == item.id
            }"
            @mouseenter="show(vIndex, item.id)"
          >
            <div class="ranking_css">
              <span
                class="ranking_num"
                :class="{
                  top_three: item.ranking <= 3
                }"
              >{{item.ranking}}</span>
              {{item.name}}
            </div>
            <my-game :imgId="item.ranking" :imgUrl="item.imgUrl" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import myGame from './game'
export default {
  data () {
    return {
      titleList: null
    }
  },
  created () {
    this.asyncData()
  },
  methods: {
    show (iIndex, index) {
      this.titleList[iIndex].domId = index
    },
    async asyncData () {
      this.titleList = await this.tool.getAsyncData('gameData.json')
      this.titleList.forEach(val => {
        val.domId = val.dataList[0].id
      })
    }
  },
  components: {
    myGame
  }
}
</script>
<style lang='scss'>
@import "@/css/header/header_index.scss";
</style>
