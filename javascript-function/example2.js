console.log('person1 : shows ticket');
console.log('person2: shows ticket');
const preMovie = async () => {
const promiseWifeBringingTicks = new Promise((resolve,reject) =>  resolve('ticket'));
const addButter = new Promise((resolve,reject) =>  resolve('butter'));
const getPopcorn = new Promise((resolve,reject) =>  resolve('popcorn'));

let tick = await promiseWifeBringingTicks;
 console.log(`wife : i have the ${tick}`);
 console.log("husband : we shouldgo in");
 console.log("wife: no i am hungry");

 let popcorn = await getPopcorn;
 console.log(`wife : i have the ${popcorn}`);
  console.log("husband : we shouldgo in");
  console.log("no i need my butter");
  
  let butter = await addButter;
  console.log(`wife : i have the ${butter}`);
   console.log("husband : anything else");
   console.log("wife : lets go");
  
   return tick;
}
preMovie().then((m) => console.log(m));

console.log("person 4 : ticket");