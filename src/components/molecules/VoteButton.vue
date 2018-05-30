<template lang="pug">
  button(class="vote-button", @click="countup()")
    VoteImage(:targetName="targetName")
    span.name {{ name }}
    span.count {{ count }}
</template>

<script>
import VoteImage from '@/components/atoms/VoteImage'

export default {
  name: 'VoteButton',
  components: {
    VoteImage
  },
  props: {
    initCount: {
      type: Number,
      default: 0
    },
    targetName: {
      validator: function(value) {
        return ['vue'].includes(value)
      }
    }
  },
  data() {
    return {
      count: this.initCount,
      targets: {
        vue: { name: 'Vue.js' }
      }
    }
  },
  methods: {
    countup() {
      this.count++
    }
  },
  computed: {
    target: function() {
      return this.targets[this.targetName]
    },
    name: function() {
      return this.target.name
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style>
