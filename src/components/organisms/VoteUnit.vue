<template lang="pug">
  div(class="vote-unit")
    VoteButtonList
</template>

<script>
import VoteButtonList from '@/components/molecules/VoteButtonList'

export default {
  name: 'VoteUnit',
  components: {
    VoteButtonList
  }
}
</script>

<style lang="stylus">
</style>
