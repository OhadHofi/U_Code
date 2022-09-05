$("#container").on("click", function(){
    $(this).css("background-color", "#f39c12");
})

const func = async function(){
    let data = await $.get("http://data.nba.net/10s/prod/v1/2016/players.json")
    console.log(data)
}

func()