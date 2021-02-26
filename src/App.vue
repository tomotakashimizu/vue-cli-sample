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

      <simple-memo>
        <button>メモ１ボタン</button>
      </simple-memo>
      <simple-memo>
        <div>メモ２−１です</div>
        <div>メモ２−２です</div>
      </simple-memo>

      <simple-memo bgColor="orange">オレンジ</simple-memo>
      <simple-memo bgColor="pink">ピンク</simple-memo>
      <simple-memo bgColor="green">みどり</simple-memo>

      <simple-memo colorType="orange">オレンジ</simple-memo>
      <simple-memo colorType="pink">ピンク</simple-memo>
      <simple-memo colorType="green">みどり</simple-memo>

      <simple-memo-two
        v-for="memo in memosTwo"
        v-bind:key="memo.id"
        v-bind:memo="memo"
      />

      <SimpleMemoTwo
        v-for="memo in memosTwo"
        v-bind:key="memo.id"
        v-bind:memo="memo"
      />
    </div>
  </div>
</template>

<script>
import Human from "@/components/Human.vue" // 1. Human コンポーネントを Human.vue から読み込む
import SimpleMemo from "./components/SimpleMemo.vue"
import SimpleMemoTwo from "./components/SimpleMemoTwo.vue"

export default {
  components: {
    Human, // 2. Human コンポーネントを App.vue の中で使えるように登録する
    // Human: Human, // 省略なしバージョン
    // xxx という変数に入っている値を xxx というプロパティにもつオブジェクトをつくるとき、この省略が使えます。

    SimpleMemo,
    SimpleMemoTwo,
  },
  data() {
    return {
      memos: [
        { id: 0, text: "メモ１" },
        { id: 1, text: "メモ２" },
      ],
      memosTwo: [
        { id: 0, text: "今日のメモ", createdAt: Date.now() },
        { id: 1, text: "今週のメモ", createdAt: Date.now() - 60 * 60 * 24 * 3 },
        {
          id: 2,
          text: "大昔のメモ",
          createdAt: Date.now() - 60 * 60 * 24 * 30,
        },
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
