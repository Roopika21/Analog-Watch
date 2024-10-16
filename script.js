const secondHand = document.getElementById('second-hand');
const minuteHand = document.getElementById('minute-hand');
const hourHand = document.getElementById('hour-hand');

function clockTick() {
    const date = new Date();
    const seconds = date.getSeconds() / 60;  // seconds as fraction of 60
    const minutes = (seconds + date.getMinutes()) / 60;  // minutes as fraction of 60
    const hours = (minutes + date.getHours()) / 12;  // hours as fraction of 12

    rotateCloudHand(secondHand, seconds);
    rotateCloudHand(minuteHand, minutes);  // Fixed typo here
    rotateCloudHand(hourHand, hours);
}

function rotateCloudHand(element, rotation) {
    element.style.setProperty('--rotate', rotation * 360);  // Proper degree rotation
}

setInterval(clockTick, 1000);
