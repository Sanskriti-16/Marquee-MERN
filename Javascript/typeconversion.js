 debugger;
 x = 30;
 console.log(`Value of X is ${x}`); //30
 greet();//Hello
  
 console.log(`Value of X 2 is ${y} `); //undefined
 var y = 12;
 console.log(`Value of y is ${y}`); //12

 var x=10; 
 console.log(`Value of X 2 is ${x} `);//10

 function greet(){
    let myName = 'Sanskriti';
    console.log(`Hello ${myName}`);
 }



  /*
  Memory Phase
  x=10
  greet = fumction greet() {
    console.log('Hello');
  }



  Execution Phase
  x=30;
  console.log(`Value of X is ${x}`); //30
  var x=10;
  */