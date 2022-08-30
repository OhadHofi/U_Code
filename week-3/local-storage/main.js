const wisdom = []
let count = 0

const source = $("#output-template").html()
const template = Handlebars.compile(source)

$("#button").on("click",function(){
    const newInput = $("#input").val()
    wisdom.push({text: newInput})
    $("#input").val("")
    console.log(newInput)
    $("#output").append(template(wisdom[length-1]))

    if(count % 2 == 0){
        localStorage.wisdom = JSON.stringify(wisdom)
    }
    count++
})

const wisdomArr = JSON.parse(localStorage.wisdom || [])
console.log(wisdomArr)
wisdomArr.forEach(element => {
    console.log(element)
    $("#output").append(template({element}))
});
