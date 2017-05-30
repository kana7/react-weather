// function getTempPromise(location){
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve(79);
//       reject('city not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Philadelphia').then(function(data){
//   console.log('promise success', data);
// },
// function(err){
//   console.log('promise error', err);
// });


function addPromise(a, b){
  return new Promise(function(resolve, reject){
    if(typeof a ==="number" && typeof b ==="number"){
      resolve(a+b);
    }else{
      reject('not a number');
    }
  });
}

addPromise(400,745).then(function(data){
  console.log('success! : '+data );
}, function(err){
  console.log('error : '+err);
});
