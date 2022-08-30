window.onload = function() {
    $("body").append(`<div class = "box" style = "border-radius : 10px"></div>`)
    $("body").append(`<div class = "box" style = "border-radius : 10px"></div>`)
  };

$("body").on("mouseenter", ".box", function(){
    console.log("ds")
    this.style.backgroundColor="red"
})

$("body").on("mouseout", ".box", function(){
    console.log("ds")
    this.style.backgroundColor=""
})