<template lang="pug">
  ul.vote-button-list
    li.vote-button-item(v-for="(target, targetName) in sharedState.targets")
      VoteButton(:targetName="targetName")
</template>

<script>
import VoteButton from '@/components/molecules/VoteButton'
import store from '@/stores'

export default {
  name: 'VoteButtonList',
  components: {
    VoteButton
  },
  data() {
    return {
      privateState: {},
      sharedState: store.state
    }
  }
}
</script>

<style lang="stylus" scoped>
.vote-button-list
  display: flex;
  justify-content: center;

.vote-button-item
  margin: 0 10px;
  list-style: none;
</style>
