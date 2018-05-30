<template lang="pug">
  button.vote-button(@click="countup()")
    VoteImage.image(:targetName="targetName")
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
primary-color = #42b983

.vote-button
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid darken(primary-color, 80%)
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  &:active .image
    transform: scale(0.8);
  .name
    color: darken(primary-color, 80%);
    margin-top: 8px;
  .count
    background-color: lighten(primary-color, 80%);
    color: darken(primary-color, 60%);
    padding: 4px;
    margin-top: 10px;
    border-radius: 4px;
    font-size: 1.2rem;
    width: 100%;
</style>
