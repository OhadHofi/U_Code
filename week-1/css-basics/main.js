/*
let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018


if (boughtTesla){
    if(isUSCitizen){
        if(currentYear-yearOfTeslaPurchase >= 4){
            console.log("Would you like to upgrade")
        }else{
            console.log("Are you satisfied with your car?")
        }
    }else{
        console.log("Would you like to move to the US?")
    }
}else{
    console.log("Are you interested in buying one?")
}


const numbers = [1,2,3,4,5,6,7,8,9,10]

//1 delete the second and third elements
numbers.splice(1,2)

//2 change the fourth element to 1
numbers[3]=1

//3 delete the last 4 elements
numbers.splice(numbers.length-4,4)

//4 add another element 0 to the beginning of the array
numbers.splice(0, 0, 0)

//5 print the modified array
console.log(numbers)



let p1 = {
    name: "Ohad",
    age: 26,
    city: "Bait Dagan"
}

let p2 = {
    name: "Shalev",
    age: 27,
    city: "Tel Aviv"
}

if(p1.city == p2.city){
    if(p1.age==p2.age){
        console.log("Jill wanted to date Robert");
    }
}else{
    console.log("Jill wanted to date Robert, but couldn’t");
}



let book1 = {
    title: "who move my cheese?",
    author: "Robin Sharma"
}

let book2 = {
    title: "The Monk Who Sold His Ferrari",
    author: "Robin Sharma"
}

let library = {
    books: [book1, book2]
}


const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }
  
  const name = prompt('Please enter the name for your reservation');

if(toLowerCase(name) == "bob"){
    if(reservations.Bob.claimed==false){
        console.log("Welcome, Bob");
    }else{
        console.log("Hmm, someone already claimed this reservation");
    }
}else if(toLowerCase(name) == "ted"){
    if(reservations.Ted.claimed==false){
        console.log("Welcome, Ted");
    }else{
        console.log("Hmm, someone already claimed this reservation");
    }
}else{
    //3
    //console.log("You have no reservation");

    //3.1
    reservations.name = {claimed: true};
}









*/

const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []


for (let index in names){
    people[index]={name: names[index], age: ages[index]};
}


for (let currPeople of people){
    console.log(currPeople.name +" is " + currPeople.age + " years old");
}


let car = {wheels: 4} 

car['color'] = 'blue';

console.log(car);


console.log(greeter);


    var greeter = "hey hi";



    




    const serveOrders = function (orders) {

        for (let order of orders) {
            let specialOrder = "special " + order
            console.log("Served a " + specialOrder)
        }
    
        console.log("Finished serving all the orders: " + orders)
    }
    const allOrders = ["fish", "lettuce plate", "curious cheese"]
    serveOrders(allOrders)
    




 
    const person = {
        name: "Julius",
        speak: function(food) {
          console.log("I like "+food)
        }
      }


      console.log(person.name) //you know what this will do

person.speak("cheese toast") //and this? Try it out!



const isEven = function (num){
    return num%2===0;
}

console.log(isEven(4));
console.log(isEven(5));


const printAllOdd = function(arr){
    for(let num of arr){
        if(!isEven(num)){
            console.log(num);
        }
    }
}

printAllOdd([1,2,3,4,5,6]);



let checkExists = function (arr , num){
    for(currNum of arr){
        if(currNum===num){
            return true;
        }
    }
    return false;
    
}



console.log("___________");
console.log(checkExists([1, 2, 3], 5));
console.log(checkExists([1, 2, 3], 2));



const calculator={
    add : function(a,b){
        return a+b;
    },
    subtract : function(a,b){
        return a-b;
    }
}



const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42




const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"


function increaseByNameLength(money, name){
    return name.length*money;

}

function makeRegal(name){
    return "His Royal Highness, "+name;
}