import { renderItems } from "./view.js";
import data from "./data/got/got.js";
import { filterData } from "./dataFunctions.js";

const dataGot = data.got;
const root = document.querySelector("#root");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".close");
const filterHousesSelect = document.getElementById("filterHouses");
const selectedValue = filterHousesSelect.value;
const selectedAltValue = filterHousesSelect.options[filterHousesSelect.selectedIndex].getAttribute("data-alt-value");

console.log("Valor seleccionado:", selectedValue);
console.log("Valor alternativo:", selectedAltValue);


// Función para renderizar todos los personajes
const renderAllCharacters = () => {
  root.innerHTML = "";
  root.appendChild(renderItems(dataGot));
  setupModalEventListeners(); //AGREGAMOS ESTO
};

// Función para filtrar y renderizar los personajes por familia
const updateCharactersByFamily = (family) => {
  if (family === "") {
    renderAllCharacters();
  } else {
    const filteredData = filterData(dataGot, "family", family);
    root.innerHTML = "";
    root.appendChild(renderItems(filteredData));
    setupModalEventListeners();//AGREGAMOS ESTO
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

// Función para mostrar el modal al hacer clic en las tarjetas de personajes //AGREGAMOS ESTO + linea 45
function setupModalEventListeners() {
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


      // Crear un elemento div con itemscope y itemtype para representar una persona
      const personElement = document.createElement("div");
      personElement.setAttribute("itemscope", "");
      personElement.setAttribute("itemtype", "https://schema.org/Person");


      // Agregar las propiedades de la persona utilizando elementos con itemprop
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

// Evento para mostrar el modal al hacer clic en las tarjetas de personajes
/* liContainerAll.addEventListener("click", function (event) {
  const liContainer = event.target.closest(".container");
  if (liContainer) {
    showModal(event);
  }
}); */

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
