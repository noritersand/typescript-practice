
let obj2: { 
  name: string,
  age: number
} = {
  name: 'Waldo',
  age: 192
};



function fn3(obj3: {
  name: string,
  age: number
}) {
  
  obj3.name.substring(1);
  obj3.age.toExponential();

};

fn3({
  name: 'waldo', age: 17
});


