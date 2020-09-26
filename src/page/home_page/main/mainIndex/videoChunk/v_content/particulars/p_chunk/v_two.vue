<template>
  <div class="v_two">
    <div class="m_left">
      <div class="title">
        <h2>明星主播</h2>
        <div>
          <span>更多 +</span>
        </div>
      </div>
      <div class="nanchor_area">
        <ul>
          <li v-for="item in 2" :key="item">
            <div class="nan_content">
              <img src="@/assets/image/head_portrait.png" title="点击进入" />
              <h2>瞧你内熊样</h2>
              <p>
                <span :style="{
                  backgroundImage:sprite,
                  backgroundPosition:'-316px -11px'
                }"/>热度：{{heat}}
              </p>
              <a href="javascript:">
                {{Math.random() > 0.5 ? '已停播' : '直播中'}}
                <span :style="{
                  backgroundImage:sprite,
                  backgroundPosition:'-343px -91px'
                }"/>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="m_right">
      <div class="video_list">
        <div class="t_left">
          <p>
            <img src="@/assets/image/1242352346.jpeg" alt srcset />
          </p>
          <p>
            <img src="@/assets/image/412415234235345.png" alt srcset />
          </p>
          <ul>
            <li v-for="item in 3" :key="item">
              <a href="javascript:">未央幻境单人与组队优劣分析</a>
            </li>
          </ul>
        </div>
        <div class="t_right">
          <img src="@/assets/image/bg-mt.png" alt />
          <span>更多 +</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import myjson from '@/data/activity_list'
export default {
  props: ['sprite'],
  data () {
    return {
      dataArr: myjson.data[0]
    }
  },
  computed: {
    heat () {
      return this.tool.random(Math.pow(10, 6), Math.pow(10, 5))
    }
  }
}
</script>
<style lang="scss">
.v_two {
  width: 1166px;
  height: 350px;
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
        margin-right: 40px;
        margin-top: 3px;
        span {
          display: block;
          cursor: pointer;
          transition: all 0.3s;
          line-height: 24px;
          float: left;
          color: #999;
          font-size: 14px;
          text-align: center;
          background-color: #fff;
        }
      }
    }
    .nanchor_area {
      ul {
      display: flex;
      justify-content: space-between;
      li{
        width: 333px;
        height: 246px;
        float: left;
        background-color: rgba(0,0,0,.5);
        cursor: pointer;
      }
    }
    .nan_content{
      width: 100px;
      margin: 0 auto;
    }
    img{
      display: block;
      width: 90px;
      height: 90px;
      border: 4px solid #9b9594;
      border-radius: 50%;
      margin:30px 0 6px 0;
      &:hover{
        border-color: #ec4828;
      }
    }
    h2{
      color: #fff;
      font-size: 20px;
    }
    p{
      font-size: 12px;
      color: #cfcfcf;
      margin: 6px 0 15px 0;
      span{
        display: inline-block;
        width: 16px;
        height: 12px;
        margin-right: 5px;
        margin-bottom: 2px;
        vertical-align: text-bottom;
      }
    }
    a{
      display: block;
      width: 98px;
      height: 21px;
      font-size: 12px;
      color:#ec4828;
      text-align: center;
      line-height: 21px;
      background-color: #7c3b2e;
      border: 1px solid #874d3b;
      span{
        display: inline-block;
        width: 5px;
        height: 6px;
        margin-bottom: 2px;
        margin-left: 10px;
      }
    }
    }
  }
  .m_right {
    float: left;
    width: 480px;
    .video_list {
      margin-top: 80px;
      margin-left: 35px;
      position: relative;
      &::after {
        content: "";
        display: block;
        clear: both;
      }
      .t_left {
        ul {
          margin-top: 15px;
          li {
            line-height: 30px;
            a {
              display: block;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              color: #555;
              font-size: 14px;
              &:hover {
                color: #ec4828;
              }
            }
          }
        }
        img{
          cursor: pointer;
        }
      }
      .t_right {
        position: absolute;
        right: -100px;
        top: -47px;
        span {
          display: block;
          position: absolute;
          left: 25px;
          top: 210px;
          color: #999;
          font-size: 14px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
