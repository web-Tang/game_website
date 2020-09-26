<template>
  <footer class="foot_wrap">
    <div class="content">
      <div class="left">
        <a
          href="javascript:"
          :style="{
                    backgroundImage: img_foot_dark
                }"
        />
        <span :style="{
                    backgroundImage: img_sprite_bg
                }"/>
      </div>
      <div class="right">
        <ul>
          <li class="right_zh">
            <p>
              <a href="javascript:">腾讯互动娱乐</a>
              <span>|</span>
              <a href="javascript:">服务条款</a>
              <span>|</span>
              <a href="javascript:">隐私保护指引</a>
              <span>|</span>
              <a href="javascript:">儿童隐私保护指引</a>
              <span>|</span>
              <a href="javascript:">腾讯游戏招聘</a>
              <span>|</span>
              <a href="javascript:">腾讯游戏客服</a>
              <span>|</span>
              <a href="javascript:">游戏列表</a>
              <span>|</span>
              <a href="javascript:">广告服务及商务合作</a>
            </p>
          </li>
          <li class="right_all">
            <p>
              <a href="javascript:">腾讯公司版权所有</a>
            </p>
          </li>
          <li class="right_text">
            <p>COPYRIGHT © 1998 - 2020 TENCENT. ALL RIGHTS RESERVED.</p>
          </li>
          <li class="right_text">
            <p>COPYRIGHT © NEOPLE.INC., ALL RIGHTS RESERVED.</p>
          </li>
          <li class="right_text">
            <p>抵制不良游戏 拒绝盗版游戏 注意自我保护 谨防受骗上当 适度游戏益脑 沉迷游戏伤身 合理安排时间 享受健康生活</p>
          </li>
          <li class="right_text">
            <p>本网络游戏适合13+岁的用户使用；为了您的健康，请合理控制游戏时间。</p>
          </li>
          <li class="right_text">
            <a href="javascript:">
              <img src="@/assets/image/gswj.png" style="transform:translateY(2px)">工商网监电子标识
            </a>
            <span>|</span>
            <a href="javascript:">粤网文[2017]6138-1456</a>
            <span>|</span>
            <a href="javascript:">（总）网出证（粤）字第057号</a>
          </li>
          <li class="right_text">
            <p>文网进字[2014]034号 | ISBN 978-7-89988-060-9 | 新广出审[2014]952号 | 全国文化市场统一举报电话：12318</p>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data () {
    return {
      img_foot_dark: this.tool.getImgUrl('foot-dark.png'),
      img_sprite_bg: this.tool.getImgUrl('sprite-bg.png')
    }
  }
}
</script>
<style lang="scss">
  @import '@/css/footer/footer.scss';
</style>
