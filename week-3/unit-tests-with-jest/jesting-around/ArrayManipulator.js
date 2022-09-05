class ArrayManipulator {
    manipulate(arr1, arr2){
        let res = {}

        if(arr1.length === arr2.length){
            for(let i=0 ; i<arr1.length; i++ ){
                res[arr1[i]] = arr2[i]
            }
        }else{
            res = {error: "Array lengths don't match" }
        }
        return res
    }
}

module.exports = ArrayManipulator