const array = [16, 32, 64, 128];
for (let i = 0; i < array.length; i++) {
   setTimeout(function() {
     console.log('Ind_Val: ' + i + ', elem: ' + array[i]);
   }, 1000);
}