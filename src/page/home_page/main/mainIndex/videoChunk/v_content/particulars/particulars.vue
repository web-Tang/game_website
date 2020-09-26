<template>
  <div class="particulars">
    <div class="activity_msg_new">
      <div class="m_left">
        <div class="title">
          <h2>视频推荐</h2>
          <div>
            <span>视频投稿</span>
            <span>逆转之轮</span>
          </div>
        </div>
        <my-title @indexVal="getIndex" />
        <my-table />
      </div>
      <div class="m_right">
        <div class="title">
          <h2>图文推荐</h2>
        </div>
        <div class="content">
          <div class="imges" v-for="(item, index) in [img_xz_68, img_xz_69]" :key="index" :style="{
            backgroundImage:item
          }">
            <div class="text_msg">
              <h1>助力神话加速毕业</h1>
              <p>这些地方稳定获取大量引导石</p>
              <p>
                <a
                  href="javascript:"
                  :style="{
                    backgroundImage:sprite,
                    backgroundPosition:'-496px -28px'
                  }"
                >查看</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <my-two :sprite="sprite"/>
    <my-three />
  </div>
</template>
<script>
import myTitle from './p_chunk/v_title'
import myTable from './p_chunk/v_list'
import myTwo from './p_chunk/v_two'
import myThree from './p_chunk/v_three'
import myjson from '@/data/activity_list'
export default {
  props: ['sprite'],
  data () {
    return {
      dataArr: myjson.data[0],
      img_xz_68: this.tool.getImgUrl('xz68.png'),
      img_xz_69: this.tool.getImgUrl('xz69.png')
    }
  },
  components: {
    myTitle,
    myTable,
    myTwo,
    myThree
  },
  methods: {
    getIndex (val) {
      this.dataArr = myjson.data[val]
      this.randomArr()
    },
    random (max, min) {
      return Math.floor(Math.random() * (max + 1 - min) + min)
    },
    getArrIndex () {
      const list = []
      const length = this.random(4, 1)
      for (let i = 0; i < length; i++) {
        list.push(this.random(14, 1))
      }
      return list
    },
    randomArr () {
      this.dataArr.forEach((val) => {
        val.time = this.random(5, 15)
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
.activity_msg_new {
  width: 1166px;
  height: 400px;
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
          width: 94px;
          height: 24px;
          line-height: 24px;
          border: solid 2px#f0f0f0;
          border-radius: 16px;
          float: left;
          color: #ec4828;
          font-size: 14px;
          text-align: center;
          margin-left: 10px;
          background-color: #fff;
          &:hover {
            transform: translateY(-5px);
          }
          &::after {
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
          &:hover::after {
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
    .content {
      width: 412px;
      height: 140px;
      margin-left: 35px;
      .imges {
        margin-bottom: 20px;
        width: 412px;
        height: 140px;
        cursor: pointer;
        .text_msg{
          padding-top: 20px;
          padding-left: 40px;
        }
        &:hover{
          a{
            border-color: #fff;
            color: #fff;
          }
        }
      }
      h1 {
        color: #fff;
        font-size: 22px;
      }
      p {
        margin-top: 15px;
        color: #b8b8b8;
        font-size: 16px;
      }
      a {
        display: block;
        width: 62px;
        height: 20px;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        color: #ec4828;
      }
    }
  }
}
</style>
