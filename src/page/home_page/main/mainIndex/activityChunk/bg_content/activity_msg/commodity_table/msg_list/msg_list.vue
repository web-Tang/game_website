<template>
  <div class="table_content">
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        <div class="font">
          <a href="javascripts:">{{item.name}}</a>
        </div>
        <div class="icon">
          <img v-for="(newItem, index) in item.numArr" :key="index" :src="getImgUrl(newItem)" />
        </div>
        <div class="font">
          <h4>{{item.time}}天后结束</h4>
        </div>
        <div class="btn">
          <a
            href="#"
            :style="{
                backgroundImage: img_sprite,
                backgroundPosition: '-486px 0'
            }"
          />
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['arr'],
  data () {
    return {
      img_sprite: this.tool.getImgUrl('sprite.png')
    }
  },
  methods: {
    getImgUrl (val) {
      return require('@/assets/image/xz(' + val + ').png')
    }
  }
}
</script>
<style lang="scss">
.table_content {
  width: 686px;
  ul {
    height: 205px;
    overflow: auto;
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }
  }
  ul li {
    border-bottom: dashed 1px #cecece;
    overflow: hidden;
    div {
      float: left;
      width: 25%;
      height: 42px;
      line-height: 42px;
      text-align: center;
    }
    .font a,
    .font h4 {
      font-size: 14px;
      font-weight: normal;
      color: #555;
    }
    .font h4 {
      color: #ec4828;
    }
    .icon img {
      width: 30px;
      height: 30px;
      border-radius: 5px;
      vertical-align: middle;
    }
    .btn a {
      display: block;
      width: 55px;
      height: 25px;
      font-size: 14px;
      margin: 8px auto;
    }
    &:hover {
      .font a {
        color: #ec4828;
      }
    }
  }
}
</style>
