//EX1
// const randomWord = $.get("https://random-word-api.herokuapp.com/word")
// .then(function(word){
//     console.log(word)
//     return $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word[0]}`)
// })
// .then(function(book){
//     console.log(book)
// })


//EX2
const randomWord = $.get("https://random-word-api.herokuapp.com/word")
.then(function(word){
    console.log(word)
    let promiseBook =  $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word[0]}`)
    let promiseGif = $.get(`https://api.giphy.com/v1/gifs/search?api_key=qMrRJMKVhx0iyiXYACNaF3C8U7GjFpNj&q=${word}`)
    Promise.all([promiseBook, promiseGif])
    .then(function(res){
        console.log(res[0].items[0].volumeInfo.title)
        $("body").append(`<div>${res[0].items[0].volumeInfo.title}</div>`)
        console.log(res[1].data[0].embed_url)
        $("body").append(`<iframe
        src=${res[1].data[0].embed_url}
        title="description"
      ></iframe>`)

    })

})