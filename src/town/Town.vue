
<template>
  <div>
    <div class="hello">
      You are in town.
    </div>
    <h2>Buildings</h2>
    <building v-for="building in $store.state.buildings"
        v-bind:building="building"
        v-bind:key="building.id"></building>
    <new-building></new-building>
  </div>
</template>

<script>
import building from '../building/building.vue'
import newBuilding from '../building/NewBuilding.vue'

export default {
  name: 'Town',
  data () {
    return {
      msg: 'Welcome to Town'
    }
  },
  props: ['buildings'],
  components: {
    building,
    newBuilding
  }
}
</script>
