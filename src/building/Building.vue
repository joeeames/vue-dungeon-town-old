<template>
  <p>{{ building.name + " - " + building.incomePerTurn }}</p>
</template>

<script>
export default {
  name: 'building',
  props: {
    building: Object
  },
  methods: {
  }
}
</script>
