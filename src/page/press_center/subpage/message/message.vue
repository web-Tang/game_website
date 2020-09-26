<template>
  <div class="message">
    <nav class="m_nav">
      <ul>
        <li
          @click="change(index) "
          v-for="(item, index) in titleArr"
          :key="index"
          :class="{
            active: (getType && item.type === getType) || (!getType && i == index),
          }"
        >
          {{ item.name }}
        </li>
      </ul>
    </nav>
    <div class="m_list">
      <ul>
        <li v-for="(item, index) in mes_list.data" :key="index">
          <a href="javascript:">{{ item.arr[0] }}</a>
          <a href="javascript:">{{ item.arr[1] }}</a>
          <span>[{{ item.spanText }}]</span>
        </li>
      </ul>
      <div class="choosePage">
        <a href="javascript:">下一页</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created () {
    console.log(this.$store.state.type)
  },
  computed: {
    getType () {
      return this.$store.state.type
    }
  },
  methods: {
    change (index) {
      console.log(1)
      this.i = index
      this.$store.state.type = null
    }
  },
  data () {
    return {
      state: true,
      i: 0,
      titleArr: [
        { name: '综合', type: 'zh' },
        { name: '新闻', type: 'xw' },
        { name: '公告', type: 'gg' },
        { name: '活动', type: 'hd' },
        { name: '赛事', type: 'ss' },
        { name: '攻略', type: 'gl' },
        { name: '版本', type: 'bb' },
        { name: '品牌', type: 'pp' }
      ],
      mes_list: {
        name: '新闻列表',
        data: [
          {
            spanText: '2020-08-14',
            arr: [
              '[电竞赛事]',
              '斗鱼PGL杯DNF中韩挑战赛，旭旭宝宝携众明星主播征战强者之路',
              'ss'
            ]
          },
          {
            spanText: '2020-07-24',
            arr: ['[其它]', '虎牙莽夫杯DNF中韩对抗赛将启 谁将成为最强莽夫？']
          },
          {
            spanText: '2020-04-17',
            arr: ['[格斗大赛]', 'DNF全国挑战赛启动：斗者无界，勇士集结']
          },
          {
            spanText: '2019-11-29',
            arr: ['[F1天王赛]', '中国选手再度登顶世界巅峰 F1天王赛圆满落幕']
          },
          {
            spanText: '2019-11-28',
            arr: ['[F1天王赛]', '决战就在今天 F1天王赛开启巅峰对决']
          },
          {
            spanText: '2019-11-27',
            arr: ['[DPL]', 'DNF《决战DPL》第一期：老仇上演一穿三AF好局']
          },
          {
            spanText: '2019-11-17',
            arr: ['[DPL]', 'DPL联赛总决赛圆满落幕 TCH、李灿赫荣耀夺冠']
          },
          {
            spanText: '2019-11-17',
            arr: ['[DPL]', 'DPL职业联赛决赛战报：李灿赫斩获PVP冠军']
          },
          {
            spanText: '2019-11-17',
            arr: ['[DPL]', 'DPL职业联赛决赛战报：TCH蝉联PVE冠军']
          },
          {
            spanText: '2019-11-17',
            arr: ['[DPL]', 'DPL联赛第三周第二个比赛日战果速递']
          },
          {
            spanText: '2019-11-16',
            arr: ['[DPL]', 'DPL联赛第三周首个比赛日战果速递']
          },
          {
            spanText: '2019-11-11',
            arr: ['[DPL]', '完美的赛场统御力 DPL联赛TCH战队介绍']
          },
          {
            spanText: '2019-11-11',
            arr: ['[DPL]', 'DPL联赛第二周第三个比赛日战果速递']
          },
          {
            spanText: '2019-11-10',
            arr: ['[DPL]', '一生宿敌实力强劲 DPL联赛沃克天团战队介绍']
          },
          {
            spanText: '2019-11-10',
            arr: ['[DPL]', 'DPL联赛第二周第二比赛日战果速递']
          },
          {
            spanText: '2019-11-09',
            arr: ['[DPL]', '大旭领衔精英之师 DPL好哥哥战队介绍']
          },
          {
            spanText: '2019-11-09',
            arr: ['[DPL]', 'DPL联赛第二周首个比赛日战果速递']
          },
          {
            spanText: '2019-11-08',
            arr: ['[DPL]', 'DPL决赛门票火热预售 购买门票更有代币券赠送']
          },
          {
            spanText: '2019-11-06',
            arr: ['[DPL]', '老牌劲旅锐不可当 DPL联赛胤必战队介绍']
          },
          {
            spanText: '2019-11-05',
            arr: ['[DPL]', '从爱好走向职业 DPL快扶我起来战队介绍']
          },
          {
            spanText: '2019-11-04',
            arr: ['[DPL]', 'DPL联赛第三比赛日战果速递']
          },
          {
            spanText: '2019-11-04',
            arr: ['[DPL]', '一鼓作气永不言败 DPL联赛晓战队介绍']
          },
          {
            spanText: '2019-11-03',
            arr: ['[DPL]', 'DPL联赛第二比赛日战果速递']
          },
          {
            spanText: '2019-11-03',
            arr: ['[DPL]', '勇于挑战注定不凡 DPL联赛SG战队介绍']
          },
          { spanText: '2019-11-02', arr: ['[DPL]', 'DPL联赛首日战果速递'] }
        ]
      }
    }
  }
}
</script>
<style lang="scss">
.m_nav {
  ul {
    border-left: solid 1px #e8e8e8;
    li {
      font-size: 14px;
      font-weight: bold;
      float: left;
      cursor: pointer;
      color: #333;
      padding: 10px 31px;
      border-right: solid 1px #e8e8e8;
      border-top: solid 1px #e8e8e8;
      border-bottom: solid 1px #e8e8e8;
      &.active {
        color: #fff;
        background-color: #ec4828;
        border: none;
      }
    }
    &::after {
      content: "";
      display: block;
      clear: both;
    }
  }
}
.m_list {
  padding-top: 10px;
  ul li {
    font-size: 14px;
    padding: 15px 10px;
    border-bottom: solid 1px #e8e8e8;
    a {
      color: #333;
      margin-right: 10px;
      &:hover {
        color: #ec4828;
      }
    }
    span {
      display: block;
      float: right;
      color: #999;
    }
  }
  .choosePage {
    padding: 50px 0;
    text-align: center;
    a {
      padding: 5px 10px;
      font-size: 12px;
      color: #666;
      display: inline-block;
      border-radius: 5px;
      border: solid 1px #ccc;
    }
  }
}
</style>
