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
        return ['ember', 'react', 'riot', 'vue'].includes(value)
      }
    }
  },
  data() {
    return {
      count: this.initCount,
      targets: {
        ember: { name: 'Ember.js' },
        react: { name: 'React.js' },
        riot: { name: 'Riot.js' },
        vue: { name: 'Vue.js' }
      }
    }
  },
  methods: {
    countup() {
      this.count++
      // Sending Messages to Parents with Events
      this.$emit('countup-from-button', this.targetName)
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
