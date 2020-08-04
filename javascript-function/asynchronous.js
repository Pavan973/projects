// [1,2,3,4].forEach(function (i){
//     console.log(i);
// });

var i = [1,2,3,4];
console.log(i);

function asyncForEach(array ,cb){
    array.forEach(function(){
        setTimeout(cb,10);
    })
}

asyncForEach([1,2,3,4],function(i){
    console.log(i);
})