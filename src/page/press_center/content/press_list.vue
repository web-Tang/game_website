<template>
  <div class="press_list">
    <div class="center">
      <div class="introduce">
        <div class="wx">
          <h4>DNF官方APP</h4>
          <p>
            <img src="@/assets/image/weixin.jpg" alt />
          </p>
        </div>
        <div class="p_menu">
          <my-menu :UI="img_sprite" :list="optionArr" />
        </div>
      </div>
      <div class="newsList">
        <div class="list_title">
          <ul>
            <li>
              <i
                :style="{
                  backgroundImage: img_sprite_icon,
                  backgroundPosition: '-297px -71px',
                }"
              />
              <i
                :style="{
                  backgroundImage: img_sprite_icon,
                  backgroundPosition: '-368px -131px',
                }"
              />
            </li>
            <li>
              <p>您所在的位置： 首页 > 新闻中心</p>
            </li>
          </ul>
        </div>
        <div class="press">
          <keep-alive>
            <component :is="page"></component>
          </keep-alive>
        </div>
      </div>
    </div>
    <div class="returnTop" @click="returnTop" :style="{
      backgroundImage:img_sprite_icon,
      backgroundPosition:'-626px -102px'
    }"/>
  </div>
</template>
<script>
import myArticle from '../subpage/article/article'
import myMessage from '../subpage/message/message'
import { arr } from '@/assets/data/uiData.json'
export default {
  created () {
    const name = this.$route.params.name
    if (name === 'article') {
      this.page = 'myArticle'
    } else if (name === 'message') {
      this.page = 'myMessage'
    }
  },
  data () {
    return {
      img_sprite: this.tool.getImgUrl('sprite.png'),
      img_sprite_icon: this.tool.getImgUrl('sprite-icon.png'),
      optionArr: arr[0],
      page: 'myArticle',
      timer: null
    }
  },
  methods: {
    returnTop () {
      let d = document.documentElement.scrollTop
      this.timer = setInterval(() => {
        d = Math.floor(d / 1.05)
        document.documentElement.scrollTop = d
        if (d === 0) {
          console.log(1)
          clearInterval(this.timer)
          this.timer = null
        }
      }, 16)
    }
  },
  components: {
    myMenu: () => import('./menu'),
    myArticle,
    myMessage
  }
}
</script>
<style lang="scss">
.press_list {
  margin-top: 50px;
  .center {
    margin: 0 auto;
    width: 1060px;
    &::after {
      content: "";
      display: block;
      clear: both;
    }
  }
  .introduce {
    width: 200px;
    height: 653px;
    float: left;
    .wx {
      background-color: #fff;
      border: solid 1px #e8e8e8;
      h4 {
        padding: 10px 0;
        margin: 0 10px;
        text-align: center;
        font-size: 14px;
        color: #333;
        border-bottom: solid 1px #e8e8e8;
      }
      p {
        text-align: center;
        padding: 10px;
      }
    }
    .p_menu {
      margin-top: 20px;
      border: solid 1px #e8e8e8;
    }
  }
  .newsList {
    width: 730px;
    padding: 0 50px;
    float: right;
    background-color: #fff;
    .list_title {
      width: 100%;
      ul {
        padding: 40px 0 50px;
        li {
          &:first-of-type {
            float: left;
            i {
              display: inline-block;
              &:first-of-type {
                width: 22px;
                height: 22px;
                margin-right: 12px;
              }
              &:last-of-type {
                width: 138px;
                height: 21px;
              }
            }
          }
          &:last-of-type {
            float: right;
          }
        }
        &::after {
          content: "";
          display: block;
          clear: both;
        }
      }
      p {
        margin-top: 10px;
        font-size: 12px;
        color: #333;
        vertical-align: bottom;
      }
    }
    .press {
      width: 100%;
    }
  }
  .returnTop{
  width: 40px;
  height: 39px;
  position: fixed;
  right: 10%;
  bottom: 10%;
  cursor: pointer;
  &:hover{
    background-position: -667px -102px !important;
  }
}
}
</style>
