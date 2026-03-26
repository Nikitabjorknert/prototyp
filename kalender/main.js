document.getElementById('drop').addEventListener('change', function () { 
  const url = this.value; 
  if (url) window.location.href = url; 
}); 


const cells = document.querySelectorAll(".A");
const next = document.getElementById("next");

cells.forEach(cell => {
  cell.addEventListener("click", () => {

    // ta bort tidigare markering
    document.querySelectorAll(".A.active").forEach(c =>
      c.classList.remove("active")
    );

    // markera den klickade
    cell.classList.add("active");

    // aktivera knappen
    next.disabled = false;
    next.classList.add('klickbar');

  });
});