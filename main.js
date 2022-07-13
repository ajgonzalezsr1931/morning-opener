let day=(new Date().getDay());

switch (day) {
  case 0:
    day = 1;
    console.log('6 more days till Saturday.')
    break;
  case 1:
    day = 2;
    console.log('5 more days till Saturday.')
    break;
  case 2:
    day = 3;
    console.log('4 more days till Saturday.')
    break;
  case 3:
    day = 4;
    console.log('3 more days till Saturday.')
    break;
  case 4:
    day = 5;
    console.log('2 more days till Saturday.')
    break;
  case 5:
    day = "7";
    console.log('1 more days till Saturday.')
    break;
  case  6:
    day = 6;
    console.log('Today is Saturday.')
  
}

// console.log(day);