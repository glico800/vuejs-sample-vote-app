<template lang="pug">
  div(class="vote-button-list")
    VoteButton(targetName="vue")
</template>

<script>
import VoteButton from '@/components/molecules/VoteButton'

export default {
  name: 'VoteButtonList',
  components: {
    VoteButton
  }
}
</script>

<style lang="stylus">
</style>
