const ArrayManipulator = require("./ArrayManipulator.js")

test("should convert two arrays of equal length to a single object with key-values from the arrays", function(){
    const am = new ArrayManipulator()

    const x = ["food", "item", "location"]
    const y = ["cherry", "lightbulb", "Tazmania"]

    const res = am.manipulate(x, y)

    
    expect(res).toEqual({
        food: "cherry",
        item: "lightbulb",
        location: "Tazmania"
    })

})


test("should return a message when array lengths don't match", () => {
    const am = new ArrayManipulator()

    let x = ["food", "item", "location"]
    let y = ["cherry", "lightbulb"]

    const res = am.manipulate(x ,y)

    expect(res).toEqual({error: "Array lengths don't match" })
})