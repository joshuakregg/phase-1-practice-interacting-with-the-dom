const counter = document.getElementById("counter");
const pause = document.getElementById('pause');
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const submit = document.getElementById('submit')
const input = document.getElementById('comment-input')
const commentSection = document.getElementById('list')
const restart = document.createElement('button')
const buttons = document.getElementById('buttons')
restart.innerText = 'restart'
buttons.appendChild(restart)

let paused = false;
let intervalID
let count = 0;



function runCounter() {
    intervalID = setInterval(() => {counter.innerText++; count = 0; } , 1000);
}

function pauseTimer() {
    clearInterval(intervalID);
    paused = !paused
    pause.innerText = "resume"
    heart.setAttribute("disabled", true)
    plus.setAttribute("disabled", true)
    minus.setAttribute("disabled", true)
    if (!paused) {
        heart.removeAttribute('disabled')
        plus.removeAttribute('disabled')
        minus.removeAttribute('disabled')
        pause.innerText = "pause"
        runCounter()
    }
}

function incrementTimer() {
    counter.innerText++
}
function decrementTimer() {
    counter.innerText--
}
function likeTime() {
    count++
    const like = document.createElement('p')
    like.innerText = `you like ${counter.innerText} ${count} times!`
    document.querySelector('ul').appendChild(like)
}
function submitComment(event) {
    event.preventDefault()

    const comment = document.createElement('p')
    comment.innerText = input.value
    commentSection.appendChild(comment)
}
function restartTimer() {
    clearInterval(intervalID)
    pause.innerText = 'pause'
    counter.innerText = 0
    heart.removeAttribute('disabled')
        plus.removeAttribute('disabled')
        minus.removeAttribute('disabled')

    runCounter()

}

plus.addEventListener('click', incrementTimer)
minus.addEventListener('click', decrementTimer)
heart.addEventListener('click', likeTime)
pause.addEventListener('click', pauseTimer)
submit.addEventListener('click', submitComment)
restart.addEventListener('click', restartTimer)
runCounter();