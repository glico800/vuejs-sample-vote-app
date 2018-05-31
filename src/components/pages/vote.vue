<template lang="pug">
  div.vote-page
    VoteUnit
    router-link.back-link(to="/") Back to top page
</template>

<script>
import VoteUnit from '@/components/organisms/VoteUnit'

export default {
  name: 'vote',
  components: {
    VoteUnit
  }
}
</script>

<style lang="stylus" scoped>
.back-link
  display: inline-block;
  margin-top: 40px;
</style>
