const time = document.querySelector("#time");

function padZero(num){
    // Why does it make sense that return is in the front?
    return num < 10 ? `0${num}`: num;
}

function setTime(){
    const clock = new Date();
    const hour = clock.getHours();
    const min = clock.getMinutes();
    const sec = clock.getSeconds();
    time.innerHTML = `${padZero(hour)}:${padZero(min)}:${padZero(sec)}`;
}

function init(){
    setTime();
    setInterval(setTime, 1000);
}

init();