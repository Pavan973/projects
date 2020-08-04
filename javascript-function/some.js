function isBiggerThan10(element, index, array){
    return element>10;
}
console.log([2,5,8,1,4].some(isBiggerThan10));//false
console.log([12,5,8,1,4].some(isBiggerThan10));//true