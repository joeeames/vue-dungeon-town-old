<template>
  <div>
    <select v-model="buildingType">
      <option v-for="building in $store.state.reference.buildings"
        v-bind:value="building.type"
        v-bind:key="building.type">{{ building.name }}</option>
    </select>
    <button @click="build()">Build</button>
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'new-building',
  data: () => {
    return {
      buildingType: 'inn'
    }
  },
  methods: {
    ...mapActions([
      'addProductToCart'
    ]),
    build () {
      let cost = this.$store.state.reference.buildings[this.buildingType].cost
      console.log(this.buildingType, cost)

      if (cost <= this.$state.gold) {
        this.$store.dispatch('buyBuilding', this.buildingType)
      } else {
        // not enuf $
      }
    }
  }
}
</script>
