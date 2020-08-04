//asyncawait example
// async always returns promise
 console.log("person 1 : shows tickets");
 console.log("person 2: shows tickets");

const preMovie = async () => 'premovie';
preMovie().then((m) => console.log(m) );

 console.log("person 3: shows ticket");
 console.log("person 4: shows ticket");

 //---------------------------------------------------------------------------
 // this is separate
 console.log("person 1 : shows tickets");
 console.log("person 2: shows tickets");

const preMovie1 = async () => {
    const promiseWifeBringTicks = new Promise((resolve,reject) => {
        setTimeout(() => resolve('ticket'),3000);
    });
    let ticke= await promiseWifeBringTicks;
    return  ticke;
}
preMovie1().then((m) => console.log(m) );

 console.log("person 3: shows ticket");
 console.log("person 4: shows ticket");

