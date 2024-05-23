// arr = [
//     {name: "Temo",
//     age: 45}, 
//     {name: "Alex",
//     age: 30}, 
//     {name: "Polina", 
//     age: 10}
// ];



//  function minAge(arr) {
//     let min = arr[0].age;
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i].age < min) {
//             min = arr[i].age;
//         }
//     }
//     return min;
//  }

//  console.log(minAge(arr));



// let  user ={
//     name : "Temo",
//     age : 45
// }
// let user2 = function copy(user) {
//     let c = {};
//     for(let kay in user){
//         c[kay] =user[kay];
//     }
//     return c;
// }
// console.log(user);
// console.log(user2(user));



function getRandomNumber() {
    return parseInt(Math.random() * 6) +1;
}

let result1 = getRandomNumber();
let result2 = getRandomNumber();
let i = 0;
let j = 0;


function firstPlayer(){
    while(result1 !== 3){
    i++;
    result1 = getRandomNumber();
    console.log("first "+ result1);
}
}
function secondPlayer(){
while(result2 !== 3){
    j++;
    result2 = getRandomNumber();
    console.log("second "+ result2);
}
}

firstPlayer(); 
secondPlayer();
if (i < j){
    console.log("first player won");
}
else if(i > j){
    console.log("second player won");
}
else{
    console.log("DRAW");
}






