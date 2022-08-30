const posts = [
    { name: "ohad", text: "post1" },
    { name: "itay", text: "post2" },
    { name: "shalev", text: "post3" },
    { name: "matan", text: "post4" },
    { name: "tom", text: "post5" },
]

const render = function () {
    $("#posts").empty()
    for (const post of posts) {
        $("#posts").append(`<div>${post.name} ${post.text}</div>`)
    }
}

$("#btn").on("click", function () {
    console.log("fs")
    posts.push({
        name: $("#name-input").val(),
        text: $("#text-input").val()
    })
    $("#name-input").val("")
    $("#text-input").val("")
    render()
})

render()
