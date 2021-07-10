/* eslint-disable no-unused-expressions */
/* eslint-disable consistent-return */

export function ifLeapYear(year:number) {
  if (year % 400 === 0) return true;
  else if (year % 100 === 0) return false;
  else if (year % 4 === 0) return true;
  else false;
}

export function getNumDaysInMonth(month:number, year:number) {
  if (month === 1) return 31;
  if (month === 2) {
    if (ifLeapYear(year)) return 29;
    else return 28;
  }
  if (month === 3) return 31;
  if (month === 4) return 30;
  if (month === 5) return 31;
  if (month === 6) return 30;
  if (month === 7) return 31;
  if (month === 8) return 31;
  if (month === 9) return 30;
  if (month === 10) return 31;
  if (month === 11) return 30;
  if (month === 12) return 31;
  else return 0;
}

export function getFormattedDate(day:number, month:number, year:number) {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  const detailMonth = monthNames[month - 1];
  const output = `${detailMonth}\n${day}, ${year}`;
  return output;
}
