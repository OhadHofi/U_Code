// // E1
// const push = function () {
//     console.log("pushing it!")
//   }
  
//   const pull = function () {
//     console.log("pulling it!")
//   }
  
//   const pushPull = function (func){
//     func()
// }
//   pushPull(push) //should print "pushing it!"
//   pushPull(pull) //should print "pulling it!"


// // E2
//   const returnTime = function (time) {
//     alert('The current time is: ' + time)
//   }
  
//   const getTime = function(func){
//     func(new Date());
//   }
//   getTime(returnTime)


// // E3
// const displayData = function (alertDataFunc, logDataFunc, data) {
//     alertDataFunc(data);
//     logDataFunc(data);
//   };
  
//   const logData = function (data) {
//     console.log(data)
//   };
  
//   displayData(alert, logData, "I like to party")



// // E4
// const sum3Numbers = (num1, num2, num3) => num1+num2+num3

// console.log(sum3Numbers(1,2,3));



// // E5
// const capitalize = str => str[0].toUpperCase() + str.substring(1,str.length).toLowerCase()
    

// console.log(capitalize("bOb")) // returns Bob
// capitalize("TAYLOR") // returns Taylor
// capitalize("feliSHIA") // returns Felishia



// // E6
// const determineWeather = temp => {
//     if(temp > 25){
//       return "hot"
//     }
//     return "cold"
//   }

//   const commentOnWeather = temp => `it's ${determineWeather(temp)}`

//   console.log(commentOnWeather(22))
//   console.log(commentOnWeather(27))




// // E7
// const explode = (lightFunc, soundFunc, sound) => {
//     lightFunc()
//     soundFunc(sound)
//   }
      
//   const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
      
//   const makeSound = sound => alert(sound)
      
//   explode(shineLight, makeSound, "BOOM")


const run = (name) => {console.log("Run, " + name + ", run!")}
const yell = function(action){
    let env = "Forest"
    action(env)
}
run(yell)