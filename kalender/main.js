document.getElementById('drop').addEventListener('change', function () { 
  const url = this.value; 
  if (url) window.location.href = url; 
}); 


const cells = document.querySelectorAll(".A");
const next = document.getElementById("next");

let activeCell = null;

cells.forEach(cell => {
  cell.addEventListener("click", (e) => {
    e.preventDefault();

    if (activeCell) {
      activeCell.classList.remove("active");
    }
    // ta bort tidigare markering
    //document.querySelectorAll(".A.active").forEach(c =>
      //c.classList.remove("active")
   //);

    // markera den klickade
    cell.classList.add("active");
  activeCell = cell;
    // aktivera knappen
      next.classList.remove('disabled-link');
    next.classList.add('klickbar');

  });
});

next.addEventListener("click", (e) => {
  if (!activeCell) {
    e.preventDefault();
  }
});