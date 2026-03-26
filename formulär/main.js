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