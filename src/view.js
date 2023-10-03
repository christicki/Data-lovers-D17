// estas funciones son de ejemplo

export const renderItems = (dataGot) => {
  const ul = document.createElement("ul");
  ul.setAttribute("id", "cards");
  dataGot.forEach((element) => {
    const newLi = document.createElement("li");
    newLi.setAttribute("class", "container");

    const imagen = document.createElement("img");
    imagen.setAttribute("src", element.imageUrl);
    newLi.appendChild(imagen);

    const characters = document.createElement("p");
    characters.setAttribute("class", "characters");
    characters.innerHTML = element.fullName;
    newLi.addEventListener("click", () => {
      localStorage.setItem("idCharacter", JSON.stringify(element));
    });

    newLi.appendChild(characters);
    ul.appendChild(newLi);
  });
  return ul;
};

// Cuando el usuario hace scroll, se ejecuta myFunction --> ESTUDIAR
window.onscroll = function() {myFunction()};

// Get the header
let menu = document.getElementById("myMenu");

// Get the offset position of the navbar
let sticky = menu.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    menu.classList.add("sticky");
  } else {
    menu.classList.remove("sticky");
  }
}