<template lang="pug">
  div.vote-unit
    h1.title Which front-end framework do you choose?
    VoteImage(:targetName="sharedState.winner", :xSize="2")
    VoteButtonList
</template>

<script>
import VoteImage from '@/components/atoms/VoteImage'
import VoteButtonList from '@/components/molecules/VoteButtonList'
import store from '@/stores'

export default {
  name: 'VoteUnit',
  components: {
    VoteImage,
    VoteButtonList
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
primary-color = #42b983

.title
  color: darken(primary-color, 60%);
</style>
