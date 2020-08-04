//i = 3; for confuse they will initialize. if const is given error would have been occured
let j = 4;
let k = 1;
for(i=0; i<3; i++){
    k+=j;
    j=j-1;
}
console.log(k);
//separate
for(var i=0;i<5;i++){
    setTimeout(function(){
        console.log(i);
    },100)
}
