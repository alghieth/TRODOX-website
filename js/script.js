function updateClock() {
    var now = new Date();
    var day = now.getDate(),
        hours = now.getHours(),
        minuts = now.getMinutes(),
        second = now.getSeconds();
        document.getElementById('days').innerHTML = day;
        document.getElementById('hou').innerHTML = hours;
        document.getElementById('min').innerHTML = minuts;
        document.getElementById('sec').innerHTML = second;
}

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);  // return the time every single milliseconds after window has loaded
}
