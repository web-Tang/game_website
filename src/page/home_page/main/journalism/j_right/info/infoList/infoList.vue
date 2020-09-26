<template>
    <div class="i_content">
      <p>
        <a href="javascript:">{{xw_list.title}}</a>
      </p>
      <ul>
        <li v-for="(item, index) in xw_list.data" :key="index">
          <span :style="{
              backgroundImage: imgUrl
          }"
          :class="{
            redColor: item.name === '公告',
            grayColor: item.name === '攻略',
            darkRedColor: item.name === '赛事'
          }"
          >{{ item.name }}</span>
          <p>
            <router-link to="/press_center/article">
              {{item.msg}}
            </router-link>
          </p>
          <span>{{item.date}}</span>
        </li>
      </ul>
      <div class="more">
        <router-link :to="`/press_center/message`">
          查看更多资讯
          <span :style="{
            backgroundImage: imgUrl
          }"/>
        </router-link>
      </div>
    </div>
</template>
<script>
export default {
  props: ['imgUrl', 'xw_list', 'type']
}
</script>
<style lang="scss">
.i_content {
    width: 100%;
    height: 332px;
    margin-top: 34px;
    p,
    a,
    span {
      color: #555555;
    }
    & > p {
      font-size: 16px;
      font-weight: bold;
      background-color: #f0f0f0;
      text-align: center;
      line-height: 48px;
      height: 48px;
      &:hover a{
        color:#ec4828;
      }
    }
    ul li {
      height: 21px;
      margin: 15px 0;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      p {
        width: 330px;
        margin-left: 10px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        a:hover{
            color: #ec4828;
        }
      }
      span:first-of-type {
        display: block;
        width: 49px;
        height: 21px;
        text-align: center;
        background-position: -443px -28px;
      }
      .redColor{
          color:#ec4828;
      }
      .grayColor{
          color:#999999;
      }
      .darkRedColor{
          color:#b52601;
      }
    }
    .more{
        margin-top: 26px;
        height:38px;
        width:100%;
        border:solid 2px #e3e3e3;
        cursor: pointer;
        a{
            display: block;
            width:100%;
            height:100%;
            font-size:16px;
            color: #555555;
            line-height:38px;
            text-align: center;
            span{
                display:inline-block;
                width:16px;
                height:17px;
                background-position: -299px -11px;
                vertical-align: middle;
                margin-left:5px;
            }
        }
        &:hover{
            a{
                color: #ec4828;
            }
        }
    }
  }
</style>
