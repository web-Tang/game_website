<template>
  <div class="article">
    <div class="a_title">
      <h2>DNF全国挑战赛启动：斗者无界，勇士集结</h2>
      <p>
        《地下城与勇士》运营团队 2020-04-17 09:31:06 | 字体：【
        <span @click="active = 0">大</span>
        <span @click="active = 1">中</span>
        <span @click="active = 2">小</span>
        】
      </p>
    </div>
    <div
      class="a_content"
      :class="{
        big: active == 0,
        centre: active == 1,
        little: active == 2
    }"
    >
      <p>2020年，DNF全国挑战赛正式打响!涵盖格斗大赛与公会竞速赛两大模块，作为全民参与的DNF电竞赛事，为广大玩家提供成为赛场之星的舞台，更有丰厚的赛事奖励等你来拿!4月16日，格斗大赛率先开打，斗鱼、虎牙报名即刻全线启动。公会竞速赛也将陆续启动。斗者无界，勇士集结!</p>
      <p>
        <br />
      </p>
      <p>
        <span style="color: rgb(192, 0, 0); text-decoration: none;"></span>
        <strong style="color: rgb(192, 0, 0);">2020DNF全国挑战赛：</strong>
        <span style="color: rgb(192, 0, 0); text-decoration: none;">
          <strong>
            <a
              href="https://dnf.qq.com/cp/a20200414challenge/index.html"
              target="_blank"
            >立即报名&gt;&gt;&gt;</a>
          </strong>
        </span>
      </p>
      <p>
        <br />
      </p>
      <p style="text-align: center;">
        <img
            src="https://ossweb-img.qq.com/upload/webplat/info/dnf/20200417/1587086693161392.jpg"
            title="1587086693161392.jpg"
            alt="图1(1)(2).jpg"
        />
      </p>
      <p>
        <br />
      </p>
      <p>
        <strong>层层深入挑战升级 赛制抢先看</strong>
      </p>
      <p>
        <strong>
          <br />
        </strong>
      </p>
      <p>此次DNF格斗大赛将分为周赛、复赛、决赛三个部分，玩家可以通过斗鱼、虎牙的报名页面进行线上参赛。4月16日—5月20日，共计进行4轮周赛，每周的周赛前两名可以晋级复赛。</p>
      <p>
        <br />
      </p>
      <p>复赛将分为AB两组进行，分组第1名将于6月份争夺上半年DNF全国挑战赛(PVP)冠军。赛程紧凑，挑战逐步升级，全面提升比赛的对抗性和观赏性。</p>
      <p>
        <br />
      </p>
      <p>除此以外，此次大赛将在斗鱼和虎牙全程直播，顶尖PK选手在线秀操作，敬请关注!</p>
      <p>
        <br />
      </p>
      <p style="text-align: center;">
        <img
            src="https://ossweb-img.qq.com/upload/webplat/info/dnf/20200417/1587086514140657.png"
            title="1587086514140657.png"
            alt="图2.png"
        />
      </p>
      <p>
        <br />
      </p>
      <p>
        <strong>赢取现金大奖 冲击豪华赛事奖励</strong>
      </p>
      <p>
        <br />
      </p>
      <p>奖励方面，本次全国挑战赛按照比赛进程分别设置了丰厚的奖励。奖品包含燃武之心、黑钻、时间的引导石、赛季转职光环装扮等各色道具。冠军和亚军更可以分别获得追忆之稀有装扮礼盒*1以及光明套*1，匹配强者殊荣，快来用实力赢得属于你的荣耀吧!</p>
      <p>
        <br />
      </p>
      <p>值得一提的是，周赛和复赛的优胜选手都可获得相应的现金大奖。决赛冠军和亚军更可以分别获得50000与30000的终极奖金。重磅大奖，不容错过。</p>
      <p>
        <br />
      </p>
      <p style="text-align: center;">
        <img
            src="https://ossweb-img.qq.com/upload/webplat/info/dnf/20200417/1587086680465825.jpg"
            title="1587086680465825.jpg"
            alt="图3(1).jpg"
        />
      </p>
      <p>
        <br />
      </p>
      <p>DNF全国挑战赛正式启动，赛程刺激更有豪华奖励，谁将突出重围问鼎冠军，共同期待!</p>
    </div>
    <div class="intro">
      <img src="@/assets/image/dnf-head.png" alt srcset />
      <p>《地下城与勇士》作为全球2D横版格斗网络游戏（MMOACT）的先行者，凭借经典街机游戏网络化的创新理念和玩法成为了全球网络游戏发展史上的一个里程碑。与经典横版动作游戏别无二致的表现形式、无限连击的动作特性和极富多样化的职业分支使得《地下城与勇士》具有精准的操作体验与打击爽快感，让玩家全面回归游戏的本质，享受游戏过程而非游戏结果带来的快乐，这将是网游领域史无前例的进步！</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      active: 1
    }
  }
}
</script>
<style lang="scss">
.a_title {
  border-top: solid 1px #e8e8e8;
  border-bottom: solid 1px #e8e8e8;
  padding: 40px 0 10px;
  margin-bottom: 20px;
  h2 {
    text-align: center;
    color: #ec4828;
  }
  p {
    padding: 10px 0;
    text-align: center;
    font-size: 12px;
    span {
      padding: 0 10px;
      cursor: pointer;
    }
  }
}
.a_content {
  width: 100%;
  line-height: 25px;
  &.big{
      font-size: 16px;
  }
  &.centre{
      font-size: 14px;
  }
  &.little{
      font-size: 12px;
  }
  img{
    width: 730px;
  }
}
.intro {
  margin: 50px 0 100px;
  border-top: solid 1px #e8e8e8;
  padding-top: 22px;
  img {
    display: block;
    float: left;
  }
  p {
    padding-left: 170px;
    padding-top: 15px;
    color: #333;
    font-size: 12px;
    line-height: 25px;
  }
}
</style>
