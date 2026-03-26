const showB = document.getElementById('showB');
const showD = document.getElementById('showD');
const showT = document.getElementById('showT');

const behandling = sessionStorage.getItem("behandling");
const datum = sessionStorage.getItem("datum");
const tid = sessionStorage.getItem("tid");

console.log(behandling, datum, tid);

showB.textContent = behandling;
showD.textContent = datum;
showT.textContent = tid;

const sendBtn = document.getElementById('sendBtn');
sendBtn.classList.add('inactive');

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

function required() {
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();

    if (nameValue !== "" && emailValue !== "") {
    sendBtn.disabled = false;
    sendBtn.classList.remove('inactive');
    sendBtn.classList.add('active');
    } else {
        sendBtn.disabled = true;
    }
}

nameInput.addEventListener('input', required);
emailInput.addEventListener('input', required);

