console.log([0,1,2,3,4].reduce(function(accumulator,currentValue,currentIndex,array){
    return accumulator + currentValue;
},0));

const myArray = [34,24,124,24]

const answer = myArray.reduce((acc,val) => acc + val);
console.log(answer)