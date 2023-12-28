function updateClock() {
    const now = new Date();

    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();


    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = minutes;
    document.getElementById('second').innerHTML = seconds;
}



// Update the clock every second
setInterval(updateClock, 1000);


