<template>
  <div class="vide_show">
    <video src="@/assets/video/sp.mp4" ref="videoEl"></video>
    <div class="operation">
      <div class="nav">
        <div
          class="area_wrap"
          @mouseenter="barState(1)"
          @mouseleave="barState(0)"
          @click="updateDuration"
          ref="getWrap"
        >
          <div class="strip" :class="{ active: change }">
            <div
              class="schedule"
              :style="{
              width: `${videoConfig.newLengrh}%`
            }"
            >
              <div class="nonius" :class="{active: change}">
                <div class="nonius_style"/>
              </div>
            </div>
          </div>
        </div>
        <div class="_bottom">
          <div class="_left">
            <div class="svg_path" @click="play">
              <svg
                v-if="videoConfig.playState == 'stop'"
                width="36"
                height="36"
                viewBox="0 0 36 36"
              >
                <path
                  d="M25.8 18c0 .6-.3 1.1-.8 1.3L12.5 27c-.2.1-.5.2-.8.2-.8 0-1.5-.6-1.5-1.5V10c0-.8.7-1.5 1.5-1.5.3 0 .5.1.8.2l12.7 7.9c.4.5.6.9.6 1.4z"
                />
              </svg>
              <svg
                v-else-if="videoConfig.playState == 'play'"
                width="36"
                height="36"
                viewBox="0 0 36 36"
              >
                <path
                  d="M12 9h1c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1h-1c-.6 0-1-.4-1-1V10c0-.6.4-1 1-1zm11 0h1c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1h-1c-.6 0-1-.4-1-1V10c0-.6.4-1 1-1z"
                />
              </svg>
              <svg v-else width="36" height="36" viewBox="0 0 36 36">
                <path
                  d="M17.9 28c-4.9 0-9-3.6-9.8-8.3V19.4c0-.8.7-1.4 1.5-1.4s1.5.6 1.5 1.4c.8 3.8 4.5 6.2 8.3 5.4s6.2-4.5 5.4-8.3c-.7-3.2-3.5-5.6-6.9-5.6-1.8 0-3.6.7-4.8 2h1.3c.8 0 1.5.7 1.5 1.5s-.6 1.6-1.5 1.6h-4c-.8 0-1.5-.7-1.5-1.5v-4c0-.8.7-1.5 1.5-1.5.7 0 1.2.5 1.4 1.1C13.6 8.7 15.7 8 17.9 8c5.5 0 10 4.5 10 10s-4.4 10-10 10z"
                />
              </svg>
              <span class="playState show">{{videoConfig.playContent}}</span>
            </div>
          </div>
          <div class="_right">
            <div class="duration">{{ videoConfig.duration }}</div>
            <div class="voice" @click="voice">
              <svg v-if="videoConfig.voive_state" width="20" height="20" viewBox="0 0 20 20">
                <path
                  d="M16.394 12.566A5.88 5.88 0 0 0 17 10a5.97 5.97 0 0 0-1.682-4.151.993.993 0 0 1-.318-.724 1 1 0 0 1 1-1c.3 0 .561.139.745.348l.016-.016A7.969 7.969 0 0 1 19 10a7.934 7.934 0 0 1-1.116 4.055l-1.49-1.489zM11 3.792L8.978 5.149 7.62 3.792l3.63-2.435A.984.984 0 0 1 12 1c.009 0 .017.005.026.005a.954.954 0 0 1 .968.967c.001.01.006.018.006.028v7.171l-2-2V3.792zm7.864 14.072a.999.999 0 0 1-1.414 0L2.136 2.55a1 1 0 1 1 1.415-1.415L18.864 16.45a1 1 0 0 1 0 1.414zM3.171 5l2 2H3v6h3c.304 0 .567.143.75.357l4.25 2.85v-3.379l2 2V18c0 .009-.005.017-.005.027a.955.955 0 0 1-.967.968c-.01 0-.019.005-.028.005a.984.984 0 0 1-.75-.357L5.818 15H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.171z"
                />
              </svg>
              <svg v-else width="20" height="20" viewBox="0 0 20 20">
                <path
                  d="M16.714 15.593l-.01-.01a1 1 0 0 1-1.705-.708c0-.287.124-.542.317-.724C16.354 13.073 17 11.614 17 10s-.645-3.072-1.682-4.151A.993.993 0 0 1 15 5.125a1 1 0 0 1 1-1c.3 0 .561.139.744.348l.017-.016A7.969 7.969 0 0 1 19 10c0 2.178-.874 4.15-2.286 5.593zm-3.999 3.122a.956.956 0 0 1-.688.28c-.009 0-.018.005-.027.005a.984.984 0 0 1-.75-.357L5.818 15H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h3.818l5.432-3.643A.984.984 0 0 1 12 1c.009 0 .017.005.026.005a.954.954 0 0 1 .968.967c.001.01.006.018.006.028v16c0 .009-.005.017-.005.026a.959.959 0 0 1-.28.689zM6.75 6.643A.984.984 0 0 1 6 7H3v6h3c.304 0 .567.143.75.357l4.25 2.85V3.792L6.75 6.643z"
                />
              </svg>
            </div>
            <div class="all" @click="full_screen">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M19.7 19.7c-.2.2-.5.3-.7.3h-4c-.6 0-1-.4-1-1s.4-1 1-1h1.6l-3.3-3.3c-.4-.4-.3-1.1.1-1.4.4-.4 1-.4 1.4 0l3.3 3.3V15c0-.6.4-1 1-1s1 .4 1 1v4c-.1.2-.2.5-.4.7zM19 10c-.6 0-1-.4-1-1V7.4l-3.3 3.3c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4L16.6 6H15c-.6 0-1-.4-1-1s.4-1 1-1h4c.3 0 .5.1.7.3.2.2.3.5.3.7v4c0 .6-.4 1-1 1zM7.4 18H9c.6 0 1 .4 1 1s-.4 1-1 1H5c-.3 0-.5-.1-.7-.3-.2-.2-.3-.5-.3-.7v-4c0-.6.4-1 1-1s1 .4 1 1v1.6l3.3-3.3c.4-.4 1.1-.3 1.4.1.4.4.4 1 0 1.4L7.4 18zm1.9-7.3L6 7.4V9c0 .6-.4 1-1 1s-1-.4-1-1V5c0-.3.1-.5.3-.7.2-.2.5-.3.7-.3h4c.6 0 1 .4 1 1s-.4 1-1 1H7.4l3.3 3.3c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0z"
                />
              </svg>
              <span class="playState show">全屏</span>
            </div>
          </div>
        </div>
      </div>
      <div class="right_btn" @click="pip">
        <svg
          class="txp_icon txp_icon_popup"
          width="20px"
          height="20px"
          viewBox="0 0 20 20"
          version="1.1"
        >
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <rect id="Rectangle-3-Copy-3" fill="#FFFFFF" x="10" y="11" width="5" height="3" />
            <rect
              id="Rectangle-2-Copy-3"
              stroke="#FFFFFF"
              stroke-width="2"
              x="2"
              y="3"
              width="16"
              height="14"
              rx="1"
            />
          </g>
        </svg>
        <span>画中画</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      videoObj: null,
      change: false,
      videoConfig: {
        state: true,
        playState: 'stop',
        playContent: '播放',
        timer: null,
        duration: '',
        voive_state: true,
        newLengrh: 0
      }
    }
  },
  methods: {
    barState (val) {
      this.change = val
    },
    voice () {
      /*
        声音开关
      */
      this.videoConfig.voive_state = !this.videoConfig.voive_state
      this.videoObj.muted = this.videoConfig.voive_state ? 1 : 0
    },
    pip () {
      /*
        开启画中画
      */
      this.videoObj.requestPictureInPicture().catch(error => {
        console.log(error)
      })
    },
    full_screen () {
      /*
        全屏操作
      */
      const video = this.videoObj
      if (video.requestFullscreen) {
        video.requestFullscreen()
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen()
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen()
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen()
      }
    },
    dateFun () {
      /*
        进度条默认执行
      */
      const _time = this.videoObj.currentTime
      const _minute = this.videoObj.duration
      const newTime = _time / _minute
      this.videoConfig.newLengrh = newTime * 100
      if (parseInt(_time) === parseInt(_minute)) {
        this.videoConfig.state = false
        this.clearTimer(this.videoConfig.timer)
        this.videoConfig.newLengrh = 100
        this.play()
      }
    },
    beginVideo () {
      /*
        启动定时器
      */
      this.videoConfig.timer = setInterval(() => {
        this.dateFun()
      }, 1000)
    },
    clearTimer (timer) {
      /*
        清除定时器
      */
      clearInterval(timer)
    },
    start () {
      /*
        视频开始
      */
      this.beginVideo()
      this.videoObj.play()
      this.videoConfig.playState = 'play'
      this.videoConfig.playContent = '暂停'
      this.videoConfig.state = false
    },
    stop () {
      /*
        视频停止
      */
      this.videoObj.pause()
      this.clearTimer(this.videoConfig.timer)
      this.videoConfig.playState = 'stop'
      this.videoConfig.playContent = '播放'
      this.videoConfig.state = true
    },
    play () {
      /*
        开始/暂停按钮
      */
      const config = this.videoConfig
      const getEnd = this.videoObj.ended
      if (getEnd) {
        this.videoObj.currentTime = 0
        this.videoConfig.newLengrh = 0
        config.state = true
      }
      config.state ? this.start() : this.stop()
    },
    updateDuration (e) {
      /*
        点击切换进度条时长
      */
      const Width = e.offsetX / this.$refs.getWrap.clientWidth
      this.videoConfig.newLengrh = Width * 100
      const newDuration = Width * this.videoObj.duration
      this.videoObj.currentTime = newDuration
      if (!this.videoObj.paused) {
        this.stop()
        this.start()
      }
    }
  },
  mounted () {
    /*
      初始化video状态
    */
    this.videoObj = this.$refs.videoEl
    this.videoObj.muted = this.videoConfig.voive_state
    this.play()
    // 注册画中画状态事件
    this.videoObj.addEventListener('enterpictureinpicture', () => {
      console.log('已进入画中画模式')
    })
    this.videoObj.addEventListener('leavepictureinpicture', () => {
      console.log('已退出画中画模式')
      this.stop()
    })
    setTimeout(() => {
      const minute = parseInt(this.videoObj.duration / 60)
      const time = parseInt(this.videoObj.duration % 60)
      this.videoConfig.duration = `${minute}:${time}`
    }, 300)
  }
}
</script>
<style lang="scss">
@import "@/css/main/video.scss";
</style>
