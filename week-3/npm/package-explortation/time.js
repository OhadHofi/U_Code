const moment = require(`moment`)
let timeNow = new Date()
console.log(timeNow)

let formattedTimeNow = moment().format("MMMM Do, YYYY")
console.log(formattedTimeNow) //January 3rd, 2017


const { request } = require('urllib');

async function run(){
    const { data, res } = await request('http://data.nba.net/10s/prod/v1/2016/players.json');
    console.log(data.toString())
}
//run()



async function getLionKing(){
    const {data ,res} = await request(`http://www.omdbapi.com/?apikey=96fe7dee&t=The+Lion+King`)
    const ret = JSON.parse(data)
    console.log(ret.Released)
}

getLionKing()
