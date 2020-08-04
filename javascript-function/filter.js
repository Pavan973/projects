const words = ["spray", "limit","elite","exuberant","destruction","present","happy"]

let longwords = words.filter(word => word.length>6);
console.log(longwords);


const myArray = [24,2,345,24,2]

const ans = myArray.filter(l => {
    return l>24;
})
console.log(ans)