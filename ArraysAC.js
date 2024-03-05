//Collections of item
// //
// let marks =[97,89,74,58,36];
// console.log(marks)


// let Heros = ["Ironman","Hulk","Shaktiman","Spiderman","superman"];
// console.log(Heros);

//Looping on Arrays

// let Heros = ["Ironman","Hulk","Shaktiman","Spiderman","superman"];

// for ( let idx=0; idx<Heros.length; idx++){
//     console.log(Heros[idx]);
// };



//of loop

// let Heros = ["Ironman","Hulk","Shaktiman","Spiderman","superman"];
// for (let hero of Heros){
//     console.log(hero.toUpperCase());
// };




//Practical Questions- 

// let marks=[85,97,44,37,76,60]
// let sum=0;
// for ( let val of marks){
//     sum=sum+val;
   
// }
// let avg=sum/marks.length
// console.log(`Avarage marks of class is = ${avg}` );




//Qs2- 

let items=[250,645,300,900,50];

for ( let i=0; i<items.length; i++){
    
    let offer=items[i]/10
    items[i] = items[i]-offer

}
console.log(items)