let talkingCalendar = function(date) {
  let string = '';
  for (let i = 0; i < date.length; i++) {
  }
  let year = date[0] + date[1] + date[2] + date[3];
  let day = date[8] + date[9];
  if(day < 10) {
    day = day[1]
  }
  if(day === '1' || day === '21' || day === '31') {
    day = day + 'st';
  } else if (day === '2' || day === '22') {
    day = day + 'nd'
  } else {
    day = day + 'th'
  }
  let month = date[5] + date[6];
  switch(month) {
    case '01': 
    month = 'January'
    break;
    case '02': 
    month = 'February'
    break;
    case '03': 
    month = 'March'
    break;
    case '04': 
    month = 'April'
    break;
    case '05': 
    month = 'May'
    break;
    case '06': 
    month = 'June'
    break;
    case '07': 
    month = 'July'
    break;
    case '08': 
    month = 'August'
    break;
    case '09': 
    month = 'September'
    break;
    case '10': 
    month = 'October'
    break;
    case '11': 
    month = 'November'
    break;
    case '12': 
    month = 'December'
    break;
    default:
    console.log('You input a wrong month');
    break;
  }
  string = month + ' ' + day + ', ' + year;
  return string
};

console.log(talkingCalendar("2017/12/02")); //December 2nd, 2017
console.log(talkingCalendar("2007/11/11")); //November 11th, 2007
console.log(talkingCalendar("1987/08/24")); //August 24th, 1987