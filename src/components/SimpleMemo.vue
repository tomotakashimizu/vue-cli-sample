<template>
  <div class="simple-memo">
    <!-- メモ -->
    <!-- 「メモ」を「<slot />」におきかえただけ -->
    <slot />
  </div>
</template>

<style scoped>
.simple-memo {
  margin: 4px;
  padding: 0.5rem;
  border-radius: 4px;
  background-color: orange;
  color: white;
}
</style>
