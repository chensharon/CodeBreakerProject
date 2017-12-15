let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
let message = document.getElementById('message');

function guess() {
    let input = document.getElementById('user-guess');
    if (input.value === '') {
        setHiddenFields();
    }
    if (!validateInput(input.value)) {
        return false;
    } else {
        attempt.value++;
    }

}

function setHiddenFields() {
    const zeros = ['', '0', '00', '000', '0000'];
    const guess = Math.floor(Math.random() * 10000);
    const add = 4 - guess.toString().length;
    answer.value = answer.value || zeros[add] + guess.toString();
    attempt.value = attempt.value || 0;
}

function setMessage(msg) {
    message.innerHTML = msg;
}

function validateInput(input) {
    if (input.length !== 4) {
        setMessage('Guesses must be exactly 4 characters long.');
        return false;
    }
    return true;
}