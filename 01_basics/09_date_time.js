// DATE

let now = new Date();
console.log(now);
console.log(now.toString()); // Coordinated Universal Time

// get individual part of dates

console.log(now.getDate()); // day of month
console.log(now.getDay());  // day of week (Sunday-0)
console.log(now.getFullYear()); // get year (2026)
console.log(now.getHours());
console.log(now.getMilliseconds());
console.log(now.getMonth());  // get month (0-January)
console.log(now.getTime());
console.log(now.getTimezoneOffset());
console.log(now.getUTCDay());
console.log(now.getUTCDate());

let birthday = new Date(2005, 9, 1 ).toDateString();
console.log(`My birthdate is: ${birthday}`);

let now2 = new Date();

console.log(now2.toDateString());   // Thu Mar 26 2026
console.log(now2.toTimeString());   // 12:45:30 GMT...
console.log(now2.toLocaleString()); // Local format

// Timestamp

console.log(Date.now());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})