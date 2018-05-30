<template lang="pug">
  img(:src="image_src")
</template>

<script>
export default {
  name: 'VoteImage',
  props: {
    targetName: {
      validator: function(value) {
        return ['vue'].includes(value)
      }
    }
  },
  data() {
    return {
      vue_image: require('@/assets/vue_logo.png')
    }
  },
  computed: {
    image_src: function() {
      switch (this.targetName) {
        case 'vue':
          return this.vue_image
      }
    }
  }
}
</script>

<style lang="stylus">
</style>
