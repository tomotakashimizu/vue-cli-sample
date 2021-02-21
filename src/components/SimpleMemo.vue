<template>
  <div
    class="simple-memo"
    v-bind:style="{ backgroundColor: bgColor }"
    v-bind:class="colorType"
  >
    <!-- メモ -->
    <!-- 「メモ」を「<slot />」におきかえただけ -->
    <slot />
  </div>
  <!-- <div class="simple-memo" v-bind:class="colorType">
    <slot />
  </div> -->
</template>

<script>
export default {
  props: {
    bgColor: {
      validator(value) {
        return ["orange", "pink", "green"].includes(value)
      },
    },
    colorType: {
      validator(value) {
        return ["orange", "pink", "green"].includes(value)
      },
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
/* colorType */
.orange {
  background-color: orange;
  color: white;
}
.pink {
  background-color: pink;
  color: red;
}
.green {
  background-color: green;
  color: white;
}
</style>
