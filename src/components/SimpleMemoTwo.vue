<template>
  <div class="simple-memo-two" v-bind:class="memoClass">
    {{ memo.text }}
  </div>
</template>

<script>
export default {
  props: {
    memo: {
      type: Object,
      required: true,
    },
  },
  computed: {
    memoClass() {
      const date = this.memo.createdAt
      const now = new Date()
      const day = 60 * 60 * 24
      const week = day * 7
      if (now - date <= day) {
        return "memo__new"
      } else if (now - date <= week) {
        return "memo__in-a-week"
      } else {
        return "memo__old"
      }
    },
  },
}
</script>

<style scoped>
.simple-memo-two {
  margin: 4px;
  padding: 0.5rem;
  border-radius: 4px;
}
.memo__new {
  background-color: orange;
  color: white;
}
.memo__in-a-week {
  background-color: pink;
  color: white;
}
.memo__old {
  background-color: snow;
  color: gray;
}
</style>
