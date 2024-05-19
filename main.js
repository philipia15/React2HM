// const users = [
//     {name: 'Temo', age: 25},
//     {name: 'Lasha', age: 21}, 
//     {name: 'Ana', age: 28}];

// function getYoungestName(users){
//     let youngest = users[0];
//     for(i = 1; i < users.length; i++){
//         if(users[i]<youngest){
//             youngest = users[i];
//         }
//         return youngest.name;
//     }
// }
// console.log(getYoungestName(users));



// --------------------------------------------2

// const users ={name: 'Temo', age: 25, email: "temo@gmail.com"};

// function cloneUser(user) {
//     const newUser = {};
//     for (let key in user) {
//         if (user.hasOwnProperty(key)) {
//             newUser[key] = user[key];
//         }
//     }

//     return newUser;
// }
// const cloneduser = cloneUser(users);
// console.log(cloneduser);
// console.log(users);


// -------------------------------------------------3


// function roolDice(){
//     return Math.floor(Math.random() * 6) + 1;
// }

// function playGame(){
//     let A = 0;
//     let B = 0;

// while(true){
//     A++;
//     if(roolDice()===3){
//         break;
//     }
// }
// while(true){
//     B++;
//     if(roolDice()===3){
//         break;
//     }
// }

// if (A < B) {
//     console.log("Player A wins in " + A + " tries!");
// } else if (B < A) {
//     console.log("Player B wins in " + B + " tries!");
// } else {
//     console.log("It's a tie!");
// }
// }
// playGame();
