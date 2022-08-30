const fruits = [
    { name: "Orange", color: "orange" },
    { name: "Banana", color: "yellow" },
    { name: "Coconut", color: "brown" },
    { name: "Kiwi", color: "brown" },
    { name: "Lemon", color: "yellow" },
    { name: "Cucumber", color: "green" },
    { name: "Persimmon", color: "orange" },
    { name: "Pumpkin", color: "orange" }
  ]


  for (const fruit of fruits){
    const newDiv = `<div class = "${fruit.color}">${fruit.name}</div>`
    console.log(newDiv)
    $("#basket").append($(newDiv))

  }




  let posts = [{name: 'Shoobert'}, {name: 'Kayne'}]

for(let post of posts){
    $("#posts").append(`
        <div>${post.name}</div><input type="text" placeholder="say something nice" />
    `)
}

posts.splice(0, 1)