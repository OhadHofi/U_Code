var classData = {
    classmates: [
        {name: "That on gal", description: "Always has the ansswer", socialNetwork: true},
        {name: "The weird dude", description: "Quick with a smile", socialNetwork: false},
        {name: "Taylor", description: "Just Taylor", socialNetwork: true}
    ]
}

const source = $("#student-template").html()
const template = Handlebars.compile(source)
const newHTML = template(classData)

$(".classroom").append(newHTML)


