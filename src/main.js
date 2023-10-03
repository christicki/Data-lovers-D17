import { example } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/got/got.js";
import { filterData } from "./dataFunctions.js";

const dataGot = data.got;
const root = document.querySelector("#root");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".close");
const filterHousesSelect = document.getElementById("filterHouses");

// Función para renderizar todos los personajes
const renderAllCharacters = () => {
  root.innerHTML = "";
  root.appendChild(renderItems(dataGot));
};

// Función para filtrar y renderizar los personajes por familia
const updateCharactersByFamily = (family) => {
  if (family === "") {
    renderAllCharacters();
  } else {
    const filteredData = filterData(dataGot, "family", family);
    root.innerHTML = "";
    root.appendChild(renderItems(filteredData));
  }
};

// Llama a la función para renderizar todos los personajes al cargar la página
renderAllCharacters();

// Función para manejar el evento de cambio en el selector de casas
filterHousesSelect.addEventListener("change", function () {
  const selectedHouse = filterHousesSelect.value;

  if (selectedHouse === "Todos") {
    renderAllCharacters();
  } else {
    updateCharactersByFamily(selectedHouse);
  }
});

// Evento para mostrar el modal al hacer clic en las tarjetas de personajes
const liContainerAll = root.querySelectorAll(".container");

liContainerAll.forEach((liContainer) => {
  liContainer.addEventListener("click", function (event) {
    modal.style.display = "block";
    const modalContent = document.querySelector(".modal-content");
    modalContent.innerHTML = "";

    const character = JSON.parse(localStorage.getItem("idCharacter"));

    // Crear y agregar la imagen al contenido del modal
    const imageElement = document.createElement("img");
    imageElement.src = character.imageUrl;
    imageElement.classList.add("modal-image");
    modalContent.appendChild(imageElement);

    const characterInfo = `
      <ul>
        <li>Nombre: <strong>${character.firstName}</strong></li>
        <li>Apellido: <strong>${character.lastName}</strong></li>
        <li>Casa: <strong>${character.family}</strong></li>
        <li>Año de nacimiento: <strong>${character.born}</strong></li>
        <li>Año de muerte: <strong>${character.death}</strong></li>
        <li>Título: <strong>${character.title}</strong></li>
      </ul>
    `;
    modalContent.innerHTML += characterInfo;
  });
});

// Cerrar el modal al hacer clic en el botón de cierre
closeModalBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// Cerrar el modal si se hace clic en el fondo oscuro
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});