const day = 29;
const month = 2;
const year = 2000;

const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
const daysInMonth = [31, (isLeapYear ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let isValid = true;

if (month < 1 || month > 12) {
    isValid = false;  // Invalid month
} else {
    const daysInThisMonth = daysInMonth[month - 1];
    if (day < 1 || day > daysInThisMonth) {
        isValid = false;  // Invalid day for the month
    }
}

if (isValid) {
    console.log(`${day}/${month}/${year} is a valid date.`);
} else {
    console.log(`${day}/${month}/${year} is not a valid date.`);
}
