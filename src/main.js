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
const resetFilterButton = document.querySelector("#resetFilter"); //aun no lo usamos

// Función para renderizar(mostrar) todos los personajes
const renderAllCharacters = () => {
  root.innerHTML = "";
  root.appendChild(renderItems(dataGot));
  setupModalEventListeners(); //AGREGAMOS ESTO
};

// Función para filtrar y mostrar los personajes por familia(CASAS)
const updateCharactersByFamily = (family, selectedSortOrder) => {
  if (family === "") {
    renderAllCharacters();
  } else {
    const filteredData = filterDataFamily(dataGot, "family", family);
    const sortedData = sortData(filteredData, "fullName", selectedSortOrder);
    root.innerHTML = "";
    root.appendChild(renderItems(sortedData)); //se modifico esto
    setupModalEventListeners(); //AGREGAMOS ESTO --> para que se vean los modales luego de haber filtrado
  }
};

// Llama a la función para renderizar todos los personajes al cargar la página
renderAllCharacters();

// Función para manejar el evento de cambio en el selector de CASAS
filterHousesSelect.addEventListener("change", function () {
  const selectedHouse = filterHousesSelect.value;

  if (selectedHouse === "Todos") {
    renderAllCharacters();
  } else {
    updateCharactersByFamily(selectedHouse);
  }
});

// Función para mostrar el modal al hacer click en las tarjetas de personajes
function setupModalEventListeners() {
  const liContainerAll = root.querySelectorAll(".container");

  liContainerAll.forEach((liContainer) => {
    liContainer.addEventListener("click", function (event) {
      modal.style.display = "block";
      const modalContent = document.querySelector(".modal-content");
      modalContent.innerHTML = "";

      const character = JSON.parse(localStorage.getItem("idCharacter"));

      // Crear y agregar la imagen del personaje al contenido del modal
      const imageElement = document.createElement("img");
      imageElement.src = character.imageUrl;
      imageElement.classList.add("modal-image");
      modalContent.appendChild(imageElement);

      // Crear un elemento div con itemscope y itemtype para representar una persona (person schema)
      const personElement = document.createElement("div");
      personElement.setAttribute("itemscope", "");
      personElement.setAttribute("itemtype", "https://schema.org/Person");

      // Agregamos las propiedades de la persona utilizando elementos con itemprop
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

 // Evento para manejar el cambio en el selector de ordenar alfabéticamente
 sortDataAlpha.addEventListener("change", function () {
  const selectedSortOrder = sortDataAlpha.value;
  const selectedHouse = filterHousesSelect.value; // Obtén el valor del selector de CASAS
  // Llamar a la función sortData con el valor seleccionado (A-Z || Z-A)
  if (!selectedSortOrder === "asc" || !selectedSortOrder === "desc") {
    renderAllCharacters();
  }
  else {
    const sortedData = sortData(dataGot, "fullName", selectedSortOrder);
    const filteredData =  updateCharactersByFamily(selectedHouse, selectedSortOrder);
    console.log("+++result", sortedData);
    console.log('LISTA: ', renderItems(sortedData));
    root.innerHTML = " ";
    root.appendChild(renderItems(sortedData));
    console.log('ROOT', root);
    setupModalEventListeners(); //para que se vean los modales luego de haber ordenado
  }
});

// Evento para manejar el clic en el botón de reinicio
resetFilterButton.addEventListener("click", function () {
  // Restablece el valor del selector de CASAS al value="">CASAS
  filterHousesSelect.value = "";

  // Restablece el valor del selector de ordenamiento a una cadena vacía para que quede sin preferencia
  sortDataAlpha.value = "";

  // Llama a la función para mostrar todos los personajes
  renderAllCharacters();
});

// Cerrar el modal al hacer clic en el botón de cierre (no funcionando actualmente)
closeModalBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// Cerrar el modal si se hace clic en el fondo oscuro
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
