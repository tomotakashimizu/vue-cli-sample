<template>
  <div class="red">
    {{ text }}
    {{ test }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "Hello",
      test: "テストです。",
    }
  },
}
</script>

<style>
.red {
  color: red;
}
</style>
