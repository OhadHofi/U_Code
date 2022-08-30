// // E1

// $("#human-btn").on("click", function(){
//     $("#human-list").append(`<li>${$("#human-input").val()}</li>`)
//     $("#human-input").val("")
// })


// E2
$("#human-btn").on("click", function(){
    $("#human-list").append(`<li class = "human">${$("#human-input").val()}</li>`)
    $("#human-input").val("")
})

$("#human-list").on("click", ".human", function(){
    this.remove()
})



// $("button").click(function(){
//     $("#blogs").append(`<div class="blog">aaa</div>`)
// })


// $("#blogs").click(".blog" ,function(){
//     $(this).text("uncool blog") 

// })

// $("#blogs").on("click", ".blog", function(){
//     $(this).text("uncool blog") 
// })