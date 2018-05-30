<template lang="pug">
  div(class="vote-unit")
    VoteImage(:targetName="winner")
    VoteButtonList(@countup-from-list="countupOf")
</template>

<script>
import VoteImage from '@/components/atoms/VoteImage'
import VoteButtonList from '@/components/molecules/VoteButtonList'

export default {
  name: 'VoteUnit',
  components: {
    VoteImage,
    VoteButtonList
  },
  data() {
    return {
      counts: {
        ember: 0,
        react: 0,
        riot: 0,
        vue: 0
      },
      winner: 'ember'
    }
  },
  methods: {
    countupOf: function(targetName) {
      this.counts[targetName]++
      this.updateWinner()
    },
    updateWinner: function() {
      const maxCount = Math.max.apply(null, Object.values(this.counts))
      this.winner = Object.keys(this.counts).filter(key => {
        return this.counts[key] === maxCount
      })[0]
    }
  }
}
</script>

<style lang="stylus">
</style>
