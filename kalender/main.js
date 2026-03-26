document.getElementById('drop').addEventListener('change', function () { 
  const url = this.value; 
  if (url) window.location.href = url; 
}); 


const cells = document.querySelectorAll(".A");
const next = document.getElementById("next");

let activeCell = null;
let selectedDate = null;
let selectedTime = null;

cells.forEach(cell => {
  cell.addEventListener("click", () => {
    if (activeCell) {
      activeCell.classList.remove("active");
    }

      cell.classList.remove("active");
      activeCell = cell;
    
  
    cell.classList.add("active");
    activeCell = cell;

    const cellIndex = cell.cellIndex;

    const table = cell.closest("table");
    const dateHeader = table.rows[0].cells[cellIndex];

    selectedDate = dateHeader.textContent.trim();
    selectedTime = cell.textContent.trim();

    // aktivera knappen
      next.classList.remove('disabled-link');
      next.classList.add('klickbar');

      console.log("datum: ", selectedDate);
      console.log("Tid: ", selectedTime);

  });
});

next.addEventListener("click", (e) => {
  if (!activeCell) {
    e.preventDefault();
    return;
  }
  
   sessionStorage.setItem("datum", selectedDate);
    sessionStorage.setItem("tid", selectedTime);
});