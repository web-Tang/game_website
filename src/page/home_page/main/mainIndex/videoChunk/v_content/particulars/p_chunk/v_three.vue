<template>
  <div class="brand_area">
    <h1 class="title">
      品牌专区
      <span>更多 +
        <div :style="{
          backgroundImage: imgState ? img_sly_one : img_sly_two,
          backgroundRepeat: 'no-repeat'
        }"
        @mouseenter="imgState = false"
        @mouseleave="imgState = true"
        />
      </span>
    </h1>
    <div>
      <ul>
        <li v-for="item in ['4321', '2345']" :key="item">
          <img :src="getRequireUrl(item)" alt srcset />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgState: true,
      img_sly_one: this.tool.getImgUrl('sly3.png'),
      img_sly_two: this.tool.getImgUrl('sly.png')
    }
  },
  methods: {
    getRequireUrl (val) {
      return require(`@/assets/image/${val}.jpeg`)
    }
  }
}
</script>
<style lang="scss">
.brand_area {
  h1 {
    font-size: 24px;
    font-weight: normal;
    color: #49657a;
    padding: 29px 0 20px 25px;
    span {
      display: block;
      float: right;
      font-size: 14px;
      margin-top: 10px;
      position: relative;
      div{
        position: absolute;
        left: -1620px;
        top: -245px;
        width: 238px;
        height: 768px;
        transition: all .3s;
      }
    }
  }
  ul {
    display: flex;
    justify-content: space-between;
    li {
      float: left;
      width: 556px;
      height: 160px;
      cursor: pointer;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        transition: transform 0.3s;
      }
      &:hover {
        img {
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>
