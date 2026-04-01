console.log("fail ühendatud");

let hours, minutes, seconds, day, month, year, dateTime;
let fontSize = 25;
let position = 0;
let fontColorIndex = 0;
let fontFamilyIndex = 0;
let is24HourFormat = true;

/* AI andis koodi ja idee */
function toggleTimeFormat() {
    is24HourFormat = !is24HourFormat;
}
/* AI andis koodi */
function changeFontFamily() {
        const fontFamilies = [
        "Arial",
        "Courier New",
        "Georgia",
        "Verdana",
        "Times New Roman"
    ];

    fontFamilyIndex++;

    if (fontFamilyIndex >= fontFamilies.length) {
        fontFamilyIndex = 0;
    }

    document.getElementById("clockContainer").style.fontFamily =
        fontFamilies[fontFamilyIndex];

    document.getElementById("dateContainer").style.fontFamily =
        fontFamilies[fontFamilyIndex];
}
/* AI andis koodi */
function resetClockStyle() {
    position = 0;
    fontSize = 25;
    fontColorIndex = 0;

    document.getElementById("clockContainer").style.marginLeft = "0px";
    document.getElementById("dateContainer").style.marginLeft = "0px";

    document.getElementById("clockContainer").style.fontSize = fontSize + "px";
    document.getElementById("dateContainer").style.fontSize = fontSize + "px";

    document.getElementById("clockContainer").style.color = "white";
    document.getElementById("dateContainer").style.color = "white";

    updateBackgroundByTime();
}
/* AI andis koodi */
function updateBackgroundByTime() {
    const hour = new Date().getHours();
    const body = document.body;
    const footer = document.getElementById("footer");

    body.classList.remove("night", "morning", "day", "evening");

    if (hour >= 0 && hour < 6) {
        body.classList.add("night");
        footer.style.color = "lightblue";
    } else if (hour >= 6 && hour < 12) {
        body.classList.add("morning");
        footer.style.color = "black";
    } else if (hour >= 12 && hour < 18) {
        body.classList.add("day");
        footer.style.color = "black";
    } else {
        body.classList.add("evening");
        footer.style.color = "lightblue";
    }
}
/* AI andis koodi */
function changeFontColor() {
    const fontColors = [
        "white",
        "red",
        "yellow",
        "cyan",
        "lime"
    ];
    fontColorIndex = fontColorIndex + 1;

    if (fontColorIndex >= fontColors.length) {
        fontColorIndex = 0;
    }

    document.getElementById("clockContainer").style.color =
        fontColors[fontColorIndex];
    document.getElementById("dateContainer").style.color =
        fontColors[fontColorIndex];

    console.log("font värv muutus:", fontColors[fontColorIndex]);
}

function moveFontLeft(){
    position = position -10;
    if (position < -500){
        position = -500;
        window.alert("Rohkem vasakule ei saa minna");
    }
    document.getElementById("dateContainer").style.marginLeft = position + "px";
    document.getElementById("clockContainer").style.marginLeft = position + "px";
}

function moveFontRight(){
    position = position + 10;
    if (position > 500){
        position = 500;
        window.alert("Rohkem paremale ei saa minna");
    }
    document.getElementById("dateContainer").style.marginLeft = position + "px";
    document.getElementById("clockContainer").style.marginLeft = position + "px";
}

function changeFontSizeBigger(){
    fontSize = fontSize + 5;
    if(fontSize > 250){
        fontSize = 250;
        window.alert("Font ei saa enam suuremaks minna")
    }
    document.getElementById("dateContainer").style.fontSize = fontSize + "px";
    document.getElementById("clockContainer").style.fontSize = fontSize + "px";
}

function changeFontSizeSmaller(){
    fontSize = fontSize - 5;
    if(fontSize < 10){
        fontSize = 10;
        window.alert("Font ei saa enam väiksemaks minna")
    }
    document.getElementById("dateContainer").style.fontSize = fontSize + "px";
    document.getElementById("clockContainer").style.fontSize = fontSize + "px";
}

function upDateClock(){
    dateTime = new Date();

    hours = dateTime.getHours();

        let displayHours = hours;
        let period = "";

        if (!is24HourFormat) {
        period = hours >= 12 ? " PM" : " AM";
        displayHours = hours % 12;

        if (displayHours === 0) {
            displayHours = 12;
        }
    }
    minutes = dateTime.getMinutes();
    seconds = dateTime.getSeconds();

    if(hours < 10){
        hours = "0" + hours;
    }
    
    if(minutes < 10){
        minutes = "0" + minutes;
    }

    if(seconds < 10){
        seconds = "0" + seconds;
    }
        document.getElementById('hours').innerHTML = displayHours + ":";
        document.getElementById("minutes").innerHTML = minutes + ":";
        document.getElementById("seconds").innerHTML = seconds + period;
        updateBackgroundByTime();
}

function updateDate(){
        const weekdays = [
        "Pühapäev",
        "Esmaspäev",
        "Teisipäev",
        "Kolmapäev",
        "Neljapäev",
        "Reede",
        "Laupäev"
    ];

    dateTime = new Date();
    day = dateTime.getDate();
    month = dateTime.getMonth() + 1;
    year = dateTime.getFullYear();

    let weekday = weekdays[dateTime.getDay()];

    if (day < 10){
        day = "0" + day;
    }

    if (month < 10){
        month = "0" + month;
    }
    

    document.getElementById("day").innerHTML = day + ".";
    document.getElementById("month").innerHTML = (month) + ".";
    document.getElementById("year").innerHTML = year + " |&nbsp;";
    document.getElementById("weekday").innerHTML = weekday;
}

function checkKey(e){
    console.log(e.keyCode);
    if(e.keyCode == 43){
        changeFontSizeBigger();
    }
    if(e.keyCode == 45){
        changeFontSizeSmaller();
    }
}

upDateClock();
updateDate();
setInterval(upDateClock, 1000);
setInterval(updateDate, 60000);
document.getElementById("bigger").addEventListener("click", changeFontSizeBigger);
document.getElementById("smaller").addEventListener("click", changeFontSizeSmaller);
document.getElementById("left").addEventListener("click", moveFontLeft);
document.getElementById("right").addEventListener("click", moveFontRight);
document.getElementById("fontColor").addEventListener("click", changeFontColor);
document.getElementById("resetButton").addEventListener("click", resetClockStyle);
document.getElementById("fontFamily").addEventListener("click", changeFontFamily);
document.getElementById("timeFormat").addEventListener("click", toggleTimeFormat);
window.addEventListener("keypress", checkKey);