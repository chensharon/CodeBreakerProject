let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

function setHiddenFields() {
    const zeros = ['', '0', '00', '000', '0000'];
    const guess = Math.floor(Math.random() * 10000);
    const add = 4 - guess.toString().length;
    answer.value = zeros[add] + guess.toString();
    attempt.value = 0;
}

setHiddenFields();