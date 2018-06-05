<template lang="pug">
  button.vote-button(@click="countup")
    VoteImage.image(:targetName="targetName")
    span.name {{ target.name }}
    span.count {{ target.count }}
</template>

<script>
import VoteImage from '@/components/atoms/VoteImage'
import store from '@/stores'

export default {
  name: 'VoteButton',
  components: {
    VoteImage
  },
  props: {
    targetName: {
      validator: function(value) {
        return ['ember', 'react', 'riot', 'vue'].includes(value)
      }
    }
  },
  data() {
    return {
      privateState: {},
      sharedState: store.state
    }
  },
  methods: {
    countup() {
      store.countupOf(this.targetName)
    }
  },
  computed: {
    target: function() {
      return this.sharedState.targets[this.targetName]
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
