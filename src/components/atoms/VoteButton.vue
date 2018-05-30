<template lang="pug">
  button(class="vote-button", @click="countup()")
    img(src="@/assets/logo.png")
    span.name Vue.js
    span.count {{ count }}
</template>

<script>
export default {
  name: 'VoteButton',
  props: {
    initCount: Number
  },
  data() {
    return {
      count: this.initCount
    }
  },
  methods: {
    countup() {
      this.count++
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style>
