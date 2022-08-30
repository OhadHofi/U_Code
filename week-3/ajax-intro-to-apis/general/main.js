// // check spot1
// $.get("https://www.googleapis.com/books/v1/volumes?q=name%20of%20the%20wind", function(result){
//     console.log(result.items[0].volumeInfo.description) 
// })


// // check spot 2
// $.get("https://jsonplaceholder.typicode.com/users", function(users){
//   //extract the geo data of the first user
// ﻿
//   console.log(users[users.length - 1].company.catchPhrase)
  
//   //log the dataconsole.log(`${lat}, ${long}`) //prints -37.3159, 81.1496
// })


// // check spot 3
// const useData=eData = function(data){
//     console.log(data)
// }

// $.ajax({
//     mathod: "GET",
//     url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
//     success: useData
// })


// check spot 4
const fetch = function(){
    $.ajax({
        method: "GET",
        url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
        success: function (data) {
            console.log(data)
        },
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
}