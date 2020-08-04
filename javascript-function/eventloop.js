function multiply(a,b) {
    return a*b;
}

function square(n){
   return multiply(n ,n); 
}

function printSquare(n){
    var squared = square(n);
    console.log(squared);
}

printSquare(4);

/*
function foo() {
    throw new Error('oops');
}

function bar() {
    foo();
}

function baz(){
    bar();
}

baz();*/

/*

function foo () {
    return foo();
}

foo();
*/

/*
//blocking
var foo = $.getSync('//foo.com');
var bar = $.getSync('//bar.com');
var qux = $.getSync('//qux.com');

console.log(foo);
console.log(bar);
console.log(qux);
*/