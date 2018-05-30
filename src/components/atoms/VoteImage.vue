<template lang="pug">
  img(:src="imageSrc", :height="height", :width="width")
</template>

<script>
export default {
  name: 'VoteImage',
  props: {
    targetName: {
      validator: function(value) {
        return ['ember', 'react', 'riot', 'vue'].includes(value)
      }
    },
    xSize: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      emberImage: require('@/assets/ember_logo.png'),
      reactImage: require('@/assets/react_logo.png'),
      riotImage: require('@/assets/riot_logo.png'),
      vueImage: require('@/assets/vue_logo.png'),
      baseHeight: 100,
      baseWidth: 100
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
    },
    height: function() {
      return this.baseHeight * this.xSize + 'px'
    },
    width: function() {
      return this.baseWidth * this.xSize + 'px'
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
