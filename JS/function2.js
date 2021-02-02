

function MyFunction(){
   const arr= Array.from({length:1000},()=>Math.round(Math.random()*900+1));
   var counts= {};
   for (var i=0 ;i < arr.length;i++)
   {
   counts[arr[i]]=1+(counts[arr[i]] || 0);
       }
   console.log(counts.length);
}

  
MyFunction();

let s = new Set();
const arr= Array.from({length:1000},()=>Math.round(Math.random()*900+1)).forEach((e) => s.add(e)).size;

console.log(arr);