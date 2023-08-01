// Printing function
// alert("connected..")
// document.write("hello js")
// console.log("hello js")
// var a = 24 // number intiger
// let b = "34" // string
// const name = "Ray"; // constant
// alert(name)
// taking input
// const n1 = Number(prompt("enter the first Number:"));
// const n2 = Number(prompt("eneter second number : "));
// alert(n1 + n2)
// const a = Number(prompt())
// const b = Number(prompt())
// document.write(`Addition  ${a + b}`)
// array and array method
// const number = [1,2,3,4,5,6];
// console.log(number); // output -> [1, 2, 3, 4, 5, 6]
// alert(number.length);// length
// number.toString()
// console.log(typeof(number))
// console.log(number.join(" 1 ")) // join()
// number.pop()
// console.log(number)// output -> [1, 2, 3, 4, 5]
// number.push(9)
// console.log(number)
// // let number2 = number.shift();
// // console.log(number2)
// number.unshift(10)
// console.log(number) //[10, 1, 2, 3, 4, 5,9]
// // +, - , /, %, **
// const city = ["kolkata", "Mumbai", "delhi", "chennai"];
// console.log(city)
// city[city.length - 2] = "New Delhi";
// delete city[2]
// console.log(city)
// const array = [[2,3],[3,4],[7,9]];
// console.log(array)
// var arraynew = array.flat() // from 2d array to 1 d array
// console.log(arraynew)
// const city = ["kolkata", "Mumbai", "delhi", "chennai"];
// var citynew = city.slice(1,3);// slicing
// console.log(citynew)
// shorting
// const number = [6,4,2,1,3];
// console.log(number)
// number.sort()
// console.log(number)
// number.reverse();
// console.log(number)
// const a = Math.floor(Math.random() * 10) // random
// console.log(a)
// Boolean
//true and False
// const a = true
// const b = false
// console.log(b)
// const n1 = Number(prompt("enter the first Number:"));
// const n2 = Number(prompt("eneter second number : "));
// const op = prompt("enter add,min,div,rim");
// function add(){
   
//     document.write(n1 + n2)
// }
// add()
// switch (key) {
//     case value:
        
//         break; 

//     default:
//         break;
// }
// calculator
// const Number1 = Number(prompt("enter first number"));
// const Number2 = Number(prompt("Enter the second Number:"));
// const operation = Number(prompt("+,-,X,/,% -> press 0,1,2,3,4,5"));
// let result;
// switch (operation){
//     case 0:
//         result = Number1 + Number2;
//         break;
//     case 1:
//         result = Number1 - Number2;
//         break;
//     case 2:
//         result = Number1 * Number2;
//         break;
//     case 3:
//         result = Number1 / Number2;
//         break;
//     case 4:
//         result = Number1 % Number2;
//         break;
    
// }
// document.write(result)

// let a = 0;
// let b = 0;
// function myfunction(a , b){
//     const result = a + b;
//     alert(result)
// }
// myfunction(4,5)
// function clock(){
//     const today = new Date();
//     let h = today.getHours();
//     let m = today.getMinutes();
//     let s = today.getSeconds();
//     document.querySelector("#head").innerHTML = h + ":" + m + ":" + s ;
//     setTimeout(clock,1000);

// }
// clock()
var audio = new Audio("mp.mp3");
function myfunction(){
    audio.play()
    document.querySelector(".play").classList.add("visible");
    document.querySelector(".pause").classList.remove("visible");
}

function myclick(){
    audio.pause()
    document.querySelector(".pause").classList.add("visible");
    document.querySelector(".play").classList.remove("visible");

}

