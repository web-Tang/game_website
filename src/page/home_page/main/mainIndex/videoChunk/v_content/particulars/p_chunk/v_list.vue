<template>
  <div class="video_table">
    <div class="left_btn">
      <span
        :style="{
        backgroundImage:img_sprite,
        backgroundPosition:'-299px -74px',
      }"
      />
    </div>
    <div class="video_district">
      <ul>
        <li v-for="item in 2" :key="item">
          <div class="v_url">
            <img src="@/assets/image/20200712134344.jpg" />
            <div class="icon_play">
              <span
                :style="{
                backgroundImage:img_sprite,
                backgroundPosition:'-446px -49px'
              }"
              />
            </div>
          </div>
          <a href="javascript:">12年老玩家手把手教你玩DNF04 完结撒花</a>
          <p>
            <span
              :style="{
            backgroundImage:img_sprite,
            backgroundPosition:'-460px -95px'
          }"
            />2天以前
          </p>
        </li>
      </ul>
    </div>
    <div class="right_btn">
      <span
        :style="{
        backgroundImage:img_sprite,
        backgroundPosition:'-325px -74px',
      }"
      ></span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      img_sprite: this.tool.getImgUrl('sprite.png')
    }
  }
}
</script>
<style lang="scss">
.video_table {
  width: 100%;
  height: 220px;
  background-image: linear-gradient(#ffffff, #f0f0f0);
  padding-bottom: 15px;
  display: flex;
  justify-content: space-between;
  .video_district {
    width: 585px;
    height: 220px;
    ul li {
      float: left;
      width: 272px;
      height: 220px;
      margin: 0 10px;
      a {
        width: 95%;
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #555;
        font-size: 16px;
        margin: 15px 0;
      }
    }
    .v_url {
      position: relative;
      cursor: pointer;
      .icon_play {
        position: absolute;
        width: calc(100% - 6px);
        height: calc(100% - 6px);
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        span {
          display: block;
          width: 40px;
          height: 40px;
          position: absolute;
          left: calc(50% - 20px);
          top: calc(50% - 20px);
        }
      }
      img {
        display: block;
        width: 272px;
        height: 151px;
      }
      &:hover {
        .icon_play {
          border: solid 3px #ec4828;
          background-color: rgba(0, 0, 0, 0.5);
          span {
            background-position: -487px -49px !important;
          }
        }
      }
    }
    p {
      font-size: 12px;
      color: #555;
      span {
        display: inline-block;
        width: 23px;
        height: 18px;
        vertical-align: middle;
        padding-right: 5px;
      }
    }
  }
  .left_btn,
  .right_btn {
    span {
      display: inline-block;
      width: 23px;
      height: 40px;
      cursor: pointer;
      margin: 62px 10px 0;
      background-repeat: no-repeat;
    }
  }
}
</style>
