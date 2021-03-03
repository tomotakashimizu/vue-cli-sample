<template>
  <div id="app">
    <h1>Dog API の使い方</h1>
    <img alt="Vue logo" v-bind:src="url" />
    <br />
    <button v-on:click="getDogImage">犬の画像を更新</button>
  </div>
</template>

<script>
import { getDogApi, number } from "@/api"

export default {
  name: "App",
  data() {
    return {
      //Dog API の画像を読み込むまでの時間はVueのlogoを表示する
      //publicに画像を移動する必要がある
      url: "./logo.png",
    }
  },
  methods: {
    getDogImage() {
      getDogApi()
        .then((data) => {
          this.url = data.message // 画像を表示する
        })
        .catch((error) => {
          //エラーの場合、こちらが読まれる
          console.log(error)
          alert(error)
        })
    },
  },
  created() {
    this.getDogImage()
    console.log(number)
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
