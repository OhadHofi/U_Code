class CodeToCheck{
    constructor(){}
    add = function(a, b){
        return a + b
    }

    calculateHyp = function(a, b){
        return Math.sqrt(a*a + b*b)
    }

    removeBugs = function (code) {
        return code.filter(c => c != "BUG")
    }

    clearLowPriority = function (code) {
        return code.filter(c => c.priority === "HIGH")
    }
}


module.exports = CodeToCheck