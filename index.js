function scuberGreetingForFeet(feet){
  // scuberGreetingForFeet()
  //   1) gives customers a free sample if the ride is less than or equal to 400 feet
  //   2) charges 20 dollars for a distance between 400 and 2000 feet
  //   3) charges 30 dollars for a distance over 2000 feet
  //   4) does not allow rides over 2500 feet
  let result
  if (feet <= 400){
    result = 'This one is on me!'
  } else if (feet > 400 && feet < 2000) {
    result = 'That will be twenty bucks.'
  } else if (feet > 2000 && feet <= 2500) {
    result = 'I will gladly take your thirty bucks.'
  } else {
    result = 'No can do.'
  }
  return result
}

function ternaryCheckCity(city){
  // ternaryCheckCity()
  //   5) returns "Ok, sounds good." when the city is NYC
  //   6) should return "No go." if the destination city is not NYC
  return (city === 'NYC' ? 'Ok, sounds good.' : 'No go.')
}

function switchOnCharmFromTip(tip){
  // switchOnCharmFromTip()
  //   7) should return "Thank you so much." if the tip is generous
  //   8) should return "Thank you." if the tip is not as generous
  //   9) should return "Bye." if anything else
  switch (tip) {
    case 'generous' : 
      return 'Thank you so much.'
      break;
    case 'not as generous' : 
      return 'Thank you.'
      break;
    default: 
      return 'Bye.';
  }
}