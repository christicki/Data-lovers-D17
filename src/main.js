import { example } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/got/got.js";

const dataGot = data.got;

const root = document.querySelector("#root");

root.appendChild(renderItems(dataGot));
const liContainerAll = root.querySelectorAll(".container");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".close");

liContainerAll.forEach((liContainer) => {
  liContainer.addEventListener("click", function (event) {
    modal.style.display = "block";
    const modalContent = document.querySelector(".modal-content");
    modalContent.innerHTML = "";

  const character = JSON.parse(localStorage.getItem("idCharacter")); //estudiar -> para convertirlo a objeto o array// 
  const X = `
    Nombre: ${character.firstName} <br>
    Apellido: ${character.lastName} <br>
    Casa: ${character.family} <br>
    Año de nacimiento: ${character.born} <br>
    Año de muerte: ${character.death} <br>
    Título: "${character.title}" <br>
    `;
  modalContent.innerHTML = X;
  });
});

//Cerrar el modal cuando se hace click en el botón de cierre
closeModalBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// Cierra el modal si se hace click en el fondo oscuro
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

//EVENTOS
selectFilter.addEventListener('change', ()=> {
    const result = filterData(dataGot, 'family')
})
