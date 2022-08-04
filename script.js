// let drink = prompt("What is your favorite drink currently?")
// console.log(drink)
// if (drink ==="water") {
//     alert ("water is the best")
// } 

// else if (response = " "); {
//     alert ("Welcome!")
// };

// const usersName = prompt ("What is your name?");
// console.log(usersName);

// console.log("Hi " + usersName + "!");

function usersDrink(){
    const drink = prompt("What is your favorite drink?")
console.log(drink)
if (drink ==="water") 
    alert ("Water is the best")
}

usersDrink()

let myFavDrink = "water";

let response ;
while(response !== myFavDrink){
  response = prompt ("Whats my favorite drink?");
if (response !== myFavDrink){
  alert("Dude... come on... it's that one clear one")
}
}

// function usersDrink(){
//     let correctAnswer = "water";
//     let usersGuess = prompt ("What's your favorite drink?");
//     if (usersGuess == correctAnswer){
//     alert("Water is the best!");
//     } else ("That's not right...");
//     guessUsersDrink();
//     }



function usersDifferentResponse(){
    if (response = " "); 
        alert ("Welcome!")
};

// usersDifferentResponse()

// function usersName(){
//     const usersName = prompt ("What is your name?");
// console.log(usersName);

// console.log("Hi " + usersName + "!");
// }

// usersName()

function userReviewOfPage(){
    let thumbsUp = prompt ("Give an honest review of this page from 1-5 // 1 being the lowest and 5 being the highest.");
    for (let i = 0; i < thumbsUp; i++){document.write('<img class="thumbPicture" src="https://media.istockphoto.com/vectors/thumbs-up-vector-line-icon-vector-id930887456?k=20&m=930887456&s=612x612&w=0&h=YJ2fVk2NP2lPHj3cEFw6aLyPx8ccbZkOOovuRrFcarw=" />');}
}