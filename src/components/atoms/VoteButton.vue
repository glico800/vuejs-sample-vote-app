<template lang="pug">
  button(class="vote-button")
    img(src="@/assets/logo.png")
    span.name Vue.js
    span.count {{ count }}
</template>

<script>
export default {
  name: 'VoteButton',
  data() {
    return {
      count: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style>
