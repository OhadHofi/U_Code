$(".item").on("click", function(){
    if($(this).text() != "Umbrella"){
        $("#cart").append(`<div class=cart-item>${$(this).text()}</div>`)

    }
})