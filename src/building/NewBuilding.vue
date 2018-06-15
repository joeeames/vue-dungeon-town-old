<template>
  <div>
    <select v-model="buildingType">
      <option v-for="building in buildings"
        v-bind:value="building.type"
        v-bind:key="building.type">{{ building.name }}</option>
    </select>
    <button @click="build()">Build</button>
  </div>
</template>

<script>

import { mapActions } from 'vuex'
import buildings from './buildingReference'

export default {
  name: 'new-building',
  data: () => {
    return {
      buildingType: 'inn',
      buildings: buildings
    }
  },
  methods: {
    ...mapActions([
      'addProductToCart'
    ]),
    build () {
      let cost = this.buildings[this.buildingType].cost
      console.log(this.buildingType, cost)

      if (cost <= this.$store.state.gold) {
        this.$store.dispatch('buyBuilding', this.buildingType);
      } else {
        this.$store.dispatch('failedBuyBuildingAttempt', this.buildingType);
      }
    }
  }
}
</script>
