<template>
  <div class="simple-memo" v-bind:style="{ backgroundColor: bgColor }">
    <!-- メモ -->
    <!-- 「メモ」を「<slot />」におきかえただけ -->
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: "orange",
    },
  },
}
</script>

<style scoped>
.simple-memo {
  margin: 4px;
  padding: 0.5rem;
  border-radius: 4px;
  background-color: orange;
  color: white;
}
</style>
