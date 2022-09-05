const tempArr = JSON.parse(localStorage.wisdom || "[]")
const wisdom = []
console.log(tempArr[tempArr.length-1])
let count = tempArr[tempArr.length-1] ? tempArr[tempArr.length-1].id : 0

const source = $("#output-template").html()
const template = Handlebars.compile(source)

$("#button").on("click",function(){
    const newInput = $("#input").val()
    wisdom.push({text: newInput, id: count})
    $("#input").val("")
    $("#output").append(template(wisdom[wisdom.length-1]))


    if(count % 2 == 0){
        const tempWisdomArr = JSON.parse(localStorage.wisdom || "[]")
        let temp = wisdom[wisdom.length-2]
        if(temp){
            tempWisdomArr.push(wisdom[wisdom.length-2])
            console.log(wisdom[wisdom.length-2])
        }
        tempWisdomArr.push(wisdom[wisdom.length-1])
        console.log(wisdom[wisdom.length-1])

        console.log(tempWisdomArr)
        localStorage.wisdom=JSON.stringify(tempWisdomArr)
    }
    count++
})

const wisdomArr = JSON.parse(localStorage.wisdom || "[]")
wisdomArr.forEach(element => {
    $("#output").append(template(element))
});

$("#clearWisdom").on("click", function(){
    localStorage.clear()
})


$(".remove").on("click",$("#output"),function(){
    console.log("sadfg")
    // const input = $(this).closest("div").text()
    const idAttr = $(this).closest("div").attr("id")
    // console.log(input)
    console.log(idAttr)

    let wisdomArr = JSON.parse(localStorage.wisdom || "[]")
    console.log(wisdomArr)
    wisdomArr = wisdomArr.filter(w => w.id!=idAttr)
    console.log(wisdomArr)

})



















