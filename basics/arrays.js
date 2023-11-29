const arr=[1, 2, 3, 4]
const arr1=new Array(1, 2, 3, 4);
const arr2=new Array(4);
arr.push(5);
arr.pop();
arr.unshift(9);
arr.shift();
// console.log(arr.includes(9));
// console.log(arr.indexOf(4));

const myArr=arr.join();
// console.log(myArr);
// console.log("A ", myArr);

// const myn1 = arr.slice(1, 3);
// console.log(myn1);
// console.log(typeof arr);

// console.log(Array.isArray(myArr)); 
// console.log(typeof myArr);
// console.log(myArr);

// const myn2 = arr.splice(1, 3);
// console.log(myn2);
// console.log(typeof arr);

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));