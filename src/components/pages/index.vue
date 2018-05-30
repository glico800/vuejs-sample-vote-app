<template lang="pug">
  div(class="index")
    img(src="@/assets/logo.png")
    HelloWorld
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

<style lang="stylus">
</style>
