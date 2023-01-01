let date = document.querySelector(".date");
let time = document.querySelector(".time");

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let clock = () => {
  let digitalClock = new Date();

  // Date
  let year = digitalClock.getFullYear();
  let dt;
  if (digitalClock.getDate() <= 9) {
    dt = "0" + digitalClock.getDate();
  } else {
    dt = digitalClock.getDate();
  }

  let month = monthNames[digitalClock.getMonth()];
  let days = dayNames[digitalClock.getDay()];

  date.innerHTML = `<p class="date">${dt}-${month}-${year}  ${days} </p>`;

  // Time

  //Hours
  let Hours;
  if (digitalClock.getHours() <= 9) {
    Hours = "0" + digitalClock.getHours();
  } else {
    Hours = digitalClock.getHours();
  }

  //Minutes
  let Minutes;
  if (digitalClock.getMinutes() <= 9) {
    Minutes = "0" + digitalClock.getMinutes();
  } else {
    Minutes = digitalClock.getMinutes();
  }

  // Seconds
  let Seconds;

  if (digitalClock.getSeconds() <= 9) {
    Seconds = "0" + digitalClock.getSeconds();
  } else {
    Seconds = digitalClock.getSeconds();
  }

  time.innerHTML = `<p class="time">${Hours} : ${Minutes} : ${Seconds}</p>`;
};
setInterval(clock, 1000);
