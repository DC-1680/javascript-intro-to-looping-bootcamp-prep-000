function forLoop(array){
  var newArr = [];
  for (var i = 0; i = 25; i++){
    if(i===1){
      newArr.push("I am " + i + "strange loop.");
    } else {
      newArr.push("I am " + i + " strange loops.");
    }
  }
  return newArr;
}
