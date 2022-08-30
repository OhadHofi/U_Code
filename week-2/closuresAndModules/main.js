// const mathOper = function(){
// // spot check 2
//     const add = function(x,y){
//         return x+y;
//     }

//     const subtract = function(x,y){
//         return x-y;
//     }

//     const multiply = function(x,y){
//         return x*y;
//     }

//     const divide = function(x,y){
//         return x/y;
//     }

//     return {
//         add: add,
//         sub: subtract,
//         mul: multiply,
//         div: divide
//     }
// }

// const m = mathOper();
// console.log(m.add(1,2))
// console.log(m.sub(4,5))
// console.log(m.div(3,7))
// console.log(m.mul(2,6))





// // spot check 3

// const UsersModule = function () {
//     const _users = ['Aaron', 'Avi'];

//     const addUser = function (user) {
//         _users.push(user)
//     }

//     const listUsers = function () {
//         for (let user of _users) {
//             console.log(user)
//         }
//     }

//     return {
//         addUser: addUser,
//         listUsers: listUsers
//     }
// }

// const usersModule = UsersModule()

// usersModule.addUser('Narkis')
// usersModule.addUser('itay')
// usersModule.listUsers()
// console.log(usersModule.users)




/////// //Ex 9

// // E1
// const StringFormatter = function(){
//     const capitalizeFirst = str => str[0].toUpperCase() + str.substring(1,str.length).toLowerCase()

//     const skewerCase = str => str.replace(/ /,"-")

//     return {
//         capitalizeFirst: capitalizeFirst,
//         skewerCase, skewerCase
//     }
// }

// const formatter = StringFormatter()

// console.log(formatter.capitalizeFirst("dorothy"))  //should print Dorothy
// console.log(formatter.skewerCase("blue box"))  //should print blue-box




// // E2
// const Bank = function(){
//     money  = 500

//     const depositCash = cash => money+=cash
//     const checkBalance  = () => money

//     return{
//         deposit: depositCash,
//         showBalance: checkBalance
//     }
// }

// const bank = Bank()
// console.log(bank.deposit(200))
// console.log(bank.deposit(250))
// console.log(bank.showBalance()) //should print 950





// Ex3
const SongsManager = function(){
    const songs = {
        "sax": "3JZ4pnNtyxQ",
        "how long": "CwfoyVa980U"
      }

    const addSong = function(songName, url){
        songs[songName] = url.split("=")[1]
    }

    const getSong = function(song){
        return "https://www.youtube.com/watch?v=" + songs[song]
    }
    return{
        addSong: addSong,
        getSong: getSong
    }
}


const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
console.log(songsManager.getSong("ain't me"))  // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ