const Exercises = require(`./Exercises`)

test("should return true if n is even, false otherwise", ()=>{
    const ex = new Exercises()

    expect(ex.isEven(2)).toBeTruthy()
    expect(ex.isEven(3)).not.toBeTruthy()
    expect(ex.isEven(4)).toBeTruthy()
    expect(ex.isEven(5)).not.toBeTruthy()
})

test("should return array with at least one value less", ()=>{
    const ex = new Exercises()
    const arr = [1,2,3,"trg","sfdb",{text: "some Text"},4,"sdfv sfd",5]
    const arrLengthBeforeRemove = arr.length
    const res = ex.removeAtLeastOne(arr)
    expect(ex.removeAtLeastOne(arr).length).toBeLessThan(arrLengthBeforeRemove)
})


test(`should return a clean string without these symbols: "!", "#", ".", ",", "'"`, ()=>{
    const ex = new Exercises()
    const shouldBeRemove = [ "!", "#", ".", ",", "'"]
    
    let str = `sder!##.fd,!fdsv.`
    const res = ex.simplify(str)
    shouldBeRemove.forEach(s => expect(res).not.toContain(s))
})

test('should verify that res is error obj if there no exist any boolean obj in the array', ()=>{
    const ex = new Exercises()
    const arr1 = ["true", "1", "false","false","false",3, 6]

    const numOfTrue = trueCounter(arr1)
    const numOfFalse = falseCounter(arr1)

    if(numOfTrue === 0 && numOfFalse === 0){
        expect(ex.validate(arr1)).toStrictEqual({error: "Need at least one boolean"})
    }
})

test('should return true if there have more true then false in the array', ()=>{
    const ex = new Exercises()
    const arr1 = ["true", true, "1", "false","false","false",3, 6]

    const numOfTrue = trueCounter(arr1)
    const numOfFalse = falseCounter(arr1)

    if(numOfTrue > numOfFalse){
        expect(ex.validate(arr1)).toBeTruthy()
    }
})

test('should return false if there have more false then true in the array', ()=>{
    const ex = new Exercises()
    const arr1 = ["true", false, "1", "false","false","false",3, 6]

    const numOfTrue = trueCounter(arr1)
    const numOfFalse = falseCounter(arr1)

    if(numOfTrue < numOfFalse){
        expect(ex.validate(arr1)).toBeFalsy()
    }
})

const trueCounter = function(arr){
    let trueCount = 0
    for(const o of arr){
        if (typeof o == "boolean" && o) {
            trueCount++
        }
    }
    return trueCount
}

const falseCounter = function(arr){
    let falseCount = 0
    for(const o of arr){
        if (typeof o == "boolean" && !o) {
            falseCount++
        }
    }
    return falseCount
}