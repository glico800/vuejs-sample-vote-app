const store = {
  state: {
    targets: {
      ember: { name: 'Ember.js', count: 0 },
      react: { name: 'React.js', count: 0 },
      riot: { name: 'Riot.js', count: 0 },
      vue: { name: 'Vue.js', count: 0 }
    },
    winner: 'ember'
  },
  countupOf(targetName) {
    this.state.targets[targetName].count++
    this.updateWinner()
  },
  updateWinner() {
    const targets = this.state.targets
    const counts = Object.values(targets).map(t => t.count)
    const maxCount = Math.max.apply(null, counts)

    this.state.winner = Object.keys(targets).filter(key => {
      return targets[key].count === maxCount
    })[0]
  }
}

export default store
