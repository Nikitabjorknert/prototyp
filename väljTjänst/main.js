const radios = document.querySelectorAll('input[name="radio"]');
const button = document.querySelector('#submitBtn');

let selected = null;

function activateBtn() {
     button.disabled = selected === null;
}

function radioUse() {
radios.forEach(radio => {
    radio.addEventListener('click', function(e) {

        if (selected === this) {
            e.preventDefault();
            this.checked = false;
            selected = null;
        } else {
            selected = this;
            this.checked = true;
        }

       activateBtn();

       if (selected) {
        console.log(selected.value);
        button.classList.add('active');
        } else {
        button.classList.remove('active');
        }
    });
});
}
radioUse();
activateBtn();



