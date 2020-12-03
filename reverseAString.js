// create a function that reverses a string 
// "Hi my name is Shivani" should be 
// "inavihS si eman ym iH"


// Check input
//
function reverse(string){
  if(string.length < 2 || typeof str != "string"){
    return string
  }
  const reverse = [];
  const strArray = string.split("");
  // strArray = ["s","h","i","v","a","n","i"]
  for( i = strArray.length-1; i >= 0; i-- ){
    reverse.push(strArray[i]);
  }
  return reverse.toString();
};

// Using the JS Reverse method
function reverse2(string){
  return string.split().reverse().join("");
}