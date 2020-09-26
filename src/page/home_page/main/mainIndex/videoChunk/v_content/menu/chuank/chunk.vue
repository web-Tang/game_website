<template>
  <div
    class="text_content"
    @mouseenter="change(true)"
    @mouseleave="change(false)"
    :style="{
        display: arr.type || type ? 'block' : 'none'
    }"
  >
    <my-c-one :list="arr.one" :img="arr.img" :i="arr.index" />
    <my-c-two :list="arr.two" :img="arr.img" :i="arr.index" />
    <my-c-three :list="arr.three" :img="arr.img" :i="arr.index" />
    <my-c-four :list="arr.four" :img="arr.img" :i="arr.index" />
  </div>
</template>
<script>
import myCOne from './c_1'
import myCTwo from './c_2'
import myCThree from './c_3'
import myCFour from './c_4'
export default {
  props: ['arr'],
  data () {
    return {
      type: false
    }
  },
  methods: {
    change (type) {
      this.type = type
    }
  },
  components: {
    myCOne,
    myCTwo,
    myCThree,
    myCFour
  }
}
</script>
<style lang="scss">
.text_content {
  display: none;
  // display: block;
  width: 750px;
  height: 274px;
  background-color: #fff;
  position: absolute;
  left: 239px;
  top: 29px;
  z-index: 999;
  border: 1px solid #e8e8e8;
  box-shadow: 0px 0px 9px #e8e8e8;
  border-radius: 3px;
  .ul_one {
    padding-top: 32px;
    ul li {
      float: left;
      margin-bottom: 30px;
    }
  }
  .ul_four,
  .ul_two {
    ul li {
      float: left;
      margin-bottom: 30px;
    }
    .four_l {
      padding-top: 32px;
      width: 338px;
      ul li {
        float: left;
      }
    }
    .four_r {
      width: 360px;
      height: 190px;
      padding-left: 50px;
      margin: 45px auto;
      border-left: solid 1px #e8e8e8;
      h5 {
        font-size: 14px;
        color: #333;
      }
      p {
        padding: 3px 0;
      }
      a {
        vertical-align: top;
        font-size: 12px;
        color: #333;
        margin-bottom: 5px;
        margin-right: 10px;
        &:hover {
          color: #ec4828;
        }
      }
    }
    &::after {
      content: "";
      display: block;
      clear: both;
    }
  }
  .ul_three {
    ul li {
      float: left;
    }
    .four_l {
      width: 513px;
      margin: 45px auto;
      padding-left: 50px;
      padding-right: 10px;
      h5 {
        font-size: 14px;
        color: #333;
      }
      p {
        padding: 3px 0;
      }
      a {
        vertical-align: top;
        font-size: 12px;
        color: #333;
        margin-bottom: 5px;
        margin-right: 10px;
        &:hover {
          color: #ec4828;
        }
      }
    }
    .four_r {
      div {
        border-left: 1px solid #e8e8e8;
        height: 148px;
        padding: 60px 0 0 40px;
        margin: 10px auto;
      }
      p {
        margin-bottom: 15px;
        font-size: 12px;
        color: #333;
        cursor: pointer;
        &:hover {
          color: #ec4828;
        }
      }
      span {
        margin-right: 5px;
        margin-top: -4px;
        display: inline-block;
        vertical-align: middle;
        width: 21px;
        height: 21px;
      }
    }
  }
  .ul_one,
  .ul_four,
  .ul_two,
  .ul_three {
    display: none;
    &.active {
      display: block;
    }
  }
}
</style>
