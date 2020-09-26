<template>
  <div class="menu">
    <div class="m_wrap">
      <img src="@/assets/image/bg-sider-quick.png" alt srcset />
      <div class="text_chunk">
        <ul class="dh">
          <li
            v-for="(item, index) in title"
            :key="index"
            @mouseenter="toggle(true, index)"
            @mouseleave="toggle(false)"
          >
            <a href="javascript:">{{item}}</a>
            <span
              :style="{
              backgroundImage:img_sprite,
              backgroundPosition:'-254px -114px'
            }"
            />
          </li>
        </ul>
        <my-chunk :arr="{
          'one': iconArr_one,
          'two': iconArr_two,
          'three': iconArr_three,
          'four': iconArr_four,
          'img': img_sprite_icon,
          'index': i,
          'type': type
          }" />
      </div>
    </div>
    <div class="prop">
      <h3>道聚城推荐</h3>
      <div class="dj_content">
        <div class="exhibits">
          <ul>
            <li v-for="(item, index) in dj_obj['data' + state]" :key="index">
              <img :src="getImgUrl(item.imgUrl)" alt srcset />
              <div class="e_msg">
                <b>{{item.title}}</b>
                <b>{{item.price}}点券</b>
                <a href="javascript:">立即购买</a>
              </div>
            </li>
          </ul>
        </div>
        <p>
          <span
            v-for="(item, index) in 5"
            :key="item"
            :style="{
            backgroundImage:img_sprite,
            backgroundPosition:'-316px -126px'
          }"
            :class="{
            active: state === index
          }"
            @mouseenter="changeState(index)"
          />
        </p>
      </div>
    </div>
    <div
      class="we_media"
      :style="{
        backgroundImage:img_sprite,
        backgroundPosition:'0 -126px'
      }"
    >
      <h3>合作媒体网站</h3>
      <ul>
        <li v-for="item in mediaArr" :key="item">{{item}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import myChunk from './chuank/chunk'
import objData from '@/data/dj_obj_data'
import { urlData } from '@/data/cooperation_name'
import newUIdata from '@/data/uiAllData'
export default {
  data () {
    return {
      img_bg_sider_quick: this.tool.getImgUrl('bg-sider-quick.png'),
      img_sprite: this.tool.getImgUrl('sprite.png'),
      img_sprite_icon: this.tool.getImgUrl('sprite-icon.png'),
      mediaArr: urlData,
      title: ['新手指南', '资料百科', '攻略视频', '自助服务'],
      dj_obj: objData,
      i: null,
      type: false,
      state: 0,
      iconArr_one: newUIdata.data.iconArr_one,
      iconArr_two: newUIdata.data.iconArr_two,
      iconArr_three: newUIdata.data.iconArr_three,
      iconArr_four: newUIdata.data.iconArr_four
    }
  },
  methods: {
    toggle (type, val) {
      if (type) {
        this.i = val
      }
      this.type = type
    },
    changeState (index) {
      this.state = index
    },
    getImgUrl (val) {
      return require('@/assets/image/' + val)
    }
  },
  components: {
    myChunk
  }
}
</script>
<style lang="scss">
.menu {
  width: 240px;
  float: left;
  .m_wrap {
    width: 240px;
    height: 310px;
    position: relative;
    img {
      display: block;
      position: absolute;
      left: -164px;
      top: 0;
    }
    .text_chunk {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      ul.dh {
        padding-top: 46px;
        li {
          width: 239px;
          height: 61px;
          line-height: 61px;
          text-align: center;
          cursor: pointer;
          position: relative;
          a {
            color: #ffc39e;
            font-size: 17px;
            font-weight: bold;
          }
          span {
            position: absolute;
            display: block;
            width: 14px;
            height: 16px;
            right: 10%;
            top: calc(50% - 8px);
          }
          &:hover {
            a {
              color: #fff;
            }
            span {
              background-position: -254px -95px !important;
            }
          }
        }
      }
    }
  }
  .prop {
    width: 240px;
    height: 287px;
    h3 {
      height: 36px;
      line-height: 36px;
      text-align: center;
      margin: 0 44px;
      padding-top: 20px;
      border-bottom: 1px solid #f0f0f0;
      color: #3e5566;
      font-size: 19px;
    }
    .dj_content {
      padding: 25px 0 0 32px;
    }
    p {
      padding-top: 5px;
      text-align: center;
      span {
        margin: 0 3px;
        vertical-align: middle;
        display: inline-block;
        width: 17px;
        height: 17px;
        cursor: pointer;
        &.active {
          background-position: -299px -126px !important;
        }
      }
    }
    ul li {
      margin-bottom: 15px;
      &::after {
        content: "";
        display: block;
        clear: both;
      }
      img {
        display: block;
        float: left;
        width: 67px;
        height: 67px;
        border-radius: 5px;
      }
      .e_msg {
        float: left;
        width: 128px;
        height: 66px;
        margin-left: 10px;
        b {
          display: block;
          font-size: 14px;
          &:first-of-type {
            font-weight: normal;
          }
          &:last-of-type {
            color: #ec4828;
          }
        }
        a {
          display: block;
          width: 75px;
          height: 26px;
          color: #fff;
          background-color: #ec4828;
          font-size: 14px;
          text-align: center;
          line-height: 26px;
        }
      }
    }
  }
  .we_media {
    margin-top: 20px;
    width: 240px;
    height: 56px;
    line-height: 56px;
    position: relative;
    h3 {
      font-size: 17px;
      font-weight: normal;
      color: #bbb;
      text-align: center;
    }
    ul {
      display: none;
      position: absolute;
      left: 0;
      top: 56px;
      width: 228px;
      height: 300px;
      line-height: 20px;
      border: 1px solid #e8e8e8;
      background-color: #fff;
      padding: 5px;
      overflow-y: scroll;
      z-index: 1;
      li {
        font-size: 12px;
        color: #bbb;
        cursor: pointer;
        &:hover {
          color: #000;
        }
      }
    }
    &:hover {
      ul {
        display: block;
      }
    }
  }
}
</style>
