function scuberGreetingForFeet(feet){
  // Write your code here!
  let result 
  if (feet <= 400 ){
    result = "this one is on me"
  }
  else if (feet > 2000 ) {
    result = "i will gladly take your thirty bucks"
  }
  else if (feet > 2500 ) {
    result = "no can do"
  }
}

function ternaryCheckCity(){
  // Write your code here!
  let result;
   city === "NYC"? 
   result ="ok.sounds good" : "No go"
   return result;
}
ternaryCheckCity("NYC")


function switchOnCharmFromTip(){
  // Write your code here!
  function switchOnCharmFromTip(tip){
    // Write your code here!
    let result;
    switch(tip){
      case 'generous':
        result = 'Thank you so much.';
        break;
  
      case 'not as generous':
        result = 'Thank you.';
        break;
  
      default:
        result = 'Bye.';
    }
    return result;
  }
  
  switchOnCharmFromTip('generous');
  switchOnCharmFromTip('not as generous');
  switchOnCharmFromTip('thanks for everthing');}