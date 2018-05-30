<template lang="pug">
  img(:src="image_src")
</template>

<script>
export default {
  name: 'VoteImage',
  props: {
    targetName: {
      validator: function(value) {
        return ['ember', 'react', 'riot', 'vue'].includes(value)
      }
    }
  },
  data() {
    return {
      ember_image: require('@/assets/ember_logo.png'),
      react_image: require('@/assets/react_logo.png'),
      riot_image: require('@/assets/riot_logo.png'),
      vue_image: require('@/assets/vue_logo.png')
    }
  },
  computed: {
    image_src: function() {
      switch (this.targetName) {
        case 'ember':
          return this.ember_image
        case 'react':
          return this.react_image
        case 'riot':
          return this.riot_image
        case 'vue':
          return this.vue_image
      }
    }
  }
}
</script>

<style lang="stylus">
</style>
