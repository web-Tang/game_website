<template>
  <div
    class="nav"
    :style="{
      backgroundImage: bg_shadow,
      backgroundRepeat:'no-repeat',
      backgroundPosition:'center -41px'
  }"
  >
    <ul>
      <li
        class="nav_title"
        :style="{
        backgroundImage: bg_line,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom'
      }"
      >
        <div class="navigation">
          <ul>
            <li
              v-for="(item, index) in navList"
              :key="index"
              @mouseenter="noBlock(true)"
              @mouseleave="noBlock(false)"
            >
              <div
                class="bg_star"
                :class="{
                    active: index == activeState
                  }"
                :style="{
                    backgroundImage: topLogo,
                    backgroundPosition: '-217px 0',
                    backgroundRepeat: 'no-repeat'
                  }"
              />
              <div>
                <a
                  href="javascript:"
                  :class="{
                  a_active: index == activeState
                }"
                >
                  {{ item.title }}
                  <span>{{ item.English }}</span>
                </a>
              </div>
              <div
                class="bg_active"
                :class="{
                sign: index == activeState
              }"
              />
            </li>
          </ul>
        </div>
        <div class="option active">
          <div class="o_center">
            <ul
              v-for="(item, index) in titleList"
              :key="index"
              @mouseenter="showHide(index)"
              @mouseleave="showHide"
            >
              <li v-for="(newItem, newIndex) in item" :key="newIndex">
                <a href="javascript:">{{ newItem }}</a>
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li class="nav_particulars">
        <a href="javascript:" />
      </li>
      <li class="nav_logo">
        <a href="javascript:" :style="{
            backgroundImage: topLogo
          }"
          @click="homepage"
           />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['topLogo', 'bg_shadow', 'bg_line'],
  data () {
    return {
      bg_active_state: true,
      activeState: null,
      block: false,
      navList: null,
      titleList: null
    }
  },
  created () {
    this.asyncData()
  },
  methods: {
    showHide (val) {
      const type = typeof val
      const newVal = type === 'number' ? val : undefined
      this.activeState = newVal
      const bgStateType = type === 'number'
      this.bg_active_state = !bgStateType
      this.$emit('shadowState', bgStateType)
    },
    noBlock (val) {
      this.block = val
      this.bg_active_state = !val
      this.$emit('shadowState', val)
    },
    homepage () {
      this.$router.go(-1)
    },
    async asyncData () {
      this.navList = await this.tool.getAsyncData('navList.json')
      this.titleList = await this.tool.getAsyncData('titleList.json')
    }
  }
}
</script>
<style lang="scss">
@import "@/css/page/nav.scss";
</style>
