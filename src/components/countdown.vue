<template>
  <p>{{ time }}</p>
</template>
<script>
export default {
  props: {
    endTime: {
      type: String
    }
  },
  data() {
    return {
      time: '',
      flag: false
    }
  },
  mounted() {
    const time = setInterval(() => {
      if (this.flag == true) {
        clearInterval(time)
      }
      this.timeDown()
    }, 500)
  },
  methods: {
    timeDown() {
      const endTime = new Date(this.endTime)
      const nowTime = new Date()
      const leftTime = parseInt((endTime.getTime() - nowTime.getTime()) / 1000)
      const d = parseInt(leftTime / (24 * 60 * 60))
      const h = this.formate(parseInt(leftTime / (60 * 60) % 24))
      const m = this.formate(parseInt(leftTime / 60 % 60))
      const s = this.formate(parseInt(leftTime % 60))
      if (leftTime <= 0) {
        this.flag = true
        this.$emit('time-end')
      }
      this.time = `${d}天${h}小时${m}分${s}秒` // 需要修改时间样式的话 ，比如需要什么30分钟倒计时，就只保留分和秒
    },
    formate(time) {
      if (time >= 10) {
        return time
      } else {
        return `0${time}`
      }
    }
  }
}
</script>

<style scoped>
</style>
