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

    // Crear y agregar la imagen al contenido del modal
    const imageElement = document.createElement("img");
    imageElement.src = character.imageUrl;
    imageElement.classList.add("modal-image"); // Agregar la clase "modal-image"
    modalContent.appendChild(imageElement);

    const X = `
    <ul>
      <li>Nombre: <strong>${character.firstName}</strong></li>
      <li>Apellido:</strong> <strong>${character.lastName}</strong></li>
      <li>Casa:</strong> <strong>${character.family}</strong></li>
      <li>Año de nacimiento:</strong> <strong>${character.born}</strong></li>
      <li>Año de muerte:</strong> <strong>${character.death}</strong></li>
      <li>Título: <strong>"${character.title}"</strong></li>
    </ul>
    `;
    modalContent.innerHTML += X;
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
selectFilter.addEventListener("change", () => {
  const result = filterData(dataGot, "family");
});
