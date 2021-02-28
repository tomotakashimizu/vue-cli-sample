<template>
  <div>
    <h1>カウンター</h1>
    <!-- <div>{{ count }}</div> -->
    <div v-bind:initialValue="initialValue">{{ initialValue }}</div>
    <button v-on:click="countUp">＋１</button>
  </div>
</template>

<script>
export default {
  props: {
    initialValue: {
      type: Number,
      required: true,
    },
  },
  // data() {
  //   return {
  //     count: 0,
  //   }
  // },
  methods: {
    countUp() {
      // this.count += 1
      this.initialValue += 1
    },
  },
}
</script>

<style lang="scss" scoped></style>
