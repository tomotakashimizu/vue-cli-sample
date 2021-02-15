<template>
  <div>
    <!-- 3. 普通の HTML のタグのように Human コンポーネントを書く -->
    <Human />
  </div>
</template>

<script>
import Human from "@/components/Human.vue" // 1. Human コンポーネントを Human.vue から読み込む

export default {
  components: {
    Human, // 2. Human コンポーネントを App.vue の中で使えるように登録する

    // Human: Human, // 省略なしバージョン
    // xxx という変数に入っている値を xxx というプロパティにもつオブジェクトをつくるとき、この省略が使えます。
  },
}
</script>
