const radios = document.querySelectorAll('input[name="radio"]');
const button = document.querySelector('#submitBtn');

//let selected = null;
function getChecked(radios) {
    const checked = [...radios].find(radio => radio.checked);
    return checked ? checked.value : null;
}


function activateBtn() {
    const selectedTreatment = getChecked(radios);

    button.disabled = !selectedTreatment;

       if (selectedTreatment) {
        console.log(selectedTreatment);
        button.classList.add('active');
        } else {
        button.classList.remove('active');
        }
     }


radios.forEach(radio => {
    radio.addEventListener('change', activateBtn);
});

button.addEventListener('click', (e) => {
    e.preventDefault();

     const selectedTreatment = getChecked(radios);

     if (!selectedTreatment) {
        return;
     }

     sessionStorage.setItem('behandling', selectedTreatment);

     window.location.href = '../kalender/index.html';
});
  
activateBtn();



