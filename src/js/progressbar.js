// This file contains progress bar animations
// code

window.onload = () => {
let circularProgress = document.querySelectorAll(".circular-progress"),
progressValue = document.querySelectorAll(".progress-value");
let progressStartValue = 0,
progressEndValue = 78,
speed = 40;

let progress = setInterval(() => {
progressStartValue++;

circularProgress.forEach( c =>{
    c.style.background = `conic-gradient(#0266ff ${progressStartValue * 3.6}deg, #ededed 0deg)`
})
if (progressStartValue == progressEndValue) {
    clearInterval(progress);
}
}, speed);
}