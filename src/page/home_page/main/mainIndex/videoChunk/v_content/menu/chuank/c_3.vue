<template>
  <div class="ul_three" :class="{
            active: i === 2
          }">
    <ul>
      <li class="four_l">
        <div v-for="(item, index) in list" :key="index">
          <h5>{{item.title}}</h5>
          <p>
            <a
              href="javascript:"
              v-for="(newItem, newIndex) in item.list"
              :key="newIndex"
            >{{newItem}}</a>
          </p>
        </div>
      </li>
      <li class="four_r">
        <div>
          <p v-for="(item, index) in ['职业视频','赛事视频','官方视频']" :key="index">
            <span
              :style="{
                    backgroundImage:img,
                    backgroundPosition:'-708px -179px'
                  }"
            />
            {{item}}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['list', 'img', 'i']
}
</script>
