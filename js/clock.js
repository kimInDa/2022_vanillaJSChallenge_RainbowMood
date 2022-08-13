const clock = document.querySelector(".clock");


function getClock() {
    const time = new Date();
    const hours = String(time.getHours()).padStart(2, "0");
    const minutes = String(time.getMinutes()).padStart(2, "0");
    const second = String(time.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${second}`
}
getClock();
setInterval(getClock, 1000);