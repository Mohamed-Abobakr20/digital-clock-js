// Dark and Light mode
//---------------------------------------------
//---------------------------------------------
const theme = document.getElementById("theme");
const html = document.querySelector("html");
theme.addEventListener('click', (e) => {
    if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        e.target.innerHTML = "Dark Mode"
    } else {
        html.classList.add("dark");
        e.target.innerHTML = "Light Mode"
    }
})


// Mapping range of numbers to another range
//---------------------------------------------
//---------------------------------------------
function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}


// Clock function
//---------------------------------------------
//---------------------------------------------
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const time = document.querySelector(".time");
const dayMonth = document.querySelector(".day-month");
const dayNumber = document.querySelector(".dayNumber");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


function clock() {
    const date = new Date();
    const hours24 = date.getHours();
    const hours12 = hours24 % 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const day = date.getDay();
    const day_number = date.getDate();
    const month = date.getMonth();

    hour.style.transform = `translate(-50%, -100%) rotate(${scale(hours12, 0, 12, 0, 360)}deg)`;
    minute.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
    second.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;
    time.innerHTML = `${hours12 < 10 ? `0${hours12}`: hours12} : ${ minutes < 10 ? `0${minutes}` : minutes }  ${hours24 >= 12 ? 'PM' : 'AM'}`;
    dayMonth.innerHTML = `${days[day]}, ${months[month]}`;
    dayNumber.innerHTML = day_number;
}


setInterval(clock, 1000);