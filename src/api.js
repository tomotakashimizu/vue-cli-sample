export const getDogApi = function() {
  return fetch("https://dog.ceo/api/breeds/image/random").then((res) => {
    return res.json() // 結果を json として読み込んで、次の then に渡す
  })
}
export const number = 2
