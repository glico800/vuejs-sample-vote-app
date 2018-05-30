<template lang="pug">
  img(:src="imageSrc")
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
      emberImage: require('@/assets/ember_logo.png'),
      reactImage: require('@/assets/react_logo.png'),
      riotImage: require('@/assets/riot_logo.png'),
      vueImage: require('@/assets/vue_logo.png')
    }
  },
  computed: {
    imageSrc: function() {
      switch (this.targetName) {
        case 'ember':
          return this.emberImage
        case 'react':
          return this.reactImage
        case 'riot':
          return this.riotImage
        case 'vue':
          return this.vueImage
      }
    }
  }
}
</script>

<style lang="stylus">
</style>
