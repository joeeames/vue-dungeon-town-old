
<template>
  <div>
    Your Money: {{ $store.state.gold }}
    <div>
      <button @click="endTurn">End Turn</button>
    </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Game',
  methods: mapActions([
    'endTurn'
  ])
}
</script>
