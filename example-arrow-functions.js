var names = ['Andrew', 'Julie', 'Jen'];
//
// names.forEach(function(name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowEach', name);
//   console.log('something else');
// });
//
// names.forEach((name) => console.log('One line', name));

var returnMe = (name) => name + '!';
console.log(returnMe('Andrew'));

var person = {
  name: 'Andrew',
  greet: function() {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name);
    });
  }
}

person.greet();
