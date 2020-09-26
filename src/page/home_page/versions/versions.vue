<template>
  <div
    class="ver_wrap"
    :style="{
      backgroundImage:ver_chapter_nav
  }"
    :class="{
      move:toggle
    }"
  >
    <div class="left_ver">
      <div class="activity_btn">
        <div
          :style="{
                backgroundImage:ver_chapter_nav,
                backgroundPosition:'-27px -11px'
            }"
        />
        <div
          :style="{
                backgroundImage:ver_chapter_nav,
                backgroundPosition:'-27px -69px'
            }"
        />
      </div>
      <div class="ver_history">
        <ul>
          <li
            v-for="(item, index) in var_h_arr"
            :key="item.id"
            :class="{
            active:index == var_h_arr.length - 1
          }"
          >
            <h4>
              {{item.title}}
              <em
                :style="{
                    backgroundImage:ver_chapter_nav,
                    backgroundPosition:'-1241px -118px'
                  }"
              />
            </h4>
            <span
              :style="{
                  backgroundImage:ver_chapter_nav,
                  backgroundPosition:'-1193px -108px'
              }"
            />
            <p>{{item.explain}}</p>
            <p>{{item.time}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="right_btn"
      :style="{
      backgroundImage:ver_chapter_nav,
      backgroundPosition:'-1044px 0'
    }"
      @click="toggle = !toggle"
    >
      <span
        :style="{
            backgroundImage:ver_chapter_nav,
            backgroundPosition: toggle ? '-1152px -115px' : '-1167px -115px'
        }"
      />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      ver_chapter_nav: this.tool.getImgUrl('chapter_nav.png'),
      var_h_arr: null,
      toggle: false
    }
  },
  created () {
    this.asyncData()
  },
  methods: {
    async asyncData () {
      const data = await this.tool.getAsyncData('versions.json')
      this.var_h_arr = data.data
    }
  }
}
</script>
<style lang="scss">
.ver_wrap {
  width: 1044px;
  height: 131px;
  position: fixed;
  left: -1044px;
  bottom: 10%;
  z-index: 2000;
  transition: left 0.5s;
  .activity_btn {
    float: left;
    width: 196px;
    padding-top: 5px;
    div {
      width: 145px;
      height: 52px;
      margin: 6px 0 0 27px;
      cursor: pointer;
      &:first-of-type {
        &:hover {
          background-position: -1151px 0px !important;
        }
      }
      &:last-of-type {
        &:hover {
          background-position: -1151px 208px !important;
        }
      }
    }
  }
  .ver_history {
    float: left;
    ul {
      li {
        float: left;
        width: 138px;
        height: 123px;
        color: #fff;
        cursor: pointer;
        h4 {
          height: 22px;
          font-weight: normal;
          font-size: 12px;
          text-align: center;
          line-height: 22px;
          margin: 16px 8px;
          background-color: #64687e;
          em {
            display: block;
            margin: 0 auto;
            width: 7px;
            height: 3px;
          }
        }
        span {
          display: block;
          width: 23px;
          height: 23px;
          margin: 0 auto 10px;
        }
        p {
          font-size: 12px;
          color: #a4a5b6;
          text-align: center;
        }
        &.active,
        &:hover {
          h4 {
            background-color: #ec4828;
            em {
              background-position: -1248px -118px !important;
            }
          }
          span {
            background-position: -1216px -108px !important;
          }
          p {
            color: #ec4828;
          }
        }
      }
    }
  }
  .right_btn {
    width: 52px;
    height: 131px;
    position: absolute;
    right: -52px;
    cursor: pointer;
    span {
      display: block;
      width: 12px;
      height: 12px;
      margin: 100px 0 0 20px;
    }
    &:hover {
      background-position: -1097px 0 !important;
      color: red;
    }
  }
  &.move {
    left: 0px !important;
  }
}
</style>
