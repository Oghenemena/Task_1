const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date();
let day = weekday[d.getDay()];
document.getElementById("currentDayOfTheWeek").innerHTML = day;

let UTC = document.getElementById("currentUTCTime");
UTC.innerHTML = d.getTime();