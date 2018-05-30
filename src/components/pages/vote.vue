<template lang="pug">
  div(class="vote-page")
    VoteButton
</template>

<script>
import VoteButton from '@/components/atoms/VoteButton'

export default {
  name: 'vote',
  components: {
    VoteButton
  }
}
</script>

<style lang="stylus">
</style>
