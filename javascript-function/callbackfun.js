let x = function(){
    console.log("i am called from inside a function")
};

let y = function(x){
 console.log('do something');
}

y(x);
x();
//-------------------------------------------------------
let z = function(){
    console.log("i am great")
}

let b = function(callback){
    console.log("do something")
    callback();
}

b(z);
//--------------------------------------------------------

let add = function(a,b){
    return a+b;
}

let multiply = function(a,b){
    return a*b;
}

let calc = function(num1,num2,callback1){
return callback1(num1,num2);
}
console.log(calc(2,3,add));
//---------------------------------------------------------
console.log(calc(2,3,function(a,b){
    return a-b;
}))
//----------------------------------------------------------
//to check whether passed parameter is function use this
//let calc = function(num1,num2,callback){
 //   if(typeof callback === "function"){
  //      return callback(num1,num2);
 //   }
//}