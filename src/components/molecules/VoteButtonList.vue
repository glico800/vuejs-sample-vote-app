<template lang="pug">
  ul(class="vote-button-list")
    li(v-for="(target, targetName) in targets")
      VoteButton(:targetName="targetName", @countup-from-button="countupOf")
</template>

<script>
import VoteButton from '@/components/molecules/VoteButton'

export default {
  name: 'VoteButtonList',
  components: {
    VoteButton
  },
  data() {
    return {
      targets: {
        ember: { name: 'Ember.js', count: 0 },
        react: { name: 'React.js', count: 0 },
        riot: { name: 'Riot.js', count: 0 },
        vue: { name: 'Vue.js', count: 0 }
      }
    }
  },
  methods: {
    countupOf: function(targetName) {
      this.targets[targetName].count++
    }
  },
  watch: {
    'targets.ember.count': function(val) {
      this.$emit('countup-from-list', 'ember')
    },
    'targets.react.count': function(val) {
      this.$emit('countup-from-list', 'react')
    },
    'targets.riot.count': function(val) {
      this.$emit('countup-from-list', 'riot')
    },
    'targets.vue.count': function(val) {
      this.$emit('countup-from-list', 'vue')
    }
  }
}
</script>

<style lang="stylus">
</style>
