var date = new Date();
function renderDate(){
var day = date.getDay(1);

var endDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1, 
    0
).getDay();

var endDate = new Date(
    date.getFullYear(),
    date.getMonth() + 1, 
    0
).getDate();
var startDate = new Date(
    date.getFullYear(),
    date.getMonth() + 1, 
    1
).getDate();
var prevEndDate = new Date(
    date.getFullYear(),
    date.getMonth(), 
    0
).getDate();

var nextDays = 7 - endDay - 1;

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months = [
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
    "December"
];

document.querySelector('#month').innerHTML = months[date.getMonth()];

var cells = "";
for(x = day; x > 0; x--){
    cells += "<div class='prevMonthDate'>" + (prevEndDate - x + 1) + "</div>";
}

for(i = 1; i <= endDate; i++){
    if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
        cells +=  "<div class='today'>" +  i + "</div>";
    } else {
        cells +=  "<div>" +  i + "</div>";
    }
}

for(j = 1; j <= nextDays; j++){
    cells += "<div class='nextMonthDate'>" + j + "</div>";
}
document.querySelector('.days').innerHTML = cells;
}


function moveDate(para){
    if(para == 'prev'){
        date.setMonth(date.getMonth() - 1);
        renderDate();
    }else if(para == 'next'){
        date.setMonth(date.getMonth() + 1);
        renderDate();
    }
}
