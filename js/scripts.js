var vowels = ["a", "i", "u", "e", "o"];
var userInput = "begqug ques";
var inputSplits = userInput.split("");
var inputJoin = "";

/////////////////////////
//Check Function
//If input is one of vowels, return True;
var check = function(input){
  if(input === "a"){
    return true;
  }

  if(input === "i"){
    return true;
  }

  if(input === "u"){
    return true;
  }

  if(input === "e"){
    return true;
  }

  if(input === "o"){
    return true;
  }
  return false;
}
//////////////////////









  //1. Check if user typed strings

      //We will not implement this time.

  //2. adds "ay" to single-letter words beginning with a vowel
  var addAy = function(userInput){
    if(check(userInput.charAt(0))){
      userInput += "ay";
      alert(userInput);
    };
  };
  addAy(userInput); //Call No.2


  //3. For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".





  var moveFirstConsonants = function(){
    for(var i=0; i < inputSplits.length; i++){
     	if(check(inputSplits[0])){
    		  console.log("Found Vowels:" + inputSplits[0]);
    	 	}else{
          var x = inputSplits.shift();
          inputSplits.push(x);
        }
    };
      inputJoin = inputSplits.join("");
      alert(inputJoin);
  };
  moveFirstConsonants();
