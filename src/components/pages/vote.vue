<template lang="pug">
  div(class="vote-page")
    VoteButton(initCount="0")
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
