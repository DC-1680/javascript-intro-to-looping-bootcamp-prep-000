function forLoop(array){
  for (var i = 0; i < 25; i++){
    if(i===1){
      array.push("I am " + i + "strange loop.");
    } else {
      array.push("I am " + i + " strange loops.");
    }
  }
  return array;
}

/*
Create a function called whileLoop in loops.js. The function should take a number as an argument. Using a while loop, count down (using console.log) from the passed in number to 0. Then return the string 'done'.
*/

function whileLoop(n){
  while (n > 0){
    console.log(n);
    n--;
  }
  return "done";
}
