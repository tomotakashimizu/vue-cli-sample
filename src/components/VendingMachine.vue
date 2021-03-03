<template>
  <div>
    <h1>自動販売機</h1>
    <ul>
      <li v-for="(drink, index) in drinks.drinks" :key="drink.id">
        {{ drink }}
        <button v-on:click="buyDrink(index)">
          {{ drinks.prices[index] }}円
        </button>
      </li>
    </ul>
    <div>
      <input type="text" v-model="inputValue" />
      <button v-on:click="putMoney">入金する</button>
    </div>
    <p>投入金額：{{ totalMoney }}円</p>
    <button v-on:click="clearTotalMoney">投入金額をクリア</button>
    <ul>
      <li v-for="(list, index) in lists" :key="list.id">
        {{ list }}
        <button v-on:click="deleteList(index)">削除</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "VendingMachine",
  data() {
    return {
      drinks: {
        drinks: ["水", "お茶", "缶コーヒー"],
        prices: [100, 150, 120],
      },
      inputValue: "",
      totalMoney: 0,
      lists: [],
    }
  },
  methods: {
    putMoney() {
      if (Number.isNaN(Number(this.inputValue))) {
        alert("数字を入力してください。")
        this.inputValue = ""
      } else if (this.inputValue == "") {
        alert("数字を入力してください。")
      } else {
        this.totalMoney += Number(this.inputValue)
        localStorage.totalMoney = this.totalMoney
        this.inputValue = ""
      }
    },

    buyDrink(index) {
      if (this.drinks.prices[index] > this.totalMoney) {
        alert("投入金額が不足しています。")
      } else {
        this.totalMoney -= this.drinks.prices[index]
        localStorage.totalMoney = this.totalMoney
        this.lists.push(`${this.drinks.drinks[index]}を購入しました。`)
        localStorage.lists = JSON.stringify(this.lists)
      }
    },

    clearTotalMoney() {
      this.totalMoney = 0
      localStorage.totalMoney = this.totalMoney
    },

    deleteList(index) {
      this.lists.splice(index, 1)
      localStorage.lists = JSON.stringify(this.lists)
    },
  },

  // Vue インスタンスが作られるときに実行される関数 created
  created() {
    this.totalMoney = Number(localStorage.totalMoney) || 0
    this.lists = JSON.parse(localStorage.lists) || []
  },
}
</script>
