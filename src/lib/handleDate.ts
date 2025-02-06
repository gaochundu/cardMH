import axios from 'axios'

export function getCardData(params) {
  return axios.get('/mockData.json').then(({ data }) => {
    const randomArray = getRandomArray(1, 400)
    randomArray.forEach((item, index) => {
      if (index < 3) {
        data.data[index].index = item
      } else {
        const item2 = {
          id: index,
          index: item,
          prizeName: '8号台球',
          state: 0,
        }
        data.data.push(item2)
      }
    })
    console.log(data.data)
    return data.data.sort((a, b) => a.index - b.index)
  })
}

export function getRandomArray(min: number, max: number): number[] {
  const array: number[] = []
  for (let i = min; i <= max; i++) {
    array.push(i)
  }
  // 使用Fisher-Yates洗牌算法打乱数组
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }

  return array
}
