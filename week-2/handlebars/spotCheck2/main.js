const animals = ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"]

const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"]

const render1 = function(arr){
    const source = $("#template1-arr").html()
    const template = Handlebars.compile(source)
    return template({list : arr})
}

const render2 = function(arr){
    const source = $("#template2-arr").html()
    const template = Handlebars.compile(source)
    return template({list : arr})
}

$("#container").append(render1(animals))
$("#container").append(render2(animals))
$("#container").append(render1(languages))
$("#container").append(render2(languages))