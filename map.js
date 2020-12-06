const items = [
  ['name', '张三'],
  ['title', 'Author']
];

let map = new Map();

items.forEach(([key, value])=>map.set(key,value))


const map1 = new Map();

map1
  .set('hello', 'Jeffrey')
  .set(true,'123')
  .set('number', 345)
  .set('number1', 890)


map1.clear()

// console.log(map1)
// console.log(map1.size)



const map2 = new Map([['anmial', 'dog'], ['fruit', 'apple'], ['numebr', 5]]);

const map3  = new Map([...map2])
console.log(map3)
// for(let key of map2.keys()){
//   console.log(key)
// }

// for(let value of map2.values()){
//   console.log(value)
// }

// for(let item of map2.entries()){
//   console.log(item[0], item[1])
// }

// for(let [key, value] of map2){
//   console.log(`${key}, ${value}`)
// }

// console.log([...map2.keys()])
// console.log([...map2.values()])
// console.log([...map2])