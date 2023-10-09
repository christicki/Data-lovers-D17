import data from "./data/got/got.js";
import { renderItems } from "./view.js";
import { filterDataFamily } from "./dataFunctions.js";
import { sortData } from "./dataFunctions.js";

const dataGot = data.got;
const root = document.querySelector("#root");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".close");
const filterHousesSelect = document.getElementById("filterHouses");
const sortDataAlpha = document.querySelector("#sortData");
const resetFilterButton = document.querySelector("#resetFilter")

// Variable para almacenar la última selección de filtro
let lastSelectedHouse = "Todos";

// Función para renderizar(mostrar) todos los personajes
const renderAllCharacters = () => {
  root.innerHTML = "";
  root.appendChild(renderItems(dataGot));
  setupModalEventListeners();
};

// Función para filtrar y mostrar los personajes por familia (CASAS)
const updateCharactersByFamily = (family, selectedSortOrder) => {
  if (family === "") {
    renderAllCharacters();
  } else {
    const filteredData = filterDataFamily(dataGot, "family", family);
    const sortedData = sortData(filteredData, "fullName", selectedSortOrder);
    root.innerHTML = "";
    root.appendChild(renderItems(sortedData));
    setupModalEventListeners();
  }
};

// Llama a la función para renderizar todos los personajes al cargar la página
renderAllCharacters();
// Función para manejar el evento de cambio en el selector de CASAS
filterHousesSelect.addEventListener("change", function () {
  const selectedHouse = filterHousesSelect.value;
  const selectedSortOrder = sortDataAlpha.value;

  lastSelectedHouse = selectedHouse; // Actualiza la última selección de filtro

  if (selectedHouse === "Todos") {
    renderAllCharacters();
  } else {
    updateCharactersByFamily(selectedHouse, selectedSortOrder);
  }
});

// Función para mostrar el modal al hacer clic en las tarjetas de personajes
function setupModalEventListeners() {
  const liContainerAll = root.querySelectorAll(".container");

  liContainerAll.forEach((liContainer) => {
    liContainer.addEventListener("click", function () { //--> eliminado event dentro de parentesis, por test.
      modal.style.display = "block";
      const modalContent = document.querySelector(".modal-content");
      modalContent.innerHTML = "";

      const character = JSON.parse(localStorage.getItem("idCharacter"));

      const imageElement = document.createElement("img");
      imageElement.src = character.imageUrl;
      imageElement.classList.add("modal-image");
      modalContent.appendChild(imageElement);

      const personElement = document.createElement("div");
      personElement.setAttribute("itemscope", "");
      personElement.setAttribute("itemtype", "https://schema.org/Person");

      personElement.innerHTML = `
      <span itemprop="familyName">Nombre: <strong>${character.fullName}</strong></span><br>
      <span itemprop="memberOf">Familia: <strong>${character.family}</strong></span><br>
      <span itemprop="birthDate">Nacimiento: <strong>${character.born}</strong></span><br>
      <span itemprop="deathDate">Muerte: <strong>${character.death}</strong></span><br>
      <span itemprop="jobTitle">Título: <strong>"${character.title}"</strong></span><br>
    `;

      modalContent.appendChild(personElement);
    });
  });
}

// Función para ordenar los personajes
const sortCharacters = (data, sortOrder) => {
  const sortedData = [...data];
  if (sortOrder === "asc") {
    sortedData.sort((a, b) => a.fullName.localeCompare(b.fullName));
  } else if (sortOrder === "desc") {
    sortedData.sort((a, b) => b.fullName.localeCompare(a.fullName));
  }
  return sortedData;
};

// Evento para manejar el cambio en la opción de ordenar alfabéticamente
sortDataAlpha.addEventListener("change", function () {
  const selectedSortOrder = sortDataAlpha.value;

  if (lastSelectedHouse === "Todos") {
    const sortedData = sortCharacters(dataGot, selectedSortOrder);
    root.innerHTML = "";
    root.appendChild(renderItems(sortedData));
    setupModalEventListeners();
  } else {
    updateCharactersByFamily(lastSelectedHouse, selectedSortOrder);
  }
});

// Evento para manejar el clic en el botón de reinicio
resetFilterButton.addEventListener("click", function () {
  filterHousesSelect.value = "";
  sortDataAlpha.value = "";
  lastSelectedHouse = "Todos"; // Restablece la última selección de filtro

  renderAllCharacters();
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
