//////////EX!
// const fetch = function(isbn){
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
//         success: function (data) {
//             console.log(data)
//         },
//         error: function (xhr, text, error) {
//             console.log(text)
//         }
//     })
// }

// fetch(9782806269171)
// fetch(1440633908)
// fetch(9781945048470)
// fetch(9780307417138)





//////EX2
// const fetch = function(isbqueryType, queryValue){
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=${isbqueryType}:${queryValue}`,
//         success: function (data) {
//             console.log(data)
//         },
//         error: function (xhr, text, error) {
//             console.log(text)
//         }
//     })
// }

// fetch("isbn", 9789814561778)
// fetch("title", "How to Win Friends and Influence People")






////////EX3
// const fetch = function(isbqueryType, queryValue){
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=${isbqueryType}:${queryValue}`,

//         success: function (data) {
//             data.items.forEach(printTitleAuthorISBN)
//         },
//         error: function (xhr, text, error) {
//             console.log(text)
//         }
//     })
// }

// fetch("isbn", 9789814561778)
// fetch("title", "How to Win Friends and Influence People")


// const printTitleAuthorISBN = function(data){
//     console.log(`title: ${data.volumeInfo.title} 
//     author: ${data.volumeInfo.authors} 
//     ISBN: ${data.volumeInfo.industryIdentifiers}`)
// }




//////////EX4
// $.ajax({
//     method: "GET",
//     url: `https://api.giphy.com/v1/gifs/search?api_key=qMrRJMKVhx0iyiXYACNaF3C8U7GjFpNj&q=cat`,
//     success: function (result) {
//              $("#gif").attr("src",result.data[0].embed_url)
//          }
// })




//////////EX5

$("#btn").on("click",function(){
    renderGif($("input").val())
})




const renderGif = function(gifId){
    $.ajax({
        method: "GET",
        url: `https://api.giphy.com/v1/gifs/search?api_key=qMrRJMKVhx0iyiXYACNaF3C8U7GjFpNj&q=${gifId}`,
        success: function (result) {
                 $("#gif").attr("src",result.data[0].embed_url)
             }
    })
}