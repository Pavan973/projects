console.log('person1 : shows ticket');
console.log('person2: shows ticket');
const preMovie = async () => {
const promiseWifeBringingTicks = new Promise((resolve,reject) =>  resolve('ticket'));
const addButter = new Promise((resolve,reject) =>  resolve('butter'));
const getPopcorn = new Promise((resolve,reject) =>  resolve('popcorn'));

let tick = await promiseWifeBringingTicks;
 
let [popcor,butter] = await Promise.all([getPopcorn,addButter])
  console.log(`${popcor},${butter}`);
   return tick;
}
preMovie().then((m) => console.log(m));

console.log("person 4 : ticket");

//what if wife didnt return
/*
let ticket
try{
     ticket = await promiseWifeBringingTicks;
} catch(e){
    ticket ='sad face';
}



*/