// // // Exercise 1
// // // const person = {
// // //     hungry: true,
  
// // //     feed: function () {
// // //       if (this.hungry) {
// // //         this.hungry = false;
// // //         alert('Im no longer hungry!')
// // //       }
// // //     }
// // //   }  
  
// // //   person.feed() //should alert "I'm no longer hungry"







// // //   




// // //Exercise 3


// // // const pumpFuel = function (plane) {
// // //     plane.fuel += 1;
// // //   };
  
// // //   const airplane = {
// // //     fuel:0 ,
// // //     fly: function () {
// // //       if (this.fuel < 2) {
// // //         return 'on the ground!';
// // //       }
// // //       else {
// // //         return 'flying!';
// // //       }
// // //     }
// // //   };
  
// // //   console.log('The plane should not be able to fly (yet): ' + airplane.fly());
  
// // //     pumpFuel(airplane);
// // //   console.log('The plane should STILL not be able to fly: ' + airplane.fly());
  
// // //   pumpFuel(airplane);
// // //   console.log('Take off! ' + airplane.fly());







// // // Exercise 4


// // // const tipJar = {
// // //     coinCount: 20,
// // //     tip: function () {
// // //       this.coinCount += 1;
// // //     },
// // //     stealCoins: function (number){
// // //     this.coinCount-=number;
// // //     }
// // //   };
  
// // //   tipJar.tip();
// // //   console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);
  
// // //   tipJar.stealCoins(3);
// // //   console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);
  
// // //   tipJar.stealCoins(10);
// // //   console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);







// // // Exercise 5

// // const revealSecret = function () {
// //     return this.secret;
// //   };
  
// //   const shoutIt = function (person, func) {
// //     person.revealItAll = func;
// //     const result = person.revealItAll();
// //     alert(person.name + " said: " + result);
// //   };
  
// //   const avi = {
// //     name: "Avi",
// //     secret: "Im scared of snakes!",
// //   };
  
// //   const narkis = {
// //     name: "Narkis",
// //     secret: "I dont have secrets because I'm zen like that.",
// //   };
  
// //   shoutIt(avi, revealSecret);
// //   shoutIt(narkis, revealSecret);





// // Exercise 6

// // const coffeeShop = {
// //     beans: 40,
  
// //     drinkRequirements: {
// //       latte: 10,
// //       americano: 5,
// //       doubleShot: 15,
// //       frenchPress: 12
// //     },
  
// //     makeDrink: function (drinkType) {
// //       // TODO: Finish this method
//     //   const derinkOptions = Object.keys(this.drinkRequirements);
//     //     if(derinkOptions.includes(drinkType)){
// //       if(this.beans>this.drinkRequirements[drinkType]){
// //                 this.beans-=this.drinkRequirements[drinkType];
// //             }else{
// //                 console.log("Sorry, we’re all out of beans!");
// //             }
// //       }else{
// //         console.log("Sorry, we don’t make "+drinkType);
// //       }
// //     }
// //   }
  
// //   coffeeShop.makeDrink("latte"); 
// //   coffeeShop.makeDrink("americano");
// //   coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
// //   coffeeShop.makeDrink("doubleShot");
// //   coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"



//   // EXERCISE 6.1
// // Extension 1

  
// // const coffeeShop = {
// //     beans: 40,
  
// //     drinkRequirements: {
// //       latte: 10,
// //       americano: 5,
// //       doubleShot: 15,
// //       frenchPress: 12
// //     },
// //     money:0,
// //     buyBeans:function (numBeans){
// //         //1 : 1
// //         this.money-=numBeans;
// //         this.beans+=numBeans;
// //     },
  
// //     makeDrink: function (drinkType) {
// //       // TODO: Finish this method
// //       const derinkOptions = Object.keys(this.drinkRequirements);
//   //     if(derinkOptions.includes(drinkType)){
// //       if(this.beans>this.drinkRequirements[drinkType]){
// //                 this.beans-=this.drinkRequirements[drinkType];
// //             }else{
// //                 console.log("Sorry, we’re all out of beans!");
// //             }
// //       }else{
// //         console.log("Sorry, we don’t make "+drinkType);
// //       }
// //     }
// //   }
  
// //   coffeeShop.makeDrink("latte"); 
// //   coffeeShop.makeDrink("americano");
// //   coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
// //   coffeeShop.makeDrink("doubleShot");
// //   coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"







//   // Extension 2
    
// const coffeeShop = {
//     beans: 40,
  
//     drinkRequirements: {
//         latte: {beanRequirement: 10, price: 5},
//         americano: {beanRequirement: 5, price: 2.5},
//         doubleShot: {beanRequirement: 15, price: 7.5},
//         frenchPress: {beanRequirement: 12, price: 6}
//     },
//     money:0,
//     buyBeans:function (numBeans){
//         //1 : 1
//         this.money-=numBeans;
//         this.beans+=numBeans;
//     },
  
//     butDrimk: function(drinkType){
//         this.money+=this.drinkRequirements[drinkType].price;
//         this.makeDrink(drinkType);
//     },

//     makeDrink: function (drinkType) {
//       // TODO: Finish this method
//       const derinkOptions = Object.keys(this.drinkRequirements);
//          if(derinkOptions.includes(drinkType)){
//             if(this.beans>this.drinkRequirements[drinkType].beanRequirement){
//                 this.beans-=this.drinkRequirements[drinkType].beanRequirement;
//             }else{
//                 console.log("Sorry, we’re all out of beans!");
//             }
//       }else{
//         console.log("Sorry, we don’t make "+drinkType);
//       }
//     }
//   }
  
//   coffeeShop.makeDrink("latte"); 
//   coffeeShop.makeDrink("americano");
//   coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
//   coffeeShop.makeDrink("doubleShot");
//   coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"





