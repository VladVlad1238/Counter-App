let timerTitle = document.getElementsByTagName('h1')[0];
let start = document.querySelector('.js-start-button');
let timerStopButton = document.querySelector('.js-stop-button');
let timerResetButton = document.querySelector('.js-reset-button');
let sec = 0;
let min = 0;
let hrs = 0;
let t;

function tick(){
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hrs++;
        }
    }
}

function add() {
    tick();
    timerTitle.textContent = (hrs > 9 ? hrs : "0" + hrs)
                     + ":" + (min > 9 ? min : "0" + min)
                     + ":" + (sec > 9 ? sec : "0" + sec);
    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}

timer();
start.onclick = timer;
timerStopButton.onclick = function() {
    clearTimeout(t);
}
timerResetButton.onclick = function() {
    timerTitle.textContent = "00:00:00";
    sec = 0; min = 0; hrs = 0;
}
