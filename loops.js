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



function doWhileLoop(array){

  function maybeTrue() {
    return Math.random() >= 0.5;
  }

  do{
    array = array.pop;
  } while (array.length > 0 && maybeTrue());
  return array;
}

/*
 Define a function called doWhileLoop in loops.js. The function should take an array as an argument. Use the maybeTrue() function (you can copy it from this README) as the condition, and remove elements from the array until the array is empty or until maybeTrue() returns false. (Your condition might look something like array.length > 0 && maybeTrue().) Finally, return the array.*/
