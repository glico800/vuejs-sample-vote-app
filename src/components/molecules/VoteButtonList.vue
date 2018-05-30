<template lang="pug">
  div(class="vote-button-list")
    VoteButton
</template>

<script>
import VoteButton from '@/components/atoms/VoteButton'

export default {
  name: 'VoteButtonList',
  components: {
    VoteButton
  }
}
</script>

<style lang="stylus">
</style>
