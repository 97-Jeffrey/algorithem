const talkingCalendar = function (date) {

  date = date.split('/');
  let year = date[0], month = date[1], day = date[2];
  let output = '';
  if(day === "01"){
    day += 'st'
  }else if(day === "02"){
    day += 'nd'
  }else if(day === '03'){
    day += 'rd'
  }else{
    day += 'th';
  }


  switch (month) {
    case '01':
      output += 'January';
      break;
    case '02':
      output += 'Februrary';
      break;
    case '03':
      output += 'March';
      break;
    case '04':
      output += 'April';
      break;
    case '05':
      output += 'May';
      break;
    case '06':
      output += 'June';
      break;
    case '07':
      output += 'July';
      break;
    case '08':
      output += 'August';
      break;
    case '09':
      output += 'September';
      break;
    case '10':
      output += 'October';
      break;
    case '11':
      output += 'November';
      break;
    case '12':
      output += 'December';
      break;
  }
  output += " " +day + ", " + year
  return output
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));