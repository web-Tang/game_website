<template>
  <div class="activity_msg">
    <div class="m_left">
      <div class="title">
        <h2>活动中心</h2>
        <div>
          <span
            :style="{
              backgroundImage:sprite,
              backgroundPosition:'-402px 0'
            }"
          />
          <span>活动中心</span>
        </div>
      </div>
      <my-info @indexVal="getIndex" />
      <my-table :arr="dataArr" />
    </div>
    <div class="m_right">
      <div class="title">
        <h2>热门活动</h2>
      </div>
      <div class="content">
        <div class="imges" v-for="item in 2" :key="item">
          <img :src="getRequireUrl(item)" alt="" srcset="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import myInfo from './info/info'
import myTable from './commodity_table/commodity_table'
import myjson from '@/data/activity_list'
export default {
  props: ['sprite'],
  data () {
    return {
      dataArr: myjson.data[0]
    }
  },
  components: {
    myInfo,
    myTable
  },
  methods: {
    getRequireUrl (val) {
      return require(`@/assets/image/gg${val}.jpeg`)
    },
    getIndex (val) {
      this.dataArr = myjson.data[val]
      this.randomArr()
    },
    getArrIndex () {
      const list = []
      const length = this.tool.random(4, 1)
      for (let i = 0; i < length; i++) {
        list.push(this.tool.random(14, 1))
      }
      return list
    },
    randomArr () {
      this.dataArr.forEach((val) => {
        val.time = this.tool.random(15, 5)
        val.numArr = this.getArrIndex()
      })
    }
  },
  created () {
    this.randomArr()
  }
}
</script>
<style lang="scss">
.activity_msg {
  width: 1166px;
  height: 445px;
  .m_left {
    width: 686px;
    float: left;
    .title {
      padding: 29px 0 20px 25px;
      overflow: hidden;
      h2 {
        font-weight: normal;
        color: #49657a;
        float: left;
      }
      & > div {
        float: right;
        margin-right: 20px;
        margin-top: 3px;
        span {
          display: block;
          cursor: pointer;
          transition: all 0.3s;
          &:hover {
            transform: translateY(-5px);
          }
          &:first-of-type {
            width: 77px;
            height: 28px;
            float: left;
          }
          &:last-of-type {
            width: 94px;
            height: 24px;
            line-height: 24px;
            border: solid 2px #fff;
            border-radius: 16px;
            float: right;
            color: #ec4828;
            font-size: 14px;
            text-align: center;
            margin-left: 10px;
            background-color: #f0f0f0;
          }
          &:last-of-type::after,
          &:first-of-type::after {
            content: "";
            position: absolute;
            bottom: -10px;
            left: 10px;
            right: 10px;
            z-index: -1;
            display: inline-block;
            height: 10px;
            background: radial-gradient(
              ellipse at center,
              rgba(0, 0, 0, 0.35) 0%,
              transparent 80%
            );
            text-align: center;
            border-radius: 50%;
            opacity: 0;
            transition: all 0.3s;
          }
          &:last-of-type:hover::after,
          &:first-of-type:hover::after {
            opacity: 1;
            transform: translateY(5px);
          }
        }
      }
    }
  }
  .m_right {
    float: left;
    width: 480px;
    .title {
      padding: 29px 0 20px 55px;
      overflow: hidden;
      h2 {
        font-weight: normal;
        color: #49657a;
      }
    }
    .content{
      width: 445px;
      height: 340px;
      margin-left: 35px;
      .imges{
        overflow: hidden;
        margin-bottom: 20px;
        width: 412px;
        height: 160px;
        cursor: pointer;
        img{
          transition: transform .3s;
          &:hover{
            transform: scale(1.1);
          }
        }
      }
    }
  }
}
</style>
