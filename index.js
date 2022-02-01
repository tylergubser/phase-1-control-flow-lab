function scuberGreetingForFeet(ride){
  if (ride <= 400) {
    return 'This one is on me!';
  }
  else if (ride > 2000 && ride < 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  else if (ride > 2500) {
    return 'No can do.';
  }

}

function ternaryCheckCity(city){
  return city === "NYC" ? (city = "Ok, sounds good.") : (city = "No go.");
}

function switchOnCharmFromTip(tip){
  switch(tip) {
    case 'generous': tip = 'Thank you so much.';
    break;
    case 'not as generous': tip = 'Thank you.';
    break;
    default: tip = 'Bye.';
    break;
  }
  return tip;
}