<template lang="pug">
  div(class="vote-unit")
    p {{counts.ember}}, {{counts.react}}, {{counts.riot}}, {{counts.vue}}
    VoteButtonList(@countup-from-list="countupOf")
</template>

<script>
import VoteButtonList from '@/components/molecules/VoteButtonList'

export default {
  name: 'VoteUnit',
  components: {
    VoteButtonList
  },
  data() {
    return {
      counts: {
        ember: 0,
        react: 0,
        riot: 0,
        vue: 0
      }
    }
  },
  methods: {
    countupOf: function(targetName) {
      this.counts[targetName]++
    }
  }
}
</script>

<style lang="stylus">
</style>
