function checkTypeNumber(givenNumber) {
    if(Number.isInteger(givenNumber)) {
        if(givenNumber %2 == 0) {
            return hasil = "Bilangan Genap"
        }
        else if(givenNumber %2 == 1) {
            return hasil = "Bilangan Ganjil"
        }
    }
}



console.log(checkTypeNumber(10))
console.log(checkTypeNumber(3))
console.log(checkTypeNumber("3"))
console.log(checkTypeNumber({}))
console.log(checkTypeNumber([]))
console.log(checkTypeNumber())