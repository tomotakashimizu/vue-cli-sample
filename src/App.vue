<template>
  <div>
    <div class="container">
      <!-- 3. 普通の HTML のタグのように Human コンポーネントを書く -->
      <Human />
      <Human />
      <Human />
      <Human />
      <Human />
    </div>
    <div class="app">
      <!-- <simple-memo /> -->
      <simple-memo>メモ１</simple-memo>
      <simple-memo>メモ２</simple-memo>
      <simple-memo v-for="memo in memos" v-bind:key="memo.id">
        {{ memo.text }}
      </simple-memo>
    </div>
  </div>
</template>

<script>
import Human from "@/components/Human.vue" // 1. Human コンポーネントを Human.vue から読み込む
import SimpleMemo from "./components/SimpleMemo.vue"

export default {
  components: {
    Human, // 2. Human コンポーネントを App.vue の中で使えるように登録する
    // Human: Human, // 省略なしバージョン
    // xxx という変数に入っている値を xxx というプロパティにもつオブジェクトをつくるとき、この省略が使えます。

    SimpleMemo,
  },
  data() {
    return {
      memos: [
        { id: 0, text: "メモ１" },
        { id: 1, text: "メモ２" },
      ],
    }
  },
}
</script>

<style scoped>
.container {
  display: flex;
}
</style>
