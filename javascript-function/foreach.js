const items =['item1', 'item2', 'item3'];
const copy =[];

items.forEach(function(item,index){
    copy.push(item,index);
})
console.log(copy)

////////////////////////////////////////////////////////////////////////

const numbers = [1,2,3,4]
let sum = 1;
numbers.forEach(item => {
    sum += item;
})
console.log(sum)