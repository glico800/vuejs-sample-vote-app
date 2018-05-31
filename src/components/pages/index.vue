<template lang="pug">
  div.index
    img(src="@/assets/vue_logo.png")
    HelloWorld
    router-link.vote-link(to="/vote") Go to Vote Page
</template>

<script>
import HelloWorld from '@/components/atoms/HelloWorld'

export default {
  name: 'index',
  components: {
    HelloWorld
  }
}
</script>

<style lang="stylus" scoped>
primary-color = #42b983

.vote-link
  background-color: primary-color;
  color: white;
  font-size: 1.25rem;
  text-decoration: none;
  padding: 4px 8px;
  border-radius: 4px;
  &:active
    font-size: 1.2rem;
</style>
