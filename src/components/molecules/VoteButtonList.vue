<template lang="pug">
  ul(class="vote-button-list")
    li(v-for="(target, targetName) in targets")
      VoteButton(:targetName="targetName")
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
        ember: { name: 'Ember.js' },
        react: { name: 'React.js' },
        riot: { name: 'Riot.js' },
        vue: { name: 'Vue.js' }
      }
    }
  }
}
</script>

<style lang="stylus">
</style>
