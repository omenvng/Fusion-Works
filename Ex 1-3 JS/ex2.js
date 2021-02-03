 
const arr= Array.from({length:1000},()=>Math.round(Math.random()*900+1));
let s = new Set();
arr.forEach((e) => s.add(e));
console.log(s.size);