<template>
  <div>
    <h1>カウンター</h1>
    <div>{{ count }}</div>
    <button v-on:click="countUp">＋１</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    countUp() {
      this.count += 1
    },
  },
}
</script>

<style lang="scss" scoped></style>
