var sentence ="hELlo THERE, hOW ARE yOu doINg?"
// console.log(sentence)
var newSentence = function(word){
    var first = word[0]
    var last = word.slice(1)
    console.log(first.toUpperCase() + last.toLowerCase())
}
// newSentence(sentence)
// console.log(sentence[0].toUpperCase() + sentence.slice(1).toLowerCase())

// newSentence("mArYam")

var pass = function(age, accompanied){
    if(age <= 12 && accompanied === true){
        console.log("You are allowed to go in")
    } else {
        console.log("You're not allowed to go in")
    }
}

pass(15, true)